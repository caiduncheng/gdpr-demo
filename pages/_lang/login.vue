<template>
  <div class="background">
    <NavBar />
    <div class="container container-fluid">
      <div class="row login items-center mb-10" style="padding-top: 40px; padding-bottom: 130px;">
        <div class="col-8">
          <h1 class="text-white mb-3">Welcome!</h1>
          <p class="text-white text-3xl">Abandon the complexity / Embrace the world.</p>
        </div>
        <div class="col-4">
          <div class="login-form">
            <div class="login-form__header">Sign in</div>
            <div class="login-form__body">
              <p
                class="text-xs text-gray text-center mb-4"
              >Sign in to your account using email and password provided during registration</p>
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
                    {{invalidMessage}}
                    <el-input
                      @focus="hidePopovers"
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
                    {{invalidMessage}}
                    <el-input
                      @focus="hidePopovers"
                      slot="reference"
                      placeholder="Password"
                      v-model="loginForm.password"
                      type="password"
                      tabindex="2"
                      auto-complete="on"
                      prefix-icon="el-icon-lock"
                    ></el-input>
                  </el-popover>
                </el-form-item>
                <el-form-item prop="code">
                  <el-row :gutter="20" type="flex" class="items-center">
                    <el-col :span="14">
                      <el-popover trigger="manual" v-model="codePopover" placement="top">
                        <i class="el-icon-warning text-yellow-500"></i>
                        {{invalidMessage}}
                        <el-input
                          @focus="hidePopovers"
                          slot="reference"
                          placeholder="Captcha"
                          v-model.trim="loginForm.code"
                          @keyup.enter.native="handleLogin"
                        ></el-input>
                      </el-popover>
                    </el-col>
                    <el-col :span="10" class="login-captcha">
                      <button>
                        <img ref="captcha" alt @click="getCaptcha" style="height: 30px;" />
                      </button>
                    </el-col>
                  </el-row>
                </el-form-item>

                <el-form-item>
                  <el-button class="w-full" type="primary" @click="handleLogin">Sign in</el-button>
                </el-form-item>
              </el-form>
              <div>
                <p class="text-gray text-xs text-center mb-3">
                  Don't have an account yet?
                  <a href="/" @click.prevent="startSignUp">
                    <span class="link">Sign up</span>
                  </a>
                </p>
                <div class="text-center">
                  <a href="/" class="text-xs link">Forgot paassword?</a>
                </div>
              </div>
              <hr class="my-5" />
              <div class="text-center">
                <el-checkbox>
                  <span class="text-xs">I accept</span>
                  <NuxtLink to="/" class="link">Terms & Conditions</NuxtLink>
                </el-checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="mb-3">
              <img class="mr-2" src="~assets/sign-in/4.png" alt />
              <img class="mr-2" src="~assets/sign-in/5.png" alt />
              <img src="~assets/sign-in/6.png" alt />
            </div>
            <p
              class="text-gray text-xs"
            >Copyright 2021 Newland Payment Technology(newlandnpt.com). All rights reserved. ICP 15018196-2</p>
          </div>
        </div>
      </div>
    </div>
    <LazySignupDialog :visible.sync="dialogVisible" title="Sign Up" />
  </div>
</template>

<script>
import config from "../../config";
const envConfig = config[process.env.NODE_ENV];
let JSEncrypt = null;

export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("login.validate_password_tip")));
      } else if (value.length < 8) {
        callback(new Error(this.$t("login.validate_password_tip")));
      } else if (value.length > 16) {
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

    const isChecked = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("login.agree_terms_and_conditions_tip")));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: false,
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
        code: [{ required: true, trigger: "manual" }],
        checked: [{ validator: isChecked, trigger: "manual" }],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      captchaLoading: false,
      selectRoledialogVisible: false,
      resetDialogVisible: false,
      invalidMessage: "",
      usernamePopover: false,
      codePopover: false,
      passwordPopover: false,
      showFlag: false,
    };
  },
  methods: {
    getCaptcha() {
      const prefix = envConfig.VUE_APP_BASE_API;
      this.$refs.captcha.src =
        prefix +
        "/online/authorization/auth/verify/code?time=" +
        new Date().getTime();
    },
    encryptPassword(json) {
      var encryptor = new JSEncrypt();
      var publicKey =
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkkApKkKERcT8C9pkcH7F2YxOyK8veLXqLm06iY+XlTuvSFCxC3Fe7AudJ01nj8BAXiI947/OTEHsbX8hQUIitJl1A/AFYiiqzd+ZzsQNPDrtXUMIGMFDa2KpYzSOCwLimZ4NHShXpynEjyer5jz55iL8LjwqBiPcHeg7IfA1Itfm4moONjaCBzMCtNw+5En6i4cS0f2Tilxh+8LLnryqThJiom64Yvu9NtLJLAYr5eGxQ6ng679AaD0nckXGOiy4HqgNA3LTGfq45L4wrCbLR2UcqPba9HJ90zamXz7elrgwFy1ShLCyLQ9+SjxGKKQpdxeqLvpttX+UY/+O4S8j2wIDAQAB";
      encryptor.setPublicKey(publicKey);
      var rsaPassWord = encryptor.encrypt(json);
      return rsaPassWord;
    },
    startSignUp() {
      this.dialogVisible = true;
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
      this.codePopover = this.passwordPopover = this.usernamePopover = false;
    },
    handleLogin() {
      this.showFlag = false;
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          let characterCode, characterStatus, token;

          try {
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
          } catch (err) {
            this.getCaptcha();
            return;
          } finally {
            this.loading = false;
          }

          const exp = new Date();
          exp.setTime(exp.getTime() + 2 * 60 * 60 * 1000);
          const tokenKey =
            characterCode === "OPERATOR" ? "TOMS_TOKEN" : "token";

          if (characterStatus && characterStatus !== 1) {
            if (characterStatus === 2) {
              this.$router.push(`/account-status?token=${token}`);
            } else if (characterStatus === 3) {
              this.$router.push(`/resubmit-form?token=${token}`);
            }
          } else {
            document.cookie = `${tokenKey}=${token};path=/;domain=${
              envConfig.VUE_APP_DOMAIN
            };expires=${exp.toGMTString()}"`;

            const location = envConfig[`VUE_APP_${characterCode}_ADDRESS`];
            window.location.href = location;
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
    this.getCaptcha();
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
}

.login-footer {
  background: #f8f9fb;
  padding: 20px 0;
  /* position: absolute; */
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
}

.link {
  font-weight: 700;
  font-size: 12px;
  color: #3e80e5;
}
</style>