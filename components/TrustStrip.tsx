const CLIENTS = ["GSK", "Takeda", "UCB", "Cargill", "Cegelec", "Les Saffre", "TPF Engineering", "IFC", "TSK", "Wayss & Freytag", "Belgian Air Force", "Fire Concept"];

export default function TrustStrip() {
  return (
    <section className="py-9 bg-[#161616] overflow-hidden border-y border-white/10">
      <div className="flex justify-center mb-6 text-[#6C6860] font-mono text-[10px] tracking-[0.2em] uppercase">
        Trusted by industry leaders
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex gap-20 w-max animate-marquee-scroll items-center">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <div key={i} className="font-sans font-bold tracking-wider text-[#A8A29A] text-[20px] flex items-center gap-5 whitespace-nowrap uppercase">
              {client} 
              {/* <span className="text-[#6C6860] text-[18px]">/</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}