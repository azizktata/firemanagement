export default function Footer() {
  return (
    <footer className="bg-paper pt-32 pb-10 px-6 md:px-10 border-t border-ink/5 text-ink">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-32">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold uppercase tracking-tighter mb-8">
              Fire <em className="font-serif italic font-normal lowercase">Management</em>
            </div>
            <p className="text-lg text-ink/60 max-w-sm">
              The premier fire engineering partner for complex industrial and commercial infrastructure in Europe and beyond.
            </p>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">Capabilities</h5>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-accent">Conceptual Design</a></li>
              <li><a href="#" className="hover:text-accent">Hydraulic Analysis</a></li>
              <li><a href="#" className="hover:text-accent">Commissioning</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">Contact</h5>
            <p className="text-sm font-medium">project@firemgmt.be</p>
            <p className="text-sm text-ink/60 mt-2">Brussels, Belgium</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-ink/5 gap-4">
          <span className="font-mono text-[10px] text-ink/40">© 2026 FIRE MANAGEMENT SRL</span>
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}