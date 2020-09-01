import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  watch: {
    exp(val) {
      if (!!val && val >= this.expMax) {
        console.log(this.exp - this.expMax);
        this.updateExp(this.exp - this.expMax);
        this.increaseNivel();
      }
    },
  },
  computed: {
    ...mapState("puntaje", ["exp"]),
    ...mapGetters("puntaje", ["expMax"]),
  },
  methods: {
    ...mapMutations("puntaje", ["increaseNivel", "updateExp"]),
  },
};
