<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->
    <q-header class="bg-white text-black" elevated>
      <q-toolbar>
        <q-btn flat :to="{ name: 'Inicio' }" round dense icon="arrow_left" />
        <q-toolbar-title>
          Configuracion
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
  export default {
    name: "ConfiguracionLayout",

    data() {
      return {
        leftDrawer: true,
      };
    },
  };
</script>
