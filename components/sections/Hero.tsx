import { info } from '@/data/info'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-20 sm:py-24 md:py-32 overflow-hidden">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#6EE7B7 1px, transparent 1px), linear-gradient(90deg, #6EE7B7 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0',
        }}
      />

      {/* Glow blob - repositioned */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 sm:w-96 sm:h-96 rounded-full opacity-5 blur-3xl pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, #6EE7B7, #3B82F6)',
          transform: 'translateZ(0)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl">

        {/* Eyebrow */}
        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <span className="w-6 sm:w-8 h-px bg-[#6EE7B7] flex-shrink-0" />
          <span
            className="text-[#6EE7B7] text-xs sm:text-sm tracking-widest uppercase font-medium whitespace-nowrap"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            Available for opportunities
          </span>
        </div>

        {/* Name - improved spacing and sizing */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight sm:leading-tight md:leading-snug tracking-tighter mb-3 sm:mb-4"
          style={{ fontFamily: 'var(--font-syne), sans-serif', wordWrap: 'break-word' }}
        >
          Aditya
        </h1>
        
        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight sm:leading-tight md:leading-snug tracking-tighter mb-8 sm:mb-10"
          style={{
            fontFamily: 'var(--font-syne), sans-serif',
            background: 'linear-gradient(90deg, #6EE7B7, #3B82F6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Rathi
        </h2>

        {/* Role */}
        <p
          className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 tracking-wide"
          style={{ color: 'var(--muted)' }}
        >
          Software Engineer
        </p>

        {/* Skills */}
        <p
          className="text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-10"
          style={{ color: '#a0a0b8' }}
        >
          .NET · Angular · AI Automation
        </p>

        {/* Tagline */}
        <p
          className="text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-12 sm:mb-14"
          style={{ color: '#8a8a9e' }}
        >
          {info.tagline} 2+ years shipping enterprise financial systems at Yardi Software.
          Currently exploring AI-native tooling with MCP and Flowise.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a
            href="#projects"
            className="btn-gradient"
          >
            View Projects
          </a>
          <a
            href={info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn ↗
          </a>
          <a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub ↗
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 pointer-events-none">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
          scroll
        </span>
        <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-[#6EE7B7] to-transparent animate-pulse-smooth" />
      </div>

    </section>
  )
}