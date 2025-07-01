import { CartItem } from "@/Stores/types";

const CART_KEY = "my-app-cart";

export default {
  namespaced: true,

  state: (): { items: CartItem[] } => ({
    items: JSON.parse(localStorage.getItem(CART_KEY) || "[]"),
  }),

  getters: {
    cartItems: (state: { items: CartItem[] }) => state.items,

    cartTotalPrice: (state: { items: CartItem[] }) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
  },

  mutations: {
    ADD_TO_CART(state: { items: CartItem[] }, product: CartItem) {
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += product.quantity;
      } else {
        state.items.push({ ...product });
      }
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    },

    REMOVE_FROM_CART(state: { items: CartItem[] }, id: string) {
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    },

    CLEAR_CART(state: { items: CartItem[] }) {
      state.items = [];
      localStorage.removeItem(CART_KEY);
    },
  },

  actions: {
    addToCart({ commit }: any, product: CartItem) {
      if (
        typeof product.price !== "number" ||
        typeof product.quantity !== "number"
      ) {
        throw new Error("Product must have a valid price and quantity");
      }
      commit("ADD_TO_CART", product);
    },

    removeFromCart({ commit }: any, id: string) {
      commit("REMOVE_FROM_CART", id);
    },

    clearCart({ commit }: any) {
      commit("CLEAR_CART");
    },
  },
};
