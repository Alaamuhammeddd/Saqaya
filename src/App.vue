<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Header from "./Shared/Header.vue";
import Footer from "./Shared/Footer.vue";
</script>

<template>
  <Header></Header>
  <main>Body</main>
  <Footer></Footer>
</template>

<style scoped>
main {
  min-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    /* display: flex;
    place-items: flex-start;
    flex-wrap: wrap; */
  }
}
</style>
