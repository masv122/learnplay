<template>
	<q-form @submit.prevent class="q-gutter-md">
		<q-input filled v-model="_nombre" label="Nombre *" lazy-rules />
		<q-input filled v-model="_apellido" label="Apellido *" lazy-rules />
		<q-input filled v-model="_fecha" mask="date" :rules="['date']">
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
</template>

<script>
	import { mapMutations, mapState } from "vuex";

	export default {
		name: "InformacionPersonal",
		data() {
			return {};
		},
		computed: {
			...mapState("perfiles", ["nombre", "apellido", "fecha"]),
			_nombre: {
				get() {
					return this.nombre;
				},
				set(value) {
					this.updateNombre(value);
				},
			},
			_apellido: {
				get() {
					return this.apellido;
				},
				set(value) {
					this.updateApellido(value);
				},
			},
			_fecha: {
				get() {
					return this.fecha;
				},
				set(value) {
					this.updateFecha(value);
				},
			},
		},
		methods: {
			...mapMutations("perfiles", [
				"updateNombre",
				"updateApellido",
				"updateFecha",
				"updateStep",
			]),
			methodName() {},
		},
	};
</script>
