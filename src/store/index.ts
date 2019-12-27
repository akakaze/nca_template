import Vue from "vue";
import Vuex from "vuex";
import Configure from "./modules/Configure";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    Configure
  }
});

export default store;
