<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to Perfiles with the Layout demo on docs -->

    <perfiles-header />
    <perfiles-footer />

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import PerfilesHeader from "components/PerfilesHeader.vue";
  import PerfilesFooter from "components/PerfilesFooter.vue";
  export default {
    name: "PerfilesLayout",
    components: {
      PerfilesHeader,
      PerfilesFooter,
    },
    data() {
      return {
        leftDrawer: true,
      };
    },
  };
</script>
