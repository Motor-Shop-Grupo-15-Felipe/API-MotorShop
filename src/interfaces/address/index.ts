export interface IAddressUpdate {
  complement?: string
  zipCode?: string
  number?: number
}

export interface IAddress {
  state: string
  city: string
  district: string
  complement: string
  zipCode: string
  number: number
}
