<template>
	<div id="q-app">
		<router-view />
	</div>
</template>
<script>
	import { mapState, mapMutations, mapGetters } from "vuex";
	import perfilEngine from "src/mixins/perfilEngine";
	export default {
		name: "App",
		mixins: [perfilEngine],
	};
</script>

<style>
	body {
		background-color: ;
	}
</style>
