<template>
	<q-dialog ref="dialog" @hide="onDialogHide">
		<q-card class="q-dialog-plugin">
			<q-card-section>
				<div class="text-h6">Fecha de nacimiento</div>
			</q-card-section>
			<q-card-section>
				<q-form @submit.prevent class="q-gutter-md">
					<q-input
						v-model="_fecha"
						dense
						autofocus
						mask="date"
						label="Fecha de nacimiento"
						:rules="['date', (val) => !!val || 'Ingrese una fecha']"
					>
						<template v-slot:append>
							<q-icon name="event" class="cursor-pointer">
								<q-popup-proxy
									ref="qDateProxy"
									transition-show="scale"
									transition-hide="scale"
								>
									<q-date
										v-model="_fecha"
										@input="() => $refs.qDateProxy.hide()"
									/>
								</q-popup-proxy>
							</q-icon>
						</template>
					</q-input>
				</q-form>
			</q-card-section>
			<q-card-actions align="right">
				<q-btn
					flat
					dense
					color="primary"
					label="Guardar"
					@click="onOKClick"
				/>
				<q-btn
					flat
					dense
					color="negative"
					label="Cancelar"
					@click="onCancelClick"
				/>
			</q-card-actions>
		</q-card>
	</q-dialog>
</template>

<script>
	export default {
		name: "Fecha",
		props: {
			fecha: {
				type: String,
				required: true,
				default: "",
			},
		},
		data() {
			return {};
		},
		computed: {
			_fecha: {
				get() {
					return this.$store.state.perfiles.fecha;
				},
				set(value) {
					this.$store.commit("perfiles/updateFecha", value);
				},
			},
		},
		methods: {
			show() {
				this.$refs.dialog.show();
			},
			hide() {
				this.$refs.dialog.hide();
			},
			onDialogHide() {
				this.$emit("hide");
			},
			onOKClick() {
				if (!!this._fecha) {
					this.$emit("ok");
					this.hide();
				}
			},
			onCancelClick() {
				this.hide();
			},
		},
		mounted() {
			this.$store.commit("perfiles/updateFecha", this.fecha);
		},
	};
</script>
