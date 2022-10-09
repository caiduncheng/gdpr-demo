import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "element-ui/lib/locale/lang/en";
import zhLocale from "element-ui/lib/locale/lang/zh-CN";

Vue.use(VueI18n);

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: "en-US",
    messages: {
      "en-US": Object.assign(enLocale, require("@/lang/en.js")),
      "zh-CN": Object.assign(zhLocale, require("@/lang/zh.js")),
    },
  });

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }    
    return `/${app.i18n.locale}/${link}`;
  };
};
