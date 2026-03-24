export interface Service {
  id: number
  name: string
  description: string
  imageURL: string
}

export interface ExtendedService extends Service {
  longDescription: string
  scope: string[]
  why: string
  forWho: string
}