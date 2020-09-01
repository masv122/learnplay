<template>
	<q-dialog @show="insertar" v-model="_resumenFinal" persistent>
		<q-card style="width: 700px; max-width: 80vw;">
			<q-toolbar>
				<q-avatar>
					<img src="~assets/Logo.png" />
				</q-avatar>
				<q-toolbar-title
					><span class="text-weight-bold"
						>Resumen</span
					></q-toolbar-title
				>
			</q-toolbar>

			<q-separator />

			<q-card-section style="max-height: 50vh" class="scroll">
				<q-list separator>
					<q-item
						clickable
						v-ripple
						v-for="(item, index) in items"
						:key="index"
					>
						<q-item-section avatar>
							<q-icon :name="item.icon" :color="item.color" />
						</q-item-section>
						<q-item-section>{{ item.titulo }}</q-item-section>
						<q-item-section side>{{
							item.funcion()
						}}</q-item-section>
					</q-item>
				</q-list>
			</q-card-section>

			<q-separator />

			<q-card-actions align="right">
				<q-btn
					flat
					label="Aceptar"
					color="primary"
					v-close-popup
					@click="guardarProgreso"
				/>
			</q-card-actions>
		</q-card>
	</q-dialog>
</template>

<script>
	import { mapState, mapMutations, mapGetters } from "vuex";
	export default {
		name: "ResumenFinal",
		data() {
			return {
				items: [
					{
						titulo: "Tiempo Jugado",
						icon: "history",
						color: "primary",
						funcion: () => this.cronometro,
					},
				],
				objetos: [
					{
						titulo: "Correctas",
						icon: "check",
						color: "positive",
						funcion: () => this.correctas,
					},
					{
						titulo: "incorrectas",
						icon: "clear",
						color: "negative",
						funcion: () => this.incorrectas,
					},
				],
				i: 0,
			};
		},
		watch: {
			i(value) {
				if (value === 2) {
					clearInterval(this.insercion);
				}
			},
		},
		computed: {
			...mapState("play", ["resumenFinal"]),
			...mapState("perfiles", ["perfil"]),
			...mapState("puntaje", [
				"correctas",
				"incorrectas",
				"nivel",
				"exp",
			]),
			...mapGetters("cronometro", ["cronometro"]),
			_resumenFinal: {
				get() {
					return this.resumenFinal;
				},
				set() {
					this.updateResumenFinal();
				},
			},
		},
		methods: {
			...mapMutations("play", ["updateResumenFinal"]),
			insertar() {
				this.i;
				this.insercion = setInterval(() => {
					this.items.push(this.objetos[this.i]);
					this.i++;
				}, 1000);
			},
			async guardarProgreso() {
				this.perfil.setNivel(this.nivel);
				this.perfil.setExp(this.exp);
				this.perfil.setCorrectas(
					0,
					this.perfil.estadisticas.basico.correctas + this.correctas
				);
				this.perfil.setIncorrectas(
					0,
					this.perfil.estadisticas.basico.incorrectas +
						this.incorrectas
				);
				if (await this.perfil.guardarPerfil())
					this.$router.push({ name: "Inicio" });
			},
		},
	};
</script>
