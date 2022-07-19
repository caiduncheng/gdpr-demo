<template>
  <div class="sign-up">
    <div class="background-wrapper">
      <div class="background">
        <NavBar />
        <div class="containerXL container-fluid">
          <div class="row py-14 justify-center">
            <div class="col-md-6">
              <div class="text-white mb-8 contact-title">
                <h3 class="mb-2">{{ $t("login.title_sign_up") }}</h3>
                <p class="text-xs">{{ $t("login.sign_up_tip") }}</p>
              </div>
              <el-card :class="{ 'card-success': success }" class="card--sign-up">
                <div v-if="!success" class="flex">
                  <el-form class="signup-form" ref="form" :rules="rules" :model="form">
                    <el-alert :title="remark" type="error"></el-alert>
                    <div class="flex">
                      <div class="vertical-line-container hidden md:block">
                        <div style class="vertical-line-icon">
                          <img src="../../assets/sign-up/7.png" alt />
                        </div>
                        <div class="vertical-line"></div>
                      </div>
                      <div class="flex-1">
                        <el-form-item :label="$t('login.email')" prop="email">
                          <el-input disabled v-model="form.email"></el-input>
                        </el-form-item>
                        <el-form-item required prop="name" :label="$t('login.name')">
                          <el-input v-model.trim="form.name" :maxlength="128"></el-input>
                        </el-form-item>
                        <el-form-item required :label="$t('login.contacts')" prop="contactName">
                          <el-input :maxlength="32" v-model.trim="form.contactName"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('login.phone_number')" prop="mobile">
                          <el-input v-model.trim="form.mobile" :maxlength="16"></el-input>
                        </el-form-item>
                        <el-form-item required prop="countryCode" class="country-code">
                          <div slot="label" class="inline-block">{{ $t("login.country_region") }}</div>
                          <el-select
                            v-model="form.countryCode"
                            :no-match-text="$t('common.no_data')"
                            filterable
                          >
                            <el-option
                              v-for="item in countries"
                              :key="item.countryCode3"
                              :label="item.countryNameEn"
                              :value="item.countryCode3"
                            ></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item :label="$t('login.address')">
                          <el-input v-model="form.address" :maxlength="128"></el-input>
                        </el-form-item>
                        <hr class="my-6" />
                      </div>
                    </div>
                    <div class="flex">
                      <div class="vertical-line-container hidden md:block">
                        <div style class="vertical-line-icon">
                          <img src="../../assets/sign-up/8.png" alt />
                        </div>
                        <div class="vertical-line"></div>
                      </div>
                      <div class="flex-1">
                        <el-form-item :label="$t('login.csr')" required prop="file" class="csr">
                          <div style="display: flex; align-items: flex-start" class="mb-10">
                            <el-upload
                              style="float: left; margin-right: 30px"
                              action="#"
                              :file-list="fileList"
                              :auto-upload="false"
                              :limit="1"
                              :on-change="handleChange"
                              :on-remove="handleRemove"
                              :class="{ hide: uploadDisabled }"
                              class="upload"
                            >
                              <el-button type="primary">
                                {{
                                $t("login.upload")
                                }}
                              </el-button>
                            </el-upload>
                          </div>
                          <div class="upload-hint">
                            <p>
                              {{ $t("login.upload_tip1") }}
                              {{ $t("login.upload_tip2") }}
                            </p>
                            <p v-html="$t('login.upload_tip3')"></p>
                          </div>
                        </el-form-item>
                        <hr class="my-6" />
                      </div>
                    </div>

                    <el-form-item class="text-center">
                      <el-button
                        type="primary"
                        style="width: 200px"
                        @click="submit"
                        :loading="buttonLoading"
                      >{{ $t("common.submit") }}</el-button>
                      <div class="text-center error-message" v-if="errorMessage">{{ errorMessage }}</div>
                    </el-form-item>
                  </el-form>
                </div>
                <div class="flex flex-col items-center justify-center h-full" v-else>
                  <img src="~assets/sign-up/sign-up-success.png" alt width="250" />
                  <p>{{ $t("login.contact_you_in_some_days") }}</p>
                </div>
              </el-card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { checkPhoneNum } from "@/utils/validation.js";

const MAP_PASSWORD_STRENGTH = {
  1: "Weak",
  2: "Moderate",
  3: "Strong",
};

let email = "";
let registerToken = "";

export default {
  async validate({ params, query, store, $axios }) {
    try {
      const operInfo = await $axios({
        url: "/online/authorization/operator/self",
        headers: {
          "WEB-TOKEN": query.token,
        },
      });
      store.commit("SET_OPER_INFO", operInfo);
    } catch {
      return false;
    }
    registerToken = query.token;
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

    const validFile = function (rule, file, cb) {
      if (this.fileList.length < 1) {
        cb(new Error(this.$t("login.file_required")));
      } else {
        cb();
      }
    };

    const validCountry = function (rule, country, cb) {
      if (!this.form.countryCode) {
        cb(new Error(this.$t("login.country_required")));
      } else {
        cb();
      }
    };
    return {
      loaded: true,
      verified: true,
      success: false,
      errorMessage: "",
      email: "",
      remark: "",
      resubmit: false,
      mapPasswordStrength: MAP_PASSWORD_STRENGTH,
      showPasswordStrength: false,
      passwordStrength: 0,
      buttonLoading: false,
      successText: "",
      fileList: [],
      form: {
        address: "",
        countryCode: "",
        utcTime: "",
        name: "",
        contactName: "",
        file: null,
        language: "",
        password: "",
        mobile: "",
        confirmPassword: "",
        registerToken,
        email,
      },
      countries: [],
      rules: {
        name: [{ required: true, message: "Name is required" }],
        address: [{ required: true }],
        file: [
          {
            validator: validFile.bind(this),
          },
        ],
        countryCode: [
          {
            validator: validCountry.bind(this),
          },
        ],
        password: [
          {
            validator: validPassword.bind(this),
          },
        ],
        contactName: [
          {
            required: true,
            message: "Contact Name is required",
          },
        ],
        confirmPassword: [
          {
            validator: validConfirmPassword.bind(this),
          },
        ],
        mobile: [
          {
            validator: checkPhoneNum.bind(this),
          },
        ],
      },
    };
  },
  computed: {
    uploadDisabled() {
      return this.fileList.length > 0;
    },
  },
  methods: {
    handleChange(file) {
      this.fileList.push(file);
      this.form.file = file;
    },
    handleRemove() {
      this.fileList.pop();
    },
    getCountryList() {
      this.$store.dispatch("getCountryList").then((data) => {
        this.countries = data;
      });
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.buttonLoading = true;
          const formData = new FormData();
          formData.append("file", this.fileList[0].raw);
          formData.append("username", this.form.email);
          formData.append("name", this.form.name);
          formData.append("countryCode", this.form.countryCode);
          formData.append("contactName", this.form.contactName);
          formData.append("address", this.form.address);
          formData.append("email", this.form.email);
          formData.append("mobile", this.form.mobile);

          formData.append("registerToken", this.form.registerToken);
          this.$store
            .dispatch("reRegister", formData)
            .then(() => {
              this.success = true;
              window.scrollTo(0, 0);
            })
            .catch((err) => {
              this.errorMessage = err;
            })
            .finally(() => {
              this.buttonLoading = false;
            });
        }
      });
    },
  },
  mounted() {
    this.$store.commit("SET_MENU", false);
    this.getCountryList();

    const operInfo = this.$store.state.operInfo;

    this.remark = operInfo.remark;
    // // populate the form
    Object.assign(this.form, {
      ...operInfo,
      contactName: operInfo.linkman,
    });
    this.email = operInfo.email;
  },
};
</script>

<style lang="scss">
.sign-up {
  .el-alert {
    margin-bottom: 10px;
  }
  .el-select {
    width: 100%;
  }
  .el-card.card--sign-up {
    /* padding-left: 40px; */
  }
  .el-form .el-input__inner {
    width: 100%;
    @screen sm {
      max-width: 100%;
    }
  }
  .country-code {
    .el-form-item__label {
      float: none;
      text-align: left;
      display: block;
    }
  }

  .csr {
    .el-form-item__label {
      line-height: 40px;
    }
  }
  .el-upload-list__item-name {
    /* max-width: 100px; */
  }

  .card-success .el-card__body {
    height: 700px;
  }
}
</style>


<style lang="scss" scoped>
@use "~assets/css/mixin";
.signup-form {
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

.contact-title {
  text-align: center;
  @screen md {
    text-align: left;
  }
}
.upload {
  float: left;
  margin-right: 30px;
}
.password-strength {
  .text {
    line-height: 12px;
    margin-top: 10px;
    font-size: 12px;
  }
  color: #606266;
}
.upload-hint {
  float: left;
  line-height: 1.5;
  width: 100%;
  /* padding-left: 50px; */
  display: inline-block;
  color: #999999;
  font-size: 14px;
  @screen md {
    /* width: 500px; */
  }
}
.upload-hint > p {
  margin: 0;
  display: inline-block;
}
.container {
  margin: 0 auto;
  width: 80%;
}
.divider {
  /* height: 1px; */
  width: 100%;
  border-top: 1px solid #e2edf4;
}
.card-footer {
  text-align: right;
}
.background {
  background-image: linear-gradient(180deg, transparent 30%, #ffffff 30%),
    url("~assets/bg-4.png");
  @include mixin.background-cover;
  position: relative;
}

.vertical-line-container {
  /* width: 24px; */
  position: relative;
  margin-right: 30px;
  overflow: hidden;
  .vertical-line-icon {
    background: rgb(62, 127, 232);
    border-radius: 50%;
    padding: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    & > img {
      width: 20px;
      height: 20px;
    }
  }

  .vertical-line {
    position: absolute;
    height: 100%;
    width: 4px;
    left: 50%;
    transform: translateX(-50%);
    background: rgb(62, 127, 232);
    padding: 5px 0;
  }
}
</style>