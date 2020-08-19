<template>
	<q-header class="bg-indigo-9">
		<div class="row no-wrap hide">
			<q-toolbar class="col-4">
				<q-knob
					show-value
					class="text-white q-ma-md"
					v-model="value"
					size="60px"
					:thickness="0.2"
					color="teal"
					readonly
					track-color="transparent"
				>
					<q-avatar
						size="xl"
						color="white"
						text-color="indigo-9"
						icon="perm_identity"
					>
						<q-badge floating color="teal">1</q-badge>
					</q-avatar>
				</q-knob>
			</q-toolbar>
			<q-toolbar class="col-6">
				<q-toolbar-title>Learn N' Play</q-toolbar-title>
			</q-toolbar>
			<q-toolbar class="col-2">
				<q-btn flat round dense icon="more_vert">
					<header-menu />
				</q-btn>
			</q-toolbar>
		</div>
		<q-tabs v-model="_tab">
			<q-tab name="basico" label="Basico" />
			<q-tab name="intermedio" label="Intermedio" />
			<q-tab name="avanzado" label="Avanzado" />
		</q-tabs>
	</q-header>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import HeaderMenu from "components/HeaderMenu.vue";
	export default {
		name: "SupHeader",
		components: {
			HeaderMenu,
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
