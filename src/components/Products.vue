<script lang="ts">
import { defineComponent } from "vue";
import ProductCards from "./ProductCards.vue";
import { useSearchStore } from "@/Stores/search";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
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
      const query = useSearchStore().query.toLowerCase();
      return this.products.filter((p) => p.title.toLowerCase().includes(query));
    },
  },
  mounted() {
    this.loading = true;
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data.products;
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
});
</script>

<template>
  <div class="products">
    <div v-if="loading" class="loading">Loading products...</div>
    <div v-else-if="filteredProducts.length === 0">
      <p>No products found.</p>
    </div>
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
