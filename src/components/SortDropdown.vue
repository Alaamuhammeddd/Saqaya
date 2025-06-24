<template>
  <div class="sort-dropdown">
    <select v-model="localSelected" @change="emitChange">
      <option>All</option>
      <option>Men's clothing</option>
      <option>Women's clothing</option>
      <option>Jewelery</option>
      <option>Electronics</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SortDropdown",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const localSelected = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (val) => {
        localSelected.value = val;
      }
    );

    const emitChange = () => {
      emit("update:modelValue", localSelected.value);
    };

    return { localSelected, emitChange };
  },
});
</script>

<style scoped lang="scss">
@media (max-width: 1023px) {
  .sort-dropdown {
    padding-block-start: 20px;
    padding-inline-start: 30px;
    select {
      padding: 5px;
      font-size: 14px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
  }
}
@media (min-width: 1024px) {
  .sort-dropdown {
    margin-bottom: 1rem;
    grid-column-start: 4;
    justify-self: end;
    padding-block-start: 20px;

    select {
      padding: 5px;
      font-size: 14px;
      border-radius: 4px;
      border: 1px solid #ccc;
    }
  }
}
</style>
