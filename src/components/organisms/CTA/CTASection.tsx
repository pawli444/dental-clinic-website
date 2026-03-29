import "./CTASection.css"
import useInView from "../../../hooks/useInView"

function CTASection() {
  const phone = import.meta.env.VITE_CLINIC_PHONE || ''

  const ref = useInView<HTMLElement>();

  return (
    <section ref={ref}>

      <div className="cta-section reveal" style={{transitionDelay: "0.1s"}}>
        <h2 className="reveal" style={{transitionDelay: "0.25s"}}>
          Umów wizytę już dziś!
        </h2>

        <p className="reveal" style={{transitionDelay: "0.3s"}} >
          Zadzwoń i zarezerwuj termin w naszym gabinecie
        </p>

        <a href={`tel:${phone}`} className="cta-button reveal" style={{transitionDelay: "0.4s"}}>
          📞 {phone}
        </a>
      </div>

    </section>
  )
}

export default CTASection