<template>
  <div>
    <div class="title">
      <div class="category">Headphone</div>
      <h1>Product Category</h1>
    </div>
    <div class="products">
      <Product
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :image="product.image"
        :inCart="productInCart(product.id)"
        @clickCart="toggleCart(product.id)"
      />
    </div>
  </div>

</template>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;

  background: #F3F3F3;
  border-radius: 30px 30px 0 0;
  min-height: 797px;
  padding: 24px;
}
.title {
  margin-left: 25px;
  .category {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #000000;
    text-align: left;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0;
    color: #000000;
    text-align: left;
  }
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';
import Product from './Product.vue';

export default {
  name: 'ProductList',
  components: {
    Product,
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'updateCount', 'removeFromCart', 'toggleCart']),
    productInCart(productID) {
      return this.cartElements.some((el) => el.id === productID);
    },
  },
  computed: {
    ...mapGetters('cart', ['cartElements']),
    ...mapGetters('products', ['products']),
  },
};
</script>

<style scoped>

</style>
