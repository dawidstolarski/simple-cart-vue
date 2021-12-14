<template>
  <div id="app">
<!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Montserrat:wght@100&display=swap');
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<script>
export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('products/loadProducts');
  },
};
</script>
