<template>
  <div id="products">
    <ProductBox v-for="product in store.products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ProductBox from '../components/ProductBox.vue'
import { useProductStore } from '../stores/products'
export default {
  components: {
    ProductBox
  },
  data: () => ({
    store: useProductStore()
  })
}
</script>

<style lang="scss" scoped>
#products {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
