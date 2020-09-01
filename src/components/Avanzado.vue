<template>
	<ListaDificultad />
</template>

<script>
	export default {
		name: "Avanzado",
		components: {
			ListaDificultad: () => import("components/ListaDificultad.vue"),
		},
		data() {
			return {};
		},
	};
</script>
