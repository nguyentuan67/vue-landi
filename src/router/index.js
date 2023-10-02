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
  },
  {
    path: "/vib/application",
    name: "VibApplication",
    component: () => import("../views/VibCardApplication.vue"),
    children: [
      {
        path: "card-feature",
        name: "VibCardFeature",
        component: () => import("../components/vib/CardFeature.vue")
      },
      {
        path: "register",
        name: "VibCardRegister",
        component: () => import("../components/vib/CardRegister.vue")
      },
      {
        path: "information",
        name: "VibInformation",
        component: () => import("../components/vib/Information.vue")
      },
      {
        path: "face-authen",
        name: "VibFaceAuthen",
        component: () => import("../components/vib/FaceAuthen.vue")
      },
      {
        path: "address",
        name: "VibAddress",
        component: () => import("../components/vib/Address.vue")
      },
      {
        path: "verify",
        name: "VibVerify",
        component: () => import("../components/vib/Verify.vue")
      }
    ]
  },
  {
    path: "/success",
    name: "VibSuccess",
    component: () => import("../components/vib/Success.vue")
  },
  {
    path: "/moneycat",
    name: "MoneyCat",
    component: () => import("../views/MoneyCat.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("../components/moneyCat/Login.vue")
      },
      {
        path: "faq",
        name: "Faq",
        component: () => import("../components/moneyCat/Faq.vue")
      },
      {
        path: "",
        name: "MoneyCatHome",
        component: () => import("../views/MoneyCatHome.vue")
      },
      {
        path: "payment",
        name: "MoneyCatPayNavbar",
        component: () => import("../views/MoneyCatPayNavbar.vue"),
        children: [
          {
            path: "",
            name: "PhoneInput",
            component: () => import("../components/moneyCat/PhoneInputPay.vue")
          },
          {
            path: "nidInput",
            name: "NidInput",
            component: () => import("../components/moneyCat/NidInputPay.vue")
          },
        ]
      },
      {
        path: "about",
        name: "About",
        component: () => import("../components/moneyCat/About.vue")
      },
      {
        path: "success",
        name: "Success",
        component: () => import("../components/moneyCat/Success.vue")
      }
    ]
  },
  {
    path: "/moneycat/application",
    name: "MoneyCatApplication",
    component: () => import("../views/MoneyCatApplication.vue"),
    children: [
      {
        path: "register",
        name: "MoneyCatRegister",
        component: () => import("../components/moneyCat/Register.vue"),
      },
      {
        path: "verify",
        name: "MoneyCatVerify",
        component: () => import("../components/moneyCat/Verify.vue"),
      }
    ]
  },
  {
    path: "/verify",
    name: "EmailVerify",
    component: () => import("../views/EmailVerify.vue"),
    beforeEnter: (to, from, next) => {
      //kiểm tra tồn tại token
      if (to.query.token) {
        next();
      } else {
        next({ name: 'Home' });
      }
    }
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