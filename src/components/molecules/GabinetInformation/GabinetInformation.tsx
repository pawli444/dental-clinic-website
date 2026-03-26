
import "./GabinetInformation.css"

    const phone = import.meta.env.VITE_CLINIC_PHONE || ''
    const address = import.meta.env.VITE_CLINIC_ADDRESS || ''


  interface Props {
  className?: string
  }

function GabinetInformation({ className = '' }: Props){
    return(
                <ul className={`info-box ${className}`.trim()}>
                  <li>
                    <h3>📍 Adres</h3>
                    <p>{address}</p>
                  </li>
                  <li>
                    <h3>📞 Telefon</h3>
                    <p>{phone}</p>
                  </li>
                  <li>
                    <h3>🕐 Godziny otwarcia</h3>
                    <p> Poniedziałek - Czwartek: 12:00 - 18:00</p>
                  </li>
                </ul>
    )
}

export default GabinetInformation