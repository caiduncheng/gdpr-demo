<template>
  <div class="background">
    <NavBar />
    <div class="container container-fluid">
      <div class="row login items-center mb-10" style="padding-top: 40px; padding-bottom: 130px">
        <div class="col-6 col-lg-7 col-xl-8 login-title-wrapper">
          <h1 class="text-white mb-3">{{ $t("login.welcome") }}</h1>
          <p class="text-white text-2xl lg:text-3xl">{{ $t("login.slogan") }}</p>
        </div>
        <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 offset-md-0">
          <div class="login-form">
            <div class="login-form__header">{{ $t("login.sign_in") }}</div>
            <div class="login-form__body">
              <p class="text-xs text-gray text-center mb-4">{{ $t("login.sign_in_tip") }}</p>
              <el-form
                @validate="validate"
                class="small"
                ref="loginForm"
                :model="loginForm"
                :rules="loginRules"
                auto-complete="on"
                @submit.native.prevent
                :show-message="false"
              >
                <el-form-item prop="username">
                  <el-popover trigger="manual" v-model="usernamePopover" placement="top">
                    <i class="el-icon-warning text-yellow-500"></i>
                    {{ invalidMessage }}
                    <el-input
                      @focus="hidePopovers"
                      @blur="handleBlur"
                      slot="reference"
                      ref="username"
                      v-model.trim="loginForm.username"
                      :placeholder="$t('login.account_email_placeholder')"
                      tabindex="1"
                      auto-complete="on"
                      prefix-icon="el-icon-message"
                    ></el-input>
                  </el-popover>
                </el-form-item>
                <el-form-item prop="password">
                  <el-popover trigger="manual" v-model="passwordPopover" placement="top">
                    <i class="el-icon-warning text-yellow-500"></i>
                    {{ invalidMessage }}
                    <el-input
                      @focus="hidePopovers"
                      slot="reference"
                      :placeholder="$t('login.password')"
                      v-model="loginForm.password"
                      type="password"
                      tabindex="2"
                      auto-complete="on"
                      prefix-icon="el-icon-lock"
                    ></el-input>
                  </el-popover>
                </el-form-item>
                <el-form-item v-if="VUE_APP_CAPTCHA == '1' && showCaptcha" prop="code">
                  <el-row :gutter="20" type="flex" class="items-center">
                    <el-col :span="14">
                      <el-popover trigger="manual" v-model="codePopover" placement="top">
                        <i class="el-icon-warning text-yellow-500"></i>
                        {{ invalidMessage }}
                        <el-input
                          tabindex="3"
                          @focus="hidePopovers"
                          slot="reference"
                          maxlength="5"
                          :placeholder="$t('login.captcha')"
                          v-model.trim="loginForm.code"
                          @keyup.enter.native="handleLogin"
                        ></el-input>
                      </el-popover>
                    </el-col>
                    <el-col :span="10" class="login-captcha">
                      <button>
                        <img :src="captchaImgSrc" alt @click="getCaptcha" style="height: 30px" />
                      </button>
                    </el-col>
                  </el-row>
                </el-form-item>

                <el-form-item>
                  <el-button
                    class="w-full"
                    :loading="loading"
                    type="primary"
                    @click="handleLogin"
                  >{{ $t("common.sign_in") }}</el-button>
                  <div class="el-form-item__error text-center">{{ errorMsg }}</div>
                </el-form-item>
                <el-form-item prop="checked" v-if="VUE_APP_PRIVACY == '1'">
                  <div class="text-center">
                    <el-popover trigger="manual" v-model="checkedPopover" placement="bottom">
                      <i class="el-icon-warning text-yellow-500"></i>
                      {{ invalidMessage }}
                      <el-checkbox slot="reference" v-model="loginForm.checked">
                        <span class="text-xs" v-html="$t('login.agree_terms_conditions')"></span>
                        <!-- <NuxtLink to="/privacy/terms" class="link">{{
                          $t("login.terms_and_conditions")
                        }}</NuxtLink>-->
                      </el-checkbox>
                    </el-popover>
                    <div class="text-center">
                      <el-tooltip effect="dark" content="FlyKey" placement="bottom">
                        <div class="website-icon mr-10">
                          <a href="https://flykey.newlandpayment.com">
                            <img src="~/assets/sign-in/flykey.png" alt />
                          </a>
                        </div>
                      </el-tooltip>
                      <el-tooltip effect="dark" content="NPSC" placement="bottom">
                        <div class="website-icon">
                          <a href="https://npsc.newlandpayment.com/npsc">
                            <img src="~assets/sign-in/npsc.png" alt />
                          </a>
                        </div>
                      </el-tooltip>
                    </div>
                  </div>
                </el-form-item>
                                <el-form-item v-if="VUE_APP_PRIVACY == '0'">
                  <div class="text-center">
                  
                        <span class="text-xs" v-html="$t('login.agree_terms_conditions1')"></span>
                        <!-- <NuxtLink to="/privacy/terms" class="link">{{
                          $t("login.terms_and_conditions")
                        }}</NuxtLink>-->

                    <div class="text-center">
                      <el-tooltip effect="dark" content="FlyKey" placement="bottom">
                        <div class="website-icon mr-10">
                          <a href="https://flykey.newlandpayment.com">
                            <img src="~/assets/sign-in/flykey.png" alt />
                          </a>
                        </div>
                      </el-tooltip>
                      <el-tooltip effect="dark" content="NPSC" placement="bottom">
                        <div class="website-icon">
                          <a href="https://npsc.newlandpayment.com/npsc">
                            <img src="~assets/sign-in/npsc.png" alt />
                          </a>
                        </div>
                      </el-tooltip>
                    </div>
                  </div>
                </el-form-item>
              </el-form>
              <hr v-if="VUE_APP_EMAIL == '1'" class="my-5" />
              <div v-if="VUE_APP_EMAIL == '1'" class="text-center">
                <p class="text-gray text-xs text-center mb-3">
                  {{ $t("login.donnot_have_account") }}
                  <a @click.prevent="startSignUp" class="link">
                    <span>{{ $t("login.sign_up") }}</span>
                  </a>
                </p>
                <div class="text-center">
                  <a @click.prevent="resetPassword" class="text-xs link">
                    {{
                    $t("login.forgot_password")
                    }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="VUE_APP_NEWLAND_INFO == '1'" class="login-footer">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="mb-3">
              <a href="https://www.newlandnpt.com/" target="_blank">
                <img class="mr-2" src="~assets/sign-in/4.png" alt />
              </a>

              <a href="https://www.linkedin.cn/injobs" target="_blank">
                <img class="mr-2" src="~assets/sign-in/5.png" alt />
              </a>

              <a
                href="https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText=newlandnpt"
                target="_blank"
              >
                <img src="~assets/sign-in/6.png" alt />
              </a>
            </div>
            <p class="text-gray text-xs">
              Copyright 2021 Newland Payment Technology(newlandnpt.com). All
              rights reserved. ICP 15018196-2
            </p>
          </div>
        </div>
      </div>
    </div>
    <LazySignupDialog :visible.sync="signUpDialogVisible" :title="$t('login.sign_up')" />
    <LazyResetPasswordDialog
      :visible.sync="resetPasswordDialogVisible"
      :title="$t('login.title_reset_password')"
    />
  </div>
</template>

<script>
let JSEncrypt = null;


export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("login.validate_password_tip")));
      } else if (value.length < 8) {
        callback(new Error(this.$t("login.validate_password_tip")));
      } else if (value.length > 18) {
        callback(new Error(this.$t("login.validate_password_tip")));
      } else {
        callback();
      }
    };

    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("login.validate_username_required_tip")));
      } else if (value.length < 5) {
        callback(new Error(this.$t("login.validate_username_less5_tip")));
      } else {
        callback();
      }
    };

    const validateVerifyCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("login.validate_code_required")));
      } else if (value.length < 5) {
        callback(new Error(this.$t("login.validate_code_less5_tip")));
      } else {
        callback();
      }
    };

    const isChecked = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("login.agree_terms_and_conditions_tip")));
      } else {
        callback();
      }
    };
    return {
      VUE_APP_PUBKEY: process.env.VUE_APP_PUBKEY,
      VUE_APP_EMAIL: process.env.VUE_APP_EMAIL,
      VUE_APP_NEWLAND_INFO: process.env.VUE_APP_NEWLAND_INFO,
      VUE_APP_CAPTCHA: process.env.VUE_APP_CAPTCHA,
      VUE_APP_PRIVACY: process.env.VUE_APP_PRIVACY,
      signUpDialogVisible: false,
      resetPasswordDialogVisible: false,
      loginForm: {
        username: "",
        password: "",
        code: "",
        checked: false,
      },
      loginRules: {
        username: [
          { required: true, trigger: "manual", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "manual", validator: validatePassword },
        ],
        code: [
          { required: true, trigger: "manual", validator: validateVerifyCode },
        ],
        checked: [{ validator: isChecked, trigger: "manual" }],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      captchaLoading: false,
      invalidMessage: "",
      usernamePopover: false,
      codePopover: false,
      passwordPopover: false,
      checkedPopover: false,
      showFlag: false,
      showCaptcha: false,
      captchaImgSrc: "",
      errorMsg: "", // 请求登录接口返回的错误信息
    };
  },
  methods: {
    getCaptcha() {
      if (this.VUE_APP_CAPTCHA == "1") {
        this.showCaptcha = true;
        const prefix = process.env.VUE_APP_BASE_API;
        this.captchaImgSrc =
          prefix +
          "/online/authorization/auth/verify/code?time=" +
          new Date().getTime() +
          "&username=" +
          this.loginForm.username;
      }
    },
    encryptPassword(json) {
      var encryptor = new JSEncrypt();
      var publicKey = this.VUE_APP_PUBKEY;
      encryptor.setPublicKey(publicKey);
      var rsaPassWord = encryptor.encrypt(json);
      return rsaPassWord;
    },
    startSignUp() {
      this.signUpDialogVisible = true;
    },
    resetPassword() {
      this.resetPasswordDialogVisible = true;
    },
    handleBlur() {
      if (this.loginForm.username && !this.showCaptcha) {
        this.getCaptcha();
      } else if (!this.loginForm.username) {
        this.showCaptcha = false;
      }
    },
    validate(prop, isValid, message) {
      if (this.showFlag) {
        return;
      }
      this.showFlag = !isValid;
      this[prop + "Popover"] = !isValid;

      if (!isValid) {
        this.invalidMessage = message;
      }
    },
    hidePopovers() {
      this.checkedPopover =
        this.codePopover =
        this.passwordPopover =
        this.usernamePopover =
          false;
    },
    handleLogin() {
      this.showFlag = false;
      this.hidePopovers();
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          let characterCode, characterStatus, token, needPasswdChange;

          try {
            if (this.VUE_APP_PRIVACY == '0') {
              this.loginForm.checked = true;
            }
            const { timestamp } = await this.$store.dispatch("getTimeStamp");
            const json = JSON.stringify({
              timestamp,
              password: this.loginForm.password,
            });
            const encryptedPassword = this.encryptPassword(json);
            const res = await this.$store.dispatch("login", {
              ...this.loginForm,
              password: encryptedPassword,
            });
            characterCode = res.characterCode;
            characterStatus = res.characterStatus;
            token = res.token;
            needPasswdChange = res.needPasswdChange;
          } catch (err) {
            this.getCaptcha();
            this.errorMsg = err;
            return;
          } finally {
            this.loading = false;
          }

          const exp = new Date();
          exp.setTime(exp.getTime() + 2 * 60 * 60 * 1000);
          const tokenKey =
            characterCode === "OPERATOR" ? "TOMS_TOKEN" : "token";
            
          //  characterStatus 1:ok 2:待审核 3:审核失败
          if (characterStatus && characterStatus !== 1) {
            if (characterStatus === 2) {
              this.$router.push(`/account-status?token=${token}`);
            } else if (characterStatus === 3) {
              this.$router.push(`/resubmit-form?token=${token}`);
            }
          } else {
            document.cookie = `${tokenKey}=${token};path=/;domain=${
              process.env.VUE_APP_DOMAIN
            };expires=${exp.toGMTString()}"`;

            exp.setTime(exp.getTime() + 30 * 24 * 3600 * 1000);

            document.cookie = `lang=${this.$store.state.locale};path=/;domain=${
              process.env.VUE_APP_DOMAIN
            };expires=${exp.toGMTString()}"`;
            let location = "";

            switch (characterCode) {
              case "OPERATOR":
                location = process.env.VUE_APP_OPERATOR_ADDRESS;
                break;
              case "DEV":
                location = process.env.VUE_APP_DEVELOPER_ADDRESS;
                break;
              case "MANUFACTURER":
                location = process.env.VUE_APP_MANUFACTURER_ADDRESS;
                break;
              case "ADMIN":
                location = process.env.VUE_APP_ADMIN_ADDRESS;
                break;
            }
            
            if (needPasswdChange == 1) {
              window.open("/change-password");
              this.loginForm.code = "";
              this.loginForm.password = "";
              this.getCaptcha();
            } else {
              window.location.href = location;
            }
          }
        } else {
          return false;
        }
      });
    },
  },
  async mounted() {
    const { default: _JSEncrypt } = await import("jsencrypt");
    JSEncrypt = _JSEncrypt;
    this.$store.commit("SET_MENU", false);
  },
};
</script>

<style lang="scss" scoped>
@use "~assets/css/mixin";
@use "~assets/css/variables";
.background {
  background-image: url("~assets/sign-in/bg.png");
  @include mixin.background-cover;
  min-height: 100vh;
  position: relative;
}

.login-title-wrapper {
  display: none;
  @screen md {
    display: block;
  }
}

.welcome {
  color: #ffffff;
}

.login-form {
  /* min-height: 500px; */
}

.login-form__header {
  color: #ffffff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 18px;
  background-color: variables.$loginFormHeaderBackground;
  padding: 10px 20px;
}

.login-form__body {
  background: #ffffff;
  padding: 20px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  .website-icon {
    background-color: #297be2;
    padding: 0 10px;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s;
    cursor: pointer;
    & > a > img {
      user-select: none;
      width: 20px;
      height: auto;
    }
    &:hover {
      background-color: #1a5fbb;
    }
  }
}

.login-footer {
  background: #f8f9fb;
  padding: 10px 0;
  /* position: absolute; */
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
  @screen md {
    padding: 20px 0;
  }
}
</style>
