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
				<q-btn color="primary" @click="guardarPerfil()" label="Listo" />
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
	import { mapMutations, mapState } from "vuex";
	import Genero from "components/nuevoPerfil/Genero.vue";
	import InformacionPersonal from "components/nuevoPerfil/InformacionPersonal.vue";
	import Foto from "components/nuevoPerfil/Foto.vue";
	import Confirmacion from "components/nuevoPerfil/Confirmacion.vue";
	export default {
		name: "NuevoPerfil",
		components: {
			Genero,
			InformacionPersonal,
			Foto,
			Confirmacion,
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
			async guardarPerfil() {
				const perfil = {
					genero: this.genero,
					foto: !!this.foto,
					nombre: this.nombre,
					apellido: this.apellido,
					fecha: this.fecha,
					nivel: 0,
					exp: 0,
					tiempo: 0,
					logros: [],
					estadisticas: {
						basico: {
							tiempo: 0,
							correctas: 0,
							incorrectas: 0,
							pasadas: 0,
							poderes: 0,
							logros: [],
						},
						intermedio: {
							tiempo: 0,
							correctas: 0,
							incorrectas: 0,
							pasadas: 0,
							poderes: 0,
							logros: [],
						},
						avanzado: {
							tiempo: 0,
							correctas: 0,
							incorrectas: 0,
							pasadas: 0,
							poderes: 0,
							logros: [],
						},
					},
				};
				try {
					let resultado = await this.$db.local.rel.save(
						"perfil",
						perfil
					);
					this.$q.notify({
						type: !!resultado ? "positive" : "negative",
						message: !!resultado
							? "Perfil creado"
							: "No se pudo crear el perfil",
						timeout: 500,
					});
					if (!!resultado && !!perfil.foto) {
						const attachment = this.foto;
						const fotoResultado = await this.$db.local.rel.putAttachment(
							"perfil",
							{ id: resultado.id, rev: resultado.rev },
							"file",
							attachment,
							attachment.type
						);
						if (!!fotoResultado)
							this.$router.push({ name: "Perfiles" });
					} else this.$router.push({ name: "Perfiles" });
				} catch (e) {
					alert("ha ocurrido un error al crear el perfil: " + e);
				}
			},
		},
	};
</script>
