<template>
  <div class="contact-us">
    <div class="background">
      <NavBar />
      <div class="containerXL" style="margin: 0 auto">
        <div class="row py-14 items-center">
          <template v-if="!success">
            <div class="col-4 offset-md-3 mr-10">
              <div class="text-white mb-8 contact-title">
                <h3 class="mb-2">{{ $t('contact.contact_us')}}</h3>
                <p class="text-xs">{{ $t('contact.main_tip')}}</p>
              </div>
              <el-card class="px-4">
                <el-form
                  class="small"
                  ref="messageForm"
                  :rules="messageRules"
                  :model="form"
                  @submit.prevent.native="submit"
                >
                  <el-form-item :label="$t('contact.full_name')" prop="name" class="form-item">
                    <el-input v-model="form.name" @blur="() => form.name = form.name.trim()" maxlength="64" show-word-limit></el-input>
                  </el-form-item>
                  <el-form-item :label="$t('contact.email')" prop="email" class="form-item">
                    <el-input v-model="form.email" @blur="() => form.email = form.email.trim()" maxlength="64" show-word-limit></el-input>
                  </el-form-item>
                  <el-form-item :label="$t('contact.company')" prop="company" class="form-item">
                    <el-input v-model="form.company" maxlength="64" show-word-limit></el-input>
                  </el-form-item>
                  <el-form-item
                    :label="$t('contact.country_region')"
                    prop="countryCode"
                    class="form-select form-item"
                  >
                    <el-select v-model.trim="form.countryCode" size="small">
                      <el-option
                        v-for="item in countries"
                        :key="item.countryCode3"
                        :label="$t('country_or_region.' + item.countryCode3)"
                        :value="item.countryCode3"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item
                    :label="$t('contact.character')"
                    prop="role"
                    class="form-select form-item"
                  >
                    <el-select v-model="form.role">
                      <el-option
                        v-for="item in roles"
                        :key="item.value"
                        :value="item.value"
                        :label="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item
                    :label="$t('contact.type')"
                    prop="type"
                    class="form-select form-item"
                  >
                    <el-select v-model="form.type">
                      <el-option
                        v-for="item in types"
                        :key="item.value"
                        :value="item.value"
                        :label="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>

                  <!-- <el-form-item :label="$t('contact.industry')" prop="industry">
                  <el-input v-model="form.industry"></el-input>
                  </el-form-item>-->

                  <el-form-item
                    :label="$t('contact.message_info')"
                    prop="content"
                    class="form-item"
                  >
                    <el-input
                      type="textarea"
                      rows="5"
                      v-model="form.content"                                     
                      maxlength="1024"
                      show-word-limit
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <div class="text-center">
                      <el-button type="primary" native-type="submit">{{$t('contact.btn_send_msg')}}</el-button>
                      <div class="el-form-item__error text-center">{{errorMsg}}</div>
                    </div>
                  </el-form-item>
                </el-form>
              </el-card>
            </div>
            <div class="col-3">
              <h3 class="mb-5">{{$t('contact.contact_us')}}</h3>
              <div class="contact-info">
                <address class="mb-5 flex">
                  <i class="fa fa-map-marker" style="margin-right: 12px"></i>
                  {{$t('contact.address')}}
                </address>
                <div class="mb-5 flex">
                  <i class="fa fa-envelope-o mr-2"></i>
                  <a href="javacsript:;" class="mail-link">
                    <span>{{$t('contact.email_box')}}</span>
                  </a>
                </div>
                <div class="flex">
                  <i class="fa fa-phone mr-2"></i>
                  {{$t('contact.service_phone')}}
                </div>
              </div>
            </div>
          </template>
          <div v-else class="text-center col-6 offset-3">
            <el-card>
              <el-result icon="success">
                <h2 slot="title" class="text-3xl">{{ $t('contact.sent_successfully') }}</h2>
              </el-result>

              <NuxtLink :to="{name: 'lang', params: { lang: $store.state.locale} }">
                <el-button type="primary">{{ $t('login.go_to_home_page') }}</el-button>
              </NuxtLink>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {

  data() {
    const validateBlank = (rule, message, cb) => {
      if(!message || !/\S/.test(message)) {
        cb(new Error(this.$t('contact.message.content_not_null_tip')))
      } else {
        cb()
      }
    }
    return {
      messageRules: {
        name: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("contact.message.name_not_null_tip"),
          },
        ],
        email: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("contact.message.email_not_null_tip"),
          },
          {
            type: "email",
            message: this.$t("contact.message.email_format_error_tip"),
            trigger: "blur",
          },
        ],
        countryCode: [
          {
            required: true,
            trigger: "change",
            message: this.$t("contact.message.country_or_region_not_null_tip"),
          },
        ],
        role: [
          {
            required: true,
            trigger: "change",
            message: this.$t("contact.message.role_not_null_tip"),
          },
        ],
        type: [
          {
            required: true,
            trigger: "change",
            message: this.$t("contact.message.type_not_null_tip"),
          },
        ],
        content: [
          {
           validator: validateBlank
          },
        ],
      },
      types: [
        {
          value: 0,
          label: this.$t("contact.bank_or_acquirer"),
        },
        {
          value: 1,
          label: this.$t("contact.distributor_or_reseller"),
        },
        {
          value: 2,
          label: this.$t("contact.psp"),
        },
        {
          value: 3,
          label: this.$t("contact.isv"),
        },
        {
          value: 4,
          label: this.$t("contact.others"),
        },
      ],
      roles: [
        {
          value: 0,
          label: this.$t("contact.manager"),
        },
        {
          value: 1,
          label: this.$t("contact.marketing"),
        },
        {
          value: 2,
          label: this.$t("contact.developer"),
        },
        {
          value: 3,
          label: this.$t("contact.others_role"),
        },
      ],
      countries: [],
      form: {
        name: "",
        email: "",
        company: "",
        countryCode: "",
        role: "",
        type: "",
        content: "",
      },
      success: false,
      errorMsg: "",
    };
  },
  methods: {
    submit() {
      this.$refs.messageForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("contactUs", { ...this.form })
            .then(() => {
              window.scrollTo(0, 0);
              this.success = true;
              this.loading = false;
            })
            .catch((e) => {
              this.loading = false;
              this.errorMsg = e;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  mounted() {
    this.$store.dispatch("getCountryList").then((data) => {
      this.countries = data;
    });
  },
};
</script>

<style lang="scss">
.contact-us {
  .form-select {
    .el-input__inner {
      width: 230px;
    }
    .el-form-item__label {   
      float: none;   
      text-align: left;
      display: block;
    }
  }
}
</style>

<style lang="scss" scoped>
@use "~assets/css/mixin";
.background {
  background-image: linear-gradient(352deg, #ffffff 59%, transparent 60%),
    url("~assets/bg-4.png");
  @include mixin.background-cover;
  min-height: auto;
  position: relative;
}

.contact-title {
  /* letter-spacing: 1px; */
}

.contact-info {
  line-height: 1.2;
  color: #6e84a3;
}

.form-item {
  margin-bottom: 16px !important;
}
</style>