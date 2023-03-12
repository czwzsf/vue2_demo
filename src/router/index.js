import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/home",
    component: () => import("@/views/HomeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
