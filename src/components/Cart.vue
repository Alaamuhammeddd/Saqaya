<template>
  <div class="cart-panel" :class="{ 'cart-panel--open': isCartOpen }">
    <div class="cart-panel__header">
      <h3 class="cart-panel__title">Your Cart</h3>
      <button class="cart-close" @click="$emit('close-cart')">✕</button>
    </div>

    <div class="cart-panel__content">
      <div v-if="cartItems.length === 0">Your Cart is empty</div>
      <div
        v-else
        v-for="item in cartItems"
        :key="item.id"
        class="cart-panel__item"
      >
        <div class="cart-panel__item-info">
          <div class="cart-panel__item-header">
            <p>
              <strong>{{ item.title }}</strong>
            </p>
            <button class="remove-item-btn" @click="removeItem(item.id)">
              ✕
            </button>
          </div>
          <p>${{ item.price.toFixed(2) }}</p>
          <!-- <CartQuantity :itemId="item.id" :quantity="item.quantity" /> -->
        </div>
      </div>
    </div>
  </div>
  <div class="cart-holder"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import CartQuantity from "./CartQuantity.vue";
export default defineComponent({
  name: "Cart",
  components: { CartQuantity },
  props: {
    isCartOpen: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["close-cart"],
  computed: {
    ...mapGetters("cart", ["cartItems"]),
  },
  methods: {
    ...mapActions("cart", ["clearCart", "removeFromCart"]),
    removeItem(id: number) {
      this.removeFromCart(id);
    },
  },
});
</script>

<style scoped lang="scss">
.remove-all-btn {
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 8px 12px;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #c9302c;
  }
}
.cart-holder {
  display: flex;
  font-size: 23px; // changed from size, which is invalid
}

.cart__btn--cart {
  background: none;
  border: none;
  font-size: 16px;
  display: flex;

  &:hover {
    cursor: pointer;
    color: grey;
  }
}

.cart-panel {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  background-color: #414756;
  color: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  display: flex;
  flex-direction: column;

  &.cart-panel--open {
    transform: translateX(0);
  }

  .cart-panel__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    background-color: #414756;
  }

  .cart-panel__title {
    font-size: 1.2rem;
  }

  .cart-close {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
  }

  .cart-panel__content {
    padding: 1rem;
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>
