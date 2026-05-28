export type Country = {
    flags: {
      png: string
    }
    name: string
    alpha3Code: string
    capital: [string]
  };

export interface CountryInfo {
    flags: {
      png: string
    }
    name: {
      common: string
    }
    region: string
    population: number
    area: number
    borders: string
    capital: string
  }