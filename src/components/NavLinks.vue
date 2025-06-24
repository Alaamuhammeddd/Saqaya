<!-- src/components/NavLinks.vue -->
<template>
  <ul class="header__nav" :class="{ 'header__nav--open': isOpen }">
    <router-link to="/home" class="header__nav-item header__nav-item--home"
      >Home</router-link
    >
    <router-link
      to="/products"
      class="header__nav-item header__nav-item--products"
      >Products</router-link
    >
    <router-link
      to="/contact-us"
      class="header__nav-item header__nav-item--contact"
      >Contact</router-link
    >
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavLinks",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<style scoped lang="scss">
.header__nav {
  display: flex;
  list-style: none;
  gap: 130px;
  color: aliceblue;
  &--open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2.5rem;
    left: 1rem;
    background-color: white;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    z-index: 10;
  }

  &-item {
    transition: color 0.2s ease;
    text-decoration: none;
    color: white;
    &--home,
    &--products,
    &--contact {
      &:hover {
        color: #1e077d;
        cursor: pointer;
      }
    }
  }
}
</style>
