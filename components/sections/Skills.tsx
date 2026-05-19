import { skills } from "@/data/skills"

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[#1e1e2e] px-[28px] py-[24px]">

      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs uppercase tracking-widest text-[#6EE7B7]">Skills</span>
        <div className="h-[0.5px] flex-1 bg-[#1e1e2e]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[10px]">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-lg border border-[#1e1e2e] bg-[#111118] p-3"
          >
            <p className="mb-2 text-sm uppercase tracking-widest text-[#6b6b80]">{group}</p>
            <div className="flex flex-wrap gap-[3px]">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-[10px] border border-[#1e1e2e] bg-[#0a0a0f] px-3 py-1 text-sm text-[#a0a0b8] mr-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}