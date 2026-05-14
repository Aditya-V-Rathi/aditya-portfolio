import { info } from "@/data/info"

export default function Contact() {
  return (
    <section id="contact" className="px-7 py-7 text-center">

      <p className="text-[20px] font-bold text-[#e8e8f0] mb-[6px]">
        Let&apos;s work together
      </p>
      <p className="text-[12px] text-[#6b6b80] mb-4">
        Open to full-time roles and freelance projects
      </p>
      <a
        href={`mailto:${info.email}`}
        className="inline-block rounded-[20px] bg-[#6EE7B7] px-6 py-2 text-[12px] font-semibold text-[#0a0a0f]"
      >
        Say hello ↗
      </a>

    </section>
  )
}