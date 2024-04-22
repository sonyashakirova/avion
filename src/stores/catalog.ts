import { defineStore } from 'pinia'
import stubs from '@/data/products.json'
import type { ProductType } from '@/data/types'

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

interface State {
  productList: ProductType[]
  product: ProductType | null
  isLoading: boolean
  filters: { [key: string]: string[] }
}

export const useCatalogStore = defineStore('catalog', {
  state: (): State => ({
    productList: [],
    product: null,
    isLoading: true,
    filters: {
      category: [],
      price: [],
      designer: []
    }
  }),
  getters: {
    filteredProducts: ({ productList, filters }): ProductType[] => {
      return productList.filter((item: any) => {
        const byCategory = !filters.category.length || filters.category.includes(item.category)
        const byPrice = !filters.price.length
        const byDesigner = !filters.designer.length || filters.designer.includes(item.designer)

        return byCategory && byPrice && byDesigner
      })
    }
  },
  actions: {
    async getProductList() {
      this.isLoading = true
      await sleep(500)
      this.productList = stubs ?? []
      this.isLoading = false
    },
    async getProduct(id: unknown) {
      if (typeof id === 'string') {
        this.isLoading = true
        await sleep(500)
        const result = stubs.find((item) => item.id === id)
        this.product = result ?? null
        this.isLoading = false
      }
    }
  }
})
