<template>
  <div class="header">
    <!-- Mobile Menu  -->
    <MobileMenu :is-open="isMenuOpen" @close-menu="toggleMenu" />

    <!-- Logo -->
    <div class="header__logo-wrapper">
      <img class="header__logo" src="../assets/logo.webp" alt="logo" />
    </div>

    <!-- Navigation -->
    <NavLinks :is-open="isMenuOpen" />

    <!-- Action Buttons -->
    <div class="header__icons">
      <div class="header__btn header__btn--search">
        <i style="font-size: 21px" class="fa fa-search"></i>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search Products"
        />
      </div>
      <button class="header__btn header__btn--signup">Sign Up</button>
      <button class="cart__btn--cart" @click="toggleCart">
        <i class="fa fa-shopping-cart" style="font-size: 26px"></i>
      </button>
      <Cart :is-cart-open="isCartOpen" @close-cart="toggleCart" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSearchStore } from "@/Stores/search";
import MobileMenu from "@/components/MobileMenu.vue";
import NavLinks from "@/components/NavLinks.vue";
import Cart from "@/components/Cart.vue";

export default defineComponent({
  name: "header",
  data() {
    return {
      isCartOpen: false,
      isMenuOpen: false,
    };
  },
  computed: {
    searchQuery: {
      get(): string {
        return useSearchStore().query;
      },
      set(value: string) {
        useSearchStore().setQuery(value);
      },
    },
  },
  components: {
    NavLinks,
    MobileMenu,
    Cart,
  },
  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
      console.log("Cart toggled");
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
</script>

<style scoped lang="scss">
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
.header {
  background-color: bisque;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  gap: 10px;
  position: relative;

  &__logo-wrapper {
    .header__logo {
      max-width: 50px;
      max-height: 50px;
      padding-inline-start: 5px;
    }
  }
  &__icons {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  &__btn {
    background: none;
    border: none;
    font-size: 16px;

    &--search {
      display: flex;
      gap: 10px;
    }
    &--signup {
      border: 2px solid black;
      border-radius: 3px;
      padding: 0.3rem 0.6rem;

      &:hover {
        color: grey;
        cursor: pointer;
      }
    }
  }

  &__cart-panel {
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

    &--open {
      transform: translateX(0);
    }

    .header__cart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #ccc;
      background-color: #414756;
    }

    .header__cart-title {
      font-size: 1.2rem;
    }

    .header__cart-close {
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      color: white;
    }

    .header__cart-content {
      padding: 1rem;
      flex-grow: 1;
      overflow-y: auto;
    }
  }
  @media (max-width: 1023px) {
    flex-wrap: wrap;
    padding: 0.5rem;

    &__hamburger {
      display: flex;
    }

    &__nav {
      display: none;

      &--open {
        gap: 10px;
        display: flex;
      }

      &-item {
        margin: 0.5rem 0;
      }
    }
    .header__btn--search {
      display: none;
    }
    &__icons {
      gap: 20px;
    }

    &__btn--signup {
      padding: 0.3rem 0.6rem;
    }

    &__logo {
      max-width: 50px;
      max-height: 50px;
    }
  }
}
</style>
