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
	state.perfiles[data.indice].nombre = data.perfil.nombre;
	state.perfiles[data.indice].apellido = data.perfil.apellido;
	state.perfiles[data.indice].fecha = data.perfil.fecha;
	state.perfiles[data.indice].foto = data.perfil.foto;
	state.perfiles[data.indice].nivel = data.perfil.nivel;
	state.perfiles[data.indice].exp = data.perfil.exp;
	state.perfiles[data.indice].genero = data.perfil.genero;
	state.perfiles[data.indice].img = data.perfil.img;
	state.perfiles[data.indice].foto = data.perfil.foto;
	state.perfiles[data.indice].rev = data.perfil.rev;
}
export function eliminarPerfil(state, indice) {
	state.perfiles.splice(indice, 1);
}
export function increaseExp(state, value) {
	state.perfil.exp += value;
}
export function updateExp(state, value) {
	state.perfil.exp = value;
}
export function updateNivel(state) {
	state.perfil.nivel++;
}
export function increaseCorrectasPerfil(state, dificultad) {
	switch (dificultad) {
		case 0:
			state.perfil.estadisticas.basico.correctas++;
			break;
		case 1:
			state.perfil.estadisticas.intermedio.correctas++;
			break;
		case 1:
			state.perfil.estadisticas.avanzada.correctas++;
			break;
	}
}
export function increaseIncorrectasPerfil(state, dificultad) {
	switch (dificultad) {
		case 0:
			state.perfil.estadisticas.basico.incorrectas++;
			break;
		case 1:
			state.perfil.estadisticas.intermedio.incorrectas++;
			break;
		case 1:
			state.perfil.estadisticas.avanzada.incorrectas++;
			break;
	}
}
export function increasePasadasPerfil(state, dificultad) {
	switch (dificultad) {
		case 0:
			state.perfil.estadisticas.basico.pasadas++;
			break;
		case 1:
			state.perfil.estadisticas.intermedio.pasadas++;
			break;
		case 1:
			state.perfil.estadisticas.avanzada.pasadas++;
			break;
	}
}
