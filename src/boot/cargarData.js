import { Loading } from "quasar";

export default async ({ store, Vue }) => {
	Loading.show({
		message: "Cargando Informacion... Por favor espere.",
	});
	await store.dispatch("play/loadData");
	await store.dispatch("perfiles/cargarPerfiles");
	Loading.hide();
};
