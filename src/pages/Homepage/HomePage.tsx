import "./HomePage.css"

import HeroSection from "../../components/organisms/HeroSection/HeroSection"
import ServicesSection from "../../components/organisms/ServicesSection/ServicesSection";
import AboutSection from "../../components/organisms/AboutSection/AboutSection";

function HomePage(){

    return(
        <>
        <HeroSection/>
        <ServicesSection/>
        <AboutSection/>
        </>
    )
}


export default HomePage;