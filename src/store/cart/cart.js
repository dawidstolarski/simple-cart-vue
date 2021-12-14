export default {
  namespaced: true,
  state: {
    cart: [],
  },
  actions: {
    async addToCart({ state }, elementID) {
      console.log(`element id ${elementID}`);
      const thisElement = state.cart.find((el) => el.id === elementID);

      if (thisElement) {
        if (thisElement.count < process.env.VUE_APP_IN_CART) thisElement.count += 1;
      } else {
        state.cart.push({ id: elementID, count: 1 });
      }

      console.log(state.cart);
    },
    async toggleCart({ state, dispatch }, elementID) {
      if (state.cart.some((el) => el.id === elementID)) {
        dispatch('removeFromCart', elementID);
      } else {
        dispatch('addToCart', elementID);
      }
    },
    async updateCount({ state, dispatch }, { id, count }) {
      if (count <= 0) dispatch('removeFromCart', id);
      else if (count <= process.env.VUE_APP_IN_CART) {
        const thisElement = state.cart.find((el) => el.id === id);
        thisElement.count = count;
      }
    },
    async removeFromCart({ state }, elementID) {
      state.cart = state.cart.filter((el) => el.id !== elementID);
    },
    async clearCart({ state }) {
      state.cart = [];
    },
  },
  getters: {
    cartElements: (state) => state.cart,
  },
};
