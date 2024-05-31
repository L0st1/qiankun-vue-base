import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { CHANGE_COUNT } from "@/store/mutation-types";

export default createStore({
  state: {
    persistedData: 0,
  },
  mutations: {
    [CHANGE_COUNT](state, payload) {
      state.persistedData = payload;
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
