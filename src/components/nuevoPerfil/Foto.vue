<template>
	<div class="flex flex-center bg-white q-gutter-md">
		<q-img
			src="~assets/Logo.png"
			spinner-color="primary"
			spinner-size="82px"
			width="200px"
			v-if="!foto"
		/>
		<q-img
			v-else
			:src="fotoEncoded"
			spinner-color="primary"
			spinner-size="82px"
			width="200px"
		/>
		<q-file
			color="grey-3"
			outlined
			label-color="primary"
			v-model="_foto"
			label="Selecciona una foto"
		>
			<template v-slot:append>
				<q-icon name="attachment" color="primary" />
			</template>
		</q-file>
	</div>
</template>

<script>
	import { mapMutations, mapState } from "vuex";
	import fotoDefault from "assets/Logo.png";
	export default {
		name: "Foto",
		data() {
			return {};
		},
		computed: {
			...mapState("perfiles", ["foto"]),
			_foto: {
				get() {
					return this.foto;
				},
				set(value) {
					this.updateFoto(value);
				},
			},
			fotoEncoded() {
				return URL.createObjectURL(
					!!this.foto ? this.foto : fotoDefault
				);
			},
		},
		methods: {
			...mapMutations("perfiles", ["updateFoto", "updateStep"]),
		},
	};
</script>
