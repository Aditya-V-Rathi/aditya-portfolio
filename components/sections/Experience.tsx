"use client"

import { useEffect, useState, useRef } from "react"
import { experience } from "@/data/experience"

export default function Experience() {
  const [highlightEnd, setHighlightEnd] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateHighlight = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight

      // Calculate scroll progress through the section
      const scrolledPastSection = Math.max(0, -sectionTop)
      const totalScrollable = sectionHeight - viewportHeight

      if (totalScrollable <= 0) {
        // Section fits in viewport - highlight all if section is visible
        setHighlightEnd(sectionTop < viewportHeight ? 1 : 0)
      } else {
        // Calculate progress (0 to 1)
        const progress = Math.min(1, Math.max(0, scrolledPastSection / totalScrollable))
        setHighlightEnd(progress)
      }
    }

    updateHighlight()
    window.addEventListener("scroll", updateHighlight, { passive: true })
    window.addEventListener("resize", updateHighlight)

    return () => {
      window.removeEventListener("scroll", updateHighlight)
      window.removeEventListener("resize", updateHighlight)
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="border-b border-[#1e1e2e]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

        {/* Heading */}
        <div className="mb-12 flex items-center gap-4">
          <span
            className="text-xs uppercase tracking-widest text-[#6EE7B7]"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Experience
          </span>
          <div className="h-px flex-1 bg-[#1e1e2e]" />
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Vertical line - static part */}
          <div className="absolute left-0 top-2 bottom-2 hidden w-px bg-[#1e1e2e] md:block" />

          {/* Highlighted portion of line */}
          <div
            className="absolute left-0 top-2 hidden w-px bg-gradient-to-b from-[#6EE7B7] to-[#6EE7B7] md:block"
            style={{
              height: `calc(${highlightEnd * 100}% - 8px)`,
              maxHeight: "calc(100% - 16px)",
              transition: "height 0.1s ease-out"
            }}
          />

          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-0 md:pl-12">
              
              {/* Dot */}
              <div className="absolute left-0 top-1 hidden h-3 w-3 -translate-x-1.5 rounded-full border-2 border-[#6EE7B7] bg-[#0a0a0f] md:block" />

              {/* Card */}
              <div className="rounded-xl border border-[#1e1e2e] bg-[#111118] p-6 transition-all hover:border-[#1a3a2a]">
                
                {/* Header */}
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3
                      className="text-xl font-semibold text-[#e8e8f0]"
                      style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-sm">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6EE7B7] hover:underline"
                      >
                        {exp.company}
                      </a>
                      <span className="text-[#6b6b80]"> • {exp.location}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#6EE7B7]">
                    <span className="rounded-full border border-[#1a3a2a] bg-[#6EE7B7]/5 px-3 py-1">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mb-4 space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#a0a0b8]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6EE7B7]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#1e1e2e] bg-[#0a0a0f] px-3 py-1 text-xs text-[#6b6b80]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}