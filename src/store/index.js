import Vue from "vue";
import Vuex from "vuex";

import global from "./global";
import cronometro from "./cronometro";
import play from "./play";
import puntaje from "./puntaje";
import perfiles from "./perfiles";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		global,
		cronometro,
		play,
		puntaje,
		perfiles,
	},
	strict: process.env.DEV,
});
