import "./OfferCard.css"

import type { ExtendedService } from "../../../types/index"

import useInView from "../../../hooks/useInView";


function OfferCard({ id, name, description, imageURL, longDescription, scope, why, forWho  }: ExtendedService){

    const ref = useInView<HTMLDivElement>();

    return(
        <>
            <div ref={ref} className={`offercard-box ${id%2==0 ? "right" : "left"}`}>
                
                <div className="offer-img-box image-reveal">
                    <img src={imageURL} alt={description}/>
                </div>

                <div className="offer-content-wrapper">

                    <h2 className="reveal" style={{transitionDelay: "0.3s"}}> {name}</h2>

                    <p className="longDescription reveal" style={{transitionDelay: "0.4s"}}>{longDescription}</p>

                    <ul className="scope-items">
                        {scope.map((item, i) => (
                            <li key={i} className="reveal"     style={{
                            "--delay": `${0.5 + i * 0.15}s`,
                            transitionDelay: `${0.5 + i * 0.15}s`,
                            transitionDuration: "0.65s"
                        } as React.CSSProperties}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="offer-questions">
                        <h3 className="reveal" style={{transitionDelay: "0.8s"}}> Dlaczego?</h3>
                        <p className="reveal" style={{transitionDelay: "0.9s"}}>{why}</p>
                    </div>

                    <div className="offer-questions">
                        <h3 className="reveal" style={{transitionDelay: "1s"}}> Dla kogo?</h3>
                        <p className="reveal" style={{transitionDelay: "1.1s"}}>{forWho}</p>                      
                    </div>
                </div>

            </div>
        </>
    )
}



export default OfferCard;