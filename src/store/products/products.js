export default {
  namespaced: true,
  state: {
    products: [],
  },
  actions: {
    async loadProducts({ state }) {
      console.log(process.env);
      const response = await fetch(`${process.env.VUE_APP_API}/category/2/products`, {
        method: 'GET',
      });
      if (response.ok) {
        state.products = await response.json();
      }
    },
  },
  getters: {
    products: (state) => state.products,
  },
};
