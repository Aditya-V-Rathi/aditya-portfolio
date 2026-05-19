"use client"
import { useEffect, useRef } from "react"

type Props = {
  children: React.ReactNode
  className?: string
  rootMargin?: string
  threshold?: number
  once?: boolean
}

export default function Reveal({ children, className = "", rootMargin = "-10% 0px", threshold = 0.15, once = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("in-view")
            if (once) obs.unobserve(el)
          }
        })
      },
      { root: null, rootMargin, threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin, threshold, once])

  return (
    // keep any incoming classes; the base "reveal" class applies initial styles
    <div ref={ref} className={`reveal ${className}`}> {children} </div>
  )
}
