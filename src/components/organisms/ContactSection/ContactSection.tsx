import "./ContactSection.css"

import GabinetInformation from "../../molecules/GabinetInformation/GabinetInformation"

function ContactSection(){

    const mapsUrl = import.meta.env.VITE_MAPS_EMBED_URL || ''

    return(
    <>
        <div className="title-wrapper">
         <h2 className="contact-title">Znajdź nas</h2>
        </div>
        <section className="ContactSection">
            <div className="contact-info-wrapper">
                <GabinetInformation/>
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
    </>
    )
}

export default ContactSection;
