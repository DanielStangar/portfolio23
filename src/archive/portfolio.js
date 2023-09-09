
import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio',{
  state: () => ({
    A18title: 'Small taxi business 2',
  }),

  actions: {
    openA18website() {
      console.log('a18website to open')
    }
  }

})
