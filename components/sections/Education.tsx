import { education } from "@/data/education"

export default function Education() {
  return (
    <section id="education" className="border-b border-[#1e1e2e]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

        {/* Heading */}
        <div className="mb-12 flex items-center gap-4">
          <span
            className="text-xs uppercase tracking-widest text-[#6EE7B7]"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            Education
          </span>
          <div className="h-px flex-1 bg-[#1e1e2e]" />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((ed, idx) => (
            <div
              key={idx}
              className="flex gap-5 rounded-xl border border-[#1e1e2e] bg-[#111118] p-6 transition-all hover:border-[#1a3a2a]"
            >
              {/* Logo */}
              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-[#1e1e2e] bg-[#0a0a0f] p-2">
                  {ed.logo ? (
                    <img
                      src={ed.logo}
                      alt={ed.institution}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span
                      className="text-lg font-bold text-[#6EE7B7]"
                      style={{ fontFamily: "var(--font-syne), sans-serif" }}
                    >
                      {ed.institution[0]}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-base font-semibold text-[#e8e8f0]"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {ed.degree}
                </h3>
                <p className="mt-1 text-sm text-[#6EE7B7]">{ed.institution}</p>
                <p className="mt-2 text-xs text-[#6b6b80]">
                  {ed.location} • {ed.period}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full border border-[#1a3a2a] bg-[#6EE7B7]/5 px-3 py-1 text-xs font-medium text-[#6EE7B7]">
                    CGPA: {ed.cgpa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}