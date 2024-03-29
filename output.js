{
  mode: 'development',
  context: 'D:\\1repo\\qiankun-vue3\\base-vue3',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [
        'D:\\1repo\\qiankun-vue3\\base-vue3\\vue.config.js'
      ]
    }
  },
  output: {
    hashFunction: 'xxhash64',
    path: 'D:\\1repo\\qiankun-vue3\\base-vue3\\dist',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'D:\\1repo\\qiankun-vue3\\base-vue3\\src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules',
      'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\@vue+cli-service@5.0.8_lodash@4.17.21_prettier@2.8.8_sass-loader@12.6.0_vue@3.4.21\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\@vue+cli-plugin-typescript@5.0.8_@vue+cli-service@5.0.8_eslint@7.32.0_typescript@4.5.5_vue@3.4.21\\node_modules\\@vue\\cli-plugin-typescript\\node_modules',
      'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\@vue+cli-plugin-babel@5.0.8_@vue+cli-service@5.0.8_core-js@3.36.0_vue@3.4.21\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules',
      'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\@vue+cli-service@5.0.8_lodash@4.17.21_prettier@2.8.8_sass-loader@12.6.0_vue@3.4.21\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-loader@17.4.2_vue@3.4.21_webpack@5.90.3\\node_modules\\vue-loader\\dist\\index.js',
            options: {
              cacheDirectory: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '072debf1',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\sass-loader@12.6.0_sass@1.71.1_webpack@5.90.3\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\sass-loader@12.6.0_sass@1.71.1_webpack@5.90.3\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\sass-loader@12.6.0_sass@1.71.1_webpack@5.90.3\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\sass-loader@12.6.0_sass@1.71.1_webpack@5.90.3\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\sass-loader@12.6.0_sass@1.71.1_webpack@5.90.3\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\sass-loader@12.6.0_sass@1.71.1_webpack@5.90.3\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\sass-loader@12.6.0_sass@1.71.1_webpack@5.90.3\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\sass-loader@12.6.0_sass@1.71.1_webpack@5.90.3\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\css-loader@6.10.0_webpack@5.90.3\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\postcss-loader@6.2.1_postcss@8.4.35_webpack@5.90.3\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: []
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\babel-loader@8.3.0_@babel+core@7.24.0_webpack@5.90.3\\node_modules\\babel-loader\\lib\\index.js',
            options: {
              cacheCompression: false,
              cacheDirectory: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '79f9c453'
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\babel-loader@8.3.0_@babel+core@7.24.0_webpack@5.90.3\\node_modules\\babel-loader\\lib\\index.js'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\ts-loader@9.5.1_typescript@4.5.5_webpack@5.90.3\\node_modules\\ts-loader\\index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\babel-loader@8.3.0_@babel+core@7.24.0_webpack@5.90.3\\node_modules\\babel-loader\\lib\\index.js'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\ts-loader@9.5.1_typescript@4.5.5_webpack@5.90.3\\node_modules\\ts-loader\\index.js',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      {
        options: {
          test: /\.css(\?.*)?$/i,
          warningsFilter: () => true,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minimizer: {
            implementation: function () { /* omitted long function */ },
            options: {}
          }
        }
      }
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 60000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: function () { /* omitted long function */ }
        },
        commons: {
          name: 'chunk-commons',
          test: 'D:\\1repo\\qiankun-vue3\\base-vue3\\src\\components',
          minChunks: 3,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new Plugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        },
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __VUE_I18N_PROD_DEVTOOLS__: false
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: '涓诲簲鐢?,
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        template: 'D:\\1repo\\qiankun-vue3\\base-vue3\\public\\index.html'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      {
        patterns: [
          {
            from: 'D:\\1repo\\qiankun-vue3\\base-vue3\\public',
            to: 'D:\\1repo\\qiankun-vue3\\base-vue3\\dist',
            toType: 'dir',
            noErrorOnMissing: true,
            globOptions: {
              ignore: [
                '**/.DS_Store',
                'D:/1repo/qiankun-vue3/base-vue3/public/index.html'
              ]
            },
            info: {
              minimized: true
            }
          }
        ]
      }
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: 'D:\\1repo\\qiankun-vue3\\base-vue3\\node_modules\\.pnpm\\vue@3.4.21_typescript@4.5.5\\node_modules\\vue\\compiler-sfc\\index.js'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: false
          }
        }
      }
    ),
    {
      apply: function () { /* omitted long function */ }
    },
    {
      options: {
        test: /\.[cm]?js(\?.*)?$/i,
        extractComments: false,
        parallel: true,
        include: undefined,
        exclude: undefined,
        minimizer: {
          implementation: function () { /* omitted long function */ },
          options: {
            warnings: false,
            format: {
              comments: false
            },
            compress: {
              drop_debugger: false,
              drop_console: false,
              pure_funcs: [
                'console.log'
              ]
            }
          }
        }
      }
    }
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  }
}
