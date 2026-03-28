import "./HeroSection.css"
import { NavLink } from "react-router-dom"

import mainPhoto from "../../../assets/hero/test.webp"
import tools from "../../../assets/hero/dentist-tools2.webp"
import useInView from "../../../hooks/useInView"

function Hero() {
  const ref = useInView<HTMLElement>()

  return (
    <section ref={ref} className="hero">

      <div className="hero-left">
        <h1 className="reveal" style={{ transitionDelay: "0s" }}>
          Twój <span className="reveal" style={{ transitionDelay: "0.06s" }}>zdrowy uśmiech</span><br />
          zaczyna się tutaj
        </h1>

        <p className="reveal" style={{ transitionDelay: "0.12s" }}>
          Stomatologia bez bólu i stresu.
          Komfort, któremu możesz zaufać.
        </p>

          <NavLink to="kontact">
            <button className="cta reveal" style={{ transitionDelay: "0.18s" }}>
              Umów wizytę
            </button>
          </NavLink>
      </div>

      <div className="hero-right">
        <div className="main-circle image-reveal" style={{ transitionDelay: "0.22s" }}>
          <img src={mainPhoto} alt="Główny" />
        </div>

        <div className="small-circle image-reveal" style={{ transitionDelay: "0.30s" }}>
          <img src={tools} alt="Narzędzia" />
        </div>

        <div className="badge reveal" style={{ transitionDelay: "0.36s" }}>
          🦷 +20 lat doświadczenia
        </div>
      </div>

    </section>
  )
}

export default Hero