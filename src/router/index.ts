import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/usulan",
        name: "usulan",
        children: [
          {
            path: "",
            name: "usulan",
            component: () => import("@/views/usulan/Usulan.vue"),
            meta: {
              pageTitle: "Usulan",
              breadcrumbs: ["Usulan"],
            },
          },
          {
            path: "/usulan/form/:id",
            name: "form-usulan",
            component: () => import("@/views/usulan/FormUsulan.vue"),
            meta: {
              pageTitle: "Form Usulan",
              breadcrumbs: ["Usulan", "PLTS Terpadu"],
            },
          },
          {
            path: "/usulan/detail/:id",
            name: "detail-usulan",
            component: () => import("@/views/usulan/FormUsulan.vue"),
            meta: {
              pageTitle: "Detail Usulan",
              breadcrumbs: ["Usulan", "PLTS Terpadu"],
            },
          },
        ],
      },
      {
        path: "/pembangunan",
        name: "group-pembangunan",
        children: [
          {
            path: "",
            name: "pembangunan",
            component: () => import("@/views/pembangunan/Pembangunan.vue"),
            meta: {
              pageTitle: "Pembangunan",
              breadcrumbs: ["Pembangunan"],
            },
          },
          {
            path: "/pembangunan/form/:id",
            name: "form-pembangunan",
            component: () => import("@/views/pembangunan/FormPembangunan.vue"),
            meta: {
              pageTitle: "Form Pembangunan",
              breadcrumbs: ["Pembangunan", "PLTS Terpadu"],
            },
          },
          {
            path: "/pembangunan/detail/:id",
            name: "detail-pembangunan",
            component: () => import("@/views/pembangunan/FormPembangunan.vue"),
            meta: {
              pageTitle: "Detail Pembangunan",
              breadcrumbs: ["Pembangunan", "Form"],
            },
          },
          {
            path: "/pembangunan/verifikasi/:id",
            name: "verifikasi-pembangunan",
            component: () => import("@/views/pembangunan/FormPembangunan.vue"),
            meta: {
              pageTitle: "Verifikasi Pembangunan",
              breadcrumbs: ["Pembangunan", "Verifikasi"],
            },
          },
          {
            path: "/pembangunan/detail-verifikasi/:id",
            name: "detail-verifikasi-pembangunan",
            component: () => import("@/views/pembangunan/FormPembangunan.vue"),
            meta: {
              pageTitle: "Detail Verifikasi Pembangunan",
              breadcrumbs: ["Pembangunan", "Verifikasi"],
            },
          },
        ],
      },
      {
        path: "/pengadaan",
        name: "pengadaan",
        children: [
          {
            path: "",
            name: "pengadaan",
            component: () => import("@/views/pengadaan/Pengadaan.vue"),
            meta: {
              pageTitle: "Pengadaan",
              breadcrumbs: ["Pengadaan"],
            },
          },
          {
            path: "/pengadaan/form/:id",
            name: "form-pengadaan",
            component: () => import("@/views/pengadaan/FormPengadaan.vue"),
            meta: {
              pageTitle: "Form Pengadaan",
              breadcrumbs: ["Pengadaan", "PLTS Terpadu"],
            },
          },
          {
            path: "/pengadaan/detail/:id",
            name: "detail-pengadaan",
            component: () => import("@/views/pengadaan/FormPengadaan.vue"),
            meta: {
              pageTitle: "Detail Pengadaan",
              breadcrumbs: ["Pengadaan", "Form"],
            },
          },
        ],
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/login",
        name: "sign-in",
        component: () => import("@/views/SignIn.vue"),
        meta: {
          pageTitle: "Login",
        },
      },
      // {
      //   path: "/register",
      //   name: "register",
      //   component: () => import("@/views/SignUp.vue"),
      //   meta: {
      //     pageTitle: "Register",
      //   },
      // },
      // {
      //   path: "/password-reset",
      //   name: "password-reset",
      //   component: () =>
      //     import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
      //   meta: {
      //     pageTitle: "Password reset",
      //   },
      // },
    ],
  },
  // {
  //   path: "/multi-step-sign-up",
  //   name: "multi-step-sign-up",
  //   component: () =>
  //     import("@/views/crafted/authentication/MultiStepSignUp.vue"),
  //   meta: {
  //     pageTitle: "Multi-step Sign up",
  //   },
  // },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  // authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
