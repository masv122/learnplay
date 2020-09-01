<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-primary" elevated>
      <q-toolbar>
        <q-btn flat :to="{ name: 'Inicio' }" round dense icon="arrow_left" />
        <q-toolbar-title>
          Perfil
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
    name: "Perfil",
    data() {
      return {
        leftDrawer: true,
      };
    },
  };
</script>
