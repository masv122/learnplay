export function updateTab(state, value) {
	state.tab = value;
}
export function updateBanderas(state, value) {
	state.banderas = value;
}
export function updateOpcionMultiple(state, value) {
	state.opcionMultiple = value;
}
export function updateBanderasGeneradas(state, value) {
	state.banderasGeneradas = value;
}
export function updateMultiplesGeneradas(state, value) {
	state.multiplesGeneradas = value;
}
export function insertarBanderasGeneradas(state, value) {
	state.banderasGeneradas.push(value);
}
export function insertarMultiplesGeneradas(state, value) {
	state.multiplesGeneradas.push(value);
}
export function updateTipoPrueba(state, value) {
	state.tipoPrueba = value;
}
export function updatePruebaGenerada(state, value) {
	state.pruebaGenerada = value;
}
export function updateOpciones(state, value) {
	state.opciones = value;
}
export function updateCorrectas(state, value) {
	state.correctas = value;
}
export function updateFalsas(state, value) {
	state.falsas = value;
}
export function updatePasadas(state, value) {
	state.pasadas = value;
}
export function increaseCorrectas(state, value) {
	state.correctas++;
}
export function increaseIncorrectas(state, value) {
	state.incorrectas++;
}
export function increasePasadas(state, value) {
	state.pasadas++;
}
