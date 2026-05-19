import { education } from "@/data/education"
import Reveal from "../Reveal"

export default function Education() {
  return (
    <section id="education" className="border-b border-[#1e1e2e] px-7 py-6">

      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs uppercase tracking-widest text-[#6EE7B7]">Education</span>
        <div className="h-[0.5px] flex-1 bg-[#1e1e2e]" />
      </div>

      <div className="space-y-4">
        {education.map((ed, idx) => (
          <Reveal key={`${ed.institution}-${idx}`} className="flex items-center gap-4 reveal-left">
            <div className="shrink-0">
              <img src={ed.logo} alt={ed.institution} className="h-12 w-12 rounded-md border border-[#1e1e2e] bg-[#0a0a0f] p-2 object-contain" />
            </div>

            <div className="flex-1">
              <h3 className="text-base font-medium text-[#e8e8f0]">{ed.institution}</h3>
              <div className="text-sm text-[#6b6b80] mt-1">
                {ed.degree} • <span className="text-[#6EE7B7]">{ed.period}</span>
              </div>
              <div className="text-sm text-[#6b6b80] mt-1">{ed.location}</div>
              <div className="text-sm text-[#a0a0b8] mt-1">CGPA: {ed.cgpa}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
