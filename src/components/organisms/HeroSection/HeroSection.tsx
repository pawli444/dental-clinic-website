import "./HeroSection.css"
import { NavLink } from "react-router-dom"

import mainPhoto from "../../../assets/hero/test.webp"
import tools from "../../../assets/hero/dentist-tools2.webp"

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          Twój <span>zdrowy uśmiech</span><br />
          zaczyna się tutaj
        </h1>

        <p>
          Stomatologia bez bólu i stresu.
          Komfort, któremu możesz zaufać.
        </p>

          <NavLink to="kontact">
            <button className="cta">
              Umów wizytę
            </button>
          </NavLink>
      </div>

      <div className="hero-right">
        <div className="main-circle">
          <img src={mainPhoto} />
        </div>

        <div className="small-circle">
          <img src={tools} />
        </div>

        <div className="badge">
          🦷 +20 lat doświadczenia
        </div>
      </div>

    </section>
  )
}

export default Hero