<template>
	<q-circular-progress
		show-value
		class="q-ma-md"
		:value="_barraExp"
		size="80px"
		:thickness="0.25"
		track-color="transparent"
		font-size="10px"
		color="orange"
	>
		<q-avatar size="60px" v-if="!!perfil.fotoPerfil">
			<img :src="perfil.fotoPerfil.foto" />
			<q-badge floating color="green">{{ _nivel }}</q-badge>
		</q-avatar>
		<q-avatar
			v-else
			size="60px"
			color="primary"
			text-color="white"
			icon="perm_identity"
		>
			<q-badge floating color="green">{{ _nivel }}</q-badge>
		</q-avatar>
	</q-circular-progress>
</template>

<script>
	import { mapGetters, mapState } from "vuex";
	export default {
		name: "perfilMiniatura",
		props: {
			play: {
				type: Boolean, // String, Number, Boolean, Function, Object, Array
				default: false,
			},
		},
		data() {
			return { value: 30 };
		},
		computed: {
			...mapState("perfiles", ["perfil"]),
			...mapState("puntaje", ["nivel", "exp"]),
			...mapGetters("perfiles", ["calculoExpMax", "calculoBarraExp"]),
			...mapGetters("puntaje", ["expMax", "barraExp"]),
			_nivel() {
				return this.play ? this.nivel : this.perfil.nivel;
			},
			_barraExp() {
				return this.play ? this.barraExp : this.calculoBarraExp;
			},
		},
	};
</script>

<style lang="css" scoped></style>
