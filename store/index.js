import { api } from "./api";
import { removeToken } from "@/utils";

export const state = () => ({
  locales: ["zh-CN", "en-US"],
  locale: "",
  menuActive: false,
  privacyCatalogs: [],
  name: "",
  hasLogin: false,
  platform: "",
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
  SET_PLATFORM(state, platform) {
    state.platform = platform;
  },
  REMOVE_TOKEN(state) {
    removeToken("TOMS_TOKEN");
    removeToken("token");
    state.platform = "";
    state.name = "";
    state.hasLogin = false;
  },
};

export const actions = api;
