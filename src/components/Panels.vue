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
	import Basico from "components/Basico.vue";
	import Intermedio from "components/Intermedio.vue";
	import Avanzado from "components/Avanzado.vue";
	export default {
		name: "Panels",
		components: {
			Basico,
			Intermedio,
			Avanzado,
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
