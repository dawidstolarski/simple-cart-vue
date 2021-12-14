export default {
  namespaced: true,
  state: {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  },
  mutations: {
    setCart(state, value) {
      state.cart = value;
      localStorage.setItem('cart', JSON.stringify(value));
    },
    pushCart(state, element) {
      state.cart.push(element);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  actions: {
    async addToCart({ state, commit }, elementID) {
      console.log(`element id ${elementID}`);
      const thisElement = state.cart.find((el) => el.id === elementID);

      if (thisElement) {
        if (thisElement.count < process.env.VUE_APP_IN_CART) thisElement.count += 1;
      } else {
        commit('pushCart', { id: elementID, count: 1 });
      }
    },
    async toggleCart({ state, dispatch }, elementID) {
      if (state.cart.some((el) => el.id === elementID)) {
        dispatch('removeFromCart', elementID);
      } else {
        dispatch('addToCart', elementID);
      }
    },
    async updateCount({ state, dispatch, commit }, { id, count }) {
      if (count <= 0) dispatch('removeFromCart', id);
      else if (count <= process.env.VUE_APP_IN_CART) {
        /* const thisElement = state.cart.find((el) => el.id === id);
        thisElement.count = count; */
        commit('setCart', state.cart.map((el) => (el.id === id ? { ...el, count } : el)));
      }
    },
    async removeFromCart({ state, commit }, elementID) {
      commit('setCart', state.cart.filter((el) => el.id !== elementID));
    },
    async clearCart({ commit }) {
      commit('setCart', []);
    },
  },
  getters: {
    cartElements: (state) => state.cart,
  },
};
