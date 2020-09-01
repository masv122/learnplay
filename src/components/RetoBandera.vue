<template>
	<q-card class="my-card">
		<q-img
			:src="require(`src/assets/banderas/${url}`)"
			height="250px"
			basic
		>
			<div class="absolute-bottom text-h6 text-center">
				Selecciona el pais al que corresponda la bandera.
			</div>
		</q-img>
		<q-card-section>
			<div class="text-h6 text-center">Respuesta</div>
			<q-input outlined dense class="q-mb-xs" v-model="respuesta" />
			<div class="row">
				<div class="col-6">
					<q-btn
						label="aceptar"
						@click="completar(respuestaCorrecta, respuesta)"
						color="primary"
						class="full-width"
					/>
				</div>
				<div class="col-6">
					<q-btn
						label="pasar"
						@click="pasar()"
						class="full-width"
						color="negative"
					/>
				</div>
			</div>
		</q-card-section>
	</q-card>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import playScripts from "src/mixins/playScripts";
	export default {
		name: "RetoBandera",
		props: {
			dificultad: {
				type: Number, // String, Number, Boolean, Function, Object, Array
				required: true,
				default: null,
			},
			id: {
				type: Number, // String, Number, Boolean, Function, Object, Array
				required: true,
				default: null,
			},
			respuestaCorrecta: {
				type: String, // String, Number, Boolean, Function, Object, Array
				required: true,
				default: null,
			},
			url: {
				type: String, // String, Number, Boolean, Function, Object, Array
				required: true,
				default: null,
			},
		},
		mixins: [playScripts],
		data() {
			return {};
		},
		computed: {
			...mapState("play", ["respuestaBandera"]),
			respuesta: {
				get() {
					return this.respuestaBandera;
				},
				set(value) {
					this.updateRespuestaBanderta(value);
				},
			},
		},
		methods: {
			...mapMutations("play", ["updateRespuestaBanderta"]),
		},
		created() {
			this.updateRespuestaBanderta("");
		},
	};
</script>

<style>
	.my-card {
		width: 100%;
		max-width: 450px;
	}
</style>
