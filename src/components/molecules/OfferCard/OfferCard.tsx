import "./OfferCard.css"

import type { ExtendedService } from "../../../types/index"



function OfferCard({ id, name, description, imageURL, longDescription, scope, why, forWho  }: ExtendedService){
    return(
        <>
            <div className={`offercard-box ${id%2==0 ? "right" : "left"}`}>
                
                <img src={imageURL} alt={description}/>

                <div className="offer-content-wrapper">

                    <h2> {name}</h2>

                    <p className="longDescription">{longDescription}</p>

                    <ul className="scope-items">
                        {scope.map((item) => (
                            <li><p>{item}</p></li>
                        ))}
                    </ul>
                    
                    <div className="offer-questions">
                        <h3> Dlaczego?</h3>
                        <p>{why}</p>
                    </div>

                    <div className="offer-questions">
                        <h3> Dla kogo?</h3>
                        <p>{forWho}</p>                      
                    </div>
                </div>

            </div>
        </>
    )
}



export default OfferCard;