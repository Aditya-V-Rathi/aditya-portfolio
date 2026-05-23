import { info } from "@/data/info"

type SocialLink = {
  label: string
  href: string
}

// Extend info.socials to match your actual data shape
const socials: SocialLink[] = (info.URLs ?? []).map((s) => ({
  label: s.name,
  href: s.href  ?? "#",
}))

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative px-[28px] pt-[24px] pb-[32px] overflow-hidden">
      {/* Top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#6EE7B7]/15 to-transparent mb-[24px]" />

      {/* Social links row */}
      {socials.length > 0 && (
        <div className="flex justify-center gap-[20px] mb-[20px]">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-[#6b6b80] tracking-wide transition-colors duration-200 hover:text-[#6EE7B7]"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}

      {/* Bottom row */}
      <div className="flex flex-col items-center gap-[6px]">
        <p className="text-xsfont-mono text-[#6b6b80]/50 tracking-[0.15em]">
          {info.name ?? "Portfolio"} — {year}
        </p>
        <p className="text-xstext-[#6b6b80]/30 tracking-wide">
          designed &amp; built with care
        </p>
      </div>
    </footer>
  )
}