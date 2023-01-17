const webpack = require("webpack");

require("dotenv").config();
let baseUrl = "";
let operatorAddress = "";
let developerAddress = "";
let manufacturerAddress = "";
let adminAddress = "";
let flycareAddress = "";
let domain = "";
let mail = "";
let captcha = "";
let newlandInfo = "";
let pubKey = "";
let signUp = "";

console.log(process.env.BASE);

switch (process.env.BASE) {
  case "dev":
    baseUrl = process.env.DEV_BASE_URL;
    operatorAddress = process.env.DEV_OPERATOR_ADDRESS;
    developerAddress = process.env.DEV_DEVELOPER_ADDRESS;
    manufacturerAddress = process.env.DEV_MANUFACTURER_ADDRESS;
    adminAddress = process.env.DEV_ADMIN_ADDRESS;
    flycareAddress = process.env.DEV_FLYCARE_ADDRESS;
    domain = process.env.DEV_APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    newlandInfo = process.env.NEWLAND_INFO;
    pubKey = process.env.PUBKEY;
    signUp = process.env.SIGN_UP;
    break;
  case "test":
    baseUrl = process.env.TEST_BASE_URL;
    operatorAddress = process.env.TEST_OPERATOR_ADDRESS;
    developerAddress = process.env.TEST_DEVELOPER_ADDRESS;
    manufacturerAddress = process.env.TEST_MANUFACTURER_ADDRESS;
    adminAddress = process.env.TEST_ADMIN_ADDRESS;
    flycareAddress = process.env.TEST_FLYCARE_ADDRESS;
    domain = process.env.TEST_APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    pubKey = process.env.PUBKEY;
    signUp = process.env.SIGN_UP;
    newlandInfo = process.env.NEWLAND_INFO;
    break;
  case "inte":
    baseUrl = process.env.INTE_BASE_URL;
    operatorAddress = process.env.INTE_OPERATOR_ADDRESS;
    developerAddress = process.env.INTE_DEVELOPER_ADDRESS;
    flycareAddress = process.env.INTE_FLYCARE_ADDRESS;
    manufacturerAddress = process.env.INTE_MANUFACTURER_ADDRESS;
    adminAddress = process.env.INTE_ADMIN_ADDRESS;
    domain = process.env.INTE_APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    newlandInfo = process.env.NEWLAND_INFO;
    signUp = process.env.SIGN_UP;
    pubKey = process.env.PUBKEY;
    break;
  case "production":
    baseUrl = process.env.PROD_BASE_URL;
    operatorAddress = process.env.PROD_OPERATOR_ADDRESS;
    developerAddress = process.env.PROD_DEVELOPER_ADDRESS;
    manufacturerAddress = process.env.PROD_MANUFACTURER_ADDRESS;
    adminAddress = process.env.PROD_ADMIN_ADDRESS;
    flycareAddress = process.env.PROD_FLYCARE_ADDRESS;
    domain = process.env.PROD_APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    newlandInfo = process.env.NEWLAND_INFO;
    signUp = process.env.SIGN_UP;
    pubKey = process.env.PUBKEY;
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
    newlandInfo = process.env.LD_NEWLAND_INFO;
    signUp = process.env.LD_SIGN_UP;
    pubKey = process.env.LD_PUBKEY;
    break;
  case "penetration":
    baseUrl = process.env.PENETRATION_BASE_URL;
    operatorAddress = process.env.PENETRATION_OPERATOR_ADDRESS;
    developerAddress = process.env.PENETRATION_DEVELOPER_ADDRESS;
    manufacturerAddress = process.env.PENETRATION_MANUFACTURER_ADDRESS;
    adminAddress = process.env.PENETRATION_ADMIN_ADDRESS;
    domain = process.env.PENETRATION_APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    newlandInfo = process.env.NEWLAND_INFO;
    signUp = process.env.SIGN_UP;
    pubKey = process.env.PUBKEY;
    break;
  default:
    baseUrl = process.env.BASE_URL;
    operatorAddress = process.env.OPERATOR_ADDRESS;
    developerAddress = process.env.DEVELOPER_ADDRESS;
    flycareAddress = process.env.FLYCARE_ADDRESS;
    manufacturerAddress = process.env.MANUFACTURER_ADDRESS;
    adminAddress = process.env.ADMIN_ADDRESS;
    domain = process.env.APP_DOMAIN;
    mail = process.env.EMAIL;
    captcha = process.env.CAPTCHA;
    newlandInfo = process.env.NEWLAND_INFO;
    signUp = process.env.SIGN_UP;
    pubKey = process.env.PUBKEY;
    break;
}

console.log(baseUrl);

const meta = [
  { charset: "utt-8" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  {
    hid: "description",
    name: "description",
    content: process.env.npm_package_description || "",
  }
];

if (process.env.BASE) {
  meta.push({
    "http-equiv": "Content-Security-Policy",
    content:
      "default-src 'unsafe-inline' https: data: filesystem: 'unsafe-eval'",
  });
}

export default {
  // server: {
  //   host: "0.0.0.0", // default: localhost
  // },
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
    meta
  },
  css: [
    { src: "element-ui/lib/theme-chalk/index.css" },
    "~assets/css/tailwind.css",
    "~assets/css/index.scss",
    { src: "~assets/css/fontawesome.css" },
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
    dir: `portal-${process.env.BASE}/dist`,
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
    "/api/online/developer-admin": {
      target: "https://toms.opennl-dev.com",
      pathRewrite: { "/api/online/developer-admin": "online/developer-admin" },
      changeOrigin: true,
      secure: false,
    },
    "/api/online/developer": {
      // target: "http://192.168.35.83:9102",
      target: "https://toms.opennl-dev.com",
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
    VUE_APP_FLYKEY_ADDRESS: flycareAddress,
    VUE_APP_ADMIN_ADDRESS: adminAddress,
    VUE_APP_DOMAIN: domain,
    VUE_APP_EMAIL: mail,
    VUE_APP_CAPTCHA: captcha,
    VUE_APP_NEWLAND_INFO: newlandInfo,
    VUE_APP_PUBKEY: pubKey,
    VUE_APP_SIGN_UP: signUp,
  },
};
