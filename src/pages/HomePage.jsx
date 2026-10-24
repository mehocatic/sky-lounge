import { useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  Clock3,
  Camera,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BookingForm from "../components/BookingForm.jsx";
import MenuCards from "../components/MenuCards.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { siteData } from "../data/siteData.js";

const experiences = [
  {
    title: "Premium shisha",
    description: "Vrhunske arome i majstorska priprema.",
    image: "/assets/hookah-gold.png",
  },
  {
    title: "Signature bar",
    description: "Autorski kokteli i premium kafa.",
    image: "/assets/cocktail-gold.png",
  },
  {
    title: "Lounge ambijent",
    description: "Ekskluzivna atmosfera i opuštanje.",
    image: "/assets/lounge-gold.png",
  },
];

const gallery = [
  { src: "/assets/lounge-interior.jpg", alt: "Enterijer SkyLoungea" },
  { src: "/assets/shisha-setup.jpg", alt: "Premium shisha u SkyLoungeu" },
  { src: "/assets/lounge-interior.jpg", alt: "Detalji lounge ambijenta" },
  { src: "/assets/shisha-setup.jpg", alt: "Priprema shishe" },
];

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return undefined;
    const timeout = window.setTimeout(() => {
      document
        .getElementById(location.hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }, 40);
    return () => window.clearTimeout(timeout);
  }, [location.hash]);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">Premium shisha &amp; caffe bar</p>
          <h1>
            Doživite luksuz.
            <br />
            <span>Osjetite atmosferu.</span>
          </h1>
          <p className="hero-subtitle">
            SkyLounge – mjesto gdje svaki trenutak postaje poseban.
          </p>
          <Link className="button" to="/#booking">
            Rezerviši svoj sto <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <a className="hero-scroll" href="#about" aria-label="Saznajte više">
          <ArrowDown size={21} aria-hidden="true" />
        </a>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-layout">
          <div className="about-copy">
            <p className="eyebrow">Mjesto za posebne trenutke</p>
            <h2>Premium Experience</h2>
            <p>
              Dobrodošli u SkyLounge – mjesto gdje se svaki trenutak pretvara u
              doživljaj. U srcu Sanskog Mosta stvorili smo prostor koji odiše
              elegancijom, toplinom i jedinstvenom atmosferom. Uz premium
              shisha okuse, sofisticiran ambijent i pažljivo birane detalje,
              SkyLounge je idealno mjesto za opuštanje, druženje i uživanje u
              posebnim trenucima.
            </p>
            <p>
              Doživite spoj modernog dizajna, luksuza i autentične shisha
              tradicije – iskustvo koje se ne zaboravlja.
            </p>
            <Link className="text-link" to="/#booking">
              Dođite i doživite <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.title}>
                <img src={experience.image} alt="" loading="lazy" />
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section menu-section" id="menu">
        <div className="container">
          <SectionHeading
            eyebrow="Okusi za svaki trenutak"
            title="SkyLounge meni"
            description="Odaberite svoj savršeni okus. Svaka shisha priprema se s pažnjom i premium kvalitetom."
          />
          <MenuCards compact />
          <div className="section-action">
            <Link className="button button-outline" to="/menu">
              Pogledaj cijeli meni <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="container">
          <SectionHeading
            eyebrow="Zavirite u naš svijet"
            title="Ambijent za uživanje"
            description="Doživite luksuz SkyLounge atmosfere. Svaki detalj govori o kvalitetu."
          />
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <figure className={`gallery-item gallery-item-${index + 1}`} key={`${image.src}-${index}`}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section booking-section" id="booking">
        <div className="container booking-layout">
          <div className="booking-copy">
            <p className="eyebrow">Vaše mjesto vas čeka</p>
            <h2>Rezervišite svoj sto</h2>
            <p>
              Isplanirajte sljedeći izlazak i uživajte u premium SkyLounge
              iskustvu. Pošaljite nam detalje putem WhatsAppa.
            </p>
            <a
              className="booking-contact"
              href={`https://wa.me/${siteData.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span>Pišite nam na WhatsApp</span>
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <BookingForm />
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <SectionHeading
            eyebrow="Posjetite nas"
            title="Pronađite nas u Sanskom Mostu"
            description="Svratite na omiljeni okus, kafu ili večer u dobrom društvu."
          />
          <div className="contact-layout">
            <div className="contact-details">
              <article className="contact-card">
                <span className="contact-icon">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>Adresa</h3>
                  <p>{siteData.address}</p>
                  <a
                    className="text-link"
                    href="https://maps.google.com/?q=Prijedorska+ulica,+Sanski+Most"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Otvori mapu <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
              <article className="contact-card">
                <span className="contact-icon">
                  <Clock3 size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>Radno vrijeme</h3>
                  <p>{siteData.openingHours}</p>
                </div>
              </article>
              <article className="contact-card">
                <span className="contact-icon">
                  <Camera size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>Instagram</h3>
                  <a href={siteData.instagram} target="_blank" rel="noreferrer">
                    {siteData.instagramHandle}
                  </a>
                </div>
              </article>
            </div>
            <iframe
              className="contact-map"
              src={siteData.mapEmbed}
              title="Lokacija SkyLoungea na Google mapama"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
