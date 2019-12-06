import Vue from "vue";
import Vuex from "vuex";
import { Module, VuexModule } from "vuex-module-decorators";
import { app } from "electron";

Vue.use(Vuex);
// console.log(app);

@Module
export default class State extends VuexModule {
	config = JSON.parse(window.localStorage.getItem(`${app.getName()}.config`) || '[]')
}

// export default new Vuex.Store({
//   state: {
//     config: JSON.parse(window.localStorage.getItem(`${app.getName()}.config`) || '[]'),
//   },
//   getters: {
//     getConfig(key) {
//       return state.config[key];
//     }
//   },
//   mutations: {
//     setConfig(state, key, value) {
//     	state.config[key] = value;
//     	window.localStorage.setItem(`${app.getName()}.config`, state.config);
//     },
//   },
//   actions: {},
//   modules: {}
// });
