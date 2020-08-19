<template>
	<div>
		<div class="flex flex-center bg-white">
			<q-img
				src="~assets/Logo.png"
				spinner-color="primary"
				spinner-size="82px"
				width="200px"
			/>
		</div>
		<div class="text-subtitle1">
			Nombre:
		</div>
		<div class="text-caption text-grey">
			{{ nombre }}
		</div>
		<div class="text-subtitle1">
			Apellido:
		</div>
		<div class="text-caption text-grey">
			{{ apellido }}
		</div>
		<div class="text-subtitle1">
			Fecha de nacimiento:
		</div>
		<div class="text-caption text-grey">
			{{ fecha }}
		</div>
	</div>
</template>

<script>
	import { mapMutations, mapState } from "vuex";
	export default {
		name: "Confirmacion",
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
			]),
		},
	};
</script>
