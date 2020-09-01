<template>
  <q-layout view="lHh Lpr lFf">
    <sup-header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    name: "MainLayout",
    components: {
      SupHeader: () => import("components/SupHeader.vue"),
    },
    data() {
      return {};
    },
  };
</script>
