<template>
  <div class="wrapper">
    <div class="image-container">
      <div class="image" :style="{backgroundImage: `url('${image}')`}"></div>
    </div>
    <div class="text">
      <div>
        <div class="name">{{name}}</div>
        <div class="price">USD {{price}}</div>
      </div>
      <div>
        <button @click="updateCount({id, count: count-1})">-</button>
        <span class="counter">{{count}}</span>
        <button @click="updateCount({id, count: count+1})">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'product',
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    image: {
      type: String,
    },
    count: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    ...mapActions('cart', ['addToCart', 'updateCount', 'removeFromCart', 'toggleCart']),
    clickCart() {
      this.$emit('clickCart');
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 25px;
  width: 326px;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 87px;
  background: #F6F6F6;
  border-radius: 10px;
  margin-right: 20px;
}
.image {
  background-size: cover;
  width: 67px;
  height: 67px;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  text-align: left;
  height: 87px;
  .name {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
    margin-bottom: 5px;
  }
  .price {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #000000;
  }
  button {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #BABABA;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .counter {
    margin-left: 25px;
    margin-right: 25px;
  }
}
</style>
