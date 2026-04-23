"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 border-b ${
        scrolled 
          ? "bg-[#0E0E0E]/80 backdrop-blur-md py-3 border-white/10" 
          : "bg-transparent py-5 border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="text-[14px] font-bold uppercase tracking-[0.1em] text-[#F2EFE9]">
          Fire <em className="font-serif italic font-normal lowercase not-italic">Management</em>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Services", "Approach", "References", "Standards"].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#A8A29A] hover:text-[#F2EFE9] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="border border-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#F2EFE9] hover:bg-white/5 transition-all">
          Contact Project Desk
        </button>
      </div>
    </nav>
  );
}