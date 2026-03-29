import "./ContactSection.css"

import GabinetInformation from "../../molecules/GabinetInformation/GabinetInformation"

import useInView from "../../../hooks/useInView"

function ContactSection(){

    const ref = useInView<HTMLElement>();

    const mapsUrl = import.meta.env.VITE_MAPS_EMBED_URL || ''

    return(
    <>
    <section ref={ref} className="ContactSection">

        <div className="title-wrapper">
         <h2 className="contact-title reveal" style={{transitionDelay:"0.12s"}}>Znajdź nas</h2>
        </div>
        <div className="cont-info-box reveal">
            <div className="contact-info-wrapper">
                <GabinetInformation/>
                <div className="maps-box">
                    {mapsUrl ? (
                        <iframe
                            className="image-reveal"
                            src={mapsUrl}
                            width="600"
                            height="450"
                            style={{border:0, transitionDelay:"0.3s"}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa kliniki"
                        />
                    ) : null}
                </div>
            </div>
        </div>
      </section>
    </>
    )
}

export default ContactSection;
