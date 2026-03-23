import "./ContactSection.css"

function ContactSection(){
    const clinicName = import.meta.env.VITE_CLINIC_NAME || ''
    const phone = import.meta.env.VITE_CLINIC_PHONE || ''
    const address = import.meta.env.VITE_CLINIC_ADDRESS || ''
    const mapsUrl = import.meta.env.VITE_MAPS_EMBED_URL || ''

    return(
    <>
        <div className="title-wrapper">
         <h2 className="contact-title">Znajdź nas</h2>
        </div>
        <section className="ContactSection">
            <div className="contact-info-wrapper">
                <ul className="info-box">
                  <li>
                    <h3>📍 Adres</h3>
                    <p>{address}</p>
                  </li>
                  <li>
                    <h3>📞 Telefon</h3>
                    <p>{phone}</p>
                  </li>
                  <li>
                    <h3>🕐 Godziny otwarcia</h3>
                    <p> Poniedziałek - Czwartek: 12:00 - 18:00</p>
                  </li>
                </ul>
                <div className="maps-box">
                    {mapsUrl ? (
                        <iframe
                            src={mapsUrl}
                            width="600"
                            height="450"
                            style={{border:0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa kliniki"
                        />
                    ) : null}
                </div>
            </div>
        </section>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
    )
}

export default ContactSection;
