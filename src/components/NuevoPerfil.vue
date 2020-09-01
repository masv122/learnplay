<template>
	<q-stepper v-model="step" vertical color="primary" animated>
		<q-step
			:name="1"
			title="Genero"
			icon="supervised_user_circle"
			:done="step > 1"
		>
			<genero />
		</q-step>

		<q-step
			:name="2"
			title="Informacion Personal"
			icon="info"
			:done="step > 2"
		>
			<informacion-personal />

			<q-stepper-navigation>
				<q-btn
					@click="updateStep(3)"
					color="primary"
					label="Siguiente"
					:disabled="!nombre || !apellido || !fecha"
				/>
				<q-btn
					flat
					@click="updateStep(1)"
					color="primary"
					label="Regresar"
					class="q-ml-sm"
				/>
			</q-stepper-navigation>
		</q-step>

		<q-step
			:name="3"
			title="Foto"
			caption="Optional"
			icon="face"
			:done="step > 3"
		>
			<foto />

			<q-stepper-navigation>
				<q-btn
					@click="updateStep(4)"
					color="primary"
					label="Siguiente"
				/>
				<q-btn
					flat
					@click="updateStep(2)"
					color="primary"
					label="Regresar"
					class="q-ml-sm"
				/>
			</q-stepper-navigation>
		</q-step>

		<q-step :name="4" title="Confirmacion" icon="verified">
			<confirmacion />
			<q-stepper-navigation>
				<q-btn
					color="primary"
					@click="crearNuevoPerfil"
					label="Listo"
				/>
				<q-btn
					flat
					@click="updateStep(3)"
					color="primary"
					label="Regresar"
					class="q-ml-sm"
				/>
			</q-stepper-navigation>
		</q-step>
	</q-stepper>
</template>

<script>
	import { mapMutations, mapState, mapActions, mapGetters } from "vuex";
	import Perfil from "src/class/perfil";
	export default {
		name: "NuevoPerfil",
		components: {
			Genero: () => import("components/nuevoPerfil/Genero.vue"),
			InformacionPersonal: () =>
				import("components/nuevoPerfil/InformacionPersonal.vue"),
			Foto: () => import("components/nuevoPerfil/Foto.vue"),
			Confirmacion: () =>
				import("components/nuevoPerfil/Confirmacion.vue"),
		},
		data() {
			return {};
		},
		computed: {
			...mapState("perfiles", [
				"genero",
				"nombre",
				"apellido",
				"fecha",
				"foto",
				"step",
			]),
			...mapGetters("perfiles", ["buscarPerfil"]),
		},
		methods: {
			...mapMutations("perfiles", [
				"updateGenero",
				"updateNombre",
				"updateApellido",
				"updateFecha",
				"updateFoto",
				"updateStep",
			]),
			...mapActions("perfiles", ["cargarPerfiles"]),
			async crearNuevoPerfil() {
				let perfil = new Perfil(
					this.genero,
					this.nombre,
					this.apellido,
					this.fecha
				);
				let resultado = await perfil.guardarPerfil();
				if (!!resultado && !!this.foto) {
					await perfil.guardarFoto(this.foto);
					await perfil.establecerFotoPerfil(this.foto.name);
				}
				this.$router.push({ name: "Perfiles" });
			},
		},
	};
</script>
