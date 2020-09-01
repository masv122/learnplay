const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "Inicio", component: () => import("pages/Inicio.vue") },
    ],
  },
  {
    path: "/play",
    component: () => import("layouts/PlayLayout.vue"),
    children: [
      { path: "", name: "Play", component: () => import("pages/Play.vue") },
    ],
  },
  {
    path: "/perfiles",
    component: () => import("layouts/PerfilesLayout.vue"),
    children: [
      {
        path: "",
        name: "Perfiles",
        component: () => import("pages/Perfiles.vue"),
      },
    ],
  },
  {
    path: "/crear-perfil",
    component: () => import("layouts/CrearPerfilLayout.vue"),
    children: [
      {
        path: "",
        name: "CrearPerfil",
        component: () => import("pages/CrearPerfil.vue"),
      },
    ],
  },
  {
    path: "/perfil",
    component: () => import("layouts/Perfil.vue"),
    children: [
      {
        path: "",
        name: "Perfil",
        component: () => import("pages/Perfil.vue"),
      },
    ],
  },
  {
    path: "/fotos",
    component: () => import("layouts/Fotos.vue"),
    children: [
      {
        path: "",
        name: "Fotos",
        component: () => import("pages/Fotos.vue"),
      },
    ],
  },
  {
    path: "/configuracion",
    component: () => import("layouts/ConfiguracionLayout.vue"),
    children: [
      {
        path: "",
        name: "Configuracion",
        component: () => import("pages/Configuracion.vue"),
      },
    ],
  },

  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
