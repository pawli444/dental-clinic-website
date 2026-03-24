import "./HeroSection.css"
import mainPhoto from "../../../assets/hero/woman-on-chair.jpg"
import doctor from "../../../assets/hero/dentist-tools.jpg"

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

        <button className="cta">
          Umów wizytę
        </button>
      </div>

      <div className="hero-right">
        <div className="main-circle">
          <img src={mainPhoto} />
        </div>

        <div className="small-circle">
          <img src={doctor} />
        </div>

        <div className="badge">
          🦷 +20 lat doświadczenia
        </div>
      </div>

    </section>
  )
}

export default Hero