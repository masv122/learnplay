import Perfil from "src/class/perfil";

export function updateGenero(state, value) {
	state.genero = value;
}
export function updateNombre(state, value) {
	state.nombre = value;
}
export function updateApellido(state, value) {
	state.apellido = value;
}
export function updateFecha(state, value) {
	state.fecha = value;
}
export function updateNombrePerfil(state, value) {
	state.perfil.nombre = value;
}
export function updateApellidoPerfil(state, value) {
	state.perfil.apellido = value;
}
export function updateFechaPerfil(state, value) {
	state.perfil.fecha = value;
}
export function updateIdPerfil(state, value) {
	state.perfil.id = value;
}
export function updateRevPerfil(state, value) {
	state.perfil.rev = value;
}
export function updateAttachmentsPerfil(state, value) {
	state.perfil.attachments = value;
}
export function agregarFotosPerfil(state, value) {
	state.perfil.fotos.push(value);
}
export function eliminarFotosPerfil(state, value) {
	state.perfil.fotos.splice(value, 1);
}
export function establecerFotosPerfil(state, value) {
	state.perfil.fotoPerfil = value;
}
export function updateFoto(state, value) {
	state.foto = value;
}
export function updateStep(state, value) {
	state.step = value;
}
export function insertarPerfil(state, value) {
	let perfil = new Perfil(
		value.genero,
		value.nombre,
		value.apellido,
		value.fecha,
		value.fotoPerfil,
		value.fotos,
		value.nivel,
		value.exp,
		value.tiempo,
		value.logros,
		value.estadisticas,
		value.attachments,
		value.id,
		value.rev
	);
	state.perfiles.push(perfil);
}
export function cargarPerfiles(state, perfiles) {
	state.perfiles = perfiles;
}
export function updatePerfil(state, perfil) {
	state.perfil = perfil;
}
export function modificarPerfil(state, value) {
	state.perfil.genero = value.genero;
	state.perfil.nombre = value.nombre;
	state.perfil.apellido = value.apellido;
	state.perfil.fecha = value.fecha;
	state.perfil.fotoPerfil = value.fotoPerfil;
	state.perfil.fotos = value.fotos;
	state.perfil.nivel = value.nivel;
	state.perfil.exp = value.exp;
	state.perfil.tiempo = value.tiempo;
	state.perfil.logros = value.logros;
	state.perfil.estadisticas = value.estadisticas;
	if (!!value.attachments) state.perfil.attachments = value.attachments;
	state.perfil.id = value.id;
	state.perfil.rev = value.rev;
}
export function modificarPerfiles(state, data) {
	state.perfiles[data.indice].genero = data.perfil.genero;
	state.perfiles[data.indice].nombre = data.perfil.nombre;
	state.perfiles[data.indice].apellido = data.perfil.apellido;
	state.perfiles[data.indice].fecha = data.perfil.fecha;
	state.perfiles[data.indice].fotoPerfil = data.perfil.fotoPerfil;
	state.perfiles[data.indice].fotos = data.perfil.fotos;
	state.perfiles[data.indice].nivel = data.perfil.nivel;
	state.perfiles[data.indice].exp = data.perfil.exp;
	state.perfiles[data.indice].tiempo = data.perfil.tiempo;
	state.perfiles[data.indice].logros = data.perfil.logros;
	state.perfiles[data.indice].estadisticas = data.perfil.estadisticas;
	if (!!data.perfil.attachments)
		state.perfiles[data.indice].attachments = data.perfil.attachments;
	state.perfiles[data.indice].id = data.perfil.id;
	state.perfiles[data.indice].rev = data.perfil.rev;
}
export function eliminarPerfil(state, indice) {
	state.perfiles.splice(indice, 1);
}
export function updateExp(state, value) {
	state.perfil.exp = value;
}
export function increaseExp(state, value) {
	state.perfil.exp += value;
}
export function updateNivel(state, value) {
	state.perfil.nivel = value;
}
export function increaseNivel(state) {
	state.perfil.nivel++;
}
export function increaseCorrectasPerfil(state, data) {
	switch (data.dificultad) {
		case 0:
			state.perfil.estadisticas.basico.correctas = data.value;
			break;
		case 1:
			state.perfil.estadisticas.intermedio.correctas = data.value;
			break;
		case 1:
			state.perfil.estadisticas.avanzada.correctas = data.value;
			break;
	}
}
export function increaseIncorrectasPerfil(state, data) {
	switch (data.dificultad) {
		case 0:
			state.perfil.estadisticas.basico.incorrectas = data.value;
			break;
		case 1:
			state.perfil.estadisticas.intermedio.incorrectas = data.value;
			break;
		case 1:
			state.perfil.estadisticas.avanzada.incorrectas = data.value;
			break;
	}
}
