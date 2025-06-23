import { Module } from "vuex";
import { RootState } from "../types";

export interface SearchState {
  searchQuery: string;
}

const search: Module<SearchState, RootState> = {
  namespaced: true,
  state: {
    searchQuery: "",
  },
  mutations: {
    SET_SEARCH_QUERY(state, newQuery: string) {
      state.searchQuery = newQuery;
    },
  },
  actions: {
    setSearchQuery({ commit }, newQuery: string) {
      commit("SET_SEARCH_QUERY", newQuery);
    },
  },
  getters: {
    searchQuery: (state) => state.searchQuery,
  },
};

export default search;
