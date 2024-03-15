/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
const path = require("path");
const { defineConfig } = require("@vue/cli-service");
const TerserPlugin = require("terser-webpack-plugin");
// const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { config: packageConfig } = require("./package.json");
const { publicName, publicPath, pageTitle, port } = packageConfig;

function resolve(dir) {
  return path.join(__dirname, dir);
}
const isDevelopment = process.env.NODE_ENV === "development";

module.exports = defineConfig({
  publicPath,
  outputDir: "dist",
  assetsDir: "",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port,
    open: false,
    client: {
      overlay: {
        runtimeErrors: false, // 不显示ResizeObserver错误
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: (config) => {
    const plugins = [];
    plugins.push(require("unplugin-element-plus/webpack")({})),
      plugins.push(
        new TerserPlugin({
          terserOptions: {
            warnings: false,
            format: {
              comments: false,
            },
            compress: {
              drop_debugger: false, // 注释console
              drop_console: false,
              pure_funcs: ["console.log"], // 移除console
            },
          },
          extractComments: false, // 是否将注释提取到一个单独的文件中
          parallel: true, // 是否并⾏打包
        })
      );

    // // 开启gzip
    // plugins.push(
    //   new CompressionWebpackPlugin({
    //     algorithm: "gzip",
    //     test: /\.(js|css)$/, // 匹配文件名
    //     threshold: 10000, // 对超过10k的数据压缩
    //     deleteOriginalAssets: false, // 不删除源文件
    //     minRatio: 0.8, // 压缩比
    //   })
    // );
    // 开启分离js
    config.optimization = {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(), // 压缩css
      ],
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 1000 * 60,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // 排除node_modules 然后将 @ 替换为空——考虑到服务器的兼容
              const packageName =
                module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )?.[1] || "";
              return `npm.${packageName.replace("@", "")}`;
            },
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, // 被引用3次就提取出来
            priority: 5,
            reuseExistingChunk: true, // 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
          },
        },
      },
    };

    if (!isDevelopment) {
      // 取消webpack警告的性能提示
      config.performance = {
        // 设置所有产物体积阈值，一般超过170KB的产物需进行分割，但最好结合性能监控因地制宜
        maxAssetSize: 172 * 1024,
        // 设置 entry 产物体积阈值
        maxEntrypointSize: 244 * 1024,
        // 报错方式，支持 `error` | `warning` | false
        hints: "warning",
        // 过滤需要监控的文件类型
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith(".js");
        },
      };
    }
    return {
      plugins,
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
    };
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [],
        },
      },
      // scss: {
      //   additionalData: `
      //     @use "@/style/element/index.scss" as *;
      //   `,
      // },
    },
  },
  chainWebpack(config) {
    // 移除 preload 插件
    config.plugins.delete("preload");
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
    // 优化二次启动速度
    config.cache({
      // 将缓存类型设置为文件系统,默认是memory
      type: "filesystem",
      buildDependencies: {
        // 更改配置文件时，重新缓存
        config: [__filename],
      },
    });
    // 版本号在页面显示
    config.plugin("define").tap((args) => {
      // vue-i18n配置
      args[0].__VUE_I18N_FULL_INSTALL__ = true; // 启用/禁用，除了 vue-i18n API，组件和指令都完全支持安装
      args[0].__VUE_I18N_LEGACY_API__ = false; // 启用/禁用 vue-i18n 旧式 API 支持
      args[0].__VUE_I18N_PROD_DEVTOOLS__ = false; // 在生产中启用/禁用@intlify/devtools支持
      return args;
    });
    config.plugin("html").tap((args) => {
      args[0].title = pageTitle;
      return args;
    });
  },
});
