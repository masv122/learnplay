<template>
	<ListaDificultad />
</template>

<script>
	import ListaDificultad from "components/ListaDificultad.vue";
	export default {
		name: "Intermedio",
		components: {
			ListaDificultad: () => import("components/ListaDificultad.vue"),
		},
		data() {
			return {};
		},
	};
</script>
