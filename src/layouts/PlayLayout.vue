<template>
  <q-layout view="hHh Lpr fFf">
    <play-header />
    <play-footer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    name: "PlayLayout",
    components: {
      PlayHeader: () => import("components/PlayHeader.vue"),
      PlayFooter: () => import("components/PlayFooter.vue"),
    },
    data() {
      return {};
    },
  };
</script>
