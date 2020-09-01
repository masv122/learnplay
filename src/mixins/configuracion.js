import { mapState } from "vuex";
export default {
  watch: {
    dark(val) {
      this.$q.dark.set(val);
    },
  },
  computed: {
    ...mapState("global", ["dark"]),
  },
  methods: {},
};
