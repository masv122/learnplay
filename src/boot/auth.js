import { LocalStorage } from "quasar";

export default ({ store }) => {
	let perfilLocal = LocalStorage.getItem("perfil");
	if (!!perfilLocal) {
		let perfil = store.getters["perfiles/buscarPerfil"](perfilLocal.id);
		if (!!perfil)
			store.commit("perfiles/updatePerfil", perfil);
	}
};
