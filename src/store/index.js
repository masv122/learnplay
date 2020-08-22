import Vue from "vue";
import Vuex from "vuex";

import global from "./global";
import cronometro from "./cronometro";
import play from "./play";
import puntaje from "./puntaje";
import perfiles from "./perfiles";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
	const Store = new Vuex.Store({
		modules: {
			global,
			cronometro,
			play,
			puntaje,
			perfiles,
		},

		// enable strict mode (adds overhead!)
		// for dev mode only
		strict: process.env.DEV,
	});

	return Store;
}
