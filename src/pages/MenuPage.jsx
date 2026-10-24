import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import MenuCards from "../components/MenuCards.jsx";

export default function MenuPage() {
  return (
    <section className="section full-menu-section">
      <div className="container">
        <Link className="text-link back-link" to="/#menu">
          <ArrowLeft size={17} aria-hidden="true" />
          Povratak na početnu
        </Link>
        <div className="full-menu-heading">
          <p className="eyebrow">Izaberite svoj omiljeni okus</p>
          <h1>Kompletan SkyLounge meni</h1>
          <p>
            Svi naši premium i classic okusi, pažljivo pripremljeni za savršeno
            iskustvo.
          </p>
        </div>
        <MenuCards />
      </div>
    </section>
  );
}
