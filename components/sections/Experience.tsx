import { experience } from "@/data/experience"

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[#1e1e2e] px-7 py-6">

      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs uppercase tracking-widest text-[#6EE7B7]">Experience</span>
        <div className="h-[0.5px] flex-1 bg-[#1e1e2e]" />
      </div>

      {/* Timeline */}
      <div className="relative pl-6">
        <div className="absolute left-4 top-6 bottom-6 w-[2px] bg-[#1e1e2e] opacity-60" />

        <div className="space-y-6">
          {experience.map((e, idx) => (
            <div key={`${e.title}-${e.company}-${idx}`} className="relative flex items-start gap-4">
              <div className="z-10 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-[#6EE7B7] to-[#3ABAB0] ring-2 ring-[#111118] shadow-sm" />

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-base font-medium text-[#e8e8f0]">
                      {e.title}{' '}
                      <span className="text-sm text-[#6b6b80]">@{' '}
                        {e.companyUrl ? (
                          <a href={e.companyUrl} target="_blank" rel="noopener noreferrer" className="text-[#6EE7B7] hover:underline">
                            {e.company}
                          </a>
                        ) : (
                          e.company
                        )}
                      </span>
                    </h3>

                    <div className="text-sm text-[#6b6b80] mt-1">
                      {e.location} • <span className="text-[#6EE7B7]">{e.period}</span>
                    </div>
                  </div>

                  <div className="hidden sm:block text-sm text-[#6b6b80]">
                    {e.highlights && e.highlights.length > 0 && (
                      <span className="italic">{e.highlights[0]}</span>
                    )}
                  </div>
                </div>

                <p className="mt-2 mb-2 text-sm leading-[1.5] text-[#6b6b80]">{e.description}</p>

                {e.highlights && e.highlights.length > 0 && (
                  <ul className="mb-2 ml-4 list-disc text-sm text-[#a0a0b8]">
                    {e.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {e.tags.map((tag) => (
                    <span key={tag} className="rounded-[10px] border border-[#1e1e2e] bg-[#0a0a0f] px-2 py-0.5 text-xs text-[#a0a0b8]">
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