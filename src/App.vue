<template>
	<div id="q-app">
		<router-view />
	</div>
</template>
<script>
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
