import { info } from "@/data/info"

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-[#6EE7B7] opacity-[0.04] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10 md:py-28">
        <p className="mb-3 text-xs uppercase tracking-widest text-[#6EE7B7]"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          Contact
        </p>
        <h2 className="mb-4 text-4xl font-extrabold text-[#e8e8f0] md:text-5xl"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          Lets work together
        </h2>
        <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-[#6b6b80]">
          Open to full-time roles and freelance projects. Feel free to reach out!
        </p>
        <a href={`mailto:${info.email}`}
          className="inline-block rounded-full bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] px-8 py-3 text-sm font-semibold text-[#0a0a0f] transition-transform hover:scale-105"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          Say hello ↗
        </a>

        {/* Footer */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-[#1e1e2e] pt-8">
          <a href={info.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#6b6b80] hover:text-[#6EE7B7]">LinkedIn</a>
          <a href={info.github} target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#6b6b80] hover:text-[#6EE7B7]">GitHub</a>
          <a href={`mailto:${info.email}`}
            className="text-xs text-[#6b6b80] hover:text-[#6EE7B7]">{info.email}</a>
          <span className="text-xs text-[#444458]">© 2025 Aditya Rathi</span>
        </div>
      </div>
    </section>
  )
}