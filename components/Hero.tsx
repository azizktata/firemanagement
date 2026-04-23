export default function Hero() {
  return (
    <section className="relative h-screen min-h-[780px] overflow-hidden p-0 border-t-0">
      {/* Background with overlay effects */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[url('/pipe-hero.jpg')] bg-cover bg-center saturate-95 contrast-105 opacity-50" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0E0E0E]/35 via-[#0E0E0E]/10 to-[#0E0E0E]/85" />
        <div className="absolute inset-0 z-20 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[length:80px_80px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />
      </div>

      <div className="relative h-full flex flex-col justify-end px-6 md:px-10 pb-28">
        
        
        <h1 className="text-[clamp(64px,11vw,176px)] leading-[0.86] tracking-tighter font-bold max-w-[14ch]">
          <span className="block overflow-hidden">
            <span className="inline-block animate-rise">Reliable</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block font-serif italic font-normal text-transparent [-webkit-text-stroke:1.5px_#F2EFE9] animate-rise delay-100">Protection.</span>
          </span>
        </h1>

        <div className="flex flex-wrap items-end justify-between gap-12 mt-12">
          <p className="max-w-[420px] text-[#A8A29A] text-lg leading-relaxed">
            <span className="text-[#F2EFE9]">Specialized fire safety engineering.</span> From conceptual risk analysis to full 3D hydraulic design and site commissioning.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#E63946] px-7 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-[#FF5A48] transition-colors">Start Project</button>
            <button className="border border-white/15 px-7 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">View Standards</button>
          </div>
        </div>
      </div>
    </section>
  );
}