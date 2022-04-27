export default {
  development: {
    VUE_APP_BASE_API: "/api",
    VUE_APP_OPERATOR_ADDRESS: "http://localhost:9528/operator/#/",
    VUE_APP_MANUFACTURER_ADDRESS: "https://vendor.opennl.com",
    VUE_APP_DEV_ADDRESS: "https://developer.opennl.com",
    VUE_APP_ADMIN_ADDRESS: "https://admin.opennl.com",
    VUE_APP_DOMAIN: "localhost",
  },
  production: {
    VUE_APP_BASE_API: "",
    VUE_APP_OPERATOR_ADDRESS: "https://toms.opennl.com/operator/#/",
    VUE_APP_MANUFACTURER_ADDRESS: "https://toms.opennl.com/vendor/#/",
    VUE_APP_DEV_ADDRESS: "https://developer.opennl.com",
    VUE_APP_ADMIN_ADDRESS: "https://toms.opennl.com/admin/#/",
    VUE_APP_DOMAIN: ".opennl.com",
  },
  // production: {
  //   VUE_APP_BASE_API: "",
  //   VUE_APP_OPERATOR_ADDRESS: "https://toms.opennl-inte.com/operator/#/",
  //   VUE_APP_MANUFACTURER_ADDRESS: "https://toms.opennl-inte.com/vendor/#/",
  //   VUE_APP_DEV_ADDRESS: "https://developer.opennl.com",
  //   VUE_APP_ADMIN_ADDRESS: "https://toms.opennl-inte.com/admin/#/",
  //   VUE_APP_DOMAIN: ".opennl-inte.com",
  // },
};