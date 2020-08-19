<template>
	<q-header elevated>
		<q-toolbar>
			<q-img
				src="~assets/Logo.png"
				:ratio="16 / 9"
				spinner-color="primary"
				spinner-size="82px"
				width="100px"
			/>
			<q-toolbar-title>Perfiles</q-toolbar-title>
			<div v-if="$q.screen.width > 768">
				<q-btn-dropdown stretch flat label="v-0a4">
					<q-list>
						<q-item-label header
							>Ultima version: v-0a4</q-item-label
						>
						<q-item clickable v-ripple>
							<q-item-section avatar>
								<q-icon color="primary" name="article" />
							</q-item-section>
							<q-item-section>Notas de version</q-item-section>
						</q-item>
						<q-item clickable v-ripple>
							<q-item-section avatar>
								<q-icon color="amber" name="bug_report" />
							</q-item-section>
							<q-item-section>Reporte de bugs</q-item-section>
						</q-item>
						<q-item clickable v-ripple>
							<q-item-section avatar>
								<q-icon color="black" name="fab fa-github" />
							</q-item-section>
							<q-item-section>Repositorio</q-item-section>
						</q-item>
					</q-list>
				</q-btn-dropdown>
				<q-btn-dropdown icon="support" stretch flat label="Soporte">
					<q-list>
						<q-item clickable v-ripple>
							<q-item-section avatar>
								<q-icon color="primary" name="assignment" />
							</q-item-section>
							<q-item-section>Documentacion</q-item-section>
						</q-item>
						<q-item clickable v-ripple>
							<q-item-section avatar>
								<q-icon color="black" name="fab fa-github" />
							</q-item-section>
							<q-item-section>Repositorio</q-item-section>
						</q-item>
						<q-item clickable v-ripple>
							<q-item-section avatar>
								<q-icon color="accent" name="phone" />
							</q-item-section>
							<q-item-section>Contacto</q-item-section>
						</q-item>
						<q-item-label header>Social</q-item-label>
						<q-item clickable v-ripple>
							<q-item-section avatar>
								<q-icon
									color="primary"
									name="fab fa-facebook"
								/>
							</q-item-section>
							<q-item-section>Facebook</q-item-section>
						</q-item>
						<q-item clickable v-ripple>
							<q-item-section avatar>
								<q-icon
									color="amber-9"
									name="fab fa-instagram"
								/>
							</q-item-section>
							<q-item-section>Instagram</q-item-section>
						</q-item>
					</q-list>
				</q-btn-dropdown>
			</div>
			<q-btn flat round dense v-else>
				<q-icon name="more_vert" />
			</q-btn>
		</q-toolbar>
	</q-header>
</template>

<script>
	export default {
		name: "PerfilesHeader",
		data() {
			return {};
		},
	};
</script>
