import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  watch: {
    perfil: {
      deep: true,
      immediate: true,
      async handler(val) {
        if (val.exp >= this.calculoExpMax) {
          this.updateExp(this.perfil.exp - this.calculoExpMax);
          this.updateNivel();
          try {
            await this.$db.local.rel.save("perfil", val);
            this.$q.localStorage.set("perfil", val);
          } catch (e) {
            console.log("no se pudo guardar el perfil: " + e);
          }
        }
      },
    },
    "perfil.exp": {
      async handler() {
        try {
          await this.$db.local.rel.save("perfil", this.perfil);
          this.$q.localStorage.set("perfil", this.perfil);
        } catch (e) {
          console.log("no se pudo guardar el perfil: " + e);
        }
      },
    },
    "perfil.estadisticas": {
      deep: true,
      async handler() {
        try {
          await this.$db.local.rel.save("perfil", this.perfil);
          this.$q.localStorage.set("perfil", this.perfil);
        } catch (e) {
          console.log("no se pudo guardar el perfil: " + e);
        }
      },
    },
  },
  computed: {
    ...mapState("perfiles", ["perfil"]),
    ...mapGetters("perfiles", ["calculoExpMax"]),
  },
  methods: {
    ...mapMutations("perfiles", ["updateNivel", "updateExp"]),
  },
};
