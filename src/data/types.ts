export type FeatureType = {
  icon: string
  name: string
  description: string
}

export type ProductType = {
  id: string
  name: string
  price: string | number
  category: string
  short: string
  description: string
  features: string[]
  dimensions: { [key: string]: string }
  designer: string
  image: string
}
