import { RefObject } from "react";
import { ArrowIcon, ChevronIcon } from "./icons";

interface NavbarProps {
  navRef: RefObject<HTMLElement | null>;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  langActive: string;
  setLangActive: (lang: string) => void;
}

export default function Navbar({ navRef, menuOpen, setMenuOpen, langActive, setLangActive }: NavbarProps) {
  return (
    <nav className="nav" ref={navRef} id="nav">
      <a href="#" className="brand">
        <span className="brand-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 2v20M2 12h20M4 4l16 16M20 4L4 20" opacity=".35" />
            <circle cx="12" cy="12" r="5.5" />
            <circle cx="12" cy="12" r="1.8" fill="#E63946" stroke="none" />
          </svg>
        </span>
        <span>Fire Management</span>
      </a>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#why">Approach</a>
        <a href="#references">References</a>
        <a href="#standards">Compliance</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-right">
        <div className="lang-switch">
          {["en", "fr", "nl"].map(l => (
            <button key={l} className={langActive === l ? "on" : ""} onClick={() => setLangActive(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <a href="#contact" className="cta">
          Request audit&nbsp;<ArrowIcon />
        </a>
        <button className="hamb" aria-label="Menu" onClick={() => setMenuOpen(true)}>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 1h14M0 5h14M0 9h14" />
          </svg>
        </button>
      </div>
    </nav>
  );
}