<template>
	<q-splitter
		v-model="splitterModel"
		style="height: 300px"
		:limits="[0, 100]"
		before-class="overflow-hidden"
		after-class="overflow-hidden"
		separator-class="bg-black"
	>
		<template v-slot:before>
			<div class="flex flex-center bg-white">
				<q-btn
					label="Masculino"
					color="blue"
					@click="genero('Masculino')"
				/>
			</div>
		</template>

		<template v-slot:after>
			<div class="flex flex-center bg-white">
				<q-btn
					label="Femenino"
					color="pink"
					@click="genero('Femenino')"
				/>
			</div>
		</template>
	</q-splitter>
</template>

<script>
	import { mapMutations } from "vuex";
	export default {
		name: "Genero",
		data() {
			return {
				splitterModel: 50, // start at 50%
			};
		},
		computed: {},
		methods: {
			...mapMutations("perfiles", ["updateGenero", "updateStep"]),
			genero(value) {
				this.updateGenero(value);
				this.updateStep(2);
			},
		},
	};
</script>
