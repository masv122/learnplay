export const buscarIndice = (state) => (id) => {
	return state.perfiles.findIndex((e) => e.id === id);
};
export const buscarPerfil = (state) => (id) => {
	return state.perfiles.find((e) => e.id === id);
};
export function nivel(state) {
	return !!state.perfil
		? state.perfil.exp < 100
			? 0
			: Math.ceil(
					(Math.log(state.perfil.exp) - Math.log(100)) /
						Math.log(1.15)
			  )
		: 0;
}
export function calculoExpMax(state, getters) {
	return !!state.perfil
		? Math.ceil(100 * Math.pow(1.15, state.perfil.nivel))
		: 0;
}
export function calculoBarraExp(state, getters) {
	return !!state.perfil
		? Math.ceil((state.perfil.exp * 100) / getters.calculoExpMax)
		: 0;
}
