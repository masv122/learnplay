<template>
	<q-header elevated>
		<q-toolbar>
			<perfil-miniatura play />
			<q-toolbar-title>Basico</q-toolbar-title>
			<q-btn @click="endResumen()" icon="close" flat round dense />
		</q-toolbar>
	</q-header>
</template>

<script>
	import playScripts from "src/mixins/playScripts";

	export default {
		name: "SupHeader",
		mixins: [playScripts],
		components: {
			perfilMiniatura: () => import("components/perfilMiniatura.vue"),
		},
		data() {
			return {
				value: 81,
			};
		},
		computed: {},
		methods: {},
	};
</script>

<style scoped></style>
