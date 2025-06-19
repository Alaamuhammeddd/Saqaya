<script>
export default {
  props: ["content"],
};
</script>
<template>
  <div class="card">
    <slot>
      <h2>404</h2>
      <p>Post Not Found</p>
    </slot>
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
</style>
