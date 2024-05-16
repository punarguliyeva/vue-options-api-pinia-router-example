<template>
  <h1>{{ selectedProduct.name }}</h1>
  <h3>{{ selectedProduct.description }}</h3>
  <h4>{{ selectedProduct.price }}</h4>
</template>

<script>
import { useProductStore } from '../stores/products'
export default {
  data: () => ({
    store: useProductStore()
  }),
  computed: {
    selectedProduct() {
      console.log(this.$route.params.id)
      const product = this.store.products.find((p) => p.id ===Number( this.$route.params.id))
      return product
    }
  }
}
</script>

<style lang="scss" scoped></style>
