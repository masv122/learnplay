import { LocalStorage } from "quasar";
import { db } from "boot/pouchdb/index";
import Perfil from "src/class/perfil";

export default async ({ store }) => {
	let perfilLocal = LocalStorage.getItem("perfil");
	if (!!perfilLocal) {
		const resultado = await db.local.rel.find("perfil", perfilLocal.id);
		let perfil = new Perfil(
			resultado.perfiles[0].genero,
			resultado.perfiles[0].nombre,
			resultado.perfiles[0].apellido,
			resultado.perfiles[0].fecha,
			resultado.perfiles[0].fotoPerfil,
			resultado.perfiles[0].fotos,
			resultado.perfiles[0].nivel,
			resultado.perfiles[0].exp,
			resultado.perfiles[0].tiempo,
			resultado.perfiles[0].logros,
			resultado.perfiles[0].estadisticas,
			resultado.perfiles[0].attachments,
			resultado.perfiles[0].id,
			resultado.perfiles[0].rev
		);
		if (perfil.fotoPerfil.nombre) {
			await perfil.actualizarRutaFoto(perfil.fotoPerfil.nombre);
		}
		if (!!perfil) store.commit("perfiles/updatePerfil", perfil);
	}
};
