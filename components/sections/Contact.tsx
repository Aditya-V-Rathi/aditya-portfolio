import { info } from "@/data/info"
import Reveal from "../Reveal"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-[28px] pt-[56px] pb-[40px] text-center overflow-hidden"
    >
      {/* Ambient glow background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[200px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at center, #6EE7B7 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Decorative top line */}
      <Reveal className="reveal-up">
        <div className="flex items-center gap-3 mb-[32px]">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#6EE7B7]/20" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#6EE7B7]/50 font-mono">
            contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#6EE7B7]/20" />
        </div>

        {/* Heading */}
        <p className="text-[26px] font-bold text-[#e8e8f0] leading-tight mb-[8px] tracking-tight">
          Let&apos;s build something
          <br />
          <span className="text-[#6EE7B7]">worth remembering.</span>
        </p>

        <p className="text-[12px] text-[#6b6b80] mb-[28px] leading-relaxed">
          Open to full-time roles &amp; freelance projects
        </p>

        {/* CTA Button */}
        <a
          href={`mailto:${info.email}`}
          className="group relative inline-flex items-center gap-2 rounded-full bg-[#6EE7B7] py-[10px] px-[22px] text-[12px] font-semibold text-[#0a0a0f] transition-all duration-300 hover:bg-[#a7f3d0] hover:shadow-[0_0_24px_rgba(110,231,183,0.25)] active:scale-95"
        >
          Say hello
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>

        {/* Subtle email display */}
        <p className="mt-[14px] text-[10px] text-[#6b6b80]/60 font-mono tracking-wide">
          {info.email}
        </p>
      </Reveal>
    </section>
  )
}