import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
//@ts-expect-error
import { CHANGE_COUNT } from "./mutation-types.ts";

export default createStore({
  state: {
    commonData: 0,
  },
  mutations: {
    [CHANGE_COUNT](state, { data }) {
      state.commonData = data;
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
