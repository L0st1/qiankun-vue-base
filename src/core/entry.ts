import store from "@/store";
import router from "@/router";
import { RegistrableApp } from "qiankun/es/interfaces";

export const appList: RegistrableApp<Record<string, unknown>>[] = [
  {
    name: "app-vue-hash",
    entry: "http://localhost:1111",
    container: "#appContainer",
    activeRule: "/app-vue-hash",
    props: { data: { store, router } },
  },
  {
    name: "app-vue-history",
    entry: "http://localhost:2222",
    container: "#appContainer",
    activeRule: "/app-vue-history",
    props: { data: store },
  },
  {
    name: "app-vue-vite",
    entry: "http://localhost:3333",
    container: "#appContainer",
    activeRule: "/app-vue-vite",
  },
];
