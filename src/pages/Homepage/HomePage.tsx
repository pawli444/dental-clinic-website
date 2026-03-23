import "./HomePage.css"

import HeroSection from "../../components/organisms/HeroSection/HeroSection"
import ServicesSection from "../../components/organisms/ServicesSection/ServicesSection";
import AboutSection from "../../components/organisms/AboutSection/AboutSection";
import ContactSection from "../../components/organisms/ContactSection/ContactSection";
import CTASection from "../../components/organisms/CTA/CTASection";

function HomePage(){

    return(
        <>
        <HeroSection/>
        <ServicesSection/>
        <AboutSection/>
        <ContactSection/>
        <CTASection/>
        </>
    )
}


export default HomePage;