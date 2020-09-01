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
  export default {
    name: "PerfilesLayout",
    components: {
      PerfilesHeader: () => import("components/PerfilesHeader.vue"),
      PerfilesFooter: () => import("components/PerfilesFooter.vue"),
    },
    data() {
      return {
        leftDrawer: true,
      };
    },
  };
</script>
