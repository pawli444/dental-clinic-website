import "./ContactForm.css"
import GabinetInformation from "../../molecules/GabinetInformation/GabinetInformation"

function ContactForm() {
  const mapsUrl = import.meta.env.VITE_MAPS_EMBED_URL || ''

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    console.log({
      name: data.get('name'),
      phone: data.get('phone'),
      description: data.get('description'),
    })
    // tutaj możesz dodać fetch() do API
    form.reset()
  }

  return (
    <>
      <section className="ContactFormSection">
        <h2>Umów wizytę</h2>

        <div className="contact-form-wrapper">
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="form-box">
              <label htmlFor="name">Imię i nazwisko</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jan Kowalski"
                required
              />
            </div>

            <div className="form-box">
              <label htmlFor="phone">Numer telefonu</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+48 000 000 000"
                required
              />
            </div>

            <div className="form-box">
              <label htmlFor="description">Opis / powód wizyty</label>
              <textarea
                id="description"
                name="description"
                placeholder="Opisz krótko cel wizyty..."
              />
            </div>

            <button type="submit">Wyślij</button>
          </form>

          <div className="contact-info-site">
            <GabinetInformation className="info-box--dark" />
          </div>
        </div>

        {mapsUrl && (
          <div className="map-wrapper">
            <iframe
              src={mapsUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja gabinetu"
            />
          </div>
        )}
      </section>
    </>
  )
}

export default ContactForm