<template>
	<q-page padding>
		<q-file v-model="nuevaFoto" label="Standard" class="file" ref="file" />
		<q-carousel swipeable animated v-model="fotoSel" thumbnails infinite>
			<q-carousel-slide
				v-for="(foto, index) in fotosEncoded"
				:name="index"
				:key="index"
				:img-src="foto.ruta"
			/>
		</q-carousel>
		<!-- 		<img
			v-for="(foto, index) in fotosEncoded"
			:key="index"
			:src="foto.ruta"
			:ratio="16 / 9"
			class="col-3"
		/>
 -->
		<!-- 			<q-card-actions align="right">
				<q-btn
					flat
					round
					color="red"
					icon="delete"
					@click="eliminarFoto(index)"
				/>
				<q-btn
					flat
					round
					color="primary"
					icon="check"
					@click="seleccionarFoto(foto)"
				/>
			</q-card-actions>
		</q-card> -->
		<!-- 		<q-card class="col-auto q-px-md q-py-md flex flex-center" flat bordered>
			<q-btn
				flat
				round
				icon="add"
				color="green"
				@click="$refs.file.pickFiles()"
			/>
		</q-card> -->

		<q-page-sticky position="bottom-right" :offset="[18, 18]">
			<q-fab
				color="primary"
				icon="keyboard_arrow_left"
				direction="left"
				text-color="white"
			>
				<q-fab-action
					fab
					icon="add"
					color="green"
					@click="$refs.file.pickFiles()"
				/>
				<q-fab-action
					color="negative"
					@click="eliminarFoto"
					icon="delete"
				/>
				<q-fab-action
					color="info"
					@click="establecerFotoPerfil"
					icon="check"
				/>
			</q-fab>
		</q-page-sticky>
	</q-page>
</template>

<script>
	import { mapState, mapMutations, mapActions } from "vuex";
	export default {
		name: "Fotos",
		data() {
			return {
				nuevaFoto: null,
				fotosEncoded: null,
				fotoSel: 1,
			};
		},
		watch: {
			nuevaFoto: {
				async handler(val) {
					try {
						if (!!(await this.perfil.guardarFoto(val)))
							this.fotosEncoded.push({
								name: val.name,
								ruta: this.fotoEncoded(val),
							});
					} catch (e) {
						console.log(e);
					}
				},
			},
		},
		computed: {
			...mapState("perfiles", ["perfil"]),
		},
		methods: {
			...mapMutations("perfiles", [
				"updateFotosPerfil",
				"updateFotoPerfil",
			]),
			...mapActions("perfiles", ["cargarPerfiles"]),
			fotoEncoded(file) {
				return URL.createObjectURL(file);
			},
			async cargarFotosEncoded() {
				try {
					this.fotosEncoded = [];
					await this.perfil.fotos.forEach(async (element, index) => {
						const foto = await this.$db.local.rel.getAttachment(
							"perfil",
							this.perfil.id,
							element
						);
						this.fotosEncoded.push({
							name: element,
							ruta: this.fotoEncoded(foto),
						});
					});
				} catch (e) {
					console.log(e);
				}
			},
			async eliminarFoto() {
				if (await this.perfil.eliminarFoto(this.fotoSel))
					this.fotosfotoEncoded.splice(this.fotoSel, 1);
			},
			async establecerFotoPerfil() {
				if (
					await this.perfil.establecerFotoPerfil(
						this.perfil.fotos[this.fotoSel]
					)
				)
					this.$router.push({ name: "Perfil" });
			},
		},
		async mounted() {
			this.cargarFotosEncoded();
		},
	};
</script>

<style>
	.file {
		display: none;
	}
</style>
