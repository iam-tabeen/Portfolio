'use client'
import { useEffect, useRef, useState } from 'react'

const WORDS = ['Web Developer', 'Graphics Designer', 'CS Student']

const WIPE_IN  = 650
const PAUSE    = 1900
const WIPE_OUT = 520
const GAP      = 160

type Phase = 'wipe-in' | 'pause' | 'wipe-out' | 'gap'
const NEXT: Record<Phase, Phase> = {
  'wipe-in': 'pause', 'pause': 'wipe-out', 'wipe-out': 'gap', 'gap': 'wipe-in',
}
const DURATION: Record<Phase, number> = {
  'wipe-in': WIPE_IN, 'pause': PAUSE, 'wipe-out': WIPE_OUT, 'gap': GAP,
}

export default function TypewriterText() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('gap')
  const measureRef = useRef<HTMLSpanElement>(null)
  const [fullWidth, setFullWidth] = useState(0)

  // Measure full width of current word.
  // useEffect (not useLayoutEffect) runs after paint, giving fonts time to load.
  // We also re-measure after document.fonts.ready in case fonts were still loading.
  useEffect(() => {
    function measure() {
      if (measureRef.current) {
        const w = measureRef.current.offsetWidth
        if (w > 0) setFullWidth(w)
      }
    }
    measure()
    // Re-measure once fonts are confirmed loaded (critical on mobile with slow connections)
    document.fonts?.ready?.then(measure)
  }, [index])

  useEffect(() => {
    const t = setTimeout(() => {
      // Advance word index when entering gap so measurement happens before wipe-in
      if (phase === 'wipe-out') setIndex(i => (i + 1) % WORDS.length)
      setPhase(NEXT[phase])
    }, DURATION[phase])
    return () => clearTimeout(t)
  }, [phase])

  const isExpanding = phase === 'pause' || phase === 'wipe-in'
  const targetWidth = isExpanding ? fullWidth : 0
  const transitionDur =
    phase === 'wipe-in'  ? `${WIPE_IN}ms`  :
    phase === 'wipe-out' ? `${WIPE_OUT}ms` : '0ms'

  return (
    <span className="typewriter-wrap">
      {/* invisible clone used only for measurement */}
      <span ref={measureRef} className="typewriter-measure" aria-hidden="true">
        {WORDS[index]}
      </span>
      {/* visible clipped container — cursor sits outside as flex sibling */}
      <span
        className="typewriter-container"
        style={{
          width: `${targetWidth}px`,
          transition: `width ${transitionDur} cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      >
        {WORDS[index]}
      </span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  )
}

