<template>
	<q-page>
		<panels />
		<q-page-sticky position="bottom-right" :offset="[18, 18]">
			<q-btn
				:to="{ name: 'Play', query: { dificultad: 'basico' } }"
				fab
				icon="play_arrow"
				color="primary"
				label="Iniciar"
			/>
		</q-page-sticky>
	</q-page>
</template>

<script>
	import Panels from "components/Panels";
	export default {
		name: "Inicio",
		components: {
			Panels,
		},
	};
</script>

<style>
	.my-card {
		border-radius: 30px;
	}
</style>
