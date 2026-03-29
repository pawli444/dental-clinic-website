import "./AboutSection.css"

import tmp from "../../../assets/about/circle-dentist.jpg"

import useInView from "../../../hooks/useInView";

function AboutSection(){

    const ref = useInView<HTMLElement>();

    return(
        <>

        <section ref={ref} className="aboutSection">
            <h2 className="reveal" style={{transitionDelay:"0.15s"}}>Dlaczego my?</h2>
            <div className="about-wrapper">
                <div className="about-image-box image-reveal" style={{transitionDelay:"0.25s"}}>
                    <img src={tmp}/>
                </div>
                <ul className="about-text">
                    <li className="reveal" style={{transitionDelay:"0.35s"}}>
                        <span className="about-icon">👨‍⚕️</span>
                        <h3>Doświadczenie</h3>
                        <p>Wieloletnia praktyka i stałe podnoszenie kwalifikacji</p>
                    </li>
                    <li className="reveal" style={{transitionDelay:"0.45s"}}>
                        <span className="about-icon">😊 </span>
                        <h3>Komfort pacjenta</h3>
                        <p>Każdy pacjent traktowany jest indywidualnie</p>
                    </li>
                    <li className="reveal" style={{transitionDelay:"0.55s"}}>
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