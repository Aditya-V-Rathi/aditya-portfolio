import { experience } from "@/data/experience"

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[#1e1e2e]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

        {/* Heading */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-[#6EE7B7]"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Experience
          </span>
          <div className="h-px flex-1 bg-[#1e1e2e]" />
        </div>

        {/* Grid: featured card left, two smaller cards right */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Featured */}
          {experience.filter((e) => e.featured).map((exp) => (
            <div key={exp.title}
              className="flex flex-col justify-between rounded-xl border border-[#1a3a2a] bg-[#0d1f16] p-6">

              <div>
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-[#e8e8f0]">{exp.title}</p>
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-[#6EE7B7] hover:underline">
                      {exp.company} ↗
                    </a>
                    <p className="mt-1 text-xs text-[#444458]">{exp.period} · {exp.location}</p>
                  </div>
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[#1a3a2a] bg-[#0a1a10] text-sm font-bold text-[#6EE7B7]"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                    Y
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <span key={h}
                      className="rounded-full border border-[#1a3a2a] bg-[#6EE7B7]/5 px-3 py-1 text-[10px] text-[#6EE7B7]">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-[#1e1e2e]" />
                  <span className="text-[9px] uppercase tracking-widest text-[#444458]">details</span>
                  <div className="h-px flex-1 bg-[#1e1e2e]" />
                </div>

                <p className="mb-4 text-sm leading-relaxed text-[#a0a0b8]">{exp.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span key={t}
                    className="rounded-full border border-[#1e1e2e] bg-[#0a0a0f] px-3 py-1 text-[10px] text-[#a0a0b8]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Smaller cards */}
          <div className="flex flex-col gap-4">
            {experience.filter((e) => !e.featured).map((exp) => (
              <div key={exp.title}
                className="flex flex-col justify-between rounded-xl border border-[#1e1e2e] bg-[#111118] p-5">

                <div>
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#e8e8f0]">{exp.title}</p>
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-[#6b6b80] hover:text-[#6EE7B7] hover:underline">
                        {exp.company} ↗
                      </a>
                      <p className="mt-0.5 text-xs text-[#444458]">{exp.period} · {exp.location}</p>
                    </div>
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#1e1e2e] bg-[#0a0a0f] text-xs font-bold text-[#6b6b80]"
                      style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                      {exp.company[0]}
                    </div>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-[#a0a0b8]">{exp.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t}
                      className="rounded-full border border-[#1e1e2e] bg-[#0a0a0f] px-3 py-1 text-[10px] text-[#a0a0b8]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}