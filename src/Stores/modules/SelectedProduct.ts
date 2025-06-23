// store/modules/selectedProduct.ts
import { Module } from "vuex";
import { RootState, SelectedProductState, Product } from "../types";

const selectedProduct: Module<SelectedProductState, RootState> = {
  namespaced: true,
  state: () => ({
    selectedProduct: null,
  }),
  mutations: {
    setSelectedProduct(state, product: Product) {
      state.selectedProduct = product;
    },
    clearSelectedProduct(state) {
      state.selectedProduct = null;
    },
  },
  actions: {
    selectProduct({ commit }, product: Product) {
      commit("setSelectedProduct", product);
    },
    clearProduct({ commit }) {
      commit("clearSelectedProduct");
    },
  },
  getters: {
    selectedProduct: (state) => state.selectedProduct,
  },
};

export default selectedProduct;
