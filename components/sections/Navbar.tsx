"use client"
import { info } from "@/data/info"
import { useEffect, useState } from "react"

const links = ["About", "Experience","Education","Projects", "Skills","Contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0
    const threshold = 10

    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY <= 0) {
        setVisible(true)
      } else if (Math.abs(currentY - lastY) < threshold) {
        // ignore tiny movements
      } else if (currentY > lastY) {
        // scrolling down
        setVisible(false)
      } else {
        // scrolling up
        setVisible(true)
      }
      lastY = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setOpen((prev) => {
      const nextOpen = !prev
      if (nextOpen) setVisible(true)
      return nextOpen
    })
  }

  return (
    <nav className={`sticky top-0 z-50 transition-transform duration-300 border-b border-[#1e1e2e] bg-[#0a0a0f] ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="text-[18px] font-medium text-[#e8e8f0]" style={{ paddingLeft: "4px" }}>AR</div>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-[8px] py-[4px] text-[14px] text-[#6b6b80] hover:text-[#e8e8f0] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href={info.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-[20px] bg-[#6EE7B7] py-[10px] text-[12px] font-semibold text-[#0a0a0f] md:block"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          Resume
        </a>

        <button
          className="flex flex-col gap-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-[#e8e8f0] transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#e8e8f0] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#e8e8f0] transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#1e1e2e] bg-[#0a0a0f] px-[28px] py-[20px] md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-[8px] py-[4px] text-base text-[#6b6b80] hover:text-[#e8e8f0]"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href={info.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-[20px] bg-[#6EE7B7] py-[10px] text-[12px] font-semibold text-[#0a0a0f]"
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