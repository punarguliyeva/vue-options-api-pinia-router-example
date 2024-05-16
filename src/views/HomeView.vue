<template>
  <div>
    <h2>Enter your new product</h2>
    <div class="wrapper">
      <input v-model="product" type="text" placeholder="new product..." class="input-btn" />
      <button @click="handleAddProduct" class="btn">Add</button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '../stores/products'
export default {
  data: () => ({
    store: useProductStore(),
    product: ''
  }),
  methods: {
    handleAddProduct() {
      this.store.addProduct(this.product)
      this.product = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 12px;
  .input-btn{
    padding: 4px;
    border-radius: 4px;
    border: 2px solid lightblue;
  }
  .btn{
    background-color: rgb(139, 241, 240);
    border: none;
    padding: 8px;
    border-radius: 4px;
  }
}
</style>
