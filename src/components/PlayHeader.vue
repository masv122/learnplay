<template>
	<q-header elevated>
		<div class="row no-wrap hide">
			<q-toolbar class="col-4">
				<perfil-miniatura />
			</q-toolbar>
			<q-toolbar class="col-6">
				<q-toolbar-title>Basico</q-toolbar-title>
			</q-toolbar>
			<q-toolbar class="col-2">
				<q-btn @click="reset()" icon="close" flat round dense />
			</q-toolbar>
		</div>
	</q-header>
</template>

<script>
	import playScripts from "src/mixins/playScripts";
	import perfilMiniatura from "components/perfilMiniatura";

	export default {
		name: "SupHeader",
		mixins: [playScripts],
		components: { perfilMiniatura },
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
