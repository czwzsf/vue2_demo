import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/home",
    component: () => import("@/views/HomeView.vue"),
    // 子路由
    children: [
      {
        path: "news",
        component: () => import("@/views/NewsView.vue"),
      },
      {
        path: "message",
        component: () => import("@/views/MessageView.vue"),
        children: [
          {
            name: "xiangqing",
            path: "detail/",
            component: () => import("@/views/DetailView.vue"),
            // 开启props传参 第一种写法
            // props: true,
            // 开启props传参 第二种写法
            props($route) {
              return {
                id: $route.query.id,
                title: $route.query.title,
              };
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
