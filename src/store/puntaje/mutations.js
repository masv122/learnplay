export function updateCorrectas(state, value) {
	state.correctas = value;
}
export function updateIncorrectas(state, value) {
	state.incorrectas = value;
}
export function updatePasadas(state, value) {
	state.pasadas = value;
}
export function increaseCorrectas(state) {
	state.correctas++;
}
export function increaseIncorrectas(state) {
	state.incorrectas++;
}
export function increasePasadas(state) {
	state.pasadas++;
}
