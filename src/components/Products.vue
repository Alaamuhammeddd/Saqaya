<script>
import ProductCards from "./ProductCards.vue";

export default {
  components: { ProductCards },
  data() {
    return {
      products: [],
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
};
</script>

<template>
  <div class="products">
    <ProductCards
      v-for="product in products"
      :key="product.id"
      class="products__card"
    >
      <article
        role="group"
        :aria-labelledby="`product-title-${product.id}`"
        :aria-describedby="`product-desc-${product.id}`"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="products__image"
        />
        <h2 :id="`product-title-${product.id}`" class="products__title">
          {{ product.title }}
        </h2>
        <p :id="`product-price-${product.price}`" class="products__price">
          ${{ product.price }}
        </p>
        <p :id="`product-desc-${product.id}`" class="products__desc">
          {{ product.description }}
        </p>
      </article>
    </ProductCards>
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
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .products {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-inline: auto;
      padding: 10px;
      max-width: fit-content;
    }

    &__card {
      transition: transform 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &:hover {
        transform: scale(1.1);
      }
    }

    &__title {
      padding-inline: 4px;
      font-size: 1.2rem;
      font-weight: bold;
      line-height: 1.4rem;
      max-height: calc(1.4rem * 2); // 2 lines
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__image {
      width: 100%;
      height: auto;
    }

    &__price {
      font-weight: 600;
    }

    &__desc {
      // hidden but accessible
      @extend .sr-only;
    }
  }
}
</style>
