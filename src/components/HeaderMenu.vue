<template>
	<q-menu transition-show="jump-down" transition-hide="jump-up">
		<q-list style="min-width: 100px">
			<q-item :to="{ name: 'Perfiles' }" clickable v-ripple>
				<q-item-section avatar>
					<q-icon color="indigo-9" name="account_circle" />
				</q-item-section>
				<q-item-section>Perfil</q-item-section>
			</q-item>
			<q-item clickable v-ripple>
				<q-item-section avatar>
					<q-icon color="indigo-9" name="shopping_bag" />
				</q-item-section>
				<q-item-section>Tienda</q-item-section>
			</q-item>
			<q-item clickable v-ripple>
				<q-item-section avatar>
					<q-icon color="indigo-9" name="offline_bolt" />
				</q-item-section>
				<q-item-section>Poderes</q-item-section>
			</q-item>
			<q-item clickable v-ripple>
				<q-item-section avatar>
					<q-icon color="indigo-9" name="stars" />
				</q-item-section>
				<q-item-section>Logros</q-item-section>
			</q-item>
			<q-item clickable v-ripple>
				<q-item-section avatar>
					<q-icon color="indigo-9" name="settings" />
				</q-item-section>
				<q-item-section>Configuracion</q-item-section>
			</q-item>
		</q-list>
	</q-menu>
</template>

<script>
	export default {
		name: "HeaderMenu",
		data() {
			return {};
		},
	};
</script>
