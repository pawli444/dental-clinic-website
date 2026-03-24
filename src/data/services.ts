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



export type ExtendedService = Service & {
  longDescription: string
  scope: string[]
  why: string
  forWho: string
}

export const extendedServices: ExtendedService[] = [
  {
    id: 1,
    name: "Profilaktyka",
    description: "Regularne przeglądy, fluoryzacja i profesjonalne czyszczenie zębów.",
    longDescription: "Regularna profilaktyka to podstawa zdrowego i pięknego uśmiechu. Dzięki systematycznym wizytom kontrolnym możliwe jest wykrycie zmian na wczesnym etapie oraz uniknięcie bardziej skomplikowanego leczenia.",
    scope: [
      "przeglądy stomatologiczne",
      "usuwanie kamienia nazębnego (skaling)",
      "piaskowanie i polerowanie zębów",
      "fluoryzacja",
      "instruktaż higieny jamy ustnej"
    ],
    why: "Profilaktyka pozwala zapobiegać próchnicy i chorobom dziąseł oraz utrzymać zdrowy uśmiech przez długie lata.",
    forWho: "Dla dzieci i dorosłych, którzy chcą zadbać o zdrowie swoich zębów.",
    imageURL: services1
  },

  {
    id: 2,
    name: "Leczenie zachowawcze",
    description: "Skuteczne leczenie próchnicy i odbudowa ubytków.",
    longDescription: "Leczenie zachowawcze polega na odbudowie zębów uszkodzonych przez próchnicę oraz przywróceniu ich pełnej funkcji i estetyki.",
    scope: [
      "leczenie próchnicy",
      "odbudowa ubytków",
      "wymiana starych wypełnień",
      "leczenie nadwrażliwości"
    ],
    why: "Szybka reakcja pozwala uniknąć poważniejszych problemów i bardziej zaawansowanego leczenia.",
    forWho: "Dla osób z bólem, nadwrażliwością lub widocznymi ubytkami.",
    imageURL: services2
  },

  {
    id: 3,
    name: "Protetyka",
    description: "Korony, mosty i protezy dopasowane do Twoich potrzeb.",
    longDescription: "Protetyka zajmuje się odbudową brakujących lub uszkodzonych zębów, przywracając komfort i estetykę uśmiechu.",
    scope: [
      "korony protetyczne",
      "mosty",
      "protezy częściowe i całkowite",
      "odbudowy estetyczne"
    ],
    why: "Uzupełnienie braków w uzębieniu poprawia komfort życia i zapobiega dalszym problemom zdrowotnym.",
    forWho: "Dla osób z brakami w uzębieniu lub zębami wymagającymi odbudowy.",
    imageURL: services3
  },

  {
    id: 4,
    name: "Stomatologia dziecięca",
    description: "Opieka nad najmłodszymi w przyjaznej atmosferze.",
    longDescription: "Opieka stomatologiczna nad dziećmi wymaga indywidualnego podejścia i stworzenia komfortowej atmosfery, która buduje pozytywne doświadczenia.",
    scope: [
      "wizyty adaptacyjne",
      "leczenie próchnicy u dzieci",
      "lakowanie",
      "fluoryzacja",
      "edukacja higieny"
    ],
    why: "Wczesna profilaktyka i leczenie pomagają uniknąć problemów w przyszłości.",
    forWho: "Dla dzieci oraz rodziców dbających o zdrowie swoich pociech.",
    imageURL: services4
  },

  {
    id: 5,
    name: "Higienizacja",
    description: "Profesjonalne oczyszczanie i poprawa estetyki uśmiechu.",
    longDescription: "Higienizacja to kompleksowe oczyszczanie zębów, które poprawia ich wygląd oraz wspiera zdrowie jamy ustnej.",
    scope: [
      "skaling",
      "piaskowanie",
      "polerowanie",
      "fluoryzacja"
    ],
    why: "Regularne zabiegi pomagają utrzymać świeży oddech i zapobiegają chorobom dziąseł.",
    forWho: "Dla osób, które chcą zadbać o estetykę i higienę jamy ustnej.",
    imageURL: services1
  },

  {
    id: 6,
    name: "Konsultacje stomatologiczne",
    description: "Indywidualna ocena stanu uzębienia i plan leczenia.",
    longDescription: "Podczas konsultacji stomatologicznej lekarz ocenia stan uzębienia i przedstawia możliwe opcje leczenia dopasowane do potrzeb pacjenta.",
    scope: [
      "diagnostyka",
      "omówienie problemów",
      "plan leczenia",
      "zalecenia higieniczne"
    ],
    why: "Dokładna diagnoza pozwala dobrać najlepsze i najbardziej skuteczne rozwiązania.",
    forWho: "Dla każdego, kto chce sprawdzić stan swojego uzębienia lub zaplanować leczenie.",
    imageURL: services2
  }
];

export default services