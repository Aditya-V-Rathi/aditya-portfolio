import { info } from "@/data/info"

export default function Hero() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1e1e2e] min-h-[550px] px-6 md:px-12 lg:px-20">

      {/* LEFT */}
      <div className="pl-8 md:pl-16 lg:pl-28 xl:pl-36 pr-10 pt-10 pb-10 ml-4 md:ml-8 lg:ml-16 xl:ml-24 relative flex flex-col justify-center items-start gap-6 text-left">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="w-[28px] h-[1px] bg-[#6EE7B7]" />
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#6EE7B7] font-medium">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="ml-[30px] text-[64px] font-extrabold leading-[1.05] text-[#e8e8f0]">
          Aditya<br />
          <span className="ml-8 text-[#6EE7B7]">Rathi</span>
        </h1>

        {/* Role */}
        <p className="text-[15px] text-[#6b6b80] tracking-wide">
          Software Engineer — .NET · Angular · AI Automation
        </p>

        {/* Description */}
        <p className="text-[14px] leading-[1.8] text-[#a0a0b8] max-w-md">
          2+ years shipping enterprise financial systems at Yardi. Building AI-native tooling with MCP and Flowise.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-6 justify-start">
          <a
            href="#projects"
            className="rounded-[20px] bg-[#6EE7B7] py-2.5 text-[12px] font-semibold text-[#0a0a0f]"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            View Projects
          </a>
          <a
            href={info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[20px] border border-[#1e1e2e] py-2.5 text-[12px] text-[#e8e8f0]"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            LinkedIn ↗
          </a>
          <a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[20px] border border-[#1e1e2e] py-2.5 text-[12px] text-[#e8e8f0]"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
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
        <div className="flex flex-col items-center" >
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
          <div className="flex gap-6 mt-10">
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