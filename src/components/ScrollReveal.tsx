'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Subtle, premium scroll reveals. Any element with [data-reveal] fades and
 * slides in once when it enters the viewport. Respects reduced-motion.
 * The pre-paint `gsap-ready` class on <html> (set in layout) hides these
 * elements before first paint so there is no flash before they animate.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = gsap.utils.toArray<HTMLElement>('[data-reveal]')
    if (!els.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(els, { opacity: 1, y: 0, clearProps: 'opacity,transform' })
      return
    }

    gsap.registerPlugin(ScrollTrigger)
    gsap.set(els, { opacity: 0, y: 24 })

    const triggers = ScrollTrigger.batch(els, {
      start: 'top 88%',
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.08,
          overwrite: true,
        }),
    })

    ScrollTrigger.refresh()
    return () => triggers.forEach((t) => t.kill())
  }, [])

  return null
}
