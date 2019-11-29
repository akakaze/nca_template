import Vue from "vue";
import Vuex from "vuex";
import { app } from 'electron';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		config: JSON.parse(window.localStorage.getItem(`${app.getName()}.config`) || '[]'),
	},
	mutations: {
		getConfig(key) {
			return this.state.config[key];
		},
		setConfig(key, value) {
			this.state.config[key] = value;
			window.localStorage.setItem(`${app.getName()}.config`, this.state.config);
		},
	},
	actions: {},
	modules: {}
});
