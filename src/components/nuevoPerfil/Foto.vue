<template>
	<div class="flex flex-center bg-white">
		<q-img
			src="~assets/Logo.png"
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
	export default {
		name: "Foto",
		data() {
			return {};
		},
		watch: {
			foto: (val) => {
				console.log(val);
			},
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
		},
		methods: {
			...mapMutations("perfiles", ["updateFoto", "updateStep"]),
		},
	};
</script>
