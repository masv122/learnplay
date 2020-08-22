<template>
	<q-knob
		show-value
		class="text-white q-ma-md"
		v-model="barraExp"
		size="60px"
		:thickness="0.2"
		color="yellow-10"
		readonly
		track-color="transparent"
	>
		<q-avatar size="xl" v-if="perfil.foto">
			<img :src="perfil.img" />
			<q-badge floating color="green">{{ perfil.nivel }}</q-badge>
		</q-avatar>
		<q-avatar
			v-else
			size="xl"
			color="primary"
			text-color="white"
			icon="perm_identity"
		>
			<q-badge floating color="green">{{ perfil.nivel }}</q-badge>
		</q-avatar>
	</q-knob>
</template>

<script>
	import { mapGetters, mapMutations, mapState } from "vuex";
	export default {
		name: "perfilMiniatura",
		watch: {},
		data() {
			return { value: 30 };
		},
		computed: {
			...mapState("perfiles", ["perfil"]),
			...mapGetters("perfiles", [
				"nivel",
				"calculoExpMax",
				"calculoBarraExp",
			]),
			barraExp: {
				get() {
					return this.calculoBarraExp;
				},
				set(value) {},
			},
		},
		methods: {
			...mapMutations("perfiles", ["updateNivel", "updateExp"]),
		},
	};
</script>

<style lang="css" scoped></style>
