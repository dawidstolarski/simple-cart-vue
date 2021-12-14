import Vue from 'vue';
import Vuex from 'vuex';
import cart from './cart/cart';
import products from './products/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    products,
  },
});
