import { skills } from "@/data/skills"
import Reveal from "../Reveal"
import Image from "next/image"

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[#1e1e2e] px-[28px] py-[24px]">

      {/* Heading */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs uppercase tracking-widest text-[#6EE7B7]">Skills</span>
        <div className="h-[0.5px] flex-1 bg-[#1e1e2e]" />
      </div>

      {/* Grid - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([group, items]) => (
          <Reveal key={group}>
            <div className="rounded-lg border border-[#1e1e2e] bg-[#111118] p-4 h-full">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#6EE7B7]">
                {group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-md border border-[#1e1e2e] bg-[#0a0a0f] px-3 py-2 text-sm text-[#a0a0b8] transition-all hover:border-[#6EE7B7]/50 hover:bg-[#6EE7B7]/10 hover:scale-105 hover:shadow-lg hover:shadow-[#6EE7B7]/20"
                  >
                    {/* Icon */}
                    <span className="flex items-center justify-center w-5 h-5 transition-transform group-hover:rotate-12">
                      {skill.icon.startsWith('http') ? (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                        />
                      ) : (
                        <span className="text-lg">{skill.icon}</span>
                      )}
                    </span>
                    
                    {/* Name */}
                    <span className="group-hover:text-[#6EE7B7] transition-colors">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}