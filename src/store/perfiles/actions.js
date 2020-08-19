import { db } from "boot/pouchdb/index";

export async function guardarPerfil({ commit, getters }, perfil) {
	const indice = getters.buscarIndice(perfil.id);
	if (indice >= 0) {
		const resultado = { indice, perfil };
		commit("modificarPerfil", resultado);
	} else {
		commit("insertarPerfil", perfil);
	}
}
export async function eliminarPerfil({ commit, getters }, id) {
	const indice = getters.buscarIndice(id);
	if (indice >= 0) {
		commit("eliminarPerfil", indice);
	} else {
		alert("no se encuentra el indice " + id);
	}
}
export async function cargarPerfiles({ commit }) {
	try {
		const resultado = await db.local.rel.find("perfil");
		if (!!resultado) {
			commit("cargarPerfiles", resultado.perfiles);
		}
	} catch (error) {
		alert("error al cargar los perfiles 101: " + error);
	}
}
export async function buscarPerfil({ commit }, id) {
	try {
		const resultado = await db.local.rel.find("perfil", id);
		if (!!resultado.perfiles[0]) {
			commit("updatePerfil", resultado.perfiles[0]);
			return resultado.perfiles[0];
		} else return false;
	} catch (error) {
		alert("error al buscar el perfil 101: " + error);
		return false;
	}
}
