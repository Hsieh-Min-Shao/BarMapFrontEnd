// src/stores/windowStore.js
import { defineStore } from 'pinia'

export const useWindowStore = defineStore('window', {
  state: () => ({
    width: window.innerWidth,
    height: window.innerHeight
  }),
  actions: {
    setSize(width, height) {
      this.width = width
      this.height = height
    },
    updateSize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  }
})
