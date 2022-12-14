<template>
  <div class="sign-up">
    <div class="background-wrapper">
      <div class="background">
        <NavBar />
        <div class="containerXL container-fluid">
          <div class="row py-14 justify-center">
            <div class="col-xl-6 col-lg-8 col-md-10">
              <!-- 选择角色标题 -->
              <div class="text-white mb-8 signup-title" v-if="step === 1">
                <h3 class="mb-2">{{ $t('login.role') }}</h3>
                <p class="text-ms">{{ $t('login.select_role') }}</p>
              </div>
              <!-- 填写表单标题  -->
              <div class="text-white mb-8 signup-title" v-else-if="step === 2">
                <h3 class="mb-2">{{ $t('login.title_sign_up') }}</h3>
                <p class="text-ms">{{ $t('login.sign_up_tip') }}</p>
              </div>


              <!-- 第一步：选择角色 -->
              <div v-if="step === 1">
                <div class="flex role-choose">
                  <!-- <div class="text-center text-xl mb-14">
                      <h2>PLEASE SELECT A CHARACTER</h2>
                    </div>-->
                  <div class=" col-md-6 col-sm-8 p-4">
                    <div class="role-card" role="button" @click="() => handleRoleClick(ROLE_OPERATOR)">
                      <img src="~assets/sign-up/operator.png" width="100px" class="mt-10 mb-9" />
                      <h4 class="role-label">{{ $t('login.operator') }}</h4>
                      <p class="role-info text-secondary">
                        {{ $t('login.operator_info') }}
</p>
                      <i class="el-icon-right role-arrow"></i>
                    </div>
                  </div>
                  <div class=" col-md-6 col-sm-8 p-4">
                    <div class="role-card" role="button" @click="() => handleRoleClick(ROLE_DEVELOPER)">
                      <img src="~assets/sign-up/developer.png" width="80px" class="mt-8 mb-7" />
                      <h4 class="role-label">{{ $t('login.developer') }}</h4>
                      <p class="role-info text-secondary">
                        {{ $t('login.developer_info') }}
                      </p>
                      <i class="el-icon-right role-arrow"></i>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 第二步：填写表单 -->
              <el-card :class="{ 'card-success': success }" class="card--sign-up" v-if="step !== 1">
                <div class="flex" v-if="step === 2">
                  <!-- 运营商表单 -->
                  <el-form v-if="selectedRole === ROLE_OPERATOR" class="signup-form" ref="operatorForm"
                    :rules="operatorRules" :model="operatorForm">
                    <div class="flex">
                      <div class="vertical-line-container hidden md:block">
                        <div class="vertical-line-icon">
                          <img src="../../assets/sign-up/7.png" alt />
                        </div>
                        <div class="vertical-line"></div>
                      </div>
                      <div class="flex-1">
                        <el-form-item :label="$t('login.email')" prop="email">
                          <el-input disabled v-model="operatorForm.email"></el-input>
                        </el-form-item>
                        <el-form-item required prop="name" :label="$t('login.company_name')">
                          <el-input v-model.trim="operatorForm.name" :maxlength="128"></el-input>
                        </el-form-item>
                        <el-form-item required :label="$t('login.contacts')" prop="contactName">
                          <el-input :maxlength="32" v-model.trim="operatorForm.contactName"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('login.phone_number')" prop="mobile">
                          <el-input v-model.trim="operatorForm.mobile" :maxlength="16"></el-input>
                        </el-form-item>
                        <el-form-item required prop="countryCode" class="country-code">
                          <div slot="label" class="inline-block">{{ $t('login.country_region') }}</div>
                          <el-select v-model="operatorForm.countryCode" :no-match-text="$t('common.no_data')"
                            filterable>
                            <el-option v-for="item in countries" :key="item.countryCode3" :label="item.countryNameEn"
                              :value="item.countryCode3"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item :label="$t('login.address')">
                          <el-input v-model="operatorForm.address" :maxlength="128"></el-input>
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
                            <el-upload style="float: left; margin-right: 30px" action="#" :file-list="fileList"
                              :auto-upload="false" :limit="1" :on-change="handleChange" :on-remove="handleRemove"
                              :class="{ hide: uploadDisabled }" class="upload">
                              <el-button type="primary">{{ $t('login.upload') }}</el-button>
                            </el-upload>
                          </div>
                          <div class="upload-hint">
                            <p>
                              {{ $t('login.upload_tip1') }}
                              {{ $t('login.upload_tip2') }}
                            </p>
                            <p v-html="$t('login.upload_tip3')"></p>
                          </div>
                        </el-form-item>
                        <hr class="my-6" />
                      </div>
                    </div>

                    <div class="flex">
                      <div class="vertical-line-container hidden md:block">
                        <div style class="vertical-line-icon">
                          <img src="../../assets/sign-up/9.png" alt />
                        </div>
                        <div class="vertical-line" style="height: 70%"></div>
                      </div>
                      <div class="flex-1">
                        <el-form-item :label="$t('login.password')" required prop="password" type="password">
                          <el-input v-model="operatorForm.password" type="password"></el-input>
                          <div class="password-strength" v-show="showPasswordStrength">
                            <div class="text">
                              {{ $t('login.password_strength') }}
                              {{ mapPasswordStrength[passwordStrength] }}
                            </div>
                            <div class="indicator">
                              <span :class="['weak', { active: passwordStrength >= 1 }]"></span>
                              <span :class="['moderate', { active: passwordStrength >= 2 }]"></span>
                              <span :class="['strong', { active: passwordStrength === 3 }]"></span>
                            </div>
                          </div>
                        </el-form-item>
                        <el-form-item :label="$t('login.confirm_password')" required prop="confirmPassword"
                          type="password">
                          <el-input v-model="operatorForm.confirmPassword" type="password"></el-input>
                        </el-form-item>
                        <hr class="my-6" />
                        <el-form-item required prop="checked">
                          <el-checkbox v-model="operatorForm.checked">
                            <span class="text-xs" v-html="$t('login.agree_terms_conditions')"></span>
                          </el-checkbox>
                        </el-form-item>
                      </div>
                    </div>
                    <el-form-item class="text-center">
                      <el-button type="primary" style="width: 200px" @click="submit" :loading="buttonLoading">
                        {{
                            $t('common.submit')
                        }}
                      </el-button>
                      <div class="text-center error-message" v-if="errorMessage">{{ errorMessage }}</div>
                    </el-form-item>
                  </el-form>
                  <!-- 开发者表单 -->
                  <el-form v-else-if="selectedRole === ROLE_DEVELOPER" class="signup-form flex-1" ref="developerForm"
                    :rules="operatorRules" :model="developerForm">
                    <el-form-item :label="$t('login.email')">
                      <el-input disabled v-model="developerForm.email"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('login.developer_type')" required prop="developerType" key="developerType">
                      <el-select v-model="developerForm.developerType" @change="clearDeveloperValidate">
                        <el-option :key="1" :value="1" :label="$t('login.personal')"></el-option>
                        <el-option :key="2" :value="2" :label="$t('login.company')"></el-option>
                      </el-select>
                    </el-form-item>

                    <el-form-item v-if="developerForm.developerType == 1" required :label="$t('login.first_name')"
                      prop="firstName" key="firstName">
                      <el-input :maxlength="128" v-model.trim="developerForm.firstName"></el-input>
                    </el-form-item>
                    <el-form-item v-if="developerForm.developerType == 1" required :label="$t('login.last_name')"
                      prop="lastName" key="lastName">
                      <el-input :maxlength="128" v-model.trim="developerForm.lastName"></el-input>
                    </el-form-item>

                    <el-form-item v-if="developerForm.developerType == 2" required :label="$t('login.company_name1')"
                      prop="firstName" key="firstName">
                      <el-input :maxlength="128" v-model.trim="developerForm.firstName"></el-input>
                    </el-form-item>

                    <el-form-item v-if="developerForm.developerType == 1" :label="$t('login.certificate_type')">
                      <el-select v-model="developerForm.pidType">
                        <el-option :key="1" :value="1" :label="$t('login.id_card')"></el-option>
                        <el-option :key="2" :value="2" :label="$t('login.passport')"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('login.certificate_num')">
                      <el-input v-model="developerForm.pid"></el-input>
                    </el-form-item>
                    <el-form-item v-if="developerForm.developerType == 2" required :label="$t('login.contacts')"
                      prop="contactName" key="contactName">
                      <el-input :maxlength="32" v-model.trim="developerForm.contactName"></el-input>
                    </el-form-item>
                    <el-form-item :label="$t('login.phone_number')" prop="mobile" key="mobile">
                      <el-input v-model.trim="developerForm.mobile" :maxlength="16"></el-input>
                    </el-form-item>
                    <el-form-item required prop="countryCode" class="country-code" key="countryCode">
                      <div slot="label" class="inline-block">{{ $t('login.country_region') }}</div>
                      <el-select v-model="developerForm.countryCode" :no-match-text="$t('common.no_data')" filterable>
                        <el-option v-for="item in countries" :key="item.countryCode3" :label="item.countryNameEn"
                          :value="item.countryCode3"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item :label="$t('login.address1')">
                      <el-input v-model="developerForm.address" :maxlength="128"></el-input>
                    </el-form-item>
                    <div class="flex-1">
                      <hr class="my-6" />

                      <el-form-item :label="$t('login.password')" required prop="password" type="password">
                        <el-input v-model="developerForm.password" type="password"></el-input>
                        <div class="password-strength" v-show="showPasswordStrength">
                          <div class="text">
                            {{ $t('login.password_strength') }}
                            {{ mapPasswordStrength[passwordStrength] }}
                          </div>
                          <div class="indicator">
                            <span :class="['weak', { active: passwordStrength >= 1 }]"></span>
                            <span :class="['moderate', { active: passwordStrength >= 2 }]"></span>
                            <span :class="['strong', { active: passwordStrength === 3 }]"></span>
                          </div>
                        </div>
                      </el-form-item>
                      <el-form-item :label="$t('login.confirm_password')" required prop="confirmPassword1"
                        type="password">
                        <el-input v-model="developerForm.confirmPassword1" type="password"></el-input>
                      </el-form-item>
                      <hr class="my-6" />
                    </div>
                    <el-form-item required prop="checked" key="checked">
                      <el-checkbox v-model="developerForm.checked">
                        <span class="text-xs" v-html="$t('login.agree_terms_conditions_ndp')"></span>
                      </el-checkbox>
                    </el-form-item>
                    <el-form-item class="text-center">
                      <el-button type="primary" style="width: 200px" @click="submit1" :loading="buttonLoading">
                        {{
                            $t('common.submit')
                        }}
                      </el-button>
                      <div class="text-center error-message" v-if="errorMessage">{{ errorMessage }}</div>
                    </el-form-item>
                  </el-form>
                </div>
                <!-- 第三步 注册成功提示 -->
                <div class="flex flex-col items-center justify-center h-full" v-else-if="step === 3">
                  <img src="~assets/sign-up/sign-up-success.png" alt width="250" />
                  <p>{{ $t('login.contact_you_in_some_days') }}</p>
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
import { getQueryParam } from "@/utils";

const MAP_PASSWORD_STRENGTH = {
  1: "Weak",
  2: "Moderate",
  3: "Strong",
};

let email = "";
let registerToken = "";

const STEPS = {
  SELECT_ROLE: 1,
};

export default {
  async validate({ params, query, store }) {
    email = getQueryParam("email");
    registerToken = getQueryParam("key");
    try {
      await store.dispatch("verifyRegisterToken", {
        email,
        token: registerToken,
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
      if (password !== this.operatorForm.password) {
        cb(new Error(this.$t("login.consistent_password_tip")));
      } else {
        cb();
      }
    };

    const validConfirmPassword1 = function (rule, password, cb) {
      if (!password) {
        cb(new Error(this.$t("login.validate_confirm_password_required")));
      }
      if (password !== this.developerForm.password) {
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
      if (!country) {
        cb(new Error(this.$t("login.country_required")));
      } else {
        cb();
      }
    };
    const validChecked = function (rule, checked, cb) {
      if (!checked) {
        cb(new Error("please agree Terms and conditions"));
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
      step: 1, //注册步骤
      selectedRole: "", //第一步选择的角色
      fileList: [],
      ROLE_DEVELOPER: 1,
      ROLE_OPERATOR: 2,
      operatorForm: {
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
        checked: false,

      },
      developerForm: {
        // 开发者类型，1-个人；2-公司
        developerType: 2,
        // developer_type = 1时表示名字; developer_type = 2时表示 公司名称
        firstName: "",
        lastName: "",
        contactName: "",
        mobile: "",
        email: "",
        registerToken: "",
        username: "",
        password: "",
        confirmPassword1: "",
        // 证件类型 Integer
        pidType: "",
        pid: "",
        countryCode: "",
        address: "",
        checked: false,
      },
      countries: [],
      operatorRules: {
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
        confirmPassword1: [
          {
            validator: validConfirmPassword1.bind(this),
          },
        ],
        mobile: [
          {
            validator: checkPhoneNum.bind(this),
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
    clearDeveloperValidate() {
      this.$refs["developerForm"].clearValidate();
    },

    handleChange(file) {
      this.fileList.push(file);
      this.operatorForm.file = file;
    },

    handleRemove() {
      this.fileList.pop();
    },

    handleRoleClick(role) {
      this.selectedRole = role;
      this.step = 2;
      this.operatorForm.email = getQueryParam("email");
      this.developerForm.email = getQueryParam("email");
      this.operatorForm.registerToken = getQueryParam("key");
      this.developerForm.registerToken = getQueryParam("key");
    },

    getCountryList() {
      this.$store.dispatch("getCountryList").then((data) => {
        this.countries = data;
      });
    },
    submit() {
      this.$refs.operatorForm.validate((valid) => {
        if (valid) {
          this.buttonLoading = true;
          const formData = new FormData();
          formData.append("file", this.fileList[0].raw);
          formData.append("username", this.operatorForm.email);
          formData.append("name", this.operatorForm.name);
          formData.append("countryCode", this.operatorForm.countryCode);
          formData.append("contactName", this.operatorForm.contactName);
          formData.append("address", this.operatorForm.address);
          formData.append("email", this.operatorForm.email);
          formData.append("mobile", this.operatorForm.mobile);

          formData.append("password", this.operatorForm.password);
          formData.append("registerToken", this.operatorForm.registerToken);

          this.$store
            .dispatch("register", formData)
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
    submit1() {
      this.$refs.developerForm.validate((valid) => {
        if (valid) {
          this.buttonLoading = true;
          const formData = {};
          formData.username = this.developerForm.email;
          formData.developerType = this.developerForm.developerType;
          formData.firstName = this.developerForm.firstName;
          formData.lastName = this.developerForm.lastName;
          if (this.developerForm.developerType == 2) {
            formData.contactName = this.developerForm.contactName;
          } else {
            formData.contactName =
              this.developerForm.firstName + " " + this.developerForm.lastName;
          }

          formData.mobile = this.developerForm.mobile;
          formData.email = this.developerForm.email;
          formData.countryCode = this.developerForm.countryCode;
          formData.address = this.developerForm.address;
          if (this.developerForm.developerType == 2) {
            formData.pidType = 3;
          } else {
            formData.pidType = this.developerForm.pidType;
          }
          formData.pid = this.developerForm.pid;

          formData.password = this.developerForm.password;
          formData.registerToken = this.operatorForm.registerToken;

          this.$store
            .dispatch("registerDeveloper", formData)
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
    this.getCountryList();
    this.$store.commit("SET_MENU", false);
  },
};
</script>

<style lang="scss">
.sign-up {
  .el-select {
    width: 100%;
  }

  .el-card.card--sign-up {
    /* padding-left: 40px; */
  }

  .el-form .el-input__inner {
    /* max-width: 300px; */
    width: 100%;

    @screen sm {
      max-width: 100%;
      /* width: 400px; */
    }
  }

  .country-code {
    .el-input__inner {
      /* width: 400px; */
    }

    .el-form-item__label {
      float: none;
      text-align: left;
      display: block;
      /* font-size: 15px; */
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

<style lang='scss'>
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

.signup-title {
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

.upload-hint>p {
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

    &>img {
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

.role-card {
  text-align: center;
  border: 1px solid #E5E7EB;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
  background-color: #ffffff;
  border-radius: 20px;
  color: #17161A;
  font-family: sans-serif;
  transform: translateY(0px);
  transition-duration: 500ms;
  padding: 30px;

  .role-label {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 16px;
  }

  .role-info {
    min-height: 96px;
    margin-bottom: 6px;
  }

  .role-arrow {
    font-size: x-large;
    font-weight: 700;
    position: relative;
    margin-bottom: 30px;
    transform: translateX(0px);
    transition-duration: 500ms;
  }
}

.role-card:hover {
  transform: translateY(-20px);
  box-shadow: 0 20px 40px 0 rgb(0 0 0 / 10%);

  .role-arrow {
    color: #2C7BE5;
    transform: translateX(8px);

  }
}

@media screen and (max-width: 768px){
  .role-choose{
    flex-direction: column;
    align-items: center;
  }
}

</style>
