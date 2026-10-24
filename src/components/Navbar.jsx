import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigationLinks, siteData } from "../data/siteData.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 32);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Glavna navigacija">
        <Link className="brand" to="/#home" aria-label="SkyLounge početna">
          <img src="/assets/skylounge-logo.jpg" alt="" />
          <span>{siteData.name}</span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={mobileOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <div className={`nav-links${mobileOpen ? " is-open" : ""}`}>
          {navigationLinks.map((link) => (
            <Link key={link.target} to={`/#${link.target}`}>
              {link.label}
            </Link>
          ))}
          <Link className="button button-small" to="/#booking">
            Rezerviši
          </Link>
        </div>
      </nav>
    </header>
  );
}
