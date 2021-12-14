<template>
  <div class="home">
    <Nav/>
    <ProductList/>
  </div>
</template>

<style scoped>
</style>

<script>
import ProductList from '@/components/ProductList.vue';
import Nav from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    ProductList,
    Nav,
  },
};
</script>
