import { createRouter, createWebHistory } from "vue-router";
// import { authStore } from "../stores/authStore";

const routes = [
  {
    path: "",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      requiredAuth: false,
      layout: true,
    },
  },
  {
    path: "/application",
    name: "Appication",
    component: () => import("../views/Application.vue"),
    meta: {
      layout: false
    },
    children: [
      {
        path: "client-registration",
        name: "ClientRegistration",
        component: () => import("../components/ClientRegistration.vue")
      },
      {
        path: "employment",
        name: "Employment",
        component: () => import("../components/Employment.vue")
      },
      {
        path: "address",
        name: "Address",
        component: () => import("../components/Address.vue")
      },
      {
        path: "preview",
        name: "Preview",
        component: () => import("../components/Preview.vue")
      }
    ]
  }
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("../views/Login.vue"),
  //   meta: {
  //     requiredAuth: false,
  //     layout: false,
  //   },
  // },
  // {
  //   path: "/signup",
  //   name: "Signup",
  //   component: () => import("../views/Signup.vue"),
  //   meta: {
  //     requiredAuth: false,
  //     layout: false,
  //   },
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async(to) => {
//   if (to.path == "/login" && authStore.authUser) {
//     router.push("/chat");
//   }
//   if (to.meta.requiredAuth && !authStore().authUser) {
//     router.push("/login");
//   }
// });

export default router