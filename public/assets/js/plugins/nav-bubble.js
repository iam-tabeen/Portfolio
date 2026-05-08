(function () {
  'use strict';

  function initNavBubble() {
    var nav = document.querySelector('.custom-nav-pill');
    if (!nav) return;
    var ul = nav.querySelector('.tmp-mainmenu');
    if (!ul) return;

    // Insert the sliding bubble behind the list items
    var bubble = document.createElement('span');
    bubble.className = 'nav-bubble';
    nav.style.position = 'relative';
    nav.insertBefore(bubble, nav.firstChild);

    var prevLeft = 0;
    var prevWidth = 0;
    var ready = false;

    function rect(li) {
      var nr = nav.getBoundingClientRect();
      var lr = li.getBoundingClientRect();
      return {
        left:   lr.left   - nr.left,
        top:    lr.top    - nr.top,
        width:  lr.width,
        height: lr.height
      };
    }

    function moveTo(r, animate) {
      if (!animate) {
        // Instant placement (first load — no animation)
        bubble.style.transition = 'none';
        bubble.style.left   = r.left   + 'px';
        bubble.style.width  = r.width  + 'px';
        bubble.style.top    = r.top    + 'px';
        bubble.style.height = r.height + 'px';
        bubble.style.opacity = '1';
        void bubble.offsetWidth; // flush
        bubble.style.transition = '';
      } else {
        var goingRight = r.left > prevLeft;

        // Phase 1 — squash-stretch: expand the bubble to bridge old & new
        if (goingRight) {
          // Right edge leads: keep left, extend right
          bubble.style.transition = 'width 0.16s ease-out, left 0s';
          bubble.style.width = (r.left + r.width - prevLeft) + 'px';
        } else {
          // Left edge leads: move left, keep right
          bubble.style.transition = 'left 0.16s ease-out, width 0.16s ease-out';
          bubble.style.left  = r.left + 'px';
          bubble.style.width = (prevLeft + prevWidth - r.left) + 'px';
        }

        // Phase 2 — spring: snap to final size & position with overshoot
        setTimeout(function () {
          var spring = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
          bubble.style.transition =
            'left 0.45s ' + spring + ', width 0.45s ' + spring;
          bubble.style.left  = r.left  + 'px';
          bubble.style.width = r.width + 'px';
        }, 130);
      }

      prevLeft  = r.left;
      prevWidth = r.width;
    }

    // Initial position
    var active = ul.querySelector('li.current');
    if (active) {
      var r = rect(active);
      moveTo(r, false);
      ready = true;
    }

    // Watch for .current class changes on any li
    var observer = new MutationObserver(function () {
      var newActive = ul.querySelector('li.current');
      if (!newActive) return;
      var r = rect(newActive);
      moveTo(r, ready);
      ready = true;
    });

    ul.querySelectorAll('li').forEach(function (li) {
      observer.observe(li, { attributes: true, attributeFilter: ['class'] });
    });

    // ── Reliable scroll-based section tracker ─────────────────────────────
    // Overrides the onePageNav polling to correctly activate all nav items,
    // including Services, on manual scroll.
    (function setupScrollSpy() {
      var OFFSET = 90; // px below viewport top (clears sticky header)
      var items = [];

      ul.querySelectorAll('a[href^="#"]').forEach(function (a) {
        var id = a.getAttribute('href').slice(1);
        var section = document.getElementById(id);
        if (section) {
          items.push({ section: section, li: a.parentElement });
        }
      });

      if (!items.length) return;

      var currentLi = null;

      function update() {
        var active = items[0];
        for (var i = 0; i < items.length; i++) {
          var top = items[i].section.getBoundingClientRect().top;
          if (top <= OFFSET) {
            active = items[i];
          }
        }
        if (active.li === currentLi) return;
        currentLi = active.li;
        items.forEach(function (item) {
          if (item === active) {
            item.li.classList.add('current');
          } else {
            item.li.classList.remove('current');
          }
        });
      }

      window.addEventListener('scroll', update, { passive: true });
      setTimeout(update, 300); // initial state after layout settles
    })();
  }

  // Run after all other scripts (main.js etc.) have fired
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(initNavBubble, 200);
    });
  } else {
    setTimeout(initNavBubble, 200);
  }

  // ── Scroll-to-top liquid fill ───────────────────────────────────────────
  (function initScrollToTop() {
    function run() {
      var box = document.querySelector('.scrollToTop');
      if (!box) return;
      var water = box.querySelector('.water');
      if (!water) return;

      function getDocH() {
        return Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      }

      function getScrollY() {
        // Lenis stores its virtual scroll position here; window.scrollY stays 0 with Lenis active
        if (window.lenis && typeof window.lenis.scroll === 'number') {
          return window.lenis.scroll;
        }
        return window.scrollY || window.pageYOffset;
      }

      function update() {
        var scrollY = getScrollY();
        var percent = Math.min(Math.floor((scrollY / getDocH()) * 100), 100);
        water.style.transform = 'translate(0,' + (100 - percent) + '%)';

        // Must use class — CSS has display:none !important; inline style cannot override it
        if (scrollY >= 50) {
          box.classList.add('active-progress');
        } else {
          box.classList.remove('active-progress');
        }
      }

      box.addEventListener('click', function () {
        if (window.lenis) {
          window.lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });

      // Hook into Lenis scroll callback (most reliable with Lenis active)
      function hookLenis() {
        if (window.lenis && typeof window.lenis.on === 'function') {
          window.lenis.on('scroll', update);
        } else {
          // Lenis not ready yet — retry shortly
          setTimeout(hookLenis, 200);
        }
      }
      hookLenis();

      // Also listen to native scroll / touchmove as fallbacks
      window.addEventListener('scroll',    update, { passive: true });
      window.addEventListener('touchmove', update, { passive: true });
      update();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  })();

  // ── Journey timeline scroll-fill ──────────────────────────────────────
  (function initJourneyFill() {
    function run() {
      var fill     = document.getElementById('journeyFill');
      var timeline = document.querySelector('.journey-timeline');
      if (!fill || !timeline) return;

      function update() {
        var rect    = timeline.getBoundingClientRect();
        var viewH   = window.innerHeight;
        // progress: 0 when section top enters viewport bottom → 1 when section bottom exits viewport top
        var progress = (viewH - rect.top) / (rect.height + viewH);
        progress = Math.max(0, Math.min(1, progress));
        fill.style.height = (progress * 100) + '%';
      }

      window.addEventListener('scroll',    update, { passive: true });
      window.addEventListener('touchmove', update, { passive: true });
      update();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  })();

  // ── Mobile hamburger menu (vanilla JS fallback) ───────────────────────
  (function initMobileMenu() {
    function run() {
      var hamburger = document.querySelector('.humberger_menu_active');
      var menu      = document.querySelector('.tmp-popup-mobile-menu');
      if (!hamburger || !menu) return;

      hamburger.addEventListener('click', function () {
        menu.classList.add('active');
      });

      // Close via the close-menu div or any nav link
      var closeArea = menu.querySelector('.close-menu');
      if (closeArea) {
        closeArea.addEventListener('click', function () {
          menu.classList.remove('active');
        });
      }

      menu.querySelectorAll('.tmp-mainmenu a').forEach(function (link) {
        link.addEventListener('click', function () {
          menu.classList.remove('active');
        });
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  })();
})();
