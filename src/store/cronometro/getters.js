export function cronometro(state) {
	let min, seg;
	if (state.minutos < 10) {
		min = "0" + state.minutos;
	} else {
		min = state.minutos;
	}
	if (state.segundos < 10) {
		seg = "0" + state.segundos;
	} else {
		seg = state.segundos;
	}
	return min + ":" + seg;
}
export function tiempoTranscurido(state) {
	return state.minutos * 60 + state.segundos;
}
