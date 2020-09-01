<template>
	<q-tab-panels v-model="tab" animated>
		<q-tab-panel name="basico">
			<basico />
		</q-tab-panel>
		<q-tab-panel name="intermedio">
			<intermedio />
		</q-tab-panel>
		<q-tab-panel name="avanzado">
			<avanzado />
		</q-tab-panel>
	</q-tab-panels>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		name: "Panels",
		components: {
			Basico: () => import("components/Basico.vue"),
			Intermedio: () => import("components/Intermedio.vue"),
			Avanzado: () => import("components/Avanzado.vue"),
		},
		data() {
			return {};
		},
		computed: {
			...mapState("global", ["tab"]),
		},
		methods: {},
	};
</script>

<style scoped></style>
