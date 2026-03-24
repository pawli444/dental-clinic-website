
import "./OffersSection.css"

import Card from "../../molecules/OfferCard/OfferCard"
import { extendedServices } from "../../../data/services"

function OffersSection(){
    return(
        <section className="OffersSection">
            {extendedServices.map(item => (
                <Card key={item.id} {...item} />
            ))}
        </section>
    )
}

export default OffersSection