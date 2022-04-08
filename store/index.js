import { api } from "./api";

export const state = () => ({
  locales: ["zh-CN", "en-US"],
  locale: "",
  menuActive: false,
  privacyCatalogs: [],
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },
  SET_MENU(state, active) {
    if (active) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "visible";
    }
    state.menuActive = active;
  },
  SET_CATALOGS(state, catalogs) {
    state.privacyCatalogs = catalogs;
  },
};

export const actions = api;
