'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.8,
      wheelMultiplier: 0.9,
      smoothWheel: true,
    })

    // Expose globally so other scripts (nav-bubble, main.js) can call lenis.scrollTo()
    ;(window as unknown as Record<string, unknown>).lenis = lenis

    // Intercept .smoth-animation anchor clicks → use Lenis for smooth programmatic scroll
    function onNavClick(e: Event) {
      const anchor = (e.currentTarget as HTMLAnchorElement)
      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('#')) return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.4 })
    }

    function attachNavListeners() {
      document.querySelectorAll<HTMLAnchorElement>('a.smoth-animation').forEach(link => {
        link.addEventListener('click', onNavClick)
      })
    }

    // Wait for DOM to be fully hydrated, then attach
    setTimeout(attachNavListeners, 600)

    // RAF loop — also throttle legacy jQuery scroll handlers to max 30fps
    // by only dispatching a real scroll event every ~33ms
    let rafId: number
    let lastScrollDispatch = 0
    function raf(time: number) {
      lenis.raf(time)
      // Dispatch native scroll event for legacy handlers (onePageNav, sticky, waw.js)
      // but throttled to ~30fps so they don't run at 120fps
      if (time - lastScrollDispatch > 33) {
        lastScrollDispatch = time
        // Sync window.scrollY with Lenis virtual position so legacy scroll handlers read the right value
        if (lenis.scroll !== undefined) {
          window.scrollTo({ top: lenis.scroll, behavior: 'instant' as ScrollBehavior })
        }
        window.dispatchEvent(new Event('scroll', { bubbles: false }))
      }
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      ;(window as unknown as Record<string, unknown>).lenis = undefined
      document.querySelectorAll<HTMLAnchorElement>('a.smoth-animation').forEach(link => {
        link.removeEventListener('click', onNavClick)
      })
    }
  }, [])

  return null
}
