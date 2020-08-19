import { Loading } from "quasar";

export default async ({ store, Vue }) => {
	Loading.show({
		message: "Cargando Informacion... Por favor espere.",
	});
	await store.dispatch("global/loadData");
	await store.dispatch("perfiles/cargarPerfiles");
	Loading.hide();
};
