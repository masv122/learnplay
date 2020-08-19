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
export function updateFoto(state, value) {
	state.foto = value;
}
export function updateStep(state, value) {
	state.step = value;
}
export function insertarPerfil(state, perfil) {
	state.perfiles.push(perfil);
}
export function cargarPerfiles(state, perfiles) {
	state.perfiles = perfiles;
}
export function updatePerfil(state, perfil) {
	state.perfil = perfil;
}
export function modificarPerfil(state, data) {
	state.perfiles[data.indice].nombre = data.objeto.nombre;
	state.perfiles[data.indice].apellido = data.objeto.apellido;
	state.perfiles[data.indice].fecha = data.objeto.fecha;
	state.perfiles[data.indice].foto = data.objeto.foto;
	state.perfiles[data.indice].nivel = data.objeto.nivel;
	state.perfiles[data.indice].exp = data.objeto.exp;
	state.perfiles[data.indice].genero = data.objeto.genero;
	state.perfiles[data.indice].rev = data.objeto.rev;
}
export function eliminarPerfil(state, indice) {
	state.perfiles.splice(indice, 1);
}
