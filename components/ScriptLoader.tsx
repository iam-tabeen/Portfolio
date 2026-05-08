'use client'

import { useEffect } from 'react'

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = () => resolve() // resolve even on error so chain continues
    document.body.appendChild(script)
  })
}

export default function ScriptLoader() {
  useEffect(() => {
    const scripts = [
      '/assets/js/vendor/modernizer.js',
      '/assets/js/vendor/jquery.js',
      '/assets/js/vendor/jquery-ui.min.js',
      '/assets/js/vendor/waypoints.min.js',
      '/assets/js/plugins/odometer.js',
      '/assets/js/vendor/appear.js',
      '/assets/js/vendor/jquery-one-page-nav.js',
      '/assets/js/vendor/tilt.js',
      '/assets/js/plugins/swiper.js',
      '/assets/js/plugins/gsap.js',
      '/assets/js/plugins/splittext.js',
      '/assets/js/plugins/scrolltigger.js',
      '/assets/js/plugins/scrolltoplugins.js',
      '/assets/js/vendor/twinmax.js',
      '/assets/js/vendor/bootstrap.min.js',
      '/assets/js/vendor/waw.js',
      '/assets/js/vendor/intro-video.js',
      '/assets/js/plugins/isotop.js',
      '/assets/js/plugins/animation.js',
      '/assets/js/plugins/contact.form.js',
      '/assets/js/plugins/text-type.js',
      '/assets/js/main.js',
      '/assets/js/plugins/nav-bubble.js',
    ]

    scripts.reduce(
      (promise, src) => promise.then(() => loadScript(src)),
      Promise.resolve()
    )
  }, [])

  return null
}
