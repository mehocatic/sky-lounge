import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "../data/siteData.js";

export default function BookingForm() {
  const [today] = useState(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const guests = Number(formData.get("guests"));
    const guestLabel = guests === 1 ? "osoba" : "osobe";
    const message = [
      "Pozdrav, želim rezervisati sto u SkyLoungeu.",
      `Ime i prezime: ${formData.get("name")}`,
      `Broj osoba: ${guests} ${guestLabel}`,
      `Datum: ${formData.get("date")}`,
      `Vrijeme: ${formData.get("time")}`,
      formData.get("notes") && `Posebne želje: ${formData.get("notes")}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label className="form-field">
        <span>Ime i prezime <span aria-hidden="true">*</span></span>
        <input
          autoComplete="name"
          name="name"
          placeholder="Vaše ime"
          required
        />
      </label>

      <div className="form-row">
        <label className="form-field">
          <span>Broj osoba <span aria-hidden="true">*</span></span>
          <select name="guests" defaultValue="2" required>
            {Array.from({ length: 10 }, (_, index) => index + 1).map(
              (number) => (
                <option key={number} value={number}>
                  {number} {number === 1 ? "osoba" : "osobe"}
                </option>
              ),
            )}
          </select>
        </label>
        <label className="form-field">
          <span>Datum <span aria-hidden="true">*</span></span>
          <input name="date" type="date" min={today} required />
        </label>
      </div>

      <label className="form-field">
        <span>Vrijeme <span aria-hidden="true">*</span></span>
        <input name="time" type="time" required />
      </label>

      <label className="form-field">
        <span>Posebne želje</span>
        <textarea
          name="notes"
          placeholder="Imate li posebne zahtjeve ili želje?"
          rows="4"
        />
      </label>

      <button className="button booking-submit" type="submit">
        Rezerviši putem WhatsAppa
        <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <p className="booking-note">
        Otvorit će se WhatsApp s pripremljenom porukom za vašu rezervaciju.
      </p>
    </form>
  );
}
