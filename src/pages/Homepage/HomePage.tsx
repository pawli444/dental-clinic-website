import "./HomePage.css"

import HeroSection from "../../components/organisms/HeroSection/HeroSection"
import ServicesSection from "../../components/organisms/ServicesSection/ServicesSection";
import AboutSection from "../../components/organisms/AboutSection/AboutSection";
import ContactSection from "../../components/organisms/ContactSection/ContactSection";

function HomePage(){

    return(
        <>
        <HeroSection/>
        <ServicesSection/>
        <AboutSection/>
        <ContactSection/>
        </>
    )
}


export default HomePage;