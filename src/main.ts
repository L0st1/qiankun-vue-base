import { createApp, nextTick } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "@/style/element/index.scss";
//@ts-expect-error
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "dayjs/locale/zh-cn";
import dayjs from "dayjs";
import { useQiankun } from "./core";

dayjs.locale("zh-cn");

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
    namespace: "base",
  })
  .mount("#app");

nextTick(() => {
  useQiankun();
});
