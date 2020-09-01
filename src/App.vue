<template>
	<div id="q-app">
		<router-view />
	</div>
</template>
<script>
	import perfilEngine from "src/mixins/perfilEngine";
	import configuracion from "src/mixins/configuracion";
	export default {
		name: "App",
		mixins: [perfilEngine, configuracion],
	};
</script>

<style>
	body {
		background-color: ;
	}
</style>
