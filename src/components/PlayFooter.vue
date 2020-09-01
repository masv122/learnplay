<template>
	<q-footer>
		<q-toolbar class="row items-center no-wrap">
			<div>
				<div class="text-weight-bolder">{{ cronometro }}</div>
			</div>

			<q-space />
			<q-btn-dropdown
				color="orange"
				dense
				rounded
				no-caps
				icon="stars"
				dropdown-icon="change_history"
			>
				<q-list>
					<q-item clickable v-close-popup>
						<q-item-section avatar>
							<q-avatar
								icon="folder"
								color="primary"
								text-color="white"
							/>
						</q-item-section>
						<q-item-section>
							<q-item-label>Photos</q-item-label>
							<q-item-label caption
								>February 22, 2016</q-item-label
							>
						</q-item-section>
						<q-item-section side>
							<q-icon name="info" color="amber" />
						</q-item-section>
					</q-item>

					<q-item clickable v-close-popup>
						<q-item-section avatar>
							<q-avatar
								icon="assignment"
								color="secondary"
								text-color="white"
							/>
						</q-item-section>
						<q-item-section>
							<q-item-label>Vacation</q-item-label>
							<q-item-label caption
								>February 22, 2016</q-item-label
							>
						</q-item-section>
						<q-item-section side>
							<q-icon name="info" color="amber" />
						</q-item-section>
					</q-item>
				</q-list>
			</q-btn-dropdown>
			<q-btn dense color="positive" round icon="check" class="q-ml-md">
				<q-badge color="primary" floating>{{ correctas }}</q-badge>
			</q-btn>
			<q-btn dense color="negative" round icon="cancel" class="q-ml-md">
				<q-badge color="primary" floating>{{ incorrectas }}</q-badge>
			</q-btn>
		</q-toolbar>
	</q-footer>
</template>

<script>
	import { mapState, mapGetters } from "vuex";
	export default {
		name: "SupHeader",
		data() {
			return {
				segundos: 57,
				minutos: 0,
			};
		},
		computed: {
			...mapState("puntaje", ["correctas", "incorrectas"]),
			...mapGetters("cronometro", ["cronometro"]),
		},
		methods: {},
	};
</script>

<style scoped></style>
