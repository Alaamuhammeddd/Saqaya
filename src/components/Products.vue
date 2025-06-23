<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ProductCards from "./ProductCards.vue";
import { RootState } from "@/Stores/types";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default defineComponent({
  name: "ProductsPage",
  components: {
    ProductCards,
  },
  data() {
    return {
      products: [] as Product[],
      loading: true,
    };
  },
  computed: {
    filteredProducts(): Product[] {
      const query = this.store.getters["search/searchQuery"].toLowerCase();
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
    },
  },
  async mounted() {
    this.loading = true;
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      this.products = data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      this.loading = false;
    }
  },
  setup() {
    const store = useStore<RootState>();
    return { store };
  },
});
</script>

<template>
  <div class="sortDropdown"></div>
  <div class="products">
    <div v-if="loading" class="loading">Loading products...</div>
    <div v-else-if="filteredProducts.length === 0">No products found.</div>
    <ProductCards
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
      class="products__card"
    />
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 1023px) {
  .products {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (min-width: 1024px) {
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-inline: auto;
    padding: 10px;
    max-width: fit-content;
    &__card {
      transition: transform 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
