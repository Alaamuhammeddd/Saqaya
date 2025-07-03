import { Module } from "vuex";

import { Product } from "../types";
export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const product: Module<ProductState, any> = {
  namespaced: true,

  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  mutations: {
    SET_PRODUCTS(state, products: Product[]) {
      state.products = products;
    },
    SET_LOADING(state, status: boolean) {
      state.loading = status;
    },
    SET_ERROR(state, error: string | null) {
      state.error = error;
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        commit("SET_PRODUCTS", data);
      } catch (error) {
        console.error("Fetch products error:", error);
        commit("SET_ERROR", "Failed to fetch products.");
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {
    allProducts: (state) => state.products,
    isLoading: (state) => state.loading,
    hasError: (state) => !!state.error,
  },
};

export default product;
