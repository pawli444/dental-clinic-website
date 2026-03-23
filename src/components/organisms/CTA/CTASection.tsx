import "./CTASection.css"

function CTASection() {
  const phone = import.meta.env.VITE_CLINIC_PHONE || ''

  return (
    <section className="cta-section">
      <h2>Umów wizytę już dziś!</h2>
      <p>Zadzwoń i zarezerwuj termin w naszym gabinecie</p>
      <a href={`tel:${phone}`} className="cta-button">
        📞 {phone}
      </a>
    </section>
  )
}

export default CTASection