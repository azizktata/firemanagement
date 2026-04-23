export default function References() {
  return (
    <section id="references" className="bg-[#0E0E0E] py-24 border-t border-white/10 px-6 md:px-10">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Selected <br/><em className="font-serif italic font-normal text-transparent [-webkit-text-stroke:1px_#F2EFE9] not-italic">Works.</em></h2>
          <span className="font-mono text-[10px] text-[#6C6860] uppercase tracking-[0.2em] mb-4">Project Archive 2024-2026</span>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {[
            { name: "The Landlord", site: "Brussels, BE", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070" },
            { name: "WoodWise Plant", site: "Ghent, BE", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070" }
          ].map((project, i) => (
            <div key={i} className="relative aspect-video group overflow-hidden bg-[#161616]">
              <img src={project.img} className="object-cover w-full h-full opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={project.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8">
                <span className="font-mono text-[10px] text-[#E63946] uppercase mb-1 block">{project.site}</span>
                <h4 className="text-2xl font-bold uppercase">{project.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}