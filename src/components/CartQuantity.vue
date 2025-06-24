<!-- components/QuantityCounter.vue -->
<template>
  <div class="quantity-counter">
    <button @click="decrement">-</button>
    <span>{{ quantity }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "QuantityCounter",
  computed: {
    ...mapGetters("quantity", ["count"]),
    quantity(): number {
      return this.count;
    },
  },
  methods: {
    ...mapMutations("quantity", {
      increment: "INCREMENT",
      decrement: "DECREMENT",
    }),
  },
});
</script>

<style scoped>
.quantity-counter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-counter button {
  padding: 6px 12px;
  font-size: 16px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
