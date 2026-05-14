import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section id="projects" className="border-b border-[#1e1e2e]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

        <div className="mb-10 flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-[#6EE7B7]"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Projects
          </span>
          <div className="h-px flex-1 bg-[#1e1e2e]" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title}
              className={`flex flex-col justify-between rounded-xl border p-6 ${
                p.featured
                  ? "border-[#1a3a2a] bg-[#0d1f16]"
                  : "border-[#1e1e2e] bg-[#111118]"
              }`}>

              <div>
                {p.featured && (
                  <span className="mb-3 inline-block rounded-full bg-[#6EE7B7]/10 px-3 py-1 text-[10px] text-[#6EE7B7]">
                    Featured
                  </span>
                )}
                <h3 className="mb-2 text-base font-semibold text-[#e8e8f0]"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                  {p.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#6b6b80]">{p.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t}
                      className="rounded-full border border-[#1e1e2e] bg-[#0a0a0f] px-3 py-1 text-[10px] text-[#a0a0b8]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-[#6EE7B7] hover:underline">
                    GitHub ↗
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-[#6EE7B7] hover:underline">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}