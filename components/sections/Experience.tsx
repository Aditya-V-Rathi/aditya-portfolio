import { experience } from "@/data/experience"

export default function Experience() {
  const featured = experience.filter((e) => e.featured)
  const others = experience.filter((e) => !e.featured)

  return (
    <section id="experience" className="border-b border-[#1e1e2e] px-[28px] py-[24px]">

      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] uppercase tracking-[0.12em] text-[#6EE7B7]">Experience</span>
        <div className="h-[0.5px] flex-1 bg-[#1e1e2e]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">

        {/* Featured card */}
        {featured.map((exp) => (
          <div
            key={exp.title}
            className="rounded-lg border border-[#1a3a2a] bg-[#111118] p-[14px]"
          >
            <div className="flex justify-between items-start mb-[6px]">
              <div>
                <p className="text-[12px] font-medium text-[#e8e8f0]">{exp.title}</p>
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#6EE7B7] hover:underline"
                >
                  {exp.company}
                </a>
                <p className="text-[10px] text-[#444458] mb-[10px]">{exp.period} · {exp.location}</p>
              </div>
              <div className="w-[28px] h-[28px] rounded-[6px] bg-[#1a3a2a] flex items-center justify-center text-[10px] font-bold text-[#6EE7B7] flex-shrink-0">
                {exp.company[0]}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 mb-[10px]">
              <div className="h-[0.5px] flex-1 bg-[#1e1e2e]" />
              <span className="text-[9px] uppercase tracking-[0.08em] text-[#444458]">Highlights</span>
              <div className="h-[0.5px] flex-1 bg-[#1e1e2e]" />
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1 mb-[10px]">
              {exp.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-[10px] border border-[#1a3a2a] bg-[rgba(110,231,183,0.06)] px-[8px] py-[2px] text-[10px] text-[#6EE7B7] mr-0.5"
                >
                  {h}
                </span>
              ))}
            </div>

            <p className="text-[11px] leading-[1.5] text-[#a0a0b8] mb-[10px]">{exp.description}</p>

            <div className="flex flex-wrap gap-[3px]">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[10px] border border-[#1e1e2e] bg-[#0a0a0f] px-[8px] py-[2px] text-[10px] text-[#a0a0b8] mr-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Smaller cards */}
        <div className="flex flex-col gap-[10px]">
          {others.map((exp) => (
            <div
              key={exp.title}
              className="rounded-lg border border-[#1e1e2e] bg-[#111118] p-[14px]"
            >
              <div className="flex justify-between items-start mb-[4px]">
                <div>
                  <p className="text-[12px] font-medium text-[#e8e8f0]">{exp.title}</p>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#6b6b80] hover:text-[#6EE7B7]"
                  >
                    {exp.company}
                  </a>
                  <p className="text-[10px] text-[#444458] mb-[10px]">{exp.period} · {exp.location}</p>
                </div>
                <div className="w-[28px] h-[28px] rounded-[6px] bg-[#111118] border border-[#1e1e2e] flex items-center justify-center text-[10px] font-bold text-[#6b6b80] flex-shrink-0">
                  {exp.company[0]}
                </div>
              </div>
              <p className="text-[11px] leading-[1.5] text-[#a0a0b8] mb-[10px]">{exp.description}</p>
              <div className="flex flex-wrap gap-[3px]">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[10px] border border-[#1e1e2e] bg-[#0a0a0f] px-[8px] py-[2px] text-[10px] text-[#a0a0b8] mr-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}