import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EmptyView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "base-empty",
    component: EmptyView,
  },
  {
    path: "/about",
    name: "base-about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
