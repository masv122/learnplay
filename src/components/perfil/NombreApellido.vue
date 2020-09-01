<template>
	<q-dialog ref="dialog" @hide="onDialogHide">
		<q-card class="q-dialog-plugin">
			<q-card-section>
				<div class="text-h6">Nombre y Apellido</div>
			</q-card-section>
			<q-card-section>
				<q-form @submit.prevent class="q-gutter-md">
					<q-input
						filled
						v-model="_nombre"
						label="Nombre"
						lazy-rules
						:rules="[(val) => !!val || 'Escriba un Nombre']"
					/>
					<q-input
						filled
						v-model="_apellido"
						label="Apellido"
						lazy-rules
						:rules="[(val) => !!val || 'Escribar su apellido']"
					/>
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
		name: "NombreApellido",
		props: {
			nombre: {
				type: String,
				required: true,
				default: "",
			},
			apellido: {
				type: String,
				required: true,
				default: "",
			},
		},
		data() {
			return {};
		},
		computed: {
			_nombre: {
				get() {
					return this.$store.state.perfiles.nombre;
				},
				set(value) {
					this.$store.commit("perfiles/updateNombre", value);
				},
			},
			_apellido: {
				get() {
					return this.$store.state.perfiles.apellido;
				},
				set(value) {
					this.$store.commit("perfiles/updateApellido", value);
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
				if (!!this._nombre && !!this._apellido) {
					this.$emit("ok");
					this.hide();
				}
			},
			onCancelClick() {
				this.hide();
			},
		},
		mounted() {
			this.$store.commit("perfiles/updateNombre", this.nombre);
			this.$store.commit("perfiles/updateApellido", this.apellido);
		},
	};
</script>
