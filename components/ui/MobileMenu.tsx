interface MobileMenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ menuOpen, closeMenu }: MobileMenuProps) {
  return (
    <div className={`mob-menu${menuOpen ? " on" : ""}`} id="mobmenu">
      <a href="#services" onClick={closeMenu}>Services</a>
      <a href="#why" onClick={closeMenu}>Approach</a>
      <a href="#references" onClick={closeMenu}>References</a>
      <a href="#standards" onClick={closeMenu}>Compliance</a>
      <a href="#contact" className="mob-cta" onClick={closeMenu}>Request audit →</a>
    </div>
  );
}