<template>
  <q-layout view="hHh Lpr fFf">
    <!-- (Optional) The Header -->
    <q-header>
      <q-toolbar>
        <q-btn flat :to="{ name: 'Perfiles' }" round dense icon="arrow_left" />
        <q-toolbar-title>
          Crear Perfil
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <perfiles-footer />

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    name: "CrearPerfilLayout",
    components: {
      PerfilesFooter: () => import("components/PerfilesFooter.vue"),
    },
    data() {
      return {
        leftDrawer: true,
      };
    },
  };
</script>
