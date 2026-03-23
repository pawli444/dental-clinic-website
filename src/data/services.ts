import type { Service } from "../types/index"

import services1 from "../assets/services/dental-checkup.jpg"
import services2 from "../assets/services/dentist-jaw.jpg"
import services3 from "../assets/services/service-teeth.jpg"
import services4 from "../assets/services/service-child.jpg"


const services: Service[] = [
  { id: 1, name: "Profilaktyka", description: "Regularne przeglądy, fluoryzacja i profesjonalne czyszczenie zębów.", imageURL: services1 },
  { id: 2, name: "Leczenie zachowawcze", description: "Skuteczne leczenie próchnicy i odbudowa ubytków.", imageURL: services2 },
  { id: 3, name: "Protetyka", description: "Korony, mosty i protezy dopasowane do Twoich potrzeb.", imageURL: services3 },
  { id: 4, name: "Stomatologia dziecięca", description: "Opieka nad najmłodszymi w przyjaznej atmosferze.", imageURL: services4 },
]

export default services