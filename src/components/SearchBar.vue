<!-- src/components/SearchBar.vue -->
<template>
  <div class="search-bar">
    <i
      class="fa fa-search search-bar__icon"
      @click="toggleMobileSearch"
      style="font-size: 24px"
    ></i>

    <div
      class="search-bar__mobileSearch"
      v-show="isMobileSearchVisible || !isMobile"
    >
      <input
        type="text"
        placeholder="Search Products"
        v-model="searchQuery"
        class="search-bar__input"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { mapGetters } from "vuex";
import { RootState } from "@/Stores/types";

export default defineComponent({
  name: "SearchBar",
  data() {
    return {
      isMobileSearchVisible: false,
      isMobile: false,
    };
  },
  methods: {
    toggleMobileSearch() {
      this.isMobileSearchVisible = !this.isMobileSearchVisible;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 1023;
      if (!this.isMobile) {
        this.isMobileSearchVisible = false;
      }
    },
  },

  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },

  computed: {
    ...mapGetters("search", {
      searchQueryGetter: "searchQuery",
    }),

    searchQuery: {
      get(): string {
        return this.searchQueryGetter;
      },
      set(value: string) {
        this.$store.dispatch("search/setSearchQuery", value);
      },
    },
  },
});
</script>
<style scoped lang="scss">
.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;

  &__icon {
    font-size: 21px;
    color: #333;
    cursor: default;

    &.clickable {
      cursor: pointer;
    }
  }

  &__input {
    border: 1px solid #ccc;
    padding: 5px;
    font-size: 14px;
    border-radius: 3px;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    &__mobileSearch {
      position: absolute;
      top: 2.5rem;
      left: 0.25rem;
      width: fit-content;
      background-color: white;
      padding: 10px;
      z-index: 999;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
