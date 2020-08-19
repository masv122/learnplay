import { LocalStorage } from "quasar";

export default ({ store }) => {
	let perfilLocal = LocalStorage.getItem("perfil");
	if (!!perfil) {
		store.commit("perfiles/updatePerfil", perfil);
		let perfil = store.getters["perfiles/buscarPerfil"](perfilLocal.id);
	}
};
