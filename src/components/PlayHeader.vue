<template>
	<q-header elevated>
		<div class="row no-wrap hide">
			<q-toolbar class="col-9">
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
				<q-toolbar-title>Basico</q-toolbar-title>
			</q-toolbar>
			<q-toolbar class="col-3">
				<q-btn
					:to="{ name: 'Inicio' }"
					color="negative"
					dense
					@click="reset()"
					label="terminar"
				/>
			</q-toolbar>
		</div>
	</q-header>
</template>

<script>
	import playScripts from "src/mixins/playScripts";
	export default {
		name: "SupHeader",
		mixins: [playScripts],
		components: {},
		data() {
			return {
				value: 81,
			};
		},
		computed: {},
		methods: {},
	};
</script>

<style scoped></style>
