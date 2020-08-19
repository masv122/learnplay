import { LocalStorage, SessionStorage } from "quasar";

export default ({ store }) => {
	let perfilLocal = LocalStorage.getItem("perfil");
	let perfil = store.getters["perfiles/buscarPerfil"](perfilLocal.id);
	if (!!perfil) store.commit("perfiles/updatePerfil", perfil);
};
