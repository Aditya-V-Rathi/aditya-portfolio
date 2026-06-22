import Image from "next/image"
import { info } from "@/data/info"
import Reveal from "../Reveal"

export default function Hero() {
  return (
    <section id="about" className="border-b border-[#1e1e2e]">
      <div className="mx-auto grid max-w-8xl grid-cols-1 md:grid-cols-2">

        {/* LEFT */}
        <Reveal className="relative flex flex-col justify-center px-6 py-16 md:px-10 md:py-24">
          
          {/* Decorative background elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Subtle gradient orb */}
            <div 
              className="absolute -left-20 top-1/4 h-64 w-64 rounded-full opacity-[0.03]"
              style={{
                background: "radial-gradient(circle at center, #6EE7B7 0%, transparent 70%)"
              }}
            />
            {/* Grid pattern overlay */}
            <div 
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #6EE7B7 1px, transparent 1px),
                  linear-gradient(to bottom, #6EE7B7 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px"
              }}
            />
          </div>

          {/* Content wrapper for better spacing control */}
          <div className="relative mx-auto max-w-2xl">
            
            {/* Eyebrow with decorative element */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-[#6EE7B7] to-transparent" />
              <span className="text-xs uppercase tracking-widest text-[#6EE7B7]"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                Available for opportunities
              </span>
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7] animate-pulse" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7] animate-pulse [animation-delay:0.2s]" />
              </div>
            </div>

            {/* Name with enhanced styling */}
            <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight md:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              Aditya
              <br />
              <span className="relative inline-block bg-gradient-to-r from-[#6EE7B7] via-[#5DD4AB] to-[#3B82F6] bg-clip-text text-transparent">
                Rathi
                {/* Subtle underline accent */}
                <span className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-[#6EE7B7] to-transparent opacity-40 blur-sm" />
              </span>
            </h1>

            {/* Role with icon accent */}
            <div className="mb-6">
              <p className="text-lg font-semibold md:text-xl" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                <span className="text-[#6EE7B7]">Software Development Engineer</span>
                <span className="ml-2 text-[#6EE7B7]">I</span>
              </p>
              <p className="mt-1 text-base text-[#6b6b80] md:text-base">
                <span className="text-[#a0a0b8] font-medium">.NET & Angular</span> ·{" "}
                <span className="text-[#a0a0b8] font-medium">Enterprise Systems</span> ·{" "}
                <span className="text-[#a0a0b8] font-medium">AI Automation</span>
              </p>
            </div>

            {/* Tagline with enhanced typography */}
            <p className="mb-10 max-w-lg text-base leading-relaxed text-[#6b6b80] md:text-base">
              Building enterprise financial systems at{" "}
              <span className="text-[#a0a0b8] font-medium">Yardi</span> with focus on{" "}
              <span className="text-[#a0a0b8] font-medium">scalable architecture</span>,{" "}
              <span className="text-[#a0a0b8] font-medium">performance optimization</span>, and{" "}
              <span className="text-[#a0a0b8] font-medium">AI-driven automation</span>.
            </p>

            {/* CTAs with enhanced hover states */}
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] px-7 py-3 text-xs font-semibold text-[#0a0a0f] transition-all duration-300 hover:shadow-[0_0_32px_rgba(110,231,183,0.3)] hover:scale-105"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                <span className="relative z-10">View Projects</span>
                {/* Shine effect on hover */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </a>
              
              <a href={info.URLs[0].href} target="_blank" rel="noopener noreferrer"
                className="group rounded-full border border-[#1e1e2e] px-6 py-3 text-sm font-semibold text-[#e8e8f0] transition-all duration-300 hover:border-[#6EE7B7] hover:bg-[#6EE7B7]/5 hover:scale-105">
                LinkedIn 
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
              
              <a href={info.URLs[1].href} target="_blank" rel="noopener noreferrer"
                className="group rounded-full border border-[#1e1e2e] px-6 py-3 text-sm font-semibold text-[#e8e8f0] transition-all duration-300 hover:border-[#6EE7B7] hover:bg-[#6EE7B7]/5 hover:scale-105">
                GitHub 
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>

              <a href={info.URLs[2].href} target="_blank" rel="noopener noreferrer"
                className="group rounded-full border border-[#1e1e2e] px-6 py-3 text-sm font-semibold text-[#e8e8f0] transition-all duration-300 hover:border-[#6EE7B7] hover:bg-[#6EE7B7]/5 hover:scale-105">
                LeetCode 
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>

              <a href={info.URLs[3].href} target="_blank" rel="noopener noreferrer"
                className="group rounded-full border border-[#1e1e2e] px-6 py-3 text-sm font-semibold text-[#e8e8f0] transition-all duration-300 hover:border-[#6EE7B7] hover:bg-[#6EE7B7]/5 hover:scale-105">
                CodeChef 
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>

              <a href={info.URLs[4].href} target="_blank" rel="noopener noreferrer"
                className="group rounded-full border border-[#1e1e2e] px-6 py-3 text-xs font-semibold text-[#e8e8f0] transition-all duration-300 hover:border-[#6EE7B7] hover:bg-[#6EE7B7]/5 hover:scale-105">
                GeeksforGeeks 
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            </div>
            {/* Subtle scroll indicator at bottom */}
            <div className="mt-16 flex items-center gap-2 text-xsuppercase tracking-widest text-[#6b6b80]/50">
              <span>Scroll to explore</span>
              <svg className="h-3 w-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </Reveal>

        {/* RIGHT */}
        <div className="relative flex flex-col items-center justify-center gap-10 border-t border-[#1e1e2e] bg-[#0d0d12] px-6 py-14 md:border-l md:border-t-0 md:py-24">

          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-80 w-80 rounded-full bg-[#6EE7B7] opacity-[0.04] blur-3xl" />
          </div>

          {/* Photo */}
          <div className="relative">
            {/* Outer rings */}
            <div className="absolute -inset-8 rounded-full border border-dashed border-[#1a3a2a] opacity-50 animate-[spin_25s_linear_infinite]" />
            <div className="absolute -inset-14 rounded-full border border-dashed border-[#141f18] opacity-30 animate-[spin_35s_linear_infinite_reverse]" />

            {/* Photo circle - LARGER */}
            <div className="relative flex h-48 w-48 overflow-hidden rounded-full border-[3px] border-[#1a3a2a] bg-gradient-to-br from-[#111118] to-[#0d0d12] shadow-[0_0_50px_rgba(110,231,183,0.15)] md:h-56 md:w-56">
              <Image
                src="/images/Aditya_Rathi.png"
                alt="Aditya Rathi"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Location badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#1a3a2a] bg-[#0d1f16] px-4 py-2 text-xs font-medium text-[#6EE7B7] shadow-xl backdrop-blur-sm">
              <span className="mr-1.5">📍</span>
              {info.location}
            </div>
          </div>

           {/* Stats */}
          <div className="flex gap-10">
            {info.stats.map((s) => (
              <div key={s.label} className="group text-center">
                <div className="text-2xl font-bold text-[#e8e8f0] transition-colors duration-300 group-hover:text-[#6EE7B7]"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                  {s.value}
                </div>
                <div className="mt-1 text-xsuppercase tracking-widest text-[#6b6b80] transition-colors duration-300 group-hover:text-[#6EE7B7]/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}