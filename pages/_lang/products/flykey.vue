<template>
  <div class="flykey">
    <NavBar fixed alwaysShow />
    <div class="background-wrapper">
      <div class="h-full w-full flykey-background"></div>
    </div>
    <div class="flykey-main">
      <div class="flykey-header">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6 mb-5">
              <h1 class="text-header-blue">{{$t('flykey.fly_key')}}</h1>
              <h2 class="mb-3">{{ $t('flykey.about_flykey_title') }}</h2>
              <p class="text-lg mb-3" v-html="$t('flykey.about_flykey_content')"></p>
              <a class="start-button btn" @click.prevent="playVideo">
                <span>{{ $t('flykey.start_now') }}</span>
              </a>
            </div>
            <div class="col-12 col-lg-6">
              <div class="video-panel flex items-center">
                <video
                  src="~assets/FLYKEY/FlyKey1.mp4"
                  id="video"
                  controls="controls"
                >{{ $t('flykey.not_support_video_tip') }}</video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flykey-tabs">
        <div class="container">
          <ul>
            <li>
              <a v-scroll-to="{element: '#Flykey', offset: -200}">{{ $t('flykey.about_flykey') }}</a>
            </li>
            <li>
              <a v-scroll-to="{element: '#Features', offset: -200}">{{ $t('flykey.features') }}</a>
            </li>
            <li>
              <a
                v-scroll-to="{element: '#Functionality', offset: -200}"
              >{{ $t('flykey.functionality') }}</a>
            </li>
            <li>
              <a
                v-scroll-to="{element: '#Service', offset: -200}"
              >{{ $t('flykey.services_and_support') }}</a>
            </li>
          </ul>
        </div>
      </div>
      <section class="section-1 section" id="Flykey">
        <div class="container">
          <div class="row items-center">
            <div
              class="m-auto col-12 col-md-10 col-lg-7 mb-5 lg:mb-0"
              data-aos="fade-right-new"
              data-aos-duration="1200"
            >
              <img src="~assets/FLYKEY/02.png" class="w-full" />
            </div>
            <div class="col-12 col-lg-5" data-aos="fade-left-new" data-aos-duration="1200">
              <div class="pl-8">
                <h3 class="mb-3">{{ $t('flykey.feature1_title') }}</h3>
                <p class="mb-5">{{ $t('flykey.feature1_content') }}</p>
                <ul>
                  <li>
                    <i class="fa fa-check mr-2" />
                    {{ $t('flykey.feature1_list_item1') }}
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />
                    {{ $t('flykey.feature1_list_item2') }}
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />
                    {{ $t('flykey.feature1_list_item3') }}
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />
                    {{ $t('flykey.feature1_list_item4') }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-2 section" id="Features">
        <div class="container">
          <div class="row items-center">
            <div
              class="col-lg-6 order-2 lg:order-1"
              data-aos="fade-right-new"
              data-aos-duration="1200"
            >
              <div class="pl-8">
                <h3 class="mb-3">{{ $t('flykey.feature2_title') }}</h3>
                <p class="mb-5">{{ $t('flykey.feature2_content') }}</p>
                <ul>
                  <li>
                    <i class="fa fa-check mr-2" />
                    {{ $t('flykey.feature2_list_item1') }}
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />
                    {{ $t('flykey.feature2_list_item2') }}
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />
                    {{ $t('flykey.feature2_list_item3') }}
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />
                    {{ $t('flykey.feature2_list_item4') }}
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />
                    {{ $t('flykey.feature2_list_item5') }}
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />
                    {{ $t('flykey.feature2_list_item6') }}
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-6 col-md-10 m-auto order-1 lg:order-2 mb-5 lg:mb-0"
              data-aos="fade-left-new"
              data-aos-duration="1200"
            >
              <img src="~assets/FLYKEY/04.png" alt class="w-full" />
            </div>
          </div>
        </div>
      </section>
      <div class="flykey-bar">
        <div class="container">
          <div>
            <h3>{{ $t('flykey.functionality_title') }}</h3>
          </div>
        </div>
      </div>
      <div class="laptop section flex items-center justify-center">
        <img src="~assets/FLYKEY/14.png" alt class="max-w-full" />
      </div>
      <section class="section section-4" id="Functionality">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-6 mb-5 md:mb-0">
              <div class="flex items-start" data-aos="fade-up" data-aos-duration="1200">
                <img src="~assets/FLYKEY/09.png" />
                <div class="ml-3">
                  <h3>{{ $t('flykey.functionality_content1_title') }}</h3>
                  <p v-html="$t('flykey.functionality_content1_content')"></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="flex items-start"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src="~assets/FLYKEY/07.png" alt />
                <div class="ml-3">
                  <h3>{{ $t('flykey.functionality_content2_title') }}</h3>
                  <p>{{ $t('flykey.functionality_content2_content') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-md-6 mb-5 md:mb-0">
              <div
                class="flex items-start"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <img src="~assets/FLYKEY/06.png" alt />
                <div class="ml-3">
                  <h3>{{ $t('flykey.functionality_content3_title') }}</h3>
                  <p>{{ $t('flykey.functionality_content3_content') }}</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div
                class="flex items-start"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="900"
              >
                <img src="~assets/FLYKEY/08.png" alt />
                <div class="ml-3">
                  <h3>{{ $t('flykey.functionality_content4_title') }}</h3>
                  <p>{{ $t('flykey.functionality_content4_content') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-5" id="Service">
        <div class="row no-gutters">
          <div class="container">
            <div class="row">
              <div class="col-md-5 mb-5 md:mb-0" data-aos="fade-right-new" data-aos-duration="1800">
                <h3 class="mb-5">{{ $t('flykey.services_title') }}</h3>
                <p>{{ $t('flykey.services_content') }}</p>
              </div>
              <div class="col-md-6 offset-md-1">
                <div class="feature-box" data-aos="fade-left-new" data-aos-duration="1200">
                  <img src="~assets/FLYKEY/1.png" />
                  <span>{{ $t('flykey.services_list_item1') }}</span>
                </div>

                <div
                  class="feature-box"
                  data-aos="fade-left-new"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <img src="~assets/FLYKEY/2.png" />
                  <span>{{ $t('flykey.services_list_item2') }}</span>
                </div>

                <div
                  class="feature-box"
                  data-aos="fade-left-new"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <img src="~assets/FLYKEY/3.png" />
                  <span>{{ $t('flykey.services_list_item3') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          label: this.$t("contact.contact_sales"),
        },
        {
          value: 1,
          label: this.$t("contact.support"),
        },
        {
          value: 2,
          label: this.$t("contact.partner"),
        },
        {
          value: 3,
          label: this.$t("contact.marketing"),
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
      },
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("contactUs", { ...this.form, role: 1 }).then(() => {
        this.$message({
          message: this.$t("contact.message_successfully_sent"),
          type: "success",
        });
      });
    },
    playVideo() {
      const video = document.getElementById("video");
      video.requestFullscreen();
      video.play();
    },
  },
  computed: {
    platformLocation() {
      if (this.$store.state.hasLogin) {
        return process.env[`VUE_APP_${this.$store.state.platform}_ADDRESS`];
      } else {
        return `/${this.$store.state.locale}/contact-us`;
      }
    },
  },
  mounted() {
    this.$store.commit("SET_MENU", false);
  },
};
</script>

<style lang="scss">
.flykey .flykey-footer .el-card {
  border: none;
  background-color: rgba(255, 255, 255, 0.09);
  .el-form {
    .el-form-item__label {
      color: #ffffff;
    }
    .el-input__inner {
      border-color: transparent;
      color: #ffffff;
      background-color: rgba(255, 255, 255, 0.09);
    }
    .el-textarea__inner {
      color: #ffffff;
      border-color: transparent;
      background-color: rgba(255, 255, 255, 0.09);
    }
  }
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
@use "../../../assets/css/mixin";

$bgGray: rgb(238, 236, 244);
$bgBlue: rgb(0, 108, 252);

.flykey {
  .flykey-background {
    @include mixin.background-cover;
  }

  .start-button {
    width: 200px;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    text-align: center;
    span {
      color: #ffffff;
      position: relative;
      font-size: 14px;
      z-index: 2;
      vertical-align: middle;
    }
    @include mixin.btn-animated(#3982e9, #1d1d1d);
  }

  .flykey-main {
    position: relative;
    margin-top: 90px;
  }

  .flykey-header {
    background-image: url("~assets/FLYKEY/01.png");
    background-size: cover;
    padding: 100px 0;
    @screen md {
      padding: 100px 0 200px;
    }
    .video-panel {
      & > video {
        border-radius: 10px;
        width: 100%;
      }
    }
  }
  .flykey-tabs {
    position: sticky;
    top: 90px;
    z-index: 1;
    background-color: $bgGray;
    padding: 40px 0px;
    @apply hidden md:block;

    ul {
      display: flex;
      flex-direction: column;
      li {
        text-align: center;
      }
      @screen md {
        flex-direction: row;
      }
      font-size: 24px;
      justify-content: space-between;
      a:hover {
        color: #3e80e5;
      }
    }
  }

  .section {
    padding: 80px 0;
  }

  .section-1 {
    background: rgb(250, 250, 254);
    p,
    ul {
      color: #6c6c6c;
    }
  }

  .section-2 {
    background-image: url("~assets/FLYKEY/05.png");
    p,
    ul {
      color: #6c6c6c;
    }
  }

  .flykey-bar {
    padding: 50px 0;
    text-align: center;
    background: $bgGray;
  }

  .laptop {
    background-color: $bgBlue;
  }

  .section-4 {
    background-color: #ffffff;
    h3 {
      @apply mb-3;
    }
    p {
      color: #6c6c6c;
    }
  }

  .section-5 {
    @screen lg {
      height: 550px;
    }
    background-color: rgb(0, 110, 252);
    background-image: url("~assets/FLYKEY/10.png");
    color: #ffffff;
    background-size: cover;
    padding: 100px 0;
    background-repeat: no-repeat;
    .feature-box {
      color: #ffffff;
      font-size: 18px;
      @scren md {
        font-size: 24px;
      }
      background: rgba(255, 255, 255, 0.28);
      padding: 20px;
      width: 450px;
      max-width: 100%;
      border-radius: 5px;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      span {
        display: inline-block;
        margin-left: 10px;
      }
    }
  }

  .flykey-footer {
    padding: 50px 0;
    h3 {
      color: #ffffff;
    }
    .contact-info {
      color: #6e84a3;
      line-height: 1.2;
    }
    background-color: rgb(13, 36, 61);
  }

  #map-panel {
    overflow: hidden;
    width: 100%;
    height: 423px;
    font: 12px/20px Helvetica Neue, Arial, Helvetica, sans-serif;
    overflow: hidden;
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}
</style>