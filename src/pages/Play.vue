<template>
	<q-page padding>
		<!-- 		<q-btn
			label="up"
			@click="
				pararCronometro();
				updateResumenFinal();
			"
		/> -->
		<reto-bandera
			v-if="tipoPrueba == 0"
			:dificultad="pruebaGenerada.dificultad"
			:id="pruebaGenerada.id"
			:respuestaCorrecta="pruebaGenerada.respuesta"
			:url="pruebaGenerada.url"
		/>
		<reto-opcion-multiple
			:dificultad="pruebaGenerada.dificultad"
			:id="pruebaGenerada.id"
			:respuestaCorrecta="pruebaGenerada.respuesta"
			:pregunta="pruebaGenerada.pregunta"
			:a="pruebaGenerada.a"
			:b="pruebaGenerada.b"
			:c="pruebaGenerada.c"
			:d="pruebaGenerada.d"
			v-if="tipoPrueba == 1"
		/>
		<reto-booleano v-if="false" />
		<resumen-final />
	</q-page>
</template>

<script>
	import playScripts from "src/mixins/playScripts";
	import RetoBandera from "components/RetoBandera.vue";
	import ResumenFinal from "components/ResumenFinal.vue";
	import RetoOpcionMultiple from "components/RetoOpcionMultiple.vue";
	import RetoBooleano from "components/RetoBooleano.vue";
	import { mapState, mapGetters, mapMutations } from "vuex";
	export default {
		name: "Play",
		components: {
			RetoBandera,
			RetoOpcionMultiple,
			RetoBooleano,
			ResumenFinal,
		},
		mixins: [playScripts],
		data() {
			return {};
		},
		created() {
			this.generarPrueba();
			this.iniciarCronometro();
		},
		beforeDestroy() {
			this.reiniciarCronometro();
		},
	};
</script>
