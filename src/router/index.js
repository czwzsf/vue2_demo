import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      permission: false,
    },
  },
  {
    path: "/about",
    permission: false,
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/home",
    component: () => import("@/views/HomeView.vue"),
    permission: false,
    // 子路由
    children: [
      {
        path: "news",
        component: () => import("@/views/NewsView.vue"),
        permission: true,
      },
      {
        path: "message",
        component: () => import("@/views/MessageView.vue"),
        permission: true,
        children: [
          {
            name: "xiangqing",
            path: "detail/",
            component: () => import("@/views/DetailView.vue"),
            permission: true,
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
router.beforeEach((to, from, next) => {
  if (localStorage.getItem("school") === "atguigu") {
    next();
  }
});
export default router;
