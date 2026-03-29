import "./ServicesSection.css"

import Card from "../../molecules/ServiceCard/ServiceCard"

import services from "../../../data/services"

import useInView from "../../../hooks/useInView"

function ServicesSection(){

     const ref = useInView<HTMLElement>();

    return(
        <>
          <section ref={ref} className="ServicesSection">

            <div className="services-header">
                <h2 className="reveal" style={{ transitionDelay: "0.1s" }}>Nasze usługi</h2>
                <p className="reveal" style={{ transitionDelay: "0.16s" }}>Zadbaj o swój uśmiech!</p>
            </div>

            <div className="cards-wrapper">

                {services.map((item, i) => (
               <div key={item.id} className="card-item reveal image-reveal" 
               style={{ transitionDelay: `${0.25 + i * 0.06}s` }}
               >
                    <Card id={item.id} name={item.name} description={item.description} imageURL={item.imageURL} />
                </div>
                ))}
            </div>
          </section>
        </>
    )
}


export default ServicesSection;