<template>
  <div>
    <header
      :class="[
        'header',
        'container-fluid',
        { 'fixed-header': fixed, containerXL: !fixed },
      ]"
      :style="scrollNavBarStyle"
    >
      <!-- 手机端菜单 -->
      <div class="mobile-menu" :class="{ show: active }">
        <div class="content">
          <div class="row">
            <div class="col-12 text-center">
              <NuxtLink
                :to="{ name: 'lang', params: { lang: $store.state.locale } }"
              >
                <img :src="logo" alt="toms logo" :style="logoStyle" />
              </NuxtLink>
            </div>
            <div class="col-10 offset-1 col-nav">
              <nav>
                <ul>
                  <li class="menu-item">
                    <NuxtLink
                      :to="{
                        name: 'lang',
                        params: { lang: $store.state.locale },
                      }"
                      exact
                      >{{ $t("common.home") }}</NuxtLink
                    >
                  </li>
                  <li class="menu-item">
                    <NuxtLink
                      :to="{
                        name: 'lang-products-flykey',
                        params: { lang: $store.state.locale },
                      }"
                      >FlyKey</NuxtLink
                    >
                  </li>
                  <li class="menu-item">
                    <NuxtLink
                      :to="{
                        name: 'lang-ndp',
                        params: { lang: $store.state.locale },
                      }"
                      exact
                      >{{ $t("common.developer") }}</NuxtLink
                    >
                  </li>
                  <li class="menu-item">
                    <NuxtLink
                      :to="{
                        name: 'lang-contact-us',
                        params: { lang: $store.state.locale },
                      }"
                      exact
                      >{{ $t("common.contact_us") }}</NuxtLink
                    >
                  </li>
                  <li class="menu-item">
                    <NuxtLink
                      :to="{
                        name: 'lang-login',
                        params: { lang: $store.state.locale },
                      }"
                    >
                      <span>{{ $t("common.sign_in") }}</span>
                    </NuxtLink>
                  </li>
                  <li class="menu-item">
                    <a :href="siteDomain">
                      <span style="text-transform: uppercase">{{ siteName.remote }}</span>
                    </a>
                  </li>
                  <li class="language-switcher">
                    <NuxtLink
                      :class="{
                        'current-language': $store.state.locale === 'zh-CN',
                      }"
                      :to="
                        $store.state.locale === 'zh-CN'
                          ? ''
                          : {
                              name:
                                $route.name === 'index'
                                  ? 'lang'
                                  : `lang-${$route.name}`,
                              params: { lang: 'zh-CN' },
                            }
                      "
                      >中文</NuxtLink
                    >
                  </li>
                  <li class="language-switcher">
                    <NuxtLink
                      :class="{
                        'current-language': $store.state.locale === 'en-US',
                      }"
                      :to="
                        $store.state.locale === 'en-US'
                          ? ''
                          : {
                              name:
                                $route.name === 'index'
                                  ? 'lang'
                                  : `${$route.name}`,
                              params: { lang: 'en-US' },
                            }
                      "
                      >English</NuxtLink
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="header-wrapper">
        <div class="header-inner">
          <div class="logo-container">
            <div class="col-lg-2 col-12 text-center lg:text-left">
              <NuxtLink
                style="line-height: 55px;"
                :to="{ name: 'lang', params: { lang: $store.state.locale } }"
              >
                <img :src="logo" alt="toms logo" :style="logoStyle" />
              </NuxtLink>

              <div class="menu-toggle" :class="{ active }" @click="toggleMenu">
                <div class="top"></div>
                <div class="mid"></div>
                <div class="btm"></div>
              </div>
            </div>
          </div>

 

          <div class="header-links">
            <div class="header-nav">
              <div class="menu">
                <nav>
                  <ul class="navbar" style="font-weight: 500">
                    <li>
                      <NuxtLink
                        :to="{
                          name: 'lang',
                          params: { lang: $store.state.locale },
                        }"
                        exact
                        >{{ $t("common.home") }}</NuxtLink
                      >
                    </li>
                    <li v-if="VUE_APP_NEWLAND_INFO == '1'" class="dropdown">
                      <a>
                        {{ $t("common.production") }}
                        <i class="fa fa-caret-down"></i>
                      </a>
                      <ul role="menu" class="link-menu" style="width: 400px">
                        <li class="flex">
                          <NuxtLink
                            :to="{
                              name: 'lang-products-flykey',
                              params: { lang: $store.state.locale },
                            }"
                            class="production"
                          >
                            <img
                              src="~assets/flykey-logo.png"
                              width="40px"
                              class="mr-2"
                            />
                            <div>
                              <span>FlyKey</span>
                              <p class="production-intro">
                                {{ $t("flykey.navbar_tip") }}
                              </p>
                            </div>
                          </NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li v-if="VUE_APP_NEWLAND_INFO == '1'">
                      <NuxtLink
                        :to="{
                          name: 'lang-ndp',
                          params: { lang: $store.state.locale },
                        }"
                        exact
                        >{{ $t("common.developer") }}</NuxtLink
                      >
                    </li>
                    <li v-if="VUE_APP_NEWLAND_INFO == '1'">
                      <NuxtLink
                        :to="{
                          name: 'lang-contact-us',
                          params: { lang: $store.state.locale },
                        }"
                        exact
                        >{{ $t("common.contact_us") }}</NuxtLink
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div v-if="$store.state.hasLogin" class="user-name dropdown" style="width: 120px">
              <a>
                <span :title="$store.state.name">{{ $t("common.hi") }}!&nbsp;{{ $store.state.name }}&nbsp;</span>
                <i class="fa fa-caret-down"></i>
              </a>
              <ul role="menu" class="link-menu" style="width: 350px">
                <li class="dropdown" v-if="showToms">
                  <!--<a :href="location">{{$store.state.platform}} Platform</a>-->
                  <a :href="location">{{ $t("common.management_platform") }}</a>
                </li>
                <li class="dropdown" v-if="showFlyCare">
                  <!--<a :href="location">{{$store.state.platform}} Platform</a>-->
                  <a :href="flycareAddress">{{
                    $t("common.flycare_platform")
                  }}</a>
                </li>
                <li>
                  <a @click.prevent="logout">{{ $t("common.sign_out") }}</a>
                </li>
              </ul>
            </div>
            <NuxtLink
              v-else
              :to="{
                name: 'lang-login',
                params: { lang: $store.state.locale },
              }"
              :class="['btn', 'btn-light', 'sign-in__btn', { primary: fixed }]"
            >
              <span>{{ $t("common.sign_in") }}</span>
            </NuxtLink>

            <div class="dropdown language">
              <a>
                {{ language }}&nbsp;
                <i class="fa fa-caret-down"></i>
              </a>
              <ul role="menu" class="link-menu">
                <li>
                  <NuxtLink
                    :to="
                      $store.state.locale === 'en-US'
                        ? { query }
                        : {
                            name:
                              $route.name === 'index'
                                ? 'lang'
                                : `${$route.name}`,
                            params: { lang: 'en-US' },
                            query,
                          }
                    "
                    >English</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    :to="
                      $store.state.locale === 'zh-CN'
                        ? { query }
                        : {
                            name:
                              $route.name === 'index'
                                ? 'lang'
                                : `lang-${$route.name}`,
                            params: { lang: 'zh-CN' },
                            query,
                          }
                    "
                    >中文</NuxtLink
                  >
                </li>
              </ul>
            </div>

            <div class="header-links inline-block">
                <button class="flex items-center dropdown site-button">
                  <img
                    src="~assets/menu.png"
                    width="24px"
                    class="mr-2"
                  />
                  <span>{{ siteName.current }}</span>
                  <ul role="menu" class="link-menu" style="top: 73px;">
                    <li class="flex">
                      <a :href="siteDomain">
                        <span style="text-transform: none; letter-spacing: normal">{{ siteName.remote }}</span>
                      </a>
                    </li>
                  </ul>
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <LazyLogoutDialog :title="$t('common.sign_out')" :visible.sync="visible" />
  </div>
</template>

<script>
import { getCookie, removeToken, getQueryParam } from "@/utils";

export default {
  props: {
    fixed: Boolean,
    alwaysShow: {
      type: Boolean,
      default: false,
    },
    logo: {
      type: String,
      default: require("../assets/logo.png"),
    },
    logoStyle: {
      type: Object,
      default: null,
    },
    hasShadow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selectRoledialogVisible: false,
      active: false,
      show: false,
      visible: false,
      VUE_APP_NEWLAND_INFO: process.env.VUE_APP_NEWLAND_INFO,
      query: null,
      showFlyCare: false,
      showToms: false,
      flycareAddress: process.env.VUE_APP_FLYKEY_ADDRESS,
      siteName: {
        current: process.env.VUE_APP_SITE +  ' Sites',
        remote: (process.env.VUE_APP_SITE === 'Global' ? 'Europe' : 'Global') + ' Sites'
      },
      siteDomain: process.env.VUE_APP_SITE_DOMAIN
    };
  },
  computed: {
    language() {
      const lang = this.$i18n.locale;
      return lang === "en-US" ? "English" : "中文";
    },
    scrollNavBarStyle() {
      const style = {};
      if (this.alwaysShow || this.show) {
        style["visibility"] = "visible";
        style["transform"] = "translateY(0px)";
        if (this.hasShadow) {
          style.boxShadow = "0 2px 5px rgb(0 0 0 / 5%)";
        }
      }
      return style;
    },
    location() {
      let location = "";
      switch (this.$store.state.platform) {
        case "OPERATOR":
          location = document.location.origin + "/operator/#/";
          break;
        case "DEV":
          location = document.location.origin + "/developer/#/";
          break;
        case "MANUFACTURER":
          location = document.location.origin + "/vendor/#/";
          break;
        case "ADMIN":
          location = document.location.origin + "/admin/#/";
          break;
      }
      return location;
    }
  },
  methods: {
    toggleMenu() {
      this.active = !this.active;
      this.$store.commit("SET_MENU", this.active);
    },
    logout() {
      this.visible = true;
    }
  },
  mounted() {
    console.log(process.env.SITE)
    if (this.$route.path.includes("signup")) {
      this.query = { email: getQueryParam("email"), key: getQueryParam("key") };
    } else if (this.$route.path.includes("resubmit-form")) {
      this.query = { token: getQueryParam("token") };
    }

    if (process.browser && !this.alwaysShow) {
      this.show = scrollY > 700;
      window.addEventListener("scroll", () => {
        if (scrollY > 700) {
          this.show = true;
        } else {
          this.show = false;
        }
      });
    }

    window.addEventListener("resize", () => {
      this.active = !window.innerWidth > 992;
    });

    if (
      (getCookie("TOMS_TOKEN") || getCookie("token")) &&
      (this.alwaysShow || !this.fixed)
    ) {
      this.$store.dispatch("getInfo").then((data) => {
        this.$store.commit("SET_USER_NAME", data.name);
        this.$store.commit("SET_PLATFORM", data.characterCode);
        const platform = data.platformInfoList.map(item => item.platCode)
        if(platform.includes('TOMS')) {
          this.showToms = true
        }
        if(platform.includes('FLYCARE')) {
          this.showFlyCare = true
        }
      });
    }
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
.header {
  .el-dropdown {
    color: #ffffff;
  }

  .el-button.sign-in {
    @apply text-primary;
  }
}
</style>

<style lang="scss" scoped>
@use "../assets/css/mixin";
@use "~assets/css/variables";

.header {
  /* position: fixed; */
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  color: #ffffff;

  /* background: #ffffff; */
  &.header-scroll {
    position: absolute;
  }

  &.fixed-header {
    position: fixed;
    background: #ffffff;
    visibility: hidden;
    transform: translateY(-100px);
    transition: transform 0.5s linear;
    /* box-shadow: 0 2px 5px rgb(0 0 0 / 5%); */
    .menu-toggle {
      & > .mid,
      & > .top,
      & > .btm {
        background: rgb(115, 121, 126);
      }
    }

    .header-links {
      color: #000000;

      .el-dropdown {
        color: #000000;
      }

      .sign-in__btn.primary {
        @include mixin.btn-animated(#3982e9, #1d1d1d);
        color: #ffffff;
      }
    }

    .navbar a {
      &::before,
      &::after {
        background: rgba(115, 121, 126, 0.3);
      }
    }
  }
}

.site-button {
  height: 60px;
}

.dropdown {
  /* text-transform: uppercase; */
  a {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 0;
  }



  &.language {
    margin-right: 40px;
    a {
      padding: 40px 0;
    }

    .link-menu {
      top: 80px;
      /* right: 20px;
      &::before {
        right: 40px;
      } */
    }
  }

  &:hover {
    & > .link-menu {
      opacity: 1;
      display: block;
    }
  }
}

/* 小屏幕的菜单 */
.mobile-menu {
  height: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  /* height: 100vh; */
  width: 100%;
  background: #201f1d;

  overflow-y: scroll;
  opacity: 0;
  transition: opacity 0.5s ease;

  .col-nav {
    margin-top: 30px;
  }

  &.show {
    padding: 30px 0;
    visibility: visible;
    height: 100vh;
    display: block;
    opacity: 1;

    .menu-item > a::after {
      width: 100%;
    }

    @screen lg {
      display: none;
    }
  }

  ul {
    text-align: center;
  }

  .menu-item {
    text-align: center;
    text-transform: uppercase;

    & > a {
      display: block;
      letter-spacing: 1px;
      font-size: 16px;
      position: relative;
      padding: 10px;
      font-weight: 500;

      &::after {
        width: 0;
        content: "";
        position: absolute;
        display: flex;
        align-self: center;
        opacity: 1;
        bottom: 0;
        margin: 0 auto;
        left: 0;
        right: 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.6);
        transition: all 0.7s ease-in-out;
      }
    }
  }

  .language-switcher {
    display: inline-block;

    a {
      display: block;
      color: #fff;
      text-transform: uppercase;
      margin-top: 30px;
      font-weight: 300;
      padding: 2px 10px;
      font-size: 16px;
      border: 2px solid transparent;
      letter-spacing: 1px;

      &.current-language {
        border: 2px solid #fff;
        font-weight: 500;
      }
    }
  }
}

.menu-toggle {
  position: absolute;
  cursor: pointer;
  top: 10px;
  left: 15px;
  width: 30px;
  height: 30px;
  z-index: 101;
  padding: 0;
  display: flex;
  align-items: center;

  &.active {
    position: fixed;
    top: 30px;
    left: 45px;

    & > .top,
    & > .mid,
    & > .btm {
      background: #ffffff !important;
    }

    & > .top {
      transform: translateY(0px) rotate(45deg);
    }

    & > .mid {
      opacity: 0;
    }

    & > .btm {
      transform: translateY(0px) rotate(-45deg);
    }
  }

  @screen lg {
    display: none;
  }

  & > .top,
  & > .mid,
  & > .btm {
    display: block;
    position: absolute;
    left: 0;
    width: 30px;
    height: 4px;
    transition: transform 0.3s;
    background: #ffffff;
  }

  & > .top {
    transform: translateY(-220%);
  }

  & > .mid {
    opacity: 1;
    transition: opacity 0.2s;
  }

  & > .btm {
    transform: translateY(220%);
  }
}

/*  */

.header-wrapper {
  position: static;
  z-index: 1;
  padding: 0 16px;
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
}

.header-links {  
  justify-content: flex-end;
  align-items: center;
  display: none;

  @screen lg {
    display: flex;
  }

  .sign-up {
    color: #2c7be5;
    border-color: #2c7be5;
    border-width: 2px;
    border-radius: var(--button-border-radius);
    background: transparent;

    &:hover {
      box-shadow: inset 0 0 0 2px #2c7be5;
    }
  }

  .sign-in {
    &:hover {
      @apply text-primary;
    }
  }

  .user-name {
    cursor: pointer;
    margin-right: 40px;
    position: relative;
    span {
      width: 100%;
      overflow: hidden;
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .sign-in__btn {
    color: #000000;
    margin-right: 40px;

    span {
      position: relative;
      font-size: 14px;
      z-index: 2;
      vertical-align: middle;
    }

    @include mixin.btn-animated(#ffffff, #1d1d1d);

    &:hover {
      color: #ffffff;
    }
  }

  .link-menu {
    display: none;
    opacity: 0;
    border-radius: 5px;
    position: absolute;
    top: 60px;
    transition: 0.125s all ease-in-out;
    width: 200px;
    background: #fafafa;
    text-align: left;
    margin: 0;
    padding: 17px;

    &.sub {
      top: 0;
      right: 300px;

      &::before {
        display: none;
      }
    }

    &::before {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 6.5px 6.5px 6.5px;
      border-color: transparent transparent #fafafa transparent;
      content: "";
      display: block;
      position: absolute;
      top: -6px;
    }

    & > li:not(:last-child) {
      border-bottom: 1px solid #eaeefb;
    }

    & > li a {
      color: #000000;
      text-transform: uppercase;
      letter-spacing: 2.8px;
      display: inline-block;
      /* width: 100%; */
      transition: 0.125s all ease-in-out;
      padding: 10px 0;

      &:hover {
        color: variables.$linkColor;
      }

      &.production {
        display: flex;
        align-items: center;
      }

      .production-intro {
        font-size: 12px;
        color: #6c6c6c;
        text-transform: initial;
        letter-spacing: initial;
      }
    }
  }
}

.menu {
  & .header-links {
    border-top: 1px solid #cad1dd;

    .sign-in {
      margin: 12px 0 24px 0;
    }

    .sign-up {
      margin-bottom: 24px;
    }
  }
}

.header-nav {
  margin-right: 40px;
}

.header-inner {
  display: flex;
  height: 70px;
  align-items: center;
  
  justify-content: center;

  @screen md {
    height: 90px;
    justify-content: space-between;
  }

  .logo-container {
    display: flex;
    width: 100%;
    @screen lg {
      width: fit-content;
    }
  }

  & > .header-links {
    .sign-in,
    .sign-up {
      margin-right: 24px;
    }
  }
}

.navbar > li {
  display: block;
  position: relative;
  float: left;
  margin-left: 40px;

  &:not(.dropdown):hover {
    & > a::before,
    & > a::after {
      opacity: 1;
      transform: translateY(0);
    }
  }

  & > a {
    text-transform: uppercase;
    display: block;
    position: relative;
    letter-spacing: 1px;
    padding: 20px 0;

    &::before,
    &::after {
      position: absolute;
      left: 0;
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.3);
      content: "";
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
    }

    &::before {
      top: 13px;
      transform: translateY(-8px);
    }

    &::after {
      bottom: 13px;
      transform: translateY(8px);
    }
  }
}
</style>
