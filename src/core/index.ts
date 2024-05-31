/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  runAfterFirstMounted,
} from "qiankun";
import { appList } from "./entry";

export const qiankunStart = (
  startOptions: any = {
    prefetch: false,
    // sandbox: {
      // strictStyleIsolation: true,
      // experimentalStyleIsolation: true
    // },
    sandbox: true,
  },
  defaultApp = "",
  runAfterFirstMountedCb?: () => void
) => {
  // 注册微应用，可将主应用的router实例和store实例进行下发
  registerMicroApps(appList);

  // 设置默认加载的微应用
  defaultApp && setDefaultMountApp(defaultApp);

  // 第一个微应用加载完成之后的回调函数
  runAfterFirstMountedCb && runAfterFirstMounted(runAfterFirstMountedCb);

  // 启动qiankun
  start(startOptions);
};
