import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EmptyView from "../views/HomeView.vue";
import MicroAppRoute from "@/components/MicroAppRouteComponent.vue";

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
  // 处理控制台警告 [Vue Router warn]: No match found for location with path
  // 要求当前接入的所有微应用都是 "app-" 开头
  {
    path: "/app-:appName(.*)",
    name: 'MicroApp',
    component: MicroAppRoute, // 一个空内容的组件
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
