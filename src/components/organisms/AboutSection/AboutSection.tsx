import "./AboutSection.css"

import tmp from "../../../assets/about/circle-dentist.jpg"


function AboutSection(){
    return(
        <>

        <section className="aboutSection">
            <h2>Dlaczego my?</h2>
            <div className="about-wrapper">
                <div className="about-image-box">
                    <img src={tmp}/>
                </div>
                <ul className="about-text">
                    <li>
                        <span className="about-icon">👨‍⚕️</span>
                        <h3>Doświadczenie</h3>
                        <p>Wieloletnia praktyka i stałe podnoszenie kwalifikacji</p>
                    </li>
                    <li>
                        <span className="about-icon">😊 </span>
                        <h3>Komfort pacjenta</h3>
                        <p>Każdy pacjent traktowany jest indywidualnie</p>
                    </li>
                    <li>
                        <span className="about-icon">🦷 </span>
                        <h3>Opieka rodzinna</h3>
                        <p>Leczymy zarówno dorosłych jak i dzieci</p>
                    </li>
                </ul>
            </div>

        </section>
        
        </>
    )
}


export default AboutSection;