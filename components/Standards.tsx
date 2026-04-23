export default function Standards() {
  return (
    <section id="standards" className="bg-[#161616] py-24 border-y border-white/10 px-6 md:px-10">
      <div className="max-w-[1360px] mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h3 className="text-3xl font-bold mb-6">Global <br/>Compliance.</h3>
          <p className="text-[#A8A29A] leading-relaxed">Our engineering methodology is built on the most rigorous international safety protocols.</p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["NFPA", "EN 12845", "FM GLOBAL", "VdS", "APSAD", "CEA", "NBC", "UL"].map((std) => (
            <div key={std} className="border border-white/5 bg-[#0E0E0E] p-6 flex items-center justify-center font-mono text-[11px] tracking-widest text-[#6C6860] hover:text-[#F2EFE9] hover:border-[#E63946] transition-all">
              {std}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}