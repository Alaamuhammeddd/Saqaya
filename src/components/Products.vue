<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";
import ProductCards from "./ProductCards.vue";
import { RootState, Product } from "@/Stores/types";
import SortDropdown from "./SortDropdown.vue";

export default defineComponent({
  name: "ProductsPage",
  components: { ProductCards, SortDropdown },
  data() {
    return {
      selectedCategory: "All",
    };
  },

  computed: {
    products(): Product[] {
      return this.store.getters["product/allProducts"];
    },
    loading(): boolean {
      return this.store.getters["product/isLoading"];
    },
    filteredProducts(): Product[] {
      const query = this.store.getters["search/searchQuery"].toLowerCase();

      return this.products
        .filter((product: Product) =>
          this.selectedCategory === "All"
            ? true
            : product.category.toLowerCase() ===
              this.selectedCategory.toLowerCase()
        )
        .filter((product: Product) =>
          product.title.toLowerCase().includes(query)
        );
    },
  },

  setup() {
    const store = useStore<RootState>();

    onMounted(() => {
      store.dispatch("product/fetchProducts");
    });

    return { store };
  },
});
</script>
<template>
  <div class="productsList">
    <div v-if="loading" class="loading">Loading products...</div>
    <div v-else-if="filteredProducts.length === 0">No products found.</div>
    <div class="products">
      <!-- Product cards -->
      <SortDropdown v-model="selectedCategory" />
      <ProductCards
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        class="products__card"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.sortDropdown {
  margin-bottom: 1rem;

  select {
    padding: 5px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
}
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
