import "./ServicesSection.css"

import Card from "../../molecules/ServiceCard/ServiceCard"

import services from "../../../data/services"

function ServicesSection(){
    return(
        <>
          <section className="ServicesSection">

            <div className="services-header">
                <h2>Nasze usługi</h2>
                <p>Zadbaj o swój uśmiech!</p>
            </div>

            <div className="cards-wrapper">

                {services.map((item) => (
                    <Card key={item.id} id={item.id} name={item.name} description={item.description} imageURL={item.imageURL}/>
                ))}
            </div>
          </section>
        </>
    )
}


export default ServicesSection;