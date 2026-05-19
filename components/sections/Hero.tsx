import { info } from "@/data/info"
import Reveal from "../Reveal"

export default function Hero() {
  return (
    <section id="about" className="border-b border-[#1e1e2e]">
      <div className="mx-auto grid max-w-8xl grid-cols-1 md:grid-cols-2">

        {/* LEFT */}
        <Reveal className="flex flex-col justify-center px-6 py-16 md:px-10 md:py-24 reveal-left">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-6 bg-[#6EE7B7]" />
            <span className="text-xs uppercase tracking-widest text-[#6EE7B7]"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="mb-3 text-6xl font-extrabold leading-none tracking-tight md:text-7xl"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            Aditya
            <br />
            <span className="bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] bg-clip-text text-transparent">
              Rathi
            </span>
          </h1>

          {/* Role */}
          <p className="mb-4 text-sm text-[#6b6b80] md:text-base">
            Software Engineer — .NET · Angular · AI Automation
          </p>

          {/* Tagline */}
          <p className="mb-10 max-w-md text-sm leading-relaxed text-[#a0a0b8] md:text-base">
            2+ years shipping enterprise financial systems at Yardi. Currently
            building AI-native tooling with MCP and Flowise.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a href="#projects"
              className="rounded-full bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] px-6 py-2.5 text-xs font-semibold text-[#0a0a0f] transition-transform hover:scale-105"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              View Projects
            </a>
            <a href={info.linkedin} target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-[#1e1e2e] px-6 py-2.5 text-xs font-semibold text-[#e8e8f0] transition-all hover:border-[#6EE7B7] hover:scale-105">
              LinkedIn ↗
            </a>
            <a href={info.github} target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-[#1e1e2e] px-6 py-2.5 text-xs font-semibold text-[#e8e8f0] transition-all hover:border-[#6EE7B7] hover:scale-105">
              GitHub ↗
            </a>
          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal className="relative flex flex-col items-center justify-center gap-8 border-t border-[#1e1e2e] bg-[#0d0d12] px-6 py-14 md:border-l md:border-t-0 md:py-24 reveal-right">

          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-48 w-48 rounded-full bg-[#6EE7B7] opacity-[0.06] blur-3xl" />
          </div>

          {/* Photo */}
          <div className="relative">
            {/* Outer rings */}
            <div className="absolute -inset-5 rounded-full border border-dashed border-[#1a3a2a] opacity-60" />
            <div className="absolute -inset-10 rounded-full border border-dashed border-[#141f18] opacity-40" />

            {/* Circle — swap the initials div for <img> when you have a photo */}
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-[#1a3a2a] bg-[#111118]">
              <span className="text-4xl font-bold text-[#6EE7B7]"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                AR
              </span>
            </div>

            {/* Location badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#1e1e2e] bg-[#111118] px-3 py-1 text-[10px] text-[#6EE7B7]">
              📍 {info.location}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {info.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-bold text-[#e8e8f0]"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                  {s.value}
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-widest text-[#6b6b80]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}