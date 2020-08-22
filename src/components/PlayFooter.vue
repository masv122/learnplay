<template>
	<q-footer>
		<div class="row no-wrap hide">
			<q-toolbar class="col-6">
				<q-chip>
					<q-avatar
						icon="check"
						color="positive"
						text-color="white"
					/>
					{{ correctas }}
				</q-chip>
				<q-chip>
					<q-avatar
						icon="cancel"
						color="negative"
						text-color="white"
					/>
					{{ incorrectas }}
				</q-chip>
				<q-chip>
					<q-avatar
						icon="not_interested"
						color="grey"
						text-color="white"
					/>
					{{ pasadas }}
				</q-chip>
			</q-toolbar>
			<q-toolbar class="col-3 text-center">
				<q-toolbar-title>{{ cronometro }}</q-toolbar-title>
			</q-toolbar>
			<q-toolbar class="col-3 text-center">
				<q-btn-dropdown
					color="orange"
					push
					glossy
					dense
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
			</q-toolbar>
		</div>
	</q-footer>
</template>

<script>
	import { mapState, mapGetters, mapMutations } from "vuex";
	export default {
		name: "SupHeader",
		components: {},
		data() {
			return {
				segundos: 57,
				minutos: 0,
			};
		},
		computed: {
			...mapState("puntaje", ["correctas", "incorrectas", "pasadas"]),
			...mapGetters("cronometro", ["cronometro"]),
		},
		methods: {},
	};
</script>

<style scoped></style>
