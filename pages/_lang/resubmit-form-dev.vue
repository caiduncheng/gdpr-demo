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
                <div v-if="!success">
                  <el-form class="signup-form flex-1" ref="form" :rules="rules" :model="form">

                    <el-form-item v-if="remark" >
                     <div style="background-color: #fef0f0; padding: 8px 16px; border-radius: 4px;">
                      <div style="font-size: 13px;line-height: 18px; font-weight: 700; color: #f56c6c;">
                      {{ $t('login.reject_reason') }}</div>
                      <div style="font-size: 12px;line-height: 18px;color: #f56c6c;margin-top: 4px; overflow-wrap: break-word;">
                      {{ remark }}</div>
                    </div>
                    </el-form-item>
                    
                    <el-form-item :label="$t('login.account')">
                      <el-input disabled v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item
                      :label="$t('login.developer_type')"
                      required
                      prop="developerType"
                      key="developerType"
                    >
                      <el-select
                        v-model="form.developerType"
                        @change="clearDeveloperValidate"
                      >
                        <el-option :key="1" :value="1" :label="$t('login.personal')"></el-option>
                        <el-option :key="2" :value="2" :label="$t('login.company')"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item
                      v-if="form.developerType == 1"
                      required
                      :label="$t('login.first_name')"
                      prop="firstName"
                      key="firstName"
                    >
                      <el-input :maxlength="64" v-model="form.firstName" @blur="() => form.firstName = form.firstName.trim()"></el-input>
                    </el-form-item>
                    <el-form-item
                      v-if="form.developerType == 1"
                      required
                      :label="$t('login.last_name')"
                      prop="lastName"
                      key="lastName"
                    >
                      <el-input :maxlength="64" v-model="form.lastName" @blur="() => form.lastName = form.lastName.trim()"></el-input>
                    </el-form-item>

                    <el-form-item
                      v-if="form.developerType == 2"
                      required
                      :label="$t('login.company_name1')"
                      prop="firstName"
                      key="firstName"
                    >
                      <el-input :maxlength="64" v-model="form.firstName" @blur="() => form.firstName = form.firstName.trim()"></el-input>
                    </el-form-item>

                    <el-form-item
                      v-if="form.developerType == 1"
                      :label="$t('login.certificate_type')"
                    >
                      <el-select v-model="form.pidType">
                        <el-option :key="1" :value="1" :label="$t('login.id_card')"></el-option>
                        <el-option :key="2" :value="2" :label="$t('login.passport')"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('login.certificate_num')">
                      <el-input v-model="form.pid" :maxlength="32"></el-input>
                    </el-form-item>
                    <el-form-item
                      v-if="form.developerType == 2"
                      required
                      :label="$t('login.contacts')"
                      prop="contactName"
                      key="contactName"
                    >
                      <el-input :maxlength="64" v-model="form.contactName" @blur="() => form.contactName = form.contactName.trim()"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('login.phone_number')" prop="mobile" key="mobile">
                      <el-input v-model.trim="form.mobile" :maxlength="16"></el-input>
                    </el-form-item>
                    <el-form-item
                      required
                      prop="countryCode"
                      class="country-code"
                      key="countryCode"
                    >
                      <div slot="label" class="inline-block">{{ $t('login.country_region') }}</div>
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
                    <el-form-item :label="$t('login.address1')">
                      <el-input v-model="form.address" :maxlength="128" type="textarea"
  :rows="2" ></el-input>
                    </el-form-item>
                    <el-form-item required prop="checked" key="checked">
                      <el-checkbox v-model="form.checked">
                        <span class="text-xs" v-html="$t('login.agree_terms_conditions')"></span>
                      </el-checkbox>
                    </el-form-item>
                    <el-form-item class="text-center">
                      <el-button
                        type="primary"
                        style="width: 200px"
                        @click="submit"
                        :loading="buttonLoading"
                      >
                        {{
                        $t('common.submit')
                        }}
                      </el-button>
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

let email = "";
let registerToken = "";

export default {
  async validate({ params, query, store, $axios }) {
    try {
      const developerInfo = await $axios({
        url: "/online/authorization/developer/self",
        headers: {
          "WEB-TOKEN": query.token,
        },
      });
      store.commit("SET_DEV_INFO", developerInfo);
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

    const validChecked = function (rule, checked, cb) {
      if (!checked) {
        cb(new Error("please agree Terms and conditions"));
      } else {
        cb();
      }
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
      buttonLoading: false,
      successText: "",
      fileList: [],
      form: {
        // 开发者类型，1-个人；2-公司
        developerType: 1,
        // developer_type = 1时表示名字; developer_type = 2时表示 公司名称
        firstName: "",
        lastName: "",
        contactName: "",
        mobile: "",
        email: "",
        registerToken: "",
        username: "",
        password: "",
        confirmPassword: "",
        // 证件类型 Integer
        pidType: "",
        pid: "",
        countryCode: "",
        address: "",
        checked: false,
      },
      countries: [],
      rules: {
        firstName: [
          {
            required: true,
            message: "Name is required",
          },
        ],

        lastName: [
          {
            required: true,
            message: "Name is required",
          },
        ],
        name: [
          {
            required: true,
            message: "Name is required",
          },
        ],
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
            max: 16,
            message: this.$t("login.validate_phone_tip"),
            trigger: "blur",
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
    clearDeveloperValidate() {
      this.$refs["form"].clearValidate();
      this.form.pidType = 1
      this.form.contactName = ""
      this.form.lastName = ""
      this.form.firstName = ""
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
          const formData = {};
          formData.developerId = this.form.developerId
          formData.username = this.form.email;
          formData.developerType = this.form.developerType;
          formData.firstName = this.form.firstName;
          formData.lastName = this.form.lastName;
          if (this.form.developerType == 2) {
            formData.contactName = this.form.contactName;
          } else {
            formData.contactName =
              this.form.firstName + " " + this.form.lastName;
          }
          formData.mobile = this.form.mobile;
          formData.email = this.form.email;
          formData.countryCode = this.form.countryCode;
          formData.address = this.form.address;
          if (this.form.developerType == 2) {
            formData.pidType = 3
          } else {
            formData.pidType = this.form.pidType;
          }
          formData.pid = this.form.pid;

          formData.registerToken = registerToken;
          this.$store
            .dispatch("editDeveloperInfo", 
              formData)
            .then(() => {
              this.success = true;
              this.step = 3;
              window.scrollTo(0, 0);
            })
            .catch((err) => {
              this.errorMessage = err.message;
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

    const operInfo = this.$store.state.devInfo;

    this.remark = operInfo.rejectionReason;
    this.email = operInfo.email;
    // // populate the form
    Object.assign(this.form, {
      ...operInfo,
      contactName: operInfo.contactName,
      pid: operInfo.pidNo
    });
  },
};
</script>

<style lang="scss">
.sign-up {
  .el-select {
    width: 100%;
  }
  .el-alert {
    margin-bottom: 10px;
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