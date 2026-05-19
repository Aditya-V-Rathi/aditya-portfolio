import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section id="projects" className="border-b border-[#1e1e2e] px-7 py-6">

      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] uppercase tracking-[0.12em] text-[#6EE7B7]">Projects</span>
        <div className="h-[0.5px] flex-1 bg-[#1e1e2e]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`rounded-lg border p-[14px] ${
              p.featured
                ? "border-[#1a3a2a] bg-[#0d1f16]"
                : "border-[#1e1e2e] bg-[#111118]"
            }`}
          >
            {p.featured && (
              <span className="inline-block rounded-[10px] bg-[rgba(171, 192, 183, 0.1)] px-[7px] py-[2px] text-[9px] text-[#6EE7B7] mb-2">
                Featured
              </span>
            )}
            <h3 className="mb-1 text-[13px] font-medium text-[#e8e8f0]">{p.title}</h3>
            <p className="mb-[10px] text-[11px] leading-[1.5] text-[#6b6b80]">{p.description}</p>
            <div className="flex flex-wrap gap-[3px] mb-[10px]">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[10px] border border-[#1e1e2e] bg-[#0a0a0f] px-2 py-0.5 text-[10px] text-[#a0a0b8] mr-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#6EE7B7] hover:underline"
                >
                  GitHub ↗
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#6EE7B7] hover:underline ml-2"
                >
                  Live ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}