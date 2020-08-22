<template>
	<q-splitter v-model="splitterModel" style="height: 100%">
		<template v-slot:before>
			<q-tabs v-model="tab" vertical class="text-teal">
				<q-tab name="mails" icon="assessment" label="resumen" />
				<q-tab name="alarms" icon="extension" label="Pruebas" />
				<q-tab name="movies" icon="star" label="Logros" />
			</q-tabs>
		</template>

		<template v-slot:after>
			<q-tab-panels
				v-model="tab"
				animated
				swipeable
				vertical
				transition-prev="jump-up"
				transition-next="jump-up"
			>
				<q-tab-panel name="mails">
					<ListaDificultad
						:tiempo="perfil.estadisticas.basico.tiempo"
						:correctas="perfil.estadisticas.basico.correctas"
						:incorrectas="perfil.estadisticas.basico.incorrectas"
						:pasadas="perfil.estadisticas.basico.pasadas"
						:poderes="perfil.estadisticas.basico.poderes"
						:logros="perfil.estadisticas.basico.logros"
					/>
				</q-tab-panel>

				<q-tab-panel name="alarms">
					<q-card
						class="my-card"
						flat
						bordered
						style="border-radius: 30px"
					>
						<q-card-section horizontal>
							<q-img
								class="col"
								src="~assets/banderas/america/venezuela.jpg"
							/>

							<q-card-actions
								vertical
								class="justify-around q-px-md"
							>
								<q-btn flat round color="teal" icon="info" />
								<q-btn flat round color="primary" icon="star" />
							</q-card-actions>
						</q-card-section>
					</q-card>
				</q-tab-panel>

				<q-tab-panel name="movies">
					<q-list bordered class="rounded-borders my-card">
						<q-expansion-item>
							<template v-slot:header>
								<q-item-section>
									Logro 1
								</q-item-section>

								<q-item-section side>
									<div class="row items-center">
										<q-icon
											name="star"
											color="red"
											size="24px"
										/>
										<q-icon
											name="star"
											color="red"
											size="24px"
										/>
										<q-icon
											name="star"
											color="red"
											size="24px"
										/>
									</div>
								</q-item-section>
							</template>

							<q-card>
								<q-card-section>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Quidem, eius reprehenderit
									eos corrupti commodi magni quaerat ex
									numquam, dolorum officiis modi facere
									maiores architecto suscipit iste eveniet
									doloribus ullam aliquid.
								</q-card-section>
							</q-card>
						</q-expansion-item>

						<q-separator />
					</q-list>
				</q-tab-panel>
			</q-tab-panels>
		</template>
	</q-splitter>
</template>

<script>
	import ListaDificultad from "components/ListaDificultad.vue";
	import { mapState } from "vuex";
	export default {
		name: "Basico",
		components: {
			ListaDificultad,
		},
		data() {
			return {
				tab: "mails",
				splitterModel: 20,
			};
		},
		computed: {
			...mapState("perfiles", ["perfil"]),
		},
	};
</script>

<style scoped>
	.my-card {
		width: 100%;
		max-width: 350px;
	}
</style>
