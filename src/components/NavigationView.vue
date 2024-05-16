<template>
  <div class="nav-bar">
    <RouterLink to="/" active-class="active">Home</RouterLink>
    <RouterLink to="/easterEgg" active-class="active">Easter Egg</RouterLink>
    <RouterLink to="/products" active-class="active">Products</RouterLink>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  gap: 24px;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 24px;
  background-color: #05355a;
  font-size: 20px;
    a {
    text-decoration: none;
    color: white;
    letter-spacing: 2px;
    &:hover {
      color: #f96770;
    }
  }
  .active {
    font-weight: bold;
  }
}
</style>