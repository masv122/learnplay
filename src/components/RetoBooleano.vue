<template>
	<q-card class="my-card">
		<q-card-section class="text-center">
			<div class="text-h6">Selecciona si es verdadero o falso</div>
			<div class="text-subtitle2">Pregunta</div>
		</q-card-section>
		<q-card-section class="text-center">
			<div class="row">
				<div class="col">
					<q-btn icon="check" size="lg" color="positive" />
				</div>
				<div class="col">
					<q-btn icon="cancel" size="lg" color="negative" />
				</div>
			</div>
		</q-card-section>
	</q-card>
</template>

<script>
	export default {
		name: "RetoBooleano",
		data() {
			return {};
		},
	};
</script>

<style>
	.my-card {
		width: 100%;
		max-width: 450px;
	}
</style>
