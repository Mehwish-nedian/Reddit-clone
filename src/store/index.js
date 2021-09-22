import { createStore } from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

const store = createStore({
  state() {
    return {
      rooms: []
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
});

export default store;