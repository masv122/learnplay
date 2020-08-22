<template>
	<q-list>
		<q-item
			v-for="perfil in perfiles"
			:key="perfil.id"
			class="q-my-sm"
			clickable
			v-ripple
			@click="setLocalData(perfil)"
			:to="{ name: 'Inicio' }"
		>
			<q-item-section avatar>
				<q-avatar v-if="perfil.foto">
					<img :src="perfil.img" />
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
			</q-item-section>

			<q-item-section>
				<q-item-label>{{ perfil.nombre }}</q-item-label>
				<q-item-label caption lines="1"
					>Tiempo jugado: {{ perfil.tiempo }}</q-item-label
				>
				<q-item-label caption lines="1"
					>Logros: {{ perfil.logros.length }}</q-item-label
				>
				<q-separator spaced />
			</q-item-section>

			<q-item-section side>
				<q-icon name="play_arrow" color="teal" />
			</q-item-section>
		</q-item>

		<q-item
			:to="{ name: 'CrearPerfil' }"
			class="q-my-sm q-pl-lg"
			clickable
			v-ripple
		>
			<q-item-section avatar>
				<q-icon name="add" color="primary" />
			</q-item-section>

			<q-item-section>
				<q-item-label>Crear perfil</q-item-label>
			</q-item-section>
		</q-item>
	</q-list>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	export default {
		name: "ListaPerfiles",
		data() {
			return {};
		},
		computed: {
			...mapState("perfiles", ["perfiles"]),
		},
		methods: {
			...mapMutations("perfiles", ["updatePerfil"]),
			setLocalData(perfil) {
				try {
					this.$q.localStorage.set("perfil", perfil);
					this.updatePerfil(perfil);
					this.$router.push({ name: "Inicio" });
				} catch (e) {
					alert("ha ocurrido un error al ingresar: " + e);
				}
			},
		},
	};
</script>
