import { db } from "boot/pouchdb/index";
import Perfil from "src/class/perfil";

export async function guardarPerfil({ commit, getters, state }, perfil) {
	if (!!state.perfil && perfil.id === state.perfil.id)
		commit("modificarPerfil", perfil);
	const indice = getters.buscarIndice(perfil.id);
	if (indice >= 0) {
		const resultado = { indice, perfil };
		commit("modificarPerfiles", resultado);
	} else commit("insertarPerfil", perfil);
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
		let perfiles = [];
		for (var i = 0; i < resultado.perfiles.length; i++) {
			let perfil = new Perfil(
				resultado.perfiles[i].genero,
				resultado.perfiles[i].nombre,
				resultado.perfiles[i].apellido,
				resultado.perfiles[i].fecha,
				resultado.perfiles[i].fotoPerfil,
				resultado.perfiles[i].fotos,
				resultado.perfiles[i].nivel,
				resultado.perfiles[i].exp,
				resultado.perfiles[i].tiempo,
				resultado.perfiles[i].logros,
				resultado.perfiles[i].estadisticas,
				resultado.perfiles[i].attachments,
				resultado.perfiles[i].id,
				resultado.perfiles[i].rev
			);
			if (perfil.fotoPerfil.nombre) {
				await perfil.actualizarRutaFoto(perfil.fotoPerfil.nombre);
			}
			perfiles.push(perfil);
		}
		if (!!resultado) {
			commit("cargarPerfiles", perfiles);
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
