<template>
  <div>
    <div class="wrapper"></div>
    <div id="nav">
      <router-link to="/"><div class="back"></div></router-link>
      <div class="title">{{title}}</div>
      <router-link v-if='type === "product"' to="/cart">
        <div class="cart">
          <div v-if="cartElements.length > 0" class="count">{{cartElements.length}}</div>
        </div>
      </router-link>
      <div v-if='type === "cart"' @click="clearCart" class="trash"></div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Nav',
  props: {
    type: {
      type: String,
      default: 'product',
    },
    title: {
      type: String,
    },
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'clearCart']),
  },
  computed: {
    ...mapGetters('cart', ['cartElements']),
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 25px 25px 60px;
    height: 1px;
  }
  #nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px 25px 30px;
    box-sizing: border-box;
    background-color: white;
    a {
      text-decoration: none;
      color: black;
    }
    .title {
      font-weight: bold;
      font-size: 16px;
    }
    .back {
      background-image: url('~@/assets/images/back.png');
      background-size: contain;
      width: 6px;
      height: 12px;
    }
    .cart {
      background-image: url('~@/assets/images/cart2.png');
      background-size: contain;
      width: 24px;
      height: 24px;
      position: relative;
      .count {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #0ACF83;
        width: 16px;
        height: 16px;
        font-size: 10px;
        border-radius: 100%;
        text-decoration: none !important;
      }
    }
    .trash {
      background-image: url('~@/assets/images/trash.png');
      background-size: contain;
      width: 24px;
      height: 24px;
    }
  }
</style>
