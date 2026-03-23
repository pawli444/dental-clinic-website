import "./ServiceCard.css"
import type { Service } from "../../../types/index"

function ServiceCard({ name, description, imageURL }: Service){
  return (
    <div className="card-box">
      <div className="card-image-wrapper">
        <img src={imageURL} alt={name} />
        <div className="card-overlay" />
        <h3 className="card-title">{name}</h3>
      </div>
      <p className="card-description">{description}</p>
    </div>
  )
}


export default ServiceCard;