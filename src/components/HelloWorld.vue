<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped>
h1 {
  font-size: 2em;
  color: #42b983;
}
</style>
