<template>
  <div class="wrapper">
    <NavigationView/>
    <RouterView/>
  </div>
</template>

<script>
import NavigationView from './components/NavigationView.vue'
  export default {
    components:{
      NavigationView
    }
  }
</script>

<style lang="scss" scoped>
.wrapper{
  padding: 16px;
}
</style>