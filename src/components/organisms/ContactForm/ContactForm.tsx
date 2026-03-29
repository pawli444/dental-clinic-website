import "./ContactForm.css";
import GabinetInformation from "../../molecules/GabinetInformation/GabinetInformation";
import useInView from "../../../hooks/useInView";
import { useRef, useState } from "react";

function ContactForm() {
  const mapsUrl = import.meta.env.VITE_MAPS_EMBED_URL || "";

  const ref = useInView<HTMLElement>();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; description?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const statusRef = useRef<HTMLDivElement | null>(null);

  const validate = () => {
    const e: { name?: string; phone?: string; description?: string } = {};
    if (!name.trim() || name.trim().length < 2) e.name = "Podaj imię i nazwisko (min. 2 znaki)";

    const phoneClean = phone.trim();
    if (!/^(\+?\d[\d\s()\-]{6,})$/.test(phoneClean)) e.phone = "Podaj poprawny numer telefonu";
    if (!description.trim() || description.trim().length < 10) e.description = "Opisz krótko cel wizyty (min. 10 znaków)";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);

      const firstKey = Object.keys(validation)[0];
      const el = form.querySelector(`#${firstKey}`) as HTMLElement | null;
      if (el) el.focus();
      return;
    }

    setSubmitting(true);
    setErrors({});

    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xbdpgbez", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        if (statusRef.current) statusRef.current.textContent = "Wiadomość wysłana ✅";
        form.reset();
        setName("");
        setPhone("");
        setDescription("");
      } else {
        if (statusRef.current) statusRef.current.textContent = "Błąd wysyłki ❌";
      }
    } catch (err) {
      if (statusRef.current) statusRef.current.textContent = "Błąd wysyłki ❌";
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section ref={ref}>
        <div className="ContactFormSection reveal" style={{ transitionDelay: "0.19s" }}>
          <h2 className="reveal" style={{ transitionDelay: "0.15s" }}>
            Umów wizytę
          </h2>

          <div className="contact-form-wrapper">
            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="form-box">
                <label className="reveal" style={{ transitionDelay: "0.2s" }} htmlFor="name">
                  Imię i nazwisko
                </label>

                <input
                  id="name"
                  name="name"
                  className="reveal"
                  style={{ transitionDelay: "0.25s" }}
                  type="text"
                  placeholder="Jan Kowalski"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
                {errors.name && (
                  <div id="name-error" role="alert" className="error">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="form-box">
                <label className="reveal" style={{ transitionDelay: "0.35s" }} htmlFor="phone">
                  Numer telefonu
                </label>

                <input
                  id="phone"
                  name="phone"
                  className="reveal"
                  style={{ transitionDelay: "0.4s" }}
                  type="tel"
                  placeholder="000 000 000"
                  value={phone}
                  onChange={(ev) => {
                    let val = ev.target.value.replace(/\D/g, "").slice(0, 9); 
                    val = val.replace(/(\d{3})(?=\d)/g, "$1 ");
                    setPhone(val);
                  }}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  required
                />
                {errors.phone && (
                  <div id="phone-error" role="alert" className="error">
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="form-box">
                <label className="reveal" style={{ transitionDelay: "0.5s" }} htmlFor="description">
                  Opis / powód wizyty
                </label>

                <textarea
                  id="description"
                  name="description"
                  className="reveal"
                  style={{ transitionDelay: "0.55s" }}
                  placeholder="Opisz krótko cel wizyty..."
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? "description-error" : undefined}
                />
                {errors.description && (
                  <div id="description-error" role="alert" className="error">
                    {errors.description}
                  </div>
                )}
              </div>

              <input type="text" name="_gotcha" style={{ position: "absolute", left: "-9999px" }} tabIndex={-1} autoComplete="off" />

              <button className="reveal" style={{ transitionDelay: "0.65s" }} type="submit" disabled={submitting}>
                {submitting ? "Wysyłam..." : "Wyślij"}
              </button>

              <div ref={statusRef} aria-live="polite" style={{ marginTop: 8 }} />
            </form>

            <div className="contact-info-site">
              <GabinetInformation className="info-box--dark" />
            </div>
          </div>

          {mapsUrl && (
            <div className="map-wrapper">
              <iframe className="image-reveal" src={mapsUrl} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokalizacja gabinetu" />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ContactForm;