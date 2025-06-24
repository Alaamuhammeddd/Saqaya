// store/modules/cart.ts
const CART_KEY = "my-app-cart";

export default {
  namespaced: true,

  state: () => ({
    items: JSON.parse(localStorage.getItem(CART_KEY) || "[]"),
  }),

  getters: {
    cartItems: (state) => state.items,
  },

  mutations: {
    ADD_TO_CART(state, product) {
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += product.quantity;
      } else {
        state.items.push({ ...product });
      }
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    },
    REMOVE_FROM_CART(state, id) {
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    },
    CLEAR_CART(state) {
      state.items = [];
      localStorage.removeItem(CART_KEY);
    },
  },

  actions: {
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }, id) {
      commit("REMOVE_FROM_CART", id);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    },
  },
};
