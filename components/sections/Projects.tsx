"use client"
import { useRef, useState } from "react"
import { projects } from "@/data/projects"
import Reveal from "../Reveal"

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const total = projects.length
  const detailRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const p = projects[current]

  // Scroll the active project's heading into view (used on mobile, where
  // the list sits below the detail card).
  const scrollToDetail = () => {
    if (!detailRef.current) return
    const rect = detailRef.current.getBoundingClientRect()
    const offset = 96 // adjust to taste / sticky header height
    const targetY = window.scrollY + rect.top - offset
    window.scrollTo({ top: targetY, behavior: "smooth" })
  }

  const selectProject = (i: number) => {
    setCurrent(i)
    // only matters on mobile where the heading can be off-screen above
    if (window.innerWidth < 1024) {
      requestAnimationFrame(scrollToDetail)
    }
  }

  // Swipe handling on the detail card (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current

    const SWIPE_THRESHOLD = 50
    // Ignore mostly-vertical swipes (scrolling)
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        next()
      } else {
        prev()
      }
    }

    touchStartX.current = null
    touchStartY.current = null
  }

  return (
    <section id="projects" className="border-b border-[#1e1e2e]">
      <div className="mx-auto max-w-8xl px-6 py-16 md:px-10 md:py-20">

        {/* Heading row */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              className="text-xs uppercase tracking-widest text-[#6EE7B7]"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Projects
            </span>
            <div className="h-px w-16 bg-[#1e1e2e]" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs tabular-nums text-[#444458]">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1e1e2e] bg-[#111118] text-[#6b6b80] transition-all hover:border-[#6EE7B7] hover:text-[#6EE7B7]"
            >
              ←
            </button>
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1e1e2e] bg-[#111118] text-[#6b6b80] transition-all hover:border-[#6EE7B7] hover:text-[#6EE7B7]"
            >
              →
            </button>
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* LEFT — active project detail */}
          <Reveal className="flex flex-col justify-between rounded-xl border border-[#1e1e2e] bg-[#111118] p-8 md:p-10 reveal-left">
  <div
    ref={detailRef}
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
    className="flex h-full flex-col justify-between touch-pan-y"
  >
    <div>

      <p
        className="mb-3 text-6xl font-extrabold leading-none text-[#6EE7B7]/10"
        style={{ fontFamily: "var(--font-syne), sans-serif" }}
      >
        {String(current + 1).padStart(2, "0")}
      </p>

      <h3
        className="mb-4 text-xl font-bold text-[#e8e8f0] md:text-3xl"
        style={{ fontFamily: "var(--font-syne), sans-serif" }}
      >
        {p.title} 
      </h3>

      {/* Bullets */}
        <ul className="mb-4 space-y-2.5">
          {p.description.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-base leading-relaxed text-[#a0a0b8]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6EE7B7]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[#1e1e2e] bg-[#0a0a0f] px-3 py-1.5 text-[11px] text-[#a0a0b8]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-10 flex flex-wrap gap-3">
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#1e1e2e] bg-[#0a0a0f] px-6 py-2.5 text-xs font-semibold text-[#e8e8f0] transition-all hover:border-[#6EE7B7] hover:text-[#6EE7B7]"
        >
          GitHub ↗
        </a>
      )}
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] px-6 py-2.5 text-xs font-semibold text-[#0a0a0f] transition-transform hover:scale-105"
        >
          Live Demo ↗
        </a>
      )}
    </div>

    {/* Mobile swipe hint */}
    <div className="mt-6 flex items-center justify-center gap-1.5 lg:hidden">
      {projects.map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === current ? "w-5 bg-[#6EE7B7]" : "w-1.5 bg-[#1e1e2e]"
          }`}
        />
      ))}
    </div>
  </div>
</Reveal>

          {/* RIGHT — project list */}
          <Reveal className="flex flex-col justify-between rounded-xl border border-[#1e1e2e] bg-[#111118] p-8 md:p-10 reveal-right">

            <div>
              <p
                className="mb-6 text-xsuppercase tracking-widest text-[#444458]"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                All Projects
              </p>

              <div className="flex flex-col gap-3">
                {projects.map((proj, i) => (
                  <button
                    key={proj.title}
                    onClick={() => selectProject(i)}
                    className={`flex items-center gap-5 rounded-xl px-5 py-4 text-left transition-all ${
                      i === current
                        ? "border border-[#1a3a2a] bg-[#0d1f16]"
                        : "border border-transparent hover:border-[#1e1e2e] hover:bg-[#0a0a0f]"
                    }`}
                  >
                    <span
                      className={`w-6 shrink-0 text-xs font-bold ${
                        i === current ? "text-[#6EE7B7]" : "text-[#444458]"
                      }`}
                      style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-base font-medium ${
                          i === current ? "text-[#e8e8f0]" : "text-[#6b6b80]"
                        }`}
                      >
                        {proj.title}
                      </p>
                      <p className="mt-1 text-xs text-[#444458]">
                        {proj.tags.slice(0, 2).join(" · ")}
                      </p>
                    </div>

                    {i === current && (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6EE7B7]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="mt-8 flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => selectProject(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-[#6EE7B7]"
                      : "w-2 bg-[#1e1e2e] hover:bg-[#444458]"
                  }`}
                />
              ))}
            </div>

          </Reveal>
        </div>
      </div>
    </section>
  )
}