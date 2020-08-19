<template>
  <q-layout view="lHh Lpr lFf">
    <sup-header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import SupHeader from "components/SupHeader.vue";
  export default {
    name: "MainLayout",
    components: {
      SupHeader,
    },
    data() {
      return {};
    },
  };
</script>
