<template>
  <div class="header">
    <!-- Cart Panel -->
    <div
      class="header__cart-panel"
      :class="{ 'header__cart-panel--open': isCartOpen }"
    >
      <div class="header__cart-header">
        <h3 class="header__cart-title">Your Cart</h3>
        <button class="header__cart-close" @click="toggleCart">✕</button>
      </div>
      <div class="header__cart-content">
        <p>Your cart is empty.</p>
      </div>
    </div>

    <!-- Hamburger Menu -->
    <div class="header__hamburger" @click="toggleMenu">
      <i class="fa fa-bars"></i>
    </div>

    <!-- Logo -->
    <div class="header__logo-wrapper">
      <img class="header__logo" src="../assets/logo.webp" alt="logo" />
    </div>

    <!-- Navigation -->
    <ul class="header__nav" :class="{ 'header__nav--open': isMenuOpen }">
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
        >Contact Us</router-link
      >
    </ul>

    <!-- Action Buttons -->
    <div class="header__icons">
      <div class="header__btn header__btn--search">
        <i style="font-size: 21px" class="fa fa-search"></i>
        <input type="search" />
      </div>
      <button class="header__btn header__btn--signup">Sign Up</button>
      <button class="header__btn header__btn--cart" @click="toggleCart">
        <i class="fa fa-shopping-cart" style="font-size: 26px"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isMenuOpen: false,
      isCartOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  background-color: bisque;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  gap: 10px;
  position: relative;

  &__hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  &__logo-wrapper {
    .header__logo {
      max-width: 50px;
      max-height: 50px;
      padding-inline-start: 5px;
    }
  }

  &__nav {
    display: flex;
    list-style: none;
    gap: 130px;

    &--open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 3.5rem;
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
      color: black;

      &--home,
      &--products,
      &--contact {
        &:hover {
          color: grey;
          cursor: pointer;
        }
      }
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

    &--cart {
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
