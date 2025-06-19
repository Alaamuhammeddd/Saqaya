<template>
  <div class="cart-panel" :class="{ 'cart-panel--open': isCartOpen }">
    <div class="cart-panel__header">
      <h3 class="cart-panel__title">Your Cart</h3>
      <button class="cart-close" @click="$emit('close-cart')">✕</button>
    </div>
    <div class="cart-panel__content">
      <p>Your cart is empty.</p>
    </div>
  </div>
  <div class="cart-holder"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cart",
  props: {
    isCartOpen: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["close-cart"],
});
</script>

<style scoped lang="scss">
.cart-holder {
  display: flex;
  font-size: 23px; // changed from `size`, which is invalid
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

// &__cart-panel {
//   position: fixed;
//   top: 0;
//   right: 0;
//   height: 100%;
//   width: 300px;
//   background-color: #414756;
//   color: #fff;
//   box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
//   transform: translateX(100%);
//   transition: transform 0.3s ease-in-out;
//   z-index: 999;
//   display: flex;
//   flex-direction: column;

//   &--open {
//     transform: translateX(0);
//   }

//   .header__cart-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem;
//     border-bottom: 1px solid #ccc;
//     background-color: #414756;
//   }

//   .header__cart-title {
//     font-size: 1.2rem;
//   }

//   .header__cart-close {
//     background: none;
//     border: none;
//     font-size: 1.2rem;
//     cursor: pointer;
//     color: white;
//   }

//   .header__cart-content {
//     padding: 1rem;
//     flex-grow: 1;
//     overflow-y: auto;
//   }
// }
</style>
