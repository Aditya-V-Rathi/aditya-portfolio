"use client"
import { useState } from "react"
import { education } from "@/data/education"

export default function Education() {
  const [current, setCurrent] = useState(0)
  const total = education.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const ed = education[current]

  return (
    <section id="education" className="border-b border-[#1e1e2e]">
      <div className="mx-auto max-w-8xl px-6 py-16 md:px-10 md:py-20">

        {/* Heading with nav */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              className="text-xs uppercase tracking-widest text-[#6EE7B7]"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              Education
            </span>
            <div className="h-px w-16 bg-[#1e1e2e]" />
          </div>

          {total > 1 && (
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
          )}
        </div>

        {/* Single card - centered and full width */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-[#1e1e2e] bg-[#111118] p-8 transition-all hover:border-[#1a3a2a] md:p-10">
            
            {/* Logo centered at top */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-[#1e1e2e] bg-[#0a0a0f] p-3">
                {ed.logo ? (
                  <img
                    src={ed.logo}
                    alt={ed.institution}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span
                    className="text-2xl font-bold text-[#6EE7B7]"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {ed.institution[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Content - centered */}
            <div className="text-center">
              <h3
                className="mb-2 text-xl font-bold text-[#e8e8f0] md:text-2xl"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {ed.degree}
              </h3>
              <p className="mb-1 text-base text-[#6EE7B7] md:text-lg">{ed.institution}</p>
              <p className="mb-6 text-base text-[#6b6b80]">
                {ed.location} • {ed.period}
              </p>
              
              <div className="flex justify-center">
                <span className="rounded-full border border-[#1a3a2a] bg-[#6EE7B7]/5 px-4 py-2 text-base font-medium text-[#6EE7B7]">
                  {ed.MetricsLabel}: {ed.MetricsValue}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        {total > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {education.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-[#6EE7B7]"
                    : "w-2 bg-[#1e1e2e] hover:bg-[#444458]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}