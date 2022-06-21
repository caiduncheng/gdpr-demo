const webpack = require("webpack");

require("dotenv").config();
let baseUrl = "";
let operatorAddress = "";
let developerAddress = "";
let manufacturerAddress = "";
let adminAddress = "";
let domain = "";
let mail = "";
let captcha = "";
let privacy = "";

switch (process.env.BASE) {
  case "test":
    baseUrl = process.env.DEV_BASE_URL;
    operatorAddress = process.env.DEV_OPERATOR_ADDRESS;
    developerAddress = process.env.DEV_DEVELOPER_ADDRESS;
    manufacturerAddress = process.env.DEV_MANUFACTURER_ADDRESS;
    adminAddress = process.env.DEV_ADMIN_ADDRESS;
    domain = process.env.DEV_APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    privacy = process.env.PRIVACY;

    break;
  case "dev":
    baseUrl = process.env.TEST_BASE_URL;
    operatorAddress = process.env.TEST_OPERATOR_ADDRESS;
    developerAddress = process.env.TEST_DEVELOPER_ADDRESS;
    manufacturerAddress = process.env.TEST_MANUFACTURER_ADDRESS;
    adminAddress = process.env.TEST_ADMIN_ADDRESS;
    domain = process.env.TEST_APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    privacy = process.env.PRIVACY;

    break;
  case "inte":
    baseUrl = process.env.INTE_BASE_URL;
    operatorAddress = process.env.INTE_OPERATOR_ADDRESS;
    developerAddress = process.env.INTE_DEVELOPER_ADDRESS;
    manufacturerAddress = process.env.INTE_MANUFACTURER_ADDRESS;
    adminAddress = process.env.INTE_ADMIN_ADDRESS;
    domain = process.env.INTE_APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    privacy = process.env.PRIVACY;

    break;
  case "production":
    baseUrl = process.env.PROD_BASE_URL;
    operatorAddress = process.env.PROD_OPERATOR_ADDRESS;
    developerAddress = process.env.PROD_DEVELOPER_ADDRESS;
    manufacturerAddress = process.env.PROD_MANUFACTURER_ADDRESS;
    adminAddress = process.env.PROD_ADMIN_ADDRESS;
    domain = process.env.PROD_APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    privacy = process.env.PRIVACY;

    break;
  case "ld":
    baseUrl = process.env.LD_BASE_URL;
    operatorAddress = process.env.LD_OPERATOR_ADDRESS;
    developerAddress = process.env.LD_DEVELOPER_ADDRESS;
    manufacturerAddress = process.env.LD_MANUFACTURER_ADDRESS;
    adminAddress = process.env.LD_ADMIN_ADDRESS;
    domain = process.env.LD_APP_DOMAIN;
    mail = process.env.LD_EMAIL;
    captcha = process.env.LD_CAPTCHA;
    privacy = process.env.LD_PRIVACY;

    break;
  default:
    baseUrl = process.env.BASE_URL;
    operatorAddress = process.env.OPERATOR_ADDRESS;
    developerAddress = process.env.DEVELOPER_ADDRESS;
    manufacturerAddress = process.env.MANUFACTURER_ADDRESS;
    adminAddress = process.env.ADMIN_ADDRESS;
    domain = process.env.APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    privacy = process.env.PRIVACY;
    break;
}

export default {
  mode: "universal",
  target: "static",
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
      }),
    ],
  },
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
    link: [
      {
        rel: "stylesheet",
        href: "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
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
    // { src: "~/plugins/auth.js", mode: "client" },
    { src: "~/plugins/aos.js", mode: "client" },
  ],
  components: true,
  router: {
    middleware: "i18n",
    base: "/",
    prefetchLinks: false,
    prefetchPayloads: false,
  },
  generate: {
    routes: ["/", "zh-CN"],
  },
  modules: ["@nuxtjs/axios", "vue-scrollto/nuxt", "@nuxtjs/dotenv"],
  axios: {
    proxy: true,
    credentials: true,
  },
  proxy: {
    "/api/online/authorization": {
      target: "https://toms.opennl-dev.com",
      pathRewrite: { "/api/online/authorization": "/online/authorization" },
      changeOrigin: true,
      secure: false,
    },
    "/api/online/developer": {
      target: "http://192.168.35.83:9102",
      pathRewrite: {
        "/api/online/developer": "/online/developer",
      },
      changeOrigin: true,
    },
    "/api/online/management": {
      target: "https://toms.opennl-dev.com",
      pathRewrite: { "/api/online/management": "/online/management" },
      changeOrigin: true,
      secure: false,
    },
    "/api": {
      target: "https://toms.opennl-dev.com",
      secure: false,
      pathRewrite: { "/api": "" },
      changeOrigin: true,
    },
  },
  env: {
    VUE_APP_BASE_API: baseUrl,
    VUE_APP_OPERATOR_ADDRESS: operatorAddress,
    VUE_APP_DEVELOPER_ADDRESS: developerAddress,
    VUE_APP_MANUFACTURER_ADDRESS: manufacturerAddress,
    VUE_APP_ADMIN_ADDRESS: adminAddress,
    VUE_APP_DOMAIN: domain,
    VUE_APP_EMAIL: mail,
    VUE_APP_CAPTCHA: captcha,
    VUE_APP_PRIVACY: privacy,
  },
};
