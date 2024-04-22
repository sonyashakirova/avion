import { defineStore } from 'pinia'
import type { ProductType } from '@/data/types'

type CartItem = ProductType & { quantity: number }

interface State {
  products: CartItem[]
}

export const useCartStore = defineStore('cart', {
  state: (): State => ({
    products: []
  }),
  getters: {
    totalPrice: (state) => {
      return state.products.reduce((accumulator, item) => {
        if (item.price && item.quantity) {
          return accumulator + Number(item.price) * Number(item.quantity)
        } else {
          return accumulator
        }
      }, 0)
    }
  },
  actions: {
    addProduct(product: ProductType, quantity: number) {
      this.products.push({ ...product, quantity })
    },
    removeProduct(id: string) {
      this.products = this.products.filter((item) => item.id !== id)
    }
  }
})
