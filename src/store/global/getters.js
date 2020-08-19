export const buscarPruebaBandera = (state) => (id) => {
	return state.banderas.find((e) => e.id === id);
};
export const buscarPruebaOpcionMultiple = (state) => (id) => {
	return state.opcionMultiple.find((e) => e.id === id);
};
