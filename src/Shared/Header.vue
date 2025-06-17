<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="header">
    <div class="hamburger" @click="toggleMenu">
      <i class="fa fa-bars"></i>
    </div>
    <div class="image-holder">
      <img class="image-holder__logo" src="../assets/logo.webp" alt="logo" />
    </div>

    <ul class="nav-links" :class="{ open: isMenuOpen }">
      <li class="nav-links__home">Home</li>
      <li class="nav-links__products">Products</li>
      <li class="nav-links__contactUs">Contact Us</li>
    </ul>
    <div class="icons-holder">
      <button class="icons-holder__signUp-btn">Sign Up</button>
      <button class="icons-holder__cart-btn" style="font-size: 24px">
        <i class="fa fa-shopping-cart"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1023px) {
  .header {
    background-color: bisque;
    display: flex;
    justify-content: space-around;
  }
  .image-holder__logo {
    max-width: 50px;
    max-height: 50px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    list-style-type: none;
  }
  .hamburger {
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 24px;
    justify-content: center;
  }
  .nav-links {
    display: none;
    position: absolute;
    left: 1rem;
    top: 3rem;
    background-color: white;
  }
  .nav-links.open {
    display: flex;
  }
  .icons-holder {
    display: flex;
    gap: 20px;
  }
  .icons-holder__signUp-btn {
    border: 2px solid black;
    border-radius: 3px;
    background: none;
  }
  .icons-holder__cart-btn {
    background: none;
    border: none;
    size: 40px;
  }
}
@media (min-width: 1024px) {
  .hamburger {
    display: none;
  }
  .header {
    background-color: bisque;
    line-height: 1.5;
    display: flex;
    justify-content: space-around;
    gap: 5px;
  }
  .image-holder__logo {
    padding-inline-start: 5px;
    max-width: 50px;
    max-height: 50px;
  }
  .icons-holder {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icons-holder__cart-btn {
    background: none;
    border: none;
    size: 40px;
  }

  .icons-holder__cart-btn:hover {
    cursor: pointer;
    color: grey;
  }
  .icons-holder__signUp-btn {
    border: 2px solid black;
    border-radius: 3px;
    background: none;
  }
  .icons-holder__signUp-btn:hover,
  .nav-links__home:hover,
  .nav-links__products:hover,
  .nav-links__contactUs:hover {
    cursor: pointer;
    color: grey;
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 130px;
  }
}
</style>
