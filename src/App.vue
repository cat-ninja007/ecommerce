<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <MenClothing /> -->
    <ProductLayout />

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MenClothing from './components/MenClothing.vue';
import ProductLayout from './components/ProductLayout.vue';


export default {
  name: 'App',
  components: {
    ProductLayout
    // MenClothing
    // HelloWorld
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
