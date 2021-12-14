<template>
  <div class="cart">
    <Nav type="cart" title="Shopping Cart"/>
    <CartElement
      v-for="element in cartElementsWithData"
      :key="element.id"
      :id="element.id"
      :count="element.count"
      :name="element.product.name"
      :price="element.product.price"
      :image="element.product.image"/>
    <div v-if="cartElements.length <= 0">
      Cart is empty...
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Nav from '@/components/Nav.vue';
import CartElement from '@/components/CartElement.vue';

export default {
  name: 'Cart',
  components: {
    Nav,
    CartElement,
  },
  computed: {
    ...mapGetters('cart', ['cartElements']),
    ...mapGetters('products', ['products']),
    cartElementsWithData() {
      return this.cartElements.map((el) => {
        const product = this.products.find((p) => p.id === el.id);
        return { product, ...el };
      });
    },
  },
};
</script>

<style scoped>

</style>
