export default {
  development: {
    VUE_APP_BASE_API: "/api",
    VUE_APP_OPERATOR_ADDRESS: "http://localhost:9528",
    VUE_APP_MANUFACTURER_ADDRESS: "https://vendor.opennl.com",
    VUE_APP_DEV_ADDRESS: "https://developer.opennl.com",
    VUE_APP_ADMIN_ADDRESS: "https://admin.opennl.com",
    VUE_APP_DOMAIN: "localhost",
  },
  production: {
    VUE_APP_BASE_API: "",
    VUE_APP_OPERATOR_ADDRESS: "https://operator.opennl.com",
    VUE_APP_MANUFACTURER_ADDRESS: "https://vendor.opennl.com",
    VUE_APP_DEV_ADDRESS: "https://developer.opennl.com",
    VUE_APP_ADMIN_ADDRESS: "https://admin.opennl.com",
    VUE_APP_DOMAIN: ".opennl.com",
  },
  inte: {
    VUE_APP_BASE_API: "",
    VUE_APP_OPERATOR_ADDRESS: "https://operator.opennl-inte.com",
    VUE_APP_MANUFACTURER_ADDRESS: "https://vendor.opennl-inte.com",
    VUE_APP_DEV_ADDRESS: "https://developer.opennl-inte.com",
    VUE_APP_ADMIN_ADDRESS: "https://admin.opennl-inte.com",
    VUE_APP_DOMAIN: ".opennl-inte.com",
  },
};
