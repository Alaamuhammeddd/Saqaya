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
});
</script>

<template>
  <div class="card">
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
  border: 2px solid black;
  padding-block: 40px;
  margin: 2rem auto;
  max-width: 300px;
  text-align: center;
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
