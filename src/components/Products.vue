<script lang="ts">
import { defineComponent } from "vue";
import ProductCards from "./ProductCards.vue";

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
    };
  },
  mounted() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data.products;
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  },
});
</script>

<template>
  <div class="products">
    <ProductCards
      v-for="product in products"
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
