<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" top="10vh" :close-on-click-modal="false" @open="handleOpen"
    :before-close="handleClose" @close="close">
    <!-- 2fa 通知 -->
    <div v-if="step === -1" style="color: #1f2328; word-break:break-word; max-width: 500px;">

      <div style="text-align: center;">
        <img src="~assets/logo.png" width="150px" alt="">
        <div style="font-size: 24px; line-height: 150%; margin-top: 32px;" v-html="$t('login.otp_info')">
        </div>
      </div>
      <div
        style="margin-top: 28px; font-size: 14px; line-height: 150%;  padding: 28px 28px; border: solid 1px #DADEE1; background-color: #F7F8FA; border-radius: 6px;">
        <div style="text-align: center;">
          <p style="font-size: 24px; line-height: 150%; font-weight: 600;">{{ username }}</p>
        </div>
        <div
          style="margin-top: 28px; display: flex; padding: 14px; border: solid 1px #B9D7F2; background-color: #E1F3FF; border-radius: 6px;">
          <i class="el-icon-warning-outline"
            style="font-size: 21px; margin-right: 7px;font-weight: 600; color:#3E74C2;" />
          <div>
            <div>
              <b>
                {{ $t('login.otp.take_1m') }}
              </b>
            </div>
            <div class="normal-text">
              {{ $t('login.otp.take_1m_tip') }}
            </div>
          </div>
        </div>

        <div class="normal-text" style="margin-top: 20px;text-align: justify;">
          {{ $t('login.otp.tfa_why') }}
        </div>

        <div class="normal-text" style="margin-top: 20px;text-align: justify;">
          <p><b>
              {{ $t('login.otp.tfa_what_forms') }}
            </b></p>
          <div v-html="$t('login.otp.tfa_what')">

          </div>
        </div>
        <div style="margin-top: 28px;  display: flex; justify-content: center;">

          <el-button style="padding: 12px 40px;" type="primary" @click="handleEnable2FA">
            {{ $t('login.otp.enable_2fa_now') }}
          </el-button>
        </div>
      </div>
    </div>

    <!-- 2fa 激活流程 -->

    <div v-if="step > -1" style="display: flex; flex-direction: column; align-items: center; margin-top: 14px;">
      <p class="normal-text" style="font-size: 28px; line-height: 150%; color: #656d76;">{{ $t('login.otp.enable_2fa') }}
      </p>
      <el-steps align-center style="width: 300px;margin-top: 28px;" :active="step">
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>
      </el-steps>
    </div>
    <div v-if="step > -1"
      style="max-width: 680px; margin-top: 28px; font-size: 14px; line-height: 150%;  padding: 20px 20px 0px; border: solid 1px #DADEE1; background-color: #F7F8FA; border-radius: 6px;">
      <div v-if="step === 0" style="color: #1f2328; word-break:break-word;">

        <el-form label-position="right" label-width="100px" :model="form" ref="form" size="small" :rules="rules"
          @submit.prevent.native="sendEmailCode">
          <div class="mb-3 break-words" style="word-break: break-word;">
            {{ $t('login.otp.open_otp_tip') }}
          </div>
          <el-form-item :label="$t('login.account_email_placeholder')" prop="username">
            <el-input v-model="form.username" :placeholder="$t('login.account_email_placeholder')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('login.password')" prop="password">
            <el-input v-model="form.password" type="password" :placeholder="$t('login.password')"></el-input>
          </el-form-item>
          <el-form-item :label="$t('login.captcha')" prop="captcha">

            <div style="display: flex;">
              <el-input style="margin-right: 8px;" v-model="form.captcha" :placeholder="$t('login.captcha')"></el-input>
              <img ref="img" alt @click="getCaptcha" style="height: 32px; cursor: pointer;" />
            </div>
          </el-form-item>
          <el-form-item>
            <el-button native-type="submit" type="primary" class="w-full" :loading="loading">{{ $t('login.send')
            }}</el-button>
            <div class="text-center error-message" v-if="errorMessage">{{ errorMessage }}</div>
          </el-form-item>
        </el-form>

      </div>


      <div v-if="step === 1" style="max-width: 475px; color: #1f2328; word-break:break-word;">
        <el-form ref="emailForm" size="small" :model="emailForm" :rules="emailRules" @submit.native.prevent>

          <div class="mb-2 break-words" style="word-break: break-word;">
            {{ $t('login.email_code_tip') }}
          </div>

          <el-form-item style="margin-bottom: 24px;" prop="emailToken">
            <el-input v-model.trim="emailForm.emailToken" @input="emailCodeHandleInput"
              :placeholder="$t('login.verification_code')"
              @blur="() => emailForm.emailToken = emailForm.emailToken.trim()"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleGetKey" type="primary" :disabled="validateEmailCode" key="resetotp" class="w-full"
              :loading="loading">{{ $t('common.confirm')
              }}</el-button>
            <div class="text-center error-message" v-if="errorMessage">{{ errorMessage }}</div>
          </el-form-item>
        </el-form>
      </div>

      <div v-if="step === 2" style="color: #1f2328; word-break:break-word;margin-bottom: 18px">

        <div class="sub-title" style="font-size: 20px;">
          {{ $t('login.otp.setup_authenticator_app') }}</div>
        <div class="sub-txt" v-html="$t('login.otp.app_intro')">


        </div>
        <div class="sub-title">
          {{ $t('login.otp.scan_qrcode') }}</div>
        <div class="sub-txt">
          {{ $t('login.otp.scan_qrcode_tip') }}</div>
        <div style="display: flex; margin-top: 16px;justify-content: center; align-items: center;">
          <div style="position: relative; padding: 16px; border-radius: 8px; border: solid 2px #f6f6f6;">
            <qrcode-vue :value="qrcodeValue" :size="150" level="H" />
          </div>
          <div><i class="el-icon-d-arrow-right" style="color:#409EFF; font-size: 32px; padding: 16px;"></i></div>
          <img src="~assets/otp.png" width="150">
          <div></div>
        </div>

        <div class="sub-txt">
          {{ $t('login.otp.unalbe_scan_qrcode') }}
          <el-button type="text" @click="showSecretKey"> {{ $t('login.otp.manual') }}</el-button>
        </div>
        <div class="sub-title" style="margin-bottom: 8px;">
          {{ $t('login.otp.verify_code') }}
        </div>
        <div style="display: flex;">
          <el-input placeholder="xxxxxx" v-model="OTPCode" @input="OTPCodeHandleInput" :disabled="inputDisabled"></el-input>
        </div>
            <div class="text-center error-message mt-1" style="color:#F56C6C" v-if="errorMessage">{{ errorMessage }}</div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
let JSEncrypt = null;

export default {
  props: {
    username: String,
    forgetOtp: {
      type: Boolean,
      default: false
    }
  },
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
      } else {
        callback();
      }
    };
    return {
      inputDisabled: false,
      seedKey: "",
      OTPCode: "",
      captchaImgSrc: "",
      androidUrl: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",
      appleUrl: "https://apps.apple.com/app/google-authenticator/id388497605",
      vivoUrl: "https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=702082",
      VUE_APP_CAPTCHA: process.env.VUE_APP_CAPTCHA,
      VUE_APP_PUBKEY: process.env.VUE_APP_PUBKEY,
      keyPair: null,
      step: -1,
      loading: false,
      form: {
        username: "",
        password: "",
        captcha: ""
      },
      emailForm: {
        emailToken: ""
      },
      emailRules: {
        emailToken: [
          {
            required: true,
            message: this.$t("login.validate_email_token_required"),
          }
        ]
      },
      rules: {
        username: [
          { required: true, trigger: "manual", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "manual", validator: validatePassword },
        ],
        captcha: [
          { required: true, trigger: "manual", validator: validateVerifyCode },
        ],
      },
      errorMessage: "",
      qrcodeValue: "",
    };
  },
  components: {
    QrcodeVue,
  },
  computed: {
    validateEmailCode() {
      return !(this.emailForm.emailToken.length > 5 && this.emailForm.emailToken.length < 9)
    },
    validateOTPCode() {
      return !(this.OTPCode.length === 6)
    }
  },
  methods: {
    showSecretKey() {
      this.$alert(this.seedKey, this.$t('login.otp.your_2fa_secret'), {
        confirmButtonText: this.$t('common.confirm'),
      });
    },
    emailCodeHandleInput(val) {
      const value = val.replace(/[^\d]+/g, '')
      this.emailForm.emailToken = value
    },
    OTPCodeHandleInput(val) {
      const value = val.replace(/[^\d]+/g, '')
      this.OTPCode = value
      if (this.OTPCode.length === 6) {
        this.handleConfirmKey()
      }
    },
    handleOpen() {
      this.form.username = this.username;
      const rsa = new JSEncrypt()
      this.keyPair = rsa.getKey()
      if (this.forgetOtp) {
        this.step = 0
        this.getCaptcha()
      }
    },
    sendEmailCode() {
      this.errorMessage = ""
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          try {
            let random = "";
            for (var i = 0; i < 6; i++) {
              random += Math.floor(Math.random() * 10);
            }
            const { timestamp } = await this.$store.dispatch("getTimeStamp");
            const json = JSON.stringify({
              random,
              timestamp,
              password: this.form.password,
            });

            const encryptedPassword = this.encryptPassword(json);
            let res = null
            res = await this.$store.dispatch("sendEmailCode", {
              ...this.form,
              password: encryptedPassword,
            });

            if (res === "") {
              this.$refs.form.clearValidate()
              this.step = 1
            }
          } catch (err) {
            this.getCaptcha();
            this.errorMessage = err.message;
            if (err.code === "9960") {
              this.errorMessage = "Email verification code has been sent, please try again in one minute"
            }
          } finally {
            this.loading = false;
          }
        }
      });
    },
    handleEnable2FA() {
      this.step = 0
      this.getCaptcha();

    },  
    handleGetKey() {
      this.$refs.emailForm.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          try {
            String.prototype.replaceAll = function (newString, oldString) {
              return this.replace(new RegExp("oldString", "gm"), "newString")
            }
            const res = await this.$store.dispatch("getOTPKey", {
              otpSolution: "google",
              emailToken: this.emailForm.emailToken,
              publicKey: this.keyPair.getPublicKey().replace("-----BEGIN PUBLIC KEY-----", '').replace("-----END PUBLIC KEY-----", '').replace(/\n/g, ''),
              // publicKey: this.keyPair.getPublicKey(),
              username: this.form.username
            });
            let decrypt = new JSEncrypt()
            decrypt.setPrivateKey(this.keyPair.getPrivateKey())
            if (res.seedKey) {
              let seedKey = decrypt.decrypt(res.seedKey)
              let otpSolution = 'TOMS'
              this.seedKey = seedKey
              let label = ''
              if (this.form.username.indexOf("@") === -1) {
                const prefix = this.form.username.slice(0, 3)
                const suffix = this.form.username.slice(-1)
                label = prefix + '****' + suffix
              } else {
                const nameBreaks = this.form.username.split('@')
                const prefix = nameBreaks[0].slice(0, 3)
                label = prefix + '****' + '@' + nameBreaks[1]
              }
              this.qrcodeValue = `otpauth://totp/${label}?secret=${seedKey}&issuer=${otpSolution}`
              // 页面跳转时停止保存
              window.onbeforeunload = () => {
                return ''
              }
              this.$refs.emailForm.clearValidate()
              this.step = 2
            } else {
              this.errorMessage = "Get 2FA failed, please reset One-Time Password(OTP)"
            }
          } catch (err) {
            this.errorMessage = err.message;
          } finally {
            this.loading = false;
          }
        }
      });
    },
    handleConfirmKey() {
      this.inputDisabled = true;
      this.$store.dispatch("confirmOTPKey", {
        username: this.form.username,
        token: this.OTPCode,
      }).then((res)=> {
        this.$message({
          message: this.$t('login.otp.congratulations'),
          type: 'success'
        });
        // 解除页面跳转限制
          window.onbeforeunload = () => { }
          this.step = -1;
          this.form = {
            username: "",
            password: "",
            captcha: ""
          }
          this.OTPCode = ''
          this.emailForm.emailToken = ""
          if (this.$refs.form) {
            this.$refs['form'].clearValidate()
          }
          if (this.$refs.emailForm) {
            this.$refs['emailForm'].clearValidate()
          }
          this.inputDisabled = false;

          this.errorMessage = '';
          this.$emit('set-otpcode', true)
          this.$emit("update:visible", false);
      }).catch((err)=> {
      this.inputDisabled = false;
        this.errorMessage = err.message;
      })
    },
    close(){
          this.$emit('set-otpcode', false)
    },
    handleClose(done) {
      if (this.step === 2) {
        this.$confirm(this.$t('login.confirm_close_2fa_dialog'), this.$t('common.tip'), {
          confirmButtonText: this.$t('common.confirm'),
          cancelButtonText: this.$t('common.cancel'),
          type: 'warning'
        }).then(() => {
          // 解除页面跳转限制
          window.onbeforeunload = () => { }
          this.step = -1;
          this.form = {
            username: "",
            password: "",
            captcha: ""
          }
          this.OTPCode = ''
      this.inputDisabled = false;
this.loading = false
          this.emailForm.emailToken = ""
          if (this.$refs.form) {
            this.$refs['form'].clearValidate()
          }
          if (this.$refs.emailForm) {
            this.$refs['emailForm'].clearValidate()
          }
          this.errorMessage = '';
          this.$emit('set-otpcode', false)

          done()
        }).catch(() => {
          return
        })
      } else {
        this.step = -1;
        this.form = {
          username: "",
          password: "",
          captcha: ""
        }
        this.emailForm.emailToken = ""
        if (this.$refs.form) {
          this.$refs['form'].clearValidate()
        }
        if (this.$refs.emailForm) {
          this.$refs['emailForm'].clearValidate()
        }
      this.inputDisabled = false;
        this.loading = false
          this.OTPCode = ''
        this.errorMessage = '';
        this.$emit('set-otpcode', false)
        this.$emit("update:visible", false);
      }
    },
    encryptPassword(json) {
      var encryptor = new JSEncrypt();
      var publicKey = this.VUE_APP_PUBKEY;
      encryptor.setPublicKey(publicKey);
      var rsaPassWord = encryptor.encrypt(json);
      return rsaPassWord;
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
          "/online/authorization/auth/2FA/otp/captcha?time=" +
          new Date().getTime() +
          "&username=" +
          this.form.username;
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
              let resultObj = JSON.parse(result)
              _this.$nextTick(() => {
                let img = _this.$refs.img;
                img.src = resultObj.captcha
              })
            }
          }
        }
        request.send(null);
      };

    }
  },
  async mounted() {
    const { default: _JSEncrypt } = await import("jsencrypt");
    JSEncrypt = _JSEncrypt;
  }
}

</script>

<style lang="scss" scoped>
.normal-text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.sub-txt {
  word-break: break-word;
  font-size: 14px;
  line-height: 150%;
  color: #656d76;
  margin-bottom: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.sub-title {
  word-break: break-word;
  font-size: 14px;
  line-height: 150%;
  color: #000;
  margin-bottom: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

::v-deep .el-dialog {
  width: fit-content;
}

::v-deep .el-step {
  .el-step__line {
    top: 16px
  }

  .el-step__icon.is-text {
    width: 32px;
    height: 32px;
    border: solid 2px #C0C4CC;
  }

  .is-wait {
    color: #656d76;
  }

  .is-process {
    color: #fff;

    .el-step__icon.is-text {
      width: 32px;
      height: 32px;
      background-color: #0969DA;
      border: solid 2px #0969DA;
    }
  }

  .is-finish {
    color: #fff;
    border: #C0C4CC;

    .el-step__icon.is-text {
      width: 32px;
      height: 32px;
      background-color: #0969DA;
      border: solid 2px #0969DA;
    }

  }
}</style>