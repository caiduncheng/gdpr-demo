<template>
  <div>
    <header
      :class="['header', 'container-fluid', {'fixed-header': fixed, containerXL: !fixed}]"
      :style="scrollNavBarStyle"
    >
      <div class="mobile-menu" :class="{show: active}">
        <div class="content">
          <div class="row">
            <div class="col-12 text-center">
              <NuxtLink :to="{name: 'lang', params: { lang: $store.state.locale} }">
                <img src="~assets/logo.png" alt="toms logo" />
              </NuxtLink>
            </div>
            <div class="col-10 offset-1 col-nav">
              <nav>
                <ul>
                  <li class="menu-item">
                    <NuxtLink
                      :to="{name: 'lang', params: { lang: $store.state.locale} }"
                      exact
                    >{{ $t('common.home') }}</NuxtLink>
                  </li>
                  <li class="menu-item">
                    <NuxtLink to="/production/flykey">FlyKey</NuxtLink>
                  </li>
                  <li class="menu-item">
                    <NuxtLink
                      :to="{name: 'lang-contact-us', params: { lang: $store.state.locale} }"
                      exact
                    >{{ $t('common.contact_us') }}</NuxtLink>
                  </li>
                  <li class="menu-item">
                    <NuxtLink :to="{name: 'lang-login', params: { lang: $store.state.locale}}">
                      <span>{{ $t('common.sign_in') }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="header-wrapper">
        <div class="header-inner">
          <div class="col-lg-2 col-12 text-center lg:text-left">
            <NuxtLink :to="{name: 'lang', params: { lang: $store.state.locale} }">
              <img src="~assets/logo.png" alt="toms logo" />
            </NuxtLink>
            <div class="menu-toggle" :class="{active}" @click="toggleMenu">
              <div class="top"></div>
              <div class="mid"></div>
              <div class="btm"></div>
            </div>
          </div>

          <div class="header-links">
            <div class="header-nav">
              <div class="menu">
                <nav>
                  <ul class="navbar" style="font-weight: 500">
                    <li>
                      <NuxtLink
                        :to="{name: 'lang', params: { lang: $store.state.locale} }"
                        exact
                      >{{ $t('common.home') }}</NuxtLink>
                    </li>
                    <li class="dropdown">
                      <a>
                        {{ $t('common.production') }}
                        <i class="fa fa-caret-down"></i>
                      </a>
                      <ul role="menu" class="link-menu">
                        <li>
                          <NuxtLink to="/production/flykey">FlyKey</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink
                        :to="{name: 'lang-contact-us', params: { lang: $store.state.locale} }"
                        exact
                      >{{ $t('common.contact_us') }}</NuxtLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <NuxtLink
              :to="{name: 'lang-login', params: { lang: $store.state.locale}}"
              :class="['btn',  'btn-light','sign-in__btn', {primary: fixed}]"
            >
              <span>{{ $t('common.sign_in') }}</span>
            </NuxtLink>
            <div class="dropdown">
              <a class="relative">
                {{language}}
                <i class="fa fa-caret-down"></i>
              </a>
              <ul role="menu" class="link-menu">
                <li>
                  <NuxtLink :to="{ name: 'lang', params: { lang: 'en-US' } }" class="sign-in">
                    <img src="~assets/english.png" width="20" class="mr-2" />English
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="{ name: 'lang', params: { lang: 'zh-CN' } }" class="sign-in">
                    <img src="~assets/chinese.png" width="20" class="mr-2" />中文
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";
export default {
  components: { SvgIcon },
  props: {
    fixed: Boolean,
    alwaysShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectRoledialogVisible: false,
      active: false,
      show: false,
    };
  },
  computed: {
    language() {
      const lang = this.$i18n.locale;
      return lang === "en-US" ? "English" : "中文";
    },
    scrollNavBarStyle() {
      if (this.alwaysShow || this.show) {
        return {
          visibility: "visible",
          transform: "translateY(0px)",
        };
      } else {
        return {};
      }
    },
  },
  methods: {
    toggleMenu() {
      this.active = !this.active;
      this.$store.commit("SET_MENU", this.active);
    },
  },
  mounted() {
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
    box-shadow: 0 2px 5px rgb(0 0 0 / 5%);
    visibility: hidden;
    transform: translateY(-100px);
    transition: transform 0.5s linear;
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
.dropdown {
  text-transform: uppercase;
  a {
    width: 100%;
    padding: 20px 0;
  }
  &:hover {
    .link-menu {
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
  flex-grow: 1;
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
    position: absolute;
    top: 60px;
    transition: 0.125s all ease-in-out;
    width: 200px;
    background: #454748;
    text-align: left;
    margin: 0;
    padding: 17px;
    &::before {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 6.5px 6.5px 6.5px;
      border-color: transparent transparent #454748 transparent;
      content: "";
      display: block;
      position: absolute;
      top: -6px;
    }
    & > li:not(:last-child) {
      border-bottom: 1px solid #56595a;
    }
    & > li > a {
      color: white;
      text-transform: uppercase;
      letter-spacing: 2.8px;
      display: inline-block;
      /* width: 100%; */
      transition: 0.125s all ease-in-out;
      padding: 10px 0;
      &:hover {
        color: #269ccc;
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
  height: 90px;
  align-items: center;
  justify-content: space-between;
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