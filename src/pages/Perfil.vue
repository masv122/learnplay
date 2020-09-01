<template>
	<q-page padding class="flex flex-center">
		<q-avatar size="150px" v-if="!!perfil && !!perfil.fotoPerfil">
			<img :src="perfil.fotoPerfil.foto" />
			<q-btn
				fab
				color="primary"
				icon="camera"
				class="absolute"
				style="top: 120px; botton: 0; right: 8px; transform: translateY(-50%);"
				:to="{ name: 'Fotos' }"
			/>
		</q-avatar>
		<q-avatar
			v-else
			size="xl"
			color="primary"
			text-color="white"
			icon="perm_identity"
		/>
		<q-list padding>
			<!-- <q-separator spaced /> -->
			<q-item>
				<q-item-section avatar>
					<q-icon size="lg" color="primary" name="account_circle" />
				</q-item-section>

				<q-item-section>
					<q-item-label caption>Nombre y Apellido</q-item-label>
					<q-item-label>{{ nombreCompleto }}</q-item-label>
				</q-item-section>
				<q-item-section side>
					<q-btn
						flat
						round
						icon="edit"
						color="green"
						@click="editarNombreApellido"
					/>
				</q-item-section>
			</q-item>
			<q-separator spaced inset="item" />
			<q-item>
				<q-item-section avatar>
					<q-icon size="lg" color="primary" name="calendar_today" />
				</q-item-section>

				<q-item-section>
					<q-item-label caption>Fecha de nacimiento</q-item-label>
					<q-item-label>{{ perfil.fecha }}</q-item-label>
				</q-item-section>
				<q-item-section side>
					<q-btn
						flat
						round
						icon="edit"
						color="green"
						@click="editarFecha"
					/>
				</q-item-section>
			</q-item>
			<q-separator spaced inset="item" />
			<q-item>
				<q-item-section top avatar>
					<q-icon size="lg" color="primary" name="face" />
				</q-item-section>

				<q-item-section>
					<q-item-label caption>Genero</q-item-label>
					<q-item-label>{{ perfil.genero }}</q-item-label>
				</q-item-section>
			</q-item>
			<q-separator spaced inset="item" />
			<q-item>
				<q-item-section top avatar>
					<q-icon size="lg" color="primary" name="upgrade" />
				</q-item-section>

				<q-item-section>
					<q-item-label caption>Nivel</q-item-label>
					<q-item-label>{{ perfil.nivel }}</q-item-label>
				</q-item-section>
			</q-item>
			<q-item clickable @click="logout">
				<q-item-section top avatar>
					<q-icon size="lg" color="red" name="logout" />
				</q-item-section>

				<q-item-section>
					<q-item-label>Cerrar sesion</q-item-label>
				</q-item-section>
			</q-item>
		</q-list>
	</q-page>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import NombreApellido from "components/perfil/NombreApellido";
	import Fecha from "components/perfil/Fecha";
	export default {
		name: "Perfil",
		data() {
			return {};
		},
		computed: {
			...mapState("perfiles", [
				"perfil",
				"nombre",
				"apellido",
				"fecha",
				"foto",
			]),
			nombreCompleto() {
				return `${this.perfil.nombre} ${this.perfil.apellido}`;
			},
			_fecha: {
				get() {
					return this.perfil.fecha;
				},
				set(value) {
					this.updateFechaPerfil(value);
					this.guardarPerfil();
				},
			},
		},
		methods: {
			...mapMutations("perfiles", [
				"updateNombrePerfil",
				"updateApellidoPerfil",
				"updateFechaPerfil",
				"updatePerfil",
			]),
			async guardarPerfil() {
				try {
					await this.$db.local.rel.save("perfil", this.perfil);
					this.$q.localStorage.set("perfil", this.perfil);
					this.$q.notify({
						type: "positive",
						message: "Perfil actualizado",
						timeout: 500,
					});
				} catch (e) {
					console.log(
						"no se pudo actualizar el nombre y apellido: " + e
					);
				}
			},
			editarNombreApellido() {
				this.$q
					.dialog({
						component: NombreApellido,
						parent: this,
						nombre: this.perfil.nombre,
						apellido: this.perfil.apellido,
					})
					.onOk(async () => {
						this.updateNombrePerfil(this.nombre);
						this.updateApellidoPerfil(this.apellido);
						await this.perfil.guardarPerfil();
					});
			},
			editarFecha() {
				this.$q
					.dialog({
						component: Fecha,
						parent: this,
						fecha: this.perfil.fecha,
					})
					.onOk(async () => {
						this.updateFechaPerfil(this.fecha);
						await this.perfil.guardarPerfil();
					});
			},
			logout() {
				this.updatePerfil(null);
				this.$q.localStorage.set("perfil", null);
				this.$router.push({ name: "Perfiles" });
			},
		},
	};
</script>
