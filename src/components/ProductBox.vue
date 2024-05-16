<template>

  <RouterLink :to="`/products/${product.id}`" class="product">
  {{ product.name }}
  </RouterLink>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style lang="scss" scoped>
.product{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
  width: 150px;
  aspect-ratio: 1/1;
  border: 1px solid #f96d00;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  font-size:large;
  font-weight: bold;
  color: #f96d00;
  &:hover{
    background-color: #ffa256;
    color: white
  }
}
</style>
