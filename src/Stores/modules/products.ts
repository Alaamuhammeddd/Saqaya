// src/Stores/modules/useProductStore.ts
import { defineStore } from "pinia";
import { Product } from "../types";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const useProductStore = defineStore("product", {
  state: (): ProductState => ({
    products: [],
    loading: false,
    error: null,
  }),

  getters: {
    allProducts: (state) => state.products,
    isLoading: (state) => state.loading,
    hasError: (state) => !!state.error,
  },

  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error("Fetch products error:", error);
        this.error = "Failed to fetch products.";
      } finally {
        this.loading = false;
      }
    },
  },
});
