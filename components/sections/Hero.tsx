import { info } from "@/data/info"

export default function Hero() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1e1e2e] min-h-[550px]">

      {/* LEFT */}
      <div className="pt-9 pr-6 pb-9 pl-7 relative">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-[14px]">
          <div className="w-[20px] h-[1px] bg-[#6EE7B7]" />
          <span className="text-[10px] uppercase tracking-[0.12em] text-[#6EE7B7]">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="mb-[6px] text-[42px] font-extrabold leading-[1] text-[#e8e8f0]">
          Aditya<br />
          <span className="text-[#6EE7B7]">Rathi</span>
        </h1>

        {/* Role */}
        <p className="mb-[10px] text-[12px] text-[#6b6b80]">
          Software Engineer — .NET · Angular · AI Automation
        </p>

        {/* Description */}
        <p className="mb-[18px] text-[11px] leading-[1.6] text-[#a0a0b8] max-w-md">
          2+ years shipping enterprise financial systems at Yardi. Building AI-native tooling with MCP and Flowise.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-2">
          <a
            href="#projects"
            className="rounded-[20px] bg-[#6EE7B7] px-4 py-1.5 text-[11px] font-semibold text-[#0a0a0f]"
          >
            View Projects
          </a>
          <a
            href={info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[20px] border border-[#1e1e2e] px-4 py-1.5 text-[11px] text-[#e8e8f0]"
          >
            LinkedIn ↗
          </a>
          <a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[20px] border border-[#1e1e2e] px-4 py-1.5 text-[11px] text-[#e8e8f0]"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="border-l border-[#1e1e2e] bg-[#0d0d12] flex items-center justify-center p-6 relative overflow-hidden">

        {/* Glow */}
        <div className="absolute w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle,rgba(110,231,183,0.08),transparent_70%)] top-[10px] left-[15px]" />

        {/* Photo section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Outer ring 2 */}
            <div className="absolute w-[170px] h-[170px] rounded-full border border-dashed border-[#141f18] -top-[20px] -left-[20px]" />
            {/* Outer ring 1 */}
            <div className="absolute w-[150px] h-[150px] rounded-full border border-dashed border-[#1a3a2a] -top-[10px] -left-[10px]" />
            {/* Circle */}
            <div className="relative w-[130px] h-[130px] rounded-full border-2 border-[#1a3a2a] bg-[#1e1e2e] flex items-center justify-center overflow-hidden z-10">
              <span className="text-[36px] font-bold text-[#6EE7B7]">AR</span>
            </div>
            {/* Location badge */}
            <div className="absolute -bottom-1 -right-1 bg-[#111118] border border-[#1e1e2e] rounded-[12px] px-[10px] py-1 text-[10px] text-[#6EE7B7] z-20 whitespace-nowrap">
              Pune, India
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 mt-4">
            {info.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[16px] font-bold text-[#e8e8f0]">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-[0.08em] text-[#6b6b80]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}