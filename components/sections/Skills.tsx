import { skills } from "@/data/skills"

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[#1e1e2e]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

        <div className="mb-10 flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-[#6EE7B7]"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Skills
          </span>
          <div className="h-px flex-1 bg-[#1e1e2e]" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}
              className="rounded-xl border border-[#1e1e2e] bg-[#111118] p-5">
              <p className="mb-4 text-[10px] uppercase tracking-widest text-[#6b6b80]">{group}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill}
                    className="rounded-full border border-[#1e1e2e] bg-[#0a0a0f] px-3 py-1 text-xs text-[#a0a0b8]">
                    {skill}
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