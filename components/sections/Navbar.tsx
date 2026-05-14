"use client"
import { info } from "@/data/info"
import { useState } from "react"

const links = ["About", "Experience", "Projects", "Skills"]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="border-b border-[#1e1e2e] bg-[#0a0a0f]">
      <div className="flex items-center justify-between px-8 py-5">
        <div className="text-[18px] font-medium text-[#e8e8f0]" style={{ paddingLeft: "4px" }}>AR</div>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-2 py-1 text-[14px] text-[#6b6b80] hover:text-[#e8e8f0] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href={info.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-[20px] bg-[#6EE7B7] py-2.5 text-[12px] font-semibold text-[#0a0a0f] md:block"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          Resume
        </a>

        <button
          className="flex flex-col gap-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-[#e8e8f0] transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#e8e8f0] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#e8e8f0] transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#1e1e2e] bg-[#0a0a0f] px-7 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-2 py-1 text-base text-[#6b6b80] hover:text-[#e8e8f0]"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href={info.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-[20px] bg-[#6EE7B7] py-2.5 text-[12px] font-semibold text-[#0a0a0f]"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}