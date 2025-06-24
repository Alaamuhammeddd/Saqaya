import { Module } from "vuex";
import { RootState } from "../types";

export interface SelectedProductState {
  selectedProduct: any | null;
  loading: boolean;
  error: string | null;
}

export const selectedProduct: Module<SelectedProductState, RootState> = {
  namespaced: true,

  state: {
    selectedProduct: null,
    loading: false,
    error: null,
  },

  mutations: {
    SET_SELECTED_PRODUCT(state, product) {
      state.selectedProduct = product;
    },
    SET_LOADING(state, status: boolean) {
      state.loading = status;
    },
    SET_ERROR(state, error: string | null) {
      state.error = error;
    },
  },

  actions: {
    async fetchSelectedProduct({ commit }, id: number) {
      commit("SET_LOADING", true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await res.json();
        commit("SET_SELECTED_PRODUCT", product);
      } catch (error: any) {
        commit("SET_ERROR", error.message || "Error fetching product");
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {
    product: (state) => state.selectedProduct,
    isLoading: (state) => state.loading,
    error: (state) => state.error,
  },
};
