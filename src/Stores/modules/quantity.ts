// Stores/modules/quantity.ts

const state = {
  count: 1,
};

const mutations = {
  INCREMENT(state) {
    state.count++;
  },
  DECREMENT(state) {
    if (state.count > 1) state.count--;
  },
};

const getters = {
  count: (state) => state.count,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
