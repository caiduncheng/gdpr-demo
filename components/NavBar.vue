<template>
  <div>
    <header :class="['header', 'containerXL', 'container-fluid']">
      <div class="header-wrapper">
        <div class="header-inner">
          <div class="header-left">
            <NuxtLink to="/">
              <img src="~assets/logo.png" alt="toms logo" class="header-logo" />
            </NuxtLink>
          </div>
          <!-- <div class="header-nav">
            <div
              class="main-menu-btn md:hidden"
              :class="{active: active}"
              @click="() => active = !active"
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="menu" :class="{show: active}">
              <nav>
                <ul class="navbar" style="font-weight: 500">
                  <li>
                    <NuxtLink
                      :to="{name: 'lang', params: { lang: $store.state.locale} }"
                      exact
                    >{{ $t('common.home') }}</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      :to="{name: 'lang', params: { lang: $store.state.locale} }"
                      exact
                    >{{ $t('common.solutions') }}</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      :to="{name: 'lang', params: { lang: $store.state.locale} }"
                      exact
                    >{{ $t('common.support') }}</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      :to="{name: 'lang', params: { lang: $store.state.locale} }"
                      exact
                    >{{ $t('common.contact_us') }}</NuxtLink>
                  </li>
                </ul>
              </nav>
              <div class="header-links">
                <NuxtLink to="/login" class="sign-in">{{ $t('common.sign_in') }}</NuxtLink>
                <el-button
                  to="login"
                  class="sign-up"
                  @click="() => selectRoledialogVisible = true"
                >{{ $t('common.sign_up') }}</el-button>
              </div>
            </div>
          </div>-->
          <div class="header-links">
            <!-- <NuxtLink
              :to="{name: 'lang-login', params: { lang: $store.state.locale} }"
              class="sign-in"
            >{{ $t('common.sign_in') }}</NuxtLink>-->
            <div class="header-nav">
              <div
                class="main-menu-btn md:hidden"
                :class="{active: active}"
                @click="() => active = !active"
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="menu" :class="{show: active}">
                <nav>
                  <ul class="navbar" style="font-weight: 500">
                    <li>
                      <NuxtLink
                        :to="{name: 'lang', params: { lang: $store.state.locale} }"
                        exact
                      >{{ $t('common.home') }}</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        :to="{name: 'lang', params: { lang: $store.state.locale} }"
                        exact
                      >Production</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                        :to="{name: 'lang', params: { lang: $store.state.locale} }"
                        exact
                      >{{ $t('common.contact_us') }}</NuxtLink>
                    </li>
                  </ul>
                </nav>
                <div class="header-links">
                  <NuxtLink to="/login" class="btn">{{ $t('common.sign_in') }}</NuxtLink>
                  <el-button
                    to="login"
                    class="sign-up"
                    @click="() => selectRoledialogVisible = true"
                  >{{ $t('common.sign_up') }}</el-button>
                </div>
              </div>
            </div>
            <NuxtLink
              to="login"
              class="btn btn-light sign-in__btn"
              @click="() => selectRoledialogVisible = true"
            >
              <span>{{ $t('common.sign_in') }}</span>
            </NuxtLink>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                {{language}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :disabled="language === 'English'">
                  <img src="~assets/english.png" width="20" class="mr-2" />
                  <NuxtLink
                    :to="{ name: 'lang-' + $route.name, params: { lang: 'en-US' } }"
                    class="sign-in"
                  >English</NuxtLink>
                </el-dropdown-item>
                <el-dropdown-item :disabled="language === 'Chinese'">
                  <img src="~assets/chinese.png" width="20" class="mr-2" />
                  <NuxtLink
                    :to="{ name: 'lang-' + $route.name, params: { lang: 'zh-CN' } }"
                    class="sign-in"
                  >Chinese</NuxtLink>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectRoledialogVisible: false,
      active: false,
    };
  },
  computed: {
    language() {
      const lang = this.$i18n.locale;
      return lang === "en-US" ? "English" : "Chinese";
    },
  },
  methods: {},
  mounted() {
    console.log(this.$route);
  },
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
}
.header-left {
  display: flex;
  align-items: center;
}
.header-logo {
  width: 150px;
}
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
  display: flex;
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
}
.menu {
  @screen md-max {
    position: fixed;
    left: 100%;
    width: 100%;
    top: 90px;
    height: calc(100% - 90px);
    z-index: 2;
    transition: left 0.2s;
    background: #fff;
    &.show {
      left: 0;
    }
  }
  @screen md {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
  }
  & .header-links {
    border-top: 1px solid #cad1dd;
    @screen md {
      display: none;
    }
    @screen md-max {
      flex-direction: column;
    }
    .sign-in {
      margin: 12px 0 24px 0;
    }
    .sign-up {
      margin-bottom: 24px;
    }
  }
}
.header-nav {
  flex-grow: 0;
  height: 100%;
  margin-right: 40px;
  padding-left: 30px;
  @media screen and (max-width: 991px) {
    height: auto;
  }
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
    @screen md-max {
      display: none;
    }
  }
}
.navbar {
  @media screen and (max-width: 991px) {
    padding: 0 15px;
  }
}
.navbar li {
  display: block;
  &:hover {
    a::before,
    a::after {
      opacity: 1;
      transform: translateY(0);
    }
  }

  a {
    text-transform: uppercase;
    display: block;
    position: relative;
    letter-spacing: 1px;
    padding: 10px 0;
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
      top: 4px;
      transform: translateY(-8px);
    }
    &::after {
      bottom: 4px;
      transform: translateY(8px);
    }
  }

  @media screen and (min-width: 992px) {
    float: left;
    margin-left: 40px;
  }
  @media screen and (max-width: 991px) {
    margin: 12px 0;
  }
}
</style>