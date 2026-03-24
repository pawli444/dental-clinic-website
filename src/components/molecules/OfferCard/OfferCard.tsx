import "./OfferCard.css"

import type { ExtendedService } from "../../../types/index"



function OfferCard({ name, description, imageURL, longDescription, scope, why, forWho  }: ExtendedService){
    return(
        <>
            <div className="offercard-box">
                
                <img src={imageURL} alt={description}/>
                <h2> {name}</h2>

                <p>{longDescription}</p>

                <ul>
                    {scope.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>

                <h3> Dlaczego?</h3>
                <p>{why}</p>

                <h3> Dla kogo?</h3>
                <p>{forWho}</p>

            </div>
        </>
    )
}



export default OfferCard;