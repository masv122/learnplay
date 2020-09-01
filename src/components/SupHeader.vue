<template>
	<q-header elevated>
		<q-toolbar>
			<perfil-miniatura />
			<q-toolbar-title>Learn N' Play</q-toolbar-title>
			<q-btn
				flat
				round
				dense
				color="white"
				@click="$q.fullscreen.toggle()"
				:icon="
					$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'
				"
			/>
			<q-btn flat round dense icon="more_vert">
				<header-menu />
			</q-btn>
		</q-toolbar>
		<q-tabs v-model="_tab">
			<q-tab name="basico" label="Basico" />
			<q-tab name="intermedio" label="Intermedio" />
			<q-tab name="avanzado" label="Avanzado" />
		</q-tabs>
	</q-header>
	<!-- 	<q-header class="bg-indigo-9">
		<div class="row no-wrap hide">
			<q-toolbar dense class="col-4">

			</q-toolbar>
			<q-toolbar class="col-2">
			</q-toolbar>
		</div>

	</q-header> -->
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	export default {
		name: "SupHeader",
		components: {
			HeaderMenu: () => import("components/HeaderMenu.vue"),
			perfilMiniatura: () => import("components/perfilMiniatura.vue"),
		},
		data() {
			return {
				value: 81,
			};
		},
		computed: {
			...mapState("global", ["tab"]),
			_tab: {
				get() {
					return this.tab;
				},
				set(value) {
					this.updateTab(value);
				},
			},
		},
		methods: {
			...mapMutations("global", ["updateTab"]),
		},
	};
</script>

<style scoped></style>
