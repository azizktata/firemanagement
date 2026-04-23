"use client";
import { useState } from "react";

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const SERVICES = [ { id: '01', title: 'Conceptual Design', desc: 'Risk analysis and water supply studies.', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200' }, { id: '02', title: '3D Sprinkler Design', desc: 'Full coordinated Revit and SprinkCAD sets.', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200' }, { id: '03', title: 'Inspections', desc: 'On-site technical auditing and commissioning.', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200' } ];
  const svc = SERVICES[activeIdx];
  return (
    <section id="services" className="bg-[#0E0E0E] px-6 md:px-10 py-24 border-t border-white/10">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 bg-[#E63946] shadow-[0_0_8px_#E63946]" />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#6C6860]">Engineering Capabilities</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] border-t border-white/10">
          <div className="flex flex-col border-r border-white/10">
            {SERVICES.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`text-left p-8 border-b border-white/10 transition-all relative group ${
                  activeIdx === i ? "text-[#F2EFE9]" : "text-[#A8A29A] hover:bg-white/[0.02]"
                }`}
              >
                {activeIdx === i && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E63946]" />}
                <span className="block font-mono text-[10px] mb-2 opacity-50">{item.id}</span>
                <span className="font-bold text-sm uppercase tracking-widest">{item.title}</span>
              </button>
            ))}
          </div>

          <div className="p-8 md:p-16 flex flex-col justify-center">
            <h3 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 max-w-[15ch]">
              {svc.title}
            </h3>
            <p className="text-[#A8A29A] text-xl leading-relaxed mb-12 max-w-2xl">{svc.desc}</p>
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
              {svc.bullets && svc.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-4 text-sm text-[#A8A29A] font-medium">
                  <span className="text-[#E63946] font-mono">/</span> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}