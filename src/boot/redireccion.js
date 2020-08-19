export default ({ router, store, Vue }) => {
	router.beforeEach((to, from, next) => {
		const isAuthorized = store.state.perfiles.perfil;
		if (
			to.name !== "Perfiles" &&
			to.name !== "CrearPerfil" &&
			!isAuthorized
		)
			next({ name: "Perfiles" });
		else next();
	});
};
