<template>
	<q-list separator>
		<q-item clickable v-ripple>
			<q-item-section avatar>
				<q-icon name="history" />
			</q-item-section>
			<q-item-section>Tiempo jugado</q-item-section>
			<q-item-section side>{{ tiempo }}</q-item-section>
		</q-item>

		<q-item clickable v-ripple active-class="text-orange">
			<q-item-section avatar>
				<q-icon name="check" />
			</q-item-section>
			<q-item-section>Retos acertados</q-item-section>
			<q-item-section side>{{ correctas }}</q-item-section>
		</q-item>

		<q-item clickable v-ripple active-class="bg-teal-1 text-grey-8">
			<q-item-section avatar>
				<q-icon name="clear" />
			</q-item-section>
			<q-item-section>Retos fallados</q-item-section>
			<q-item-section side>{{ incorrectas }}</q-item-section>
		</q-item>

		<q-item clickable v-ripple active-class="bg-teal-1 text-grey-8">
			<q-item-section avatar>
				<q-icon name="block" />
			</q-item-section>
			<q-item-section>Retos pasados</q-item-section>
			<q-item-section side>{{ pasadas }}</q-item-section>
		</q-item>

		<q-item clickable v-ripple active-class="bg-teal-1 text-grey-8">
			<q-item-section avatar>
				<q-icon name="offline_bolt" />
			</q-item-section>
			<q-item-section>Veces usado poderes</q-item-section>
			<q-item-section side>{{ poderes }}</q-item-section>
		</q-item>

		<q-item clickable v-ripple active-class="bg-teal-1 text-grey-8">
			<q-item-section avatar>
				<q-icon name="stars" />
			</q-item-section>
			<q-item-section>Logros conseguidos</q-item-section>
			<q-item-section side>
				<q-knob
					:max="10"
					v-model="logros.length"
					show-value
					size="50px"
					:thickness="0.22"
					color="teal"
					track-color="grey-3"
					class="q-ma-md"
				/>
			</q-item-section>
		</q-item>
	</q-list>
</template>

<script>
	export default {
		name: "ListaDificultad",
		props: {
			tiempo: {
				type: Number,
				required: true,
				default: 0,
			},
			correctas: {
				type: Number,
				required: true,
				default: 0,
			},
			incorrectas: {
				type: Number,
				required: true,
				default: 0,
			},
			pasadas: {
				type: Number,
				required: true,
				default: 0,
			},
			poderes: {
				type: Number,
				required: true,
				default: 0,
			},
			logros: {
				type: Array,
				required: true,
				default: () => [],
			},
		},
		data() {
			return {
				value1: 6,
			};
		},
	};
</script>
