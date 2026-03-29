import "./ServicesSection.css"

import Card from "../../molecules/ServiceCard/ServiceCard"

import services from "../../../data/services"

import useInView from "../../../hooks/useInView"
import { Link } from "react-router-dom"

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
               <Link
                 key={item.id}
                 to={`/uslugi#service-${item.id}`}
                 className="card-item reveal image-reveal"
                 style={{ transitionDelay: `${0.25 + i * 0.06}s` }}
               >
                    <Card id={item.id} name={item.name} description={item.description} imageURL={item.imageURL} />
                </Link>
                ))}
            </div>
          </section>
        </>
    )
}


export default ServicesSection;