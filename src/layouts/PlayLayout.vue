<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <play-header />
    <play-footer />

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import PlayHeader from "components/PlayHeader.vue";
  import PlayFooter from "components/PlayFooter.vue";
  export default {
    name: "PlayLayout",
    components: {
      PlayHeader,
      PlayFooter,
    },
    data() {
      return {};
    },
  };
</script>
