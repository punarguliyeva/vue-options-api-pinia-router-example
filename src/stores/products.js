import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [
      {
        id: 0,
        name: 'Kindle Paperwhite Signature Edition (32 GB)',
        description:
          'Enjoy more features with the Signature Edition. - Everything the new Kindle Paperwhite has to offer, plus wireless charging, auto-adjusting backlight and 32GB of storage.',
        price: '$190'
      },
      {
        id: 1,
        name: 'Canon PowerShot SX70 HS',
        description:
          'Always connected: Turn your Canon camera into a webcam with the help of the Canon EOS Webcam Utility and convince during video conferences or live streams with professional image quality. Free software is available on the Canon website',
        price: '$600'
      }
    ]
  }),
  actions: {
    addProduct(product) {
      this.products.push({
        id: this.products.length,
        name: product
      })
    }
  }
})
