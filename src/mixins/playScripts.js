import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  watch: {
    segundos(val) {
      if (val === 60) {
        this.updateSegundos(0);
        this.increaseMinutos();
      }
    },
  },
  computed: {
    ...mapState("play", [
      "banderas",
      "opcionMultiple",
      "banderasGeneradas",
      "multiplesGeneradas",
      "tipoPrueba",
      "pruebaGenerada",
      "opciones",
      "correctas",
      "incorrectas",
      "pasadas",
      "resumenFinal",
    ]),
    ...mapState("puntaje", ["correctas", "falsas", "pasadas"]),
    ...mapState("cronometro", ["segundos", "minutos", "timer"]),
    ...mapGetters("play", [
      "buscarPruebaBandera",
      "buscarPruebaOpcionMultiple",
    ]),
    _banderasGeneradas: {
      get() {
        return this.banderasGeneradas;
      },
      set(value) {
        this.insertarBanderasGeneradas(value);
      },
    },
    _multiplesGeneradas: {
      get() {
        return this.multiplesGeneradas;
      },
      set(value) {
        this.insertarMultiplesGeneradas(value);
      },
    },
  },
  methods: {
    ...mapMutations("play", [
      "updateBanderasGeneradas",
      "updateMultiplesGeneradas",
      "updateTipoPrueba",
      "updatePruebaGenerada",
      "updateOpciones",
      "insertarBanderasGeneradas",
      "insertarMultiplesGeneradas",
      "updateCorrectas",
      "updateIncorrectas",
      "updatePasadas",
      "increaseCorrectas",
      "increaseIncorrectas",
      "increasePasadas",
      "updateResumenFinal",
    ]),
    ...mapMutations("cronometro", [
      "increaseSegundos",
      "increaseMinutos",
      "updateSegundos",
      "updateMinutos",
      "updateTimer",
      "clearTimer",
    ]),
    ...mapMutations("puntaje", [
      "updateCorrectas",
      "updateIncorrectas",
      "updatePasadas",
      "increaseCorrectas",
      "increaseIncorrectas",
      "increasePasadas",
    ]),
    ...mapMutations("perfiles", [
      "increaseExp",
      "increaseCorrectasPerfil",
      "increaseIncorrectasPerfil",
      "increasePasadasPerfil",
    ]),
    ramdon(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    tipoPruebaGenerador() {
      return this.ramdon(0, 2);
    },
    verificarGenerado(valor, array) {
      return array.find((e) => e === valor);
    },
    recursivo(array, max) {
      let numero = this.ramdon(0, max - 1);
      let bandera = true;
      do {
        if (!!this.verificarGenerado(numero, array)) {
          numero = this.ramdon(0, 20);
        } else {
          array = numero;
          bandera = false;
        }
      } while (bandera);
      return { array, numero };
    },
    max(tipo) {
      return tipo === 0 ? this.banderas.length : this.opcionMultiple.length;
    },
    array(tipo) {
      return tipo === 0 ? this._banderasGeneradas : this._multiplesGeneradas;
    },
    seleccionadorPrueba(tipo, id) {
      return tipo === 0
        ? this.buscarPruebaBandera(id)
        : this.buscarPruebaOpcionMultiple(id);
    },
    generadorOpcionesFalsas(max) {
      let array = [];
      for (let i = 0; i < 2; i++) {
        let resultado = this.recursivo(array, max);
        array = resultado.array;
      }
      return array;
    },
    generarPrueba() {
      let tipoPrueba = this.tipoPruebaGenerador();
      const max = this.max(tipoPrueba);
      let array = this.array(tipoPrueba);
      let resultado = this.recursivo(array, max);
      array = resultado.array;
      let id = resultado.numero;
      this.updateTipoPrueba(tipoPrueba);
      this.updatePruebaGenerada(this.seleccionadorPrueba(tipoPrueba, id));
      // this.opcionesFalsas = this.generadorOpcionesFalsas(max);
    },
    notificacion(resultado) {
      this.$q.notify({
        type: resultado ? "positive" : "negative",
        message: `Respuesta ${resultado ? "correcta" : "incorrecta"}`,
        timeout: 500,
      });
    },
    mayusculas(string) {
      return string.toUpperCase();
    },
    completar(respuestaCorrecta, respuesta) {
      let resultado =
        this.mayusculas(respuestaCorrecta) === this.mayusculas(respuesta);
      this.notificacion(resultado);
      if (resultado) this.correcta();
      else this.incorrecta();
      this.generarPrueba();
    },
    correcta() {
      this.increaseCorrectas();
      this.increaseCorrectasPerfil(0);
      this.increaseExp(50);
    },
    incorrecta() {
      this.increaseIncorrectas();
      this.increaseIncorrectasPerfil(0);
    },
    pasar() {
      this.increasePasadas();
      this.increasePasadasPerfil(0);
      this.generarPrueba();
    },
    upExp() {
      this.increaseExp(10);
    },
    reset() {
      this.updateBanderasGeneradas([]);
      this.updateMultiplesGeneradas([]);
      this.updateTipoPrueba(null);
      this.updatePruebaGenerada(null);
      this.updateOpciones(null);
      this.updateCorrectas(0);
      this.updateIncorrectas(0);
      this.updatePasadas(0);
      this.clearTimer();
      this.updateResumenFinal();
    },
    iniciarCronometro() {
      if (this.segundos === 0)
        this.updateTimer(
          setInterval(() => {
            this.increaseSegundos();
          }, 1000)
        );
    },
    reiniciarCronometro() {
      clearInterval(this.timer);
      this.updateSegundos(0);
      this.updateMinutos(0);
    },
  },
};
