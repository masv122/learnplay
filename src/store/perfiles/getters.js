export const buscarIndice = (state) => (id) => {
	return state.perfiles.findIndex((e) => e.id === id);
};
export const buscarPerfil = (state) => (id) => {
	return state.perfiles.find((e) => e.id === id);
};
