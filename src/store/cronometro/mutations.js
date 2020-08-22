export function increaseSegundos(state) {
	state.segundos++;
}
export function increaseMinutos(state) {
	state.minutos++;
}
export function updateSegundos(state, value) {
	state.segundos = value;
}
export function updateMinutos(state, value) {
	state.minutos = value;
}
export function updateTimer(state, value) {
	state.timer = value;
}
export function clearTimer(state) {
	clearInterval(state.timer);
}
