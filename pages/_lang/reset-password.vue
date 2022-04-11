<template>
  <div class="container container-fluid reset-password pt-24">
    <div class="row">
      <div class="col-6 offset-3">
        <el-card>
          <div v-if="!success">
            <h2 class="text-2xl text-center">{{ $t('login.title_reset_password') }}</h2>
            <el-form :model="form" :rules="loginRules" ref="form">
              <el-form-item :label=" $t('login.new_password')" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
                <div class="password-strength" v-show="showPasswordStrength">
                  <div class="text"> {{$t('login.password_strength')}} {{mapPasswordStrength[passwordStrength]}}</div>
                  <div class="indicator">
                    <span :class="['weak', {active: passwordStrength >= 1}]"></span>
                    <span :class="['moderate', {active: passwordStrength >= 2}]"></span>
                    <span :class="['strong', {active: passwordStrength === 3}]"></span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item :label="$t('login.confirm_password')" prop="confirmPassword">
                <el-input v-model="form.confirmPassword" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="w-full" @click="confirm">{{ $t('common.confirm') }}</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div v-else class="text-center">
            <el-result icon="success">
              <h2 slot="title" class="text-3xl">{{ $t('login.password_set_successfully') }}</h2>
            </el-result>

            <router-link to="/">
              <el-button type="primary">{{ $t('login.go_to_home_page') }}</el-button>
            </router-link>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getQueryParam } from "@/utils";
const MAP_PASSWORD_STRENGTH = {
  1: "Weak",
  2: "Moderate",
  3: "Strong",
};
let username = "";
let email = "";
let token = "";

export default {
  layout: "login",
  async validate({ params, query, store }) {
    username = getQueryParam("account");
    email = getQueryParam("email");
    token = getQueryParam("token");
    try {
      await store.dispatch("verifyResetToken", {
        username,
        email,
        token,
      });
    } catch {
      return false;
    }

    return true;
  },
  data() {
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
      verified: false,
      loaded: false,
      success: false,
      mapPasswordStrength: MAP_PASSWORD_STRENGTH,
      showPasswordStrength: false,
      passwordStrength: 0,
      username: "",
      email: "",
      token: "",
      form: {
        password: "",
        confirmPassword: "",
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
      },
    };
  },
  methods: {
    confirm() {
      this.$store
        .dispatch("resetPassword", {
          newPassword: this.form.password,
          username,
          email,
          token,
        })
        .then(() => {
          this.success = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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


