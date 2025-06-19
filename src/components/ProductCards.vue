<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default defineComponent({
  name: "ProductCards",
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  emits: ["add-to-cart"],
});
</script>

<template>
  <div class="card">
    <button
      class="card__cart-button"
      @click="$emit('add-to-cart', product)"
      aria-label="Add to cart"
    >
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    </button>
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
      <p :id="`product-price-${product.id}`" class="products__price">
        ${{ product.price }}
      </p>
      <p :id="`product-desc-${product.id}`" class="products__desc">
        {{ product.description }}
      </p>
    </article>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  border: 2px solid black;
  padding-block: 40px;
  margin: 2rem auto;
  max-width: 300px;
  text-align: center;

  &__cart-button {
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: white;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: grey;
    }
  }
}

.products__image {
  width: 100%;
  height: auto;
}

.products__title {
  padding-inline: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.4rem;
  max-height: calc(1.4rem * 2); // 2 lines
  overflow: hidden;
  text-overflow: ellipsis;
}

.products__price {
  font-weight: 600;
}

.products__desc {
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
</style>
