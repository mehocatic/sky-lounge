import { ArrowUpRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { navigationLinks, siteData } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-column">
          <Link className="brand" to="/#home" aria-label="SkyLounge početna">
            <img src="/assets/skylounge-logo.jpg" alt="" />
            <span>{siteData.name}</span>
          </Link>
          <p>
            Premium shisha iskustvo u srcu Sanskog Mosta. Luksuz, kvalitet i
            nezaboravna atmosfera.
          </p>
        </div>

        <div className="footer-links">
          <h2>Brzi linkovi</h2>
          {navigationLinks.slice(0, 4).map((link) => (
            <Link key={link.target} to={`/#${link.target}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/#booking">Rezervacije</Link>
        </div>

        <div className="footer-links">
          <h2>Pratite nas</h2>
          <a href={siteData.instagram} target="_blank" rel="noreferrer">
            <Camera size={17} aria-hidden="true" />
            {siteData.instagramHandle}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} SkyLounge. Sva prava zadržana.</span>
        <a href="#home">Povratak na vrh ↑</a>
      </div>
    </footer>
  );
}
