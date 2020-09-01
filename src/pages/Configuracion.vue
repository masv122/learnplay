<template>
	<q-page padding>
		<q-list padding>
			<q-item-label header>Generales</q-item-label>

			<q-item tag="label" v-ripple>
				<q-item-section side top>
					<q-checkbox v-model="darkMode" />
				</q-item-section>

				<q-item-section>
					<q-item-label>Modo Oscuro</q-item-label>
					<q-item-label caption>
						Habilita el modo oscuro
					</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
	</q-page>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	export default {
		name: "Configuracion",
		data() {
			return {};
		},
		computed: {
			...mapState("global", ["dark"]),
			darkMode: {
				get() {
					return this.dark;
				},
				set(value) {
					this.updateDark(value);
				},
			},
		},
		methods: {
			...mapMutations("global", ["updateDark"]),
		},
	};
</script>
