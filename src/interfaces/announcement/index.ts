export interface IAnnoucementRequest {
  name: string
  description: string
  owner_name: string
  km: number
  year: number
  price: number
  createdAt: Date
}

export interface IAnnoucement {
  id: string
  name: string
  description: string
  createdAt: Date
}

export interface IAnnoucementUpdate {
  name?: string
  description?: string
  owner_name?: string
  km?: number
  year?: number
  price?: number
}
