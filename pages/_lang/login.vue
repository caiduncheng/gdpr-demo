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
              <el-form @validate="validate" class="small" ref="loginForm" :model="loginForm" :rules="loginRules"
                auto-complete="on" @submit.native.prevent :show-message="false">
                <el-form-item prop="username">
                  <el-popover trigger="manual" v-model="usernamePopover" placement="top">
                    <i class="el-icon-warning text-yellow-500"></i>
                    {{ invalidMessage }}
                    <el-input @focus="hidePopovers" @change="handleBlur" slot="reference" ref="username"
                      v-model.trim="loginForm.username" :placeholder="$t('login.account_email_placeholder')" tabindex="1"
                      auto-complete="on" prefix-icon="el-icon-user"></el-input>
                  </el-popover>
                </el-form-item>
                <el-form-item prop="password">
                  <el-popover trigger="manual" v-model="passwordPopover" placement="top">
                    <i class="el-icon-warning text-yellow-500"></i>
                    {{ invalidMessage }}
                    <el-input @focus="hidePopovers" slot="reference" :placeholder="$t('login.password')"
                      v-model="loginForm.password" type="password" tabindex="2" auto-complete="on"
                      prefix-icon="el-icon-lock"></el-input>
                  </el-popover>
                </el-form-item>
                <el-form-item v-if="VUE_APP_CAPTCHA == '1' && showCaptcha && !OTP" prop="code">
                  <el-row :gutter="20" type="flex" class="items-center">
                    <el-col :span="14">
                      <el-popover trigger="manual" v-model="codePopover" placement="top">
                        <i class="el-icon-warning text-yellow-500"></i>
                        {{ invalidMessage }}
                        <el-input tabindex="3" @focus="hidePopovers" slot="reference" maxlength="5"
                          :placeholder="$t('login.captcha')" v-model.trim="loginForm.code"
                          @keyup.enter.native="handleLogin"></el-input>
                      </el-popover>
                    </el-col>
                    <el-col :span="10" class="login-captcha">
                      <button>
                        <img ref="img" alt @click="getCaptcha" style="height: 30px" />
                      </button>
                    </el-col>
                  </el-row>
                </el-form-item>

                <el-form-item v-if="VUE_APP_CAPTCHA == '1' && showCaptcha && OTP" prop="otpToken">
                  <div style="display: flex; align-items: center;">
                    <div style="flex: auto;">
                      <el-popover trigger="manual" v-model="otpTokenPopover" placement="top">
                    <i class="el-icon-warning text-yellow-500"></i>
                    {{ invalidMessage }}
                    <el-input tabindex="4" @focus="hidePopovers" slot="reference" prefix-icon="el-icon-mobile-phone" :placeholder="$t('One-Time Password')"
                      v-model.trim="loginForm.otpToken" @keyup.enter.native="handleLogin"></el-input>
                  </el-popover>
                    </div>
                    <div style="flex: none; width: 44px; ">
                      <el-tooltip content="Lost OTP" placement="top" open-delay="300">
                      <div class="hover:bg-gray-100 text-center mx-2 cursor-pointer" style="border-radius: 4px;width: 32px; line-height: 32px;" @click="forgetOtpHandle">
                        <i class="el-icon-refresh-right" ></i>
                      </div>
                     </el-tooltip>

                    </div>
                  </div>



                    
      
                  

                </el-form-item>

                <el-form-item>
                  <el-button class="w-full" :loading="loading" type="primary" @click="handleLogin">{{ $t("common.sign_in")
                  }}</el-button>
                  <div class="el-form-item__error text-center">{{ errorMsg }}</div>
                </el-form-item>
              </el-form>

              <div v-if="VUE_APP_EMAIL == '1'" class="text-center mt-6">
                <p v-if="VUE_APP_SIGN_UP == '1'" class="text-gray text-xs text-center mb-3">
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
              <hr v-if="VUE_APP_EMAIL == '1' && VUE_APP_NEWLAND_INFO == '1'" class="my-3" />

              <div class="text-center mt-6" v-if="VUE_APP_NEWLAND_INFO == '1'">
                <el-tooltip effect="dark" content="FlyCare" placement="bottom">
                  <div class="website-icon mr-10">
                    <a :href="VUE_APP_FLYKEY_ADDRESS">
                      <img src="~assets/sign-in/flycare.png" alt />
                    </a>
                  </div>
                </el-tooltip>
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

              <a href="https://www.youtube.com/channel/UCrvhI9uCspr2H1otSvNpxvg" target="_blank">
                <img src="~assets/sign-in/youtube.png" alt />
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
    <LazySignupDialog :visible.sync="signUpDialogVisible" :title="$t('login.sign_up')" @login="fillEmail" />
    <LazyResetPasswordDialog :visible.sync="resetPasswordDialogVisible" :title="$t('login.title_reset_password')" />
    <LazyOTPDialog :visible.sync="OTPDialogVisible" :username="loginForm.username" :forget-otp="forgetOtp" @set-otpcode="onSetOtpcode" :title="$t('login.tofa')" />
  </div>
</template>

<script>
let JSEncrypt = null;

export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("login.validate_password6_tip")));
      } else if (value.length < 6) {
        callback(new Error(this.$t("login.validate_password6_tip")));
      } else if (value.length > 18) {
        callback(new Error(this.$t("login.validate_password6_tip")));
      } else {
        callback();
      }
    };

    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("login.validate_username_required_tip")));
      } else if (value.length < 1) {
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

    const validateVerifyOTP = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t("login.validate_otp_required")));
      } else {
        callback();
      }
    };

    return {
      VUE_APP_PUBKEY: process.env.VUE_APP_PUBKEY,
      VUE_APP_EMAIL: process.env.VUE_APP_EMAIL,
      VUE_APP_NEWLAND_INFO: process.env.VUE_APP_NEWLAND_INFO,
      VUE_APP_CAPTCHA: process.env.VUE_APP_CAPTCHA,
      VUE_APP_SIGN_UP: process.env.VUE_APP_SIGN_UP,
      VUE_APP_FLYKEY_ADDRESS: process.env.VUE_APP_FLYKEY_ADDRESS,
      signUpDialogVisible: false,
      OTPDialogVisible: false,
      forgetOtp: false,
      resetPasswordDialogVisible: false,
      loginForm: {
        username: "",
        password: "",
        code: "",
        checked: false,
        otpToken: ""
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
        otpToken: [
          { required: true, trigger: "manual", validator: validateVerifyOTP },
        ],
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
      otpTokenPopover: false,
      OTP: false,
      showFlag: false,
      showCaptcha: false,
      captchaImgSrc: "",
      errorMsg: "", // 请求登录接口返回的错误信息
    };
  },
  methods: {
    // 忘记 otp
    forgetOtpHandle() {
      this.forgetOtp = true
      this.OTPDialogVisible = true
    },
    onSetOtpcode(event) {
      this.forgetOtp = false
      if (event) {
        this.OTP = true
        
      }
    },
    fillEmail(email) {
      this.loginForm.username = email;
    },
    getCaptcha() {

      if (this.VUE_APP_CAPTCHA == "1") {
        const prefix = process.env.VUE_APP_BASE_API;
        // this.captchaImgSrc =
        //   prefix +
        //   "/online/authorization/auth/verify/code?time=" +
        //   new Date().getTime() +
        //   "&username=" +
        //   this.loginForm.username;
        this.captchaImgSrc =
          prefix +
          "/online/authorization/auth/captcha?time=" +
          new Date().getTime() +
          "&username=" +
          this.loginForm.username;
        let _this = this
        let request = new XMLHttpRequest();
        request.responseType = "blob";
        request.open("get", this.captchaImgSrc, true);
        request.onreadystatechange = (e) => {
          if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
            let fr = new FileReader()
            fr.readAsText(request.response)
            fr.onload = function (e) {
              let result = fr.result
              let resultObj = JSON.parse(fr.result)
              if (resultObj.code === "1096") {
                _this.showCaptcha = true;
                _this.OTP = true
              }
              else {
                _this.showCaptcha = true;
                _this.OTP = false
                _this.$nextTick(() => {
                  let img = _this.$refs.img;
                  img.src = resultObj.captcha
                })
              }
            }
          }else if (request.readyState == XMLHttpRequest.DONE) {
            console.log(request);

            let fr = new FileReader()
            fr.readAsText(request.response)
            fr.onload = function (e) {
              let resultObj = JSON.parse(fr.result)
              _this.errorMsg = resultObj.message
            }
          }
        };
        request.send(null);

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
      if (this.loginForm.username) {
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
        this.otpTokenPopover =
        false;
    },
    handleLogin() {
      this.showFlag = false;
      this.hidePopovers();
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          let characterCode, characterStatus, token, needPasswdChange, platformInfoList;

          try {
            let random = "";
            for (var i = 0; i < 6; i++) {
              random += Math.floor(Math.random() * 10);
            }

            const { timestamp } = await this.$store.dispatch("getTimeStamp");
            const json = JSON.stringify({
              random,
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
            platformInfoList = res.platformInfoList;
            token = res.token;
            needPasswdChange = res.needPasswdChange;
          } catch (err) {
            if (err && err.code === "1097") {
            // 绑定2fa 流程
              this.getCaptcha();
              this.OTPDialogVisible = true
              this.errorMsg =err.message
            } else if (err && err.code === '1096') {
              // 使用 otp 验证码
              this.errorMsg = err.message
              this.showCaptcha = true
              this.OTP = true
            } else {
              // 验证码错误
              this.getCaptcha();
              this.errorMsg = err.message;
            }
            return
          } finally {
            this.loading = false;
          }

          const exp = new Date();
          exp.setTime(exp.getTime() + 2 * 60 * 60 * 1000);
          const tokenKey = "TOMS_TOKEN";
          const host = document.location.host
          let domain = ''
          if(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(host)) {
            domain = host
          } else {
            const sub = host.split('.')[0]
            domain = host.slice(sub.length)
          }
          // const tokenKey =
          //   characterCode === "OPERATOR" ? "TOMS_TOKEN" : "token";
          //  characterStatus 1:ok 2:待审核 3:审核失败
          if (characterStatus && characterStatus !== 1) {
            if (characterStatus === 2 || characterStatus === 5 || characterStatus === 7) {
              this.$router.push(
                `/account-status?token=${token}&characterCode=${characterCode}`
              );
            } else if (characterStatus === 3) {
              if ("DEV" === characterCode) {
                this.$router.push(`/resubmit-form-dev?token=${token}`);
              } else {
                this.$router.push(`/resubmit-form?token=${token}`);
              }
            }
          } else {
            document.cookie = `${tokenKey}=${token};path=/;domain=${
              domain
            };expires=${exp.toGMTString()}"`;

            exp.setTime(exp.getTime() + 30 * 24 * 3600 * 1000);

            document.cookie = `lang=${this.$store.state.locale};path=/;domain=${
              domain
            };expires=${exp.toGMTString()}"`;
            let location = "";

            switch (characterCode) {
              case "OPERATOR":
                let platforms = platformInfoList.map(item => item.platCode)
                if (platforms.includes('TOMS')) {
                  location = document.location.origin + '/operator/#/'
                } else if (platforms.includes('FLYCARE')) {
                  location = 'https://' + 'flycare' + domain
                }
                break;
              case "DEV":
                location = document.location.origin + '/developer/#/'
                break;
              case "MANUFACTURER":
                location = document.location.origin + '/vendor/#/'
                break;
              case "ADMIN":
                location = document.location.origin + '/admin/#/'
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
    line-height: 40px;
    transition: background-color 0.3s;
    cursor: pointer;

    &>a>img {
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
