import "./ContactForm.css";
import GabinetInformation from "../../molecules/GabinetInformation/GabinetInformation";
import useInView from "../../../hooks/useInView";

function ContactForm() {
  const mapsUrl = import.meta.env.VITE_MAPS_EMBED_URL || "";

  const ref = useInView<HTMLElement>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    console.log({
      name: data.get("name"),
      phone: data.get("phone"),
      description: data.get("description"),
    });

    form.reset();
  };

  return (
    <>
      <section ref={ref}>
        <div
          className="ContactFormSection reveal"
          style={{ transitionDelay: "0.19s" }}
        >
          <h2
            className="reveal"
            style={{ transitionDelay: "0.15s" }}
          >
            Umów wizytę
          </h2>

          <div className="contact-form-wrapper">
            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="form-box">
                <label
                  className="reveal"
                  style={{ transitionDelay: "0.2s" }}
                  htmlFor="name"
                >
                  Imię i nazwisko
                </label>

                <input
                  className="reveal"
                  style={{ transitionDelay: "0.25s" }}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jan Kowalski"
                  required
                />
              </div>

              <div className="form-box">
                <label
                  className="reveal"
                  style={{ transitionDelay: "0.35s" }}
                  htmlFor="phone"
                >
                  Numer telefonu
                </label>

                <input
                  className="reveal"
                  style={{ transitionDelay: "0.4s" }}
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+48 000 000 000"
                  required
                />
              </div>

              <div className="form-box">
                <label
                  className="reveal"
                  style={{ transitionDelay: "0.5s" }}
                  htmlFor="description"
                >
                  Opis / powód wizyty
                </label>

                <textarea
                  className="reveal"
                  style={{ transitionDelay: "0.55s" }}
                  id="description"
                  name="description"
                  placeholder="Opisz krótko cel wizyty..."
                />
              </div>

              <button
                className="reveal"
                style={{ transitionDelay: "0.65s" }}
                type="submit"
              >
                Wyślij
              </button>
            </form>

            <div className="contact-info-site">
              <GabinetInformation className="info-box--dark" />
            </div>
          </div>

          {mapsUrl && (
            <div className="map-wrapper">
              <iframe
                className="image-reveal"
                src={mapsUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja gabinetu"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ContactForm;