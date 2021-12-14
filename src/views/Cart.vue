<template>
  <div class="cart">
    <Nav type="cart" title="Shopping Cart"/>
    <div class="cart-container">
      <CartElement
        v-for="element in cartElementsWithData"
        :key="element.id"
        :id="element.id"
        :count="element.count"
        :name="element.product.name"
        :price="element.product.price"
        :image="element.product.image"/>
    </div>
    <div v-if="cartElements.length <= 0">
      Cart is empty...
    </div>
    <div v-else class="checkout">
      <div class="summary">
        <div class="count">Total {{totalCount}} Items</div>
        <div class="price">USD {{totalPrice}}</div>
      </div>
      <button>Proceed to Checkout</button>
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
        return product ? { product, ...el } : el;
      }).filter((el) => el.product);
    },
    totalCount() {
      let count = 0;
      this.cartElementsWithData.forEach((el) => {
        count += el.count;
      });
      return count;
    },
    totalPrice() {
      let price = 0;
      this.cartElementsWithData.forEach((el) => {
        price += el.product.price * el.count;
      });
      return price;
    },
  },
};
</script>

<style lang="scss" scoped>
  .cart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 140px;
  }
  .checkout {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    .summary {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      padding: 15px;
      .count {
        color: gray;
        font-size: 12px;
      }
      .price {
        font-size: 16px;
      }
    }
    button {
      position: relative;
      display: block;
      box-sizing: border-box;
      padding: 20px 30px;
      margin: 25px;
      width: calc(100% - 50px);
      background: #0ACF83;
      border-radius: 10px;
      border: 0;
      color: white;
      text-align: left;
      font-size: 14px;
      font-weight: bold;
    }
    button::after {
      content: '';
      background-image: url('~@/assets/images/foward.png');
      background-size: contain;
      background-repeat: no-repeat;
      width: 8px;
      height: 14px;
      position: absolute;
      top: calc(50% - 7px);
      right: 30px;
    }
  }
</style>
