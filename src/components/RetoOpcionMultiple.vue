<template>
	<q-card class="my-card">
		<q-card-section class="text-center">
			<div class="text-h6">Selecciona la opcion correcta</div>
			<div class="text-subtitle2">{{ pregunta }}</div>
		</q-card-section>
		<q-list>
			<q-item clickable v-ripple @click="completar(respuestaCorrecta, a)">
				<q-item-section avatar>
					<q-avatar color="primary" text-color="white">
						1
					</q-avatar>
				</q-item-section>

				<q-item-section>
					<q-item-label>{{ a }}</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-ripple @click="completar(respuestaCorrecta, b)">
				<q-item-section avatar>
					<q-avatar color="secondary" text-color="white">
						2
					</q-avatar>
				</q-item-section>

				<q-item-section>
					<q-item-label>{{ b }}</q-item-label>
				</q-item-section>
			</q-item>

			<q-item clickable v-ripple @click="completar(respuestaCorrecta, c)">
				<q-item-section avatar>
					<q-avatar color="accent" text-color="white">
						3
					</q-avatar>
				</q-item-section>

				<q-item-section>
					<q-item-label>{{ c }}</q-item-label>
				</q-item-section>
			</q-item>
			<q-item clickable v-ripple @click="completar(respuestaCorrecta, d)">
				<q-item-section avatar>
					<q-avatar color="info" text-color="white">
						4
					</q-avatar>
				</q-item-section>

				<q-item-section>
					<q-item-label>{{ d }}</q-item-label>
				</q-item-section>
			</q-item>
			<q-item clickable v-ripple @click="pasar()">
				<q-item-section avatar>
					<q-avatar color="negative" text-color="white">
						<q-icon name="not_interested" />
					</q-avatar>
				</q-item-section>

				<q-item-section>
					<q-item-label>Pasar</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
	</q-card>
</template>

<script>
	import playScripts from "src/mixins/playScripts";

	export default {
		name: "RetoOpcionMultiple",
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
			pregunta: {
				type: String, // String, Number, Boolean, Function, Object, Array
				required: true,
				default: null,
			},
			a: {
				type: String, // String, Number, Boolean, Function, Object, Array
				required: true,
				default: null,
			},
			b: {
				type: String, // String, Number, Boolean, Function, Object, Array
				required: true,
				default: null,
			},
			c: {
				type: String, // String, Number, Boolean, Function, Object, Array
				required: true,
				default: null,
			},
			d: {
				type: String, // String, Number, Boolean, Function, Object, Array
				required: true,
				default: null,
			},
		},
		mixins: [playScripts],
		data() {
			return {};
		},
		methods: {},
	};
</script>

<style>
	.my-card {
		width: 100%;
		max-width: 450px;
	}
</style>
