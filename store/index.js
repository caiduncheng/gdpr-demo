import { api } from "./api";

export const state = () => ({
  locales: ["zh-CN", "en-US"],
  locale: "",
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
};

export const actions = api;
