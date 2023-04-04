import { api } from "./api";
import { removeToken, getCookie } from "@/utils";

export const state = () => ({
  locales: ["zh-CN", "en-US"],
  locale: "",
  menuActive: false,
  privacyCatalogs: [],
  name: "",
  hasLogin: false,
  characaterCode: '',
  platform: "",
  // 重新注册时提交的token
  registerToken: "",
  operInfo: {},
  devInfo: {},
});

export const getters = {
  token: () => {
    return getCookie("TOMS_TOKEN") || getCookie("token");
  },
};

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
  SET_CHARACTER_CODE(state, code) {
    state.characaterCode = code
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
  SET_TOKEN(state, token) {
    state.registerToken = token;
  },
  SET_OPER_INFO(state, info) {
    state.operInfo = info;
  },
  SET_DEV_INFO(state, info) {
    state.devInfo = info;
  },
};

export const actions = api;
