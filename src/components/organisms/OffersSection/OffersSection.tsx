
import "./OffersSection.css"

import Card from "../../molecules/OfferCard/OfferCard"
import { extendedServices } from "../../../data/services"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function OffersSection(){
    const location = useLocation()

    useEffect(() => {
        if (!location.hash) return
        const id = location.hash.replace('#','')
        const t = setTimeout(() => {
            const el = document.getElementById(id)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 80)

        return () => clearTimeout(t)
    }, [location])

    return(
        <section className="OffersSection">
            {extendedServices.map(item => (
                <Card key={item.id} {...item} />
            ))}
        </section>
    )
}

export default OffersSection