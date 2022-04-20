<template>
  <div class="contact-us">
    <div class="background">
      <NavBar />
      <div class="containerXL">
        <div class="row py-14 items-center">
          <div class="col-4 offset-md-3 mr-10">
            <div class="text-white mb-8 contact-title">
              <h3 class="mb-2">{{ $t('contact.contact_us')}}</h3>
              <p class="text-xs">{{ $t('contact.main_tip')}}</p>
            </div>
            <el-card class="px-4">
              <el-form class="small" :model="form" @submit.prevent.native="submit">
                <el-form-item :label="$t('contact.full_name')" prop="name">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item :label="$t('contact.email')" prop="email">
                  <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item :label="$t('contact.company')" prop="company">
                  <el-input v-model="form.company"></el-input>
                </el-form-item>
                <el-form-item :label="$t('contact.country_region')" prop="country" class="form-select">
                  <el-select v-model="form.countryCode" size="small">
                    <el-option
                      v-for="item in countries"
                      :key="item.countryCode3"
                      :label="$t('country_or_region.' + item.countryCode3)"
                      :value="item.countryCode3"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :label="$t('contact.character')" prop="role" class="form-select">
                  <el-select v-model="form.role">
                    <el-option
                      v-for="item in roles"
                      :key="item.value"
                      :value="item.value"
                      :label="item.label"
                    ></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item :label="$t('contact.type')" prop="type" class="form-select">
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
                </el-form-item> -->

                <el-form-item :label="$t('contact.message')" prop="content">
                  <el-input type="textarea" rows="5" v-model="form.content"></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="text-center">
                    <el-button type="primary" native-type="submit">{{$t('contact.btn_send_msg')}}</el-button>
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
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [
        {
          value: 0,
          label: this.$t('contact.bank_or_acquirer'),
        },
        {
          value: 1,
          label: this.$t('contact.distributor_or_reseller'),
        },
        {
          value: 2,
          label: this.$t('contact.psp'),
        },
        {
          value: 3,
          label: this.$t('contact.isv'),
        },
        {
          value: 4,
          label: this.$t('contact.others'),
        },
      ],
      roles: [
        {
          value: 0,
          label: this.$t('contact.manager'),
        },
        {
          value: 1,
          label: this.$t('contact.marketing'),
        },
        {
          value: 2,
          label: this.$t('contact.developer'),
        },
        {
          value: 3,
          label: this.$t('contact.others_role'),
        },
      ],
      countries: [],
      form: {
        email: "",
        name: "",
        mobile: "",
        countryCode: "",
        company: "",
        industry: "",
        content: "",
        role: ""
      },
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("contactUs", { ...this.form, role: 1 }).then(() => {
        this.$message({
          message: "Message successfully sent.",
          type: "success",
        });
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
  position: relative;
}

.contact-title {
  /* letter-spacing: 1px; */
}

.contact-info {
  line-height: 1.2;
  color: #6e84a3;
}
</style>