"use client"
import { info } from "@/data/info"
import { useState } from "react"

const links = ["About", "Experience", "Projects", "Skills"]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1e1e2e] bg-[#0a0a0f]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <span className="text-base font-semibold tracking-tight text-[#e8e8f0]"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          AR
        </span>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm text-[#6b6b80] transition-colors hover:text-[#e8e8f0]">
              {l}
            </a>
          ))}
        </div>

        {/* Resume CTA */}
        <a href={info.resume} target="_blank" rel="noopener noreferrer"
          className="hidden rounded-full bg-[#6EE7B7] px-5 py-2 text-xs font-semibold text-[#0a0a0f] transition-transform hover:scale-105 md:block">
          Resume ↓
        </a>

        {/* Mobile hamburger */}
        <button className="flex flex-col gap-1.5 md:hidden" onClick={() => setOpen(!open)}>
          <span className={`block h-px w-6 bg-[#e8e8f0] transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-[#e8e8f0] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-[#e8e8f0] transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#1e1e2e] bg-[#0a0a0f] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-sm text-[#6b6b80] hover:text-[#e8e8f0]"
                onClick={() => setOpen(false)}>
                {l}
              </a>
            ))}
            <a href={info.resume} target="_blank" rel="noopener noreferrer"
              className="w-fit rounded-full bg-[#6EE7B7] px-5 py-2 text-xs font-semibold text-[#0a0a0f]">
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}