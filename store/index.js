import { api } from "./api";
import { removeToken } from "@/utils";

export const state = () => ({
  locales: ["zh-CN", "en-US"],
  locale: "",
  menuActive: false,
  privacyCatalogs: [],
  name: "",
  hasLogin: false,
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
  SET_USER_NAME(state, name) {
    state.name = name;
    state.hasLogin = true;
  },
  REMOVE_TOKEN(state) {
    removeToken();
    state.hasLogin = false;
  },
};

export const actions = api;
