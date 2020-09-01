export function updateCorrectas(state, value) {
	state.correctas = value;
}
export function updateIncorrectas(state, value) {
	state.incorrectas = value;
}
export function updateExp(state, value) {
	state.exp = value;
}
export function updateNivel(state, value) {
	state.nivel = value;
}
export function increaseCorrectas(state) {
	state.correctas++;
}
export function increaseIncorrectas(state) {
	state.incorrectas++;
}
export function increaseNivel(state) {
	state.nivel++;
}
export function increaseExp(state, value) {
	state.exp += value;
}
