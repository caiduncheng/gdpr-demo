export default {
  mode: "universal",
  target: "server",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utt-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
  },
  css: [
    { src: "element-ui/lib/theme-chalk/index.css" },
    "~assets/css/tailwind.css",
    "~assets/css/index.scss",
  ],
  buildModules: ["@nuxtjs/tailwindcss"],
  plugins: [
    {
      src: "~plugins/element-ui",
      ssr: true,
    },
    "~/plugins/i18n.js",
    "~/plugins/axios",
  ],
  components: true,
  router: {
    middleware: "i18n",
  },
  generate: {
    routes: ["/", "zh-CN"],
  },
  modules: ["@nuxtjs/axios"],
  // axios: {
  //   proxy: true,
  //   credentials: true,
  // },
  // proxy: {
  //   "/api/online/authorization": {
  //     target: "https://operator.opennl.com",
  //     pathRewrite: { "/api/online/authorization": "/online/authorization" },
  //     changeOrigin: true,
  //     secure: false,
  //   },
  //   "/api/online/management": {
  //     target: "https://operator.opennl.com",
  //     pathRewrite: { "/api/online/management": "/online/management" },
  //     changeOrigin: true,
  //     secure: false,
  //   },
  //   "/api": {
  //     target: "https://operator.opennl.com",
  //     secure: false,
  //     pathRewrite: { "/api": "" },
  //     changeOrigin: true,
  //   },
  // },
  env: {
    VUE_APP_BASE_API: process.env.VUE_APP_BASE_API,
  },
};
