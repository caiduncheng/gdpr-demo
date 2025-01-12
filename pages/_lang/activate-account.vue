<template>
  <div class="container container-fluid reset-password pt-24">
    <div class="row">
      <div class="col-10 m-auto">
        <el-card>
          <!-- 链接已经通过验证 -->
          <div v-if="verified">
            <div v-if="!success">
              <h2 class="text-2xl text-center">
                {{ $t("login.title_activate_account") }}
              </h2>
              <h3 class="text-secondary text-sm text-center mt-3">
                {{ $t("login.account") }}:{{ getAccount }}
              </h3>
              <el-form :model="form" :rules="loginRules" ref="form" class="p-5">
                <el-form-item :label="$t('login.new_password')" prop="password">
                  <el-input v-model="form.password" type="password"></el-input>
                  <div class="password-strength" v-show="showPasswordStrength">
                    <div class="text">
                      {{ $t("login.password_strength") }}
                      {{ mapPasswordStrength[passwordStrength] }}
                    </div>
                    <div class="indicator">
                      <span
                        :class="['weak', { active: passwordStrength >= 1 }]"
                      ></span>
                      <span
                        :class="['moderate', { active: passwordStrength >= 2 }]"
                      ></span>
                      <span
                        :class="['strong', { active: passwordStrength === 3 }]"
                      ></span>
                    </div>
                  </div>
                </el-form-item>
                <el-form-item
                  :label="$t('login.confirm_password')"
                  prop="confirmPassword"
                >
                  <el-input
                    v-model="form.confirmPassword"
                    type="password"
                  ></el-input>
                </el-form-item>
                <el-form-item required prop="checked" key="checked">
                  <el-checkbox
                    v-if="getCharacterCode === 'OPERATOR'"
                    v-model="form.checked"
                  >
                    <span
                      class="text-xs"
                      v-html="$t('login.agree_terms_conditions')"
                    ></span>
                  </el-checkbox>
                  <el-checkbox v-else v-model="form.checked">
                    <span
                      class="text-xs"
                      v-html="$t('login.agree_terms_conditions_ndp')"
                    ></span>
                  </el-checkbox>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    :loading="loading"
                    class="w-full"
                    @click="confirm"
                    >{{ $t("common.confirm") }}</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
            <div v-else class="text-center">
              <el-result icon="success">
                <h2 slot="title" class="text-3xl">
                  {{ $t("login.password_set_successfully") }}
                </h2>
              </el-result>

              <NuxtLink
                :to="{ name: 'lang', params: { lang: $store.state.locale } }"
              >
                <el-button type="primary">{{
                  $t("login.go_to_home_page")
                }}</el-button>
              </NuxtLink>
            </div>
          </div>
          <!-- 链接未通过验证 -->
          <div v-else >
            <el-result icon="error">
              <div slot="title">
              <h2 slot="title" class="text-3xl mb-2 text-center">
                {{ $t('login.invalid_link') }}
              </h2>
              <span>
                {{ $t('login.invalid_link_info') }}
              </span>
              </div>            
            </el-result>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
let JSEncrypt = null;
import { getQueryParam } from "@/utils";
const MAP_PASSWORD_STRENGTH = {
  1: "Weak",
  2: "Moderate",
  3: "Strong",
};
let username = "";
let email = "";
let token = "";
let result = null;
let verified = true;

export default {
  layout: "login",
  async validate({ params, query, store }) {
    username = getQueryParam("account");
    email = getQueryParam("email");
    token = getQueryParam("token");
    try {
      result = await store.dispatch("verifyResetToken", {
        username,
        email,
        token,
      });
    } catch {
      verified = false;      
    }

    return true;
  },
  computed: {
    getAccount() {
      console.log(result);
      if (result && result.account) {
        return result.account;
      }
    },
    getCharacterCode() {
      if (result && result.characterCode) {
        return result.characterCode;
      }
      return "OPERATOR";
    },
  },
  data() {
    const validChecked = function (rule, checked, cb) {
      if (!checked) {
        cb(new Error("Please agree Terms and conditions"));
      } else {
        cb();
      }
    };
    const validPassword = function (rule, password, cb) {
      if (password) {
        this.showPasswordStrength = true;
        this.passwordStrength = 1;
        if (password.length < 8) {
          cb(new Error(this.$t("login.validate_password_tip")));
        } else {
          if (password.length > 18) {
            cb(new Error(this.$t("login.validate_password_tip")));
          }
          this.showPasswordStrength = true;
          var hasUpperCase = /[A-Z]/.test(password);
          var hasLowerCase = /[a-z]/.test(password);
          var hasNumbers = /\d/.test(password);
          var hasNonalphas = /\W/.test(password);

          var complexity =
            hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas;
          if (complexity <= 2) {
            this.passwordStrength = 1;
            cb(new Error(this.$t("login.validate_password_strength")));
          } else if (complexity === 3) {
            this.passwordStrength = 2;
          } else if (complexity === 4) {
            this.passwordStrength = 3;
          }
        }
      } else {
        this.showPasswordStrength = false;
        cb(new Error(this.$t("login.validate_password_required")));
      }
      cb();
    };

    const validConfirmPassword = function (rule, password, cb) {
      if (!password) {
        cb(new Error(this.$t("login.validate_confirm_password_required")));
      }
      if (password !== this.form.password) {
        cb(new Error(this.$t("login.consistent_password_tip")));
      } else {
        cb();
      }
    };
    return {
      VUE_APP_PUBKEY: process.env.VUE_APP_PUBKEY,
      verified,
      loading: false,
      loaded: false,
      success: false,
      mapPasswordStrength: MAP_PASSWORD_STRENGTH,
      showPasswordStrength: false,
      passwordStrength: 0,
      username: "",
      account: "",
      email: getQueryParam("email"),
      token: "",
      form: {
        password: "",
        confirmPassword: "",
        checked: false,
      },
      loginRules: {
        password: [
          {
            validator: validPassword.bind(this),
          },
        ],
        confirmPassword: [
          {
            validator: validConfirmPassword.bind(this),
          },
        ],
        checked: [
          {
            validator: validChecked.bind(this),
          },
        ],
      },
    };
  },
  methods: {
    encryptPassword(json) {
      var encryptor = new JSEncrypt();
      var publicKey = this.VUE_APP_PUBKEY;
      encryptor.setPublicKey(publicKey);
      var rsaPassWord = encryptor.encrypt(json);
      return rsaPassWord;
    },
    async confirm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          const { timestamp } = await this.$store.dispatch("getTimeStamp");
          let random = "";
          for (var i = 0; i < 6; i++) {
            random += Math.floor(Math.random() * 10);
          }

          let json = JSON.stringify({
            random,
            timestamp,
            password: this.form.password,
          });
          const encryptedNewPassword = this.encryptPassword(json);

          this.$store
            .dispatch("resetPassword", {
              newPassword: encryptedNewPassword,
              username,
              email,
              token,
            })
            .then(() => {
              this.success = true;
              this.loading = false;
            })
            .catch((err) => {
              console.log(err);
              this.$message({
                type: "error",
                message: err.message,
              });
            })
            .finally(() => {
              this.loading = false;
            });
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
::v-deep .el-checkbox__label {
  vertical-align: text-top;
  white-space: pre-line;
}

::v-deep .el-result{
  text-align: left;
}

.reset-password {
  .indicator {
    width: 180px;
    height: 5px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      position: relative;
      height: 100%;
      width: 100%;
      background: lightgrey;

      &::before {
        width: 0;
        position: absolute;
        height: 100%;
        content: "";
        top: 0;
        left: 0;
        transition: width 0.5s;
      }

      /* border-radius: 5px; */
      &.weak::before {
        background-color: #ff4757;
      }

      &.moderate::before {
        background-color: orange;
      }

      &.strong::before {
        background-color: #9acb6b;
      }

      &.active::before {
        width: 100%;
      }

      &:nth-child(2) {
        margin: 0 3px;
      }
    }
  }
}
</style>
