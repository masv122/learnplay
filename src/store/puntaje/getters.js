export function expMax(state, getters) {
	return Math.ceil(100 * Math.pow(1.15, state.nivel));
}
export function barraExp(state, getters) {
	return Math.ceil((state.exp * 100) / getters.expMax);
}
