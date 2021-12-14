<template>
  <div class="wrapper">
    <div class="image" :style="{backgroundImage: `url('${image}')`}"></div>
    <div class="text">
      <div class="name">{{name}}</div>
      <div class="price">USD {{price}}</div>
    </div>
    <div class="buttons">
      <div class="star">4.8</div>
      <div @click="clickCart" class="cart" :class="{'in-cart': inCart}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    image: {
      type: String,
    },
    inCart: {
      type: Boolean,
    },
  },

  methods: {
    clickCart() {
      this.$emit('clickCart');
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: #FFFFFF;
    box-shadow: 0 4px 30px rgba(104, 117, 130, 0.05);
    border-radius: 15px;
    width: 155px;
    height: 241px;
    max-width: 40%;
    padding: 15px 10px;
  }
  .image {
    width: 125px;
    height: 125px;
    background-size: cover;
  }
  .text {
    padding-top: 25px;
    text-align: left;
    .name {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.2px;
      color: #000000;
    }
    .price {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.2px;
      color: #000000;
    }
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    align-items: center;
    .star {
      background-image: url('~@/assets/images/star.png');
      background-size: contain;
      background-repeat: no-repeat;
      padding-left: 15px;
      width: 11px;
      height: 11px;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: 0.2px;
    }
    .cart {
      background-image: url('~@/assets/images/cart.png');
      background-size: contain;
      width: 18px;
      height: 18px;
    }
    .in-cart {
      background-image: url('~@/assets/images/cart-green.png');
    }
  }
</style>
