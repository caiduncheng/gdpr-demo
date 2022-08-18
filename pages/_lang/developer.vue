<template>
  <div class="developer">
    <NavBar fixed alwaysShow :hasShadow="false" />
    <div class="developer-main">
      <div class="developer-header">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6 developer-header__title-wrapper text-center lg:text-left">
              <h1 class="mb-5">{{$t('developer.app_release')}}</h1>
              <p class="developer-intro">{{$t('developer.header_desc')}}</p>
              <button class="price-button" @click="() => signUpDialogVisible = true">
                <div class="flex items-center">
                  <div class="text-left mr-3">
                    <p>{{$t('developer.header_button.p1')}}</p>
                    <p style="text-decoration: line-through">{{$t('developer.header_button.p2')}}</p>
                  </div>
                  <span class="text-5xl">{{$t('developer.header_button.span')}}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="developer-tabs" :style="tabStyle" ref="developerTabs">
        <div class="container">
          <ul>
            <li>
              <a
                v-scroll-to="{element: '#AppStore', offset: -200}"
              >{{$t('developer.tab.app_store')}}</a>
            </li>
            <li>
              <a
                v-scroll-to="{element: '#Operation', offset: -200}"
              >{{$t('developer.tab.operation_process')}}</a>
            </li>
            <li>
              <a
                v-scroll-to="{element: '#Service', offset: -200}"
              >{{$t('developer.tab.service_and_support')}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="overflow-hidden text-center md:text-left">
        <section class="app-store section" id="AppStore">
          <div class="containerXL">
            <div class="row items-center">
              <div class="col-lg-5 mb-8 md:mb-0" data-aos="fade-right-new" data-aos-duration="1200">
                <h1 class="app-store__title">{{$t('developer.sections.app_store.title')}}</h1>
                <p class="app-store__intro">{{$t('developer.sections.app_store.desc')}}</p>
              </div>
              <div class="offset-lg-1 col-lg-6" data-aos="fade-left-new" data-aos-duration="1200">
                <img class="w-full" src="~assets/NDP/app-store.png" alt="app-store" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="operation-process section" id="Operation">
        <div class="containerXL relative">
          <div class="dashed-border"></div>
          <h1
            class="text-center operation-process__title"
          >{{$t('developer.sections.operation_process.header')}}</h1>
          <div class="row flex-col md:flex-row items-center">
            <div class="process-card process-card--red" data-aos="fade-up" data-aos-duration="1200">
              <div
                class="process-card__header"
              >{{$t('developer.sections.operation_process.title1')}}</div>
              <div class="process-card__body">
                <p class="info">{{$t('developer.sections.operation_process.desc1')}}</p>

                <div class="process-card__icon">
                  <div class="circle">
                    <img src="~assets/NDP/Operation Process-1.png" alt />
                  </div>
                </div>
                <div class="arrow-container">
                  <div class="arrow"></div>
                </div>
              </div>
            </div>

            <div class="arrow-container--vertical">
              <div class="arrow"></div>
            </div>

            <div
              class="process-card process-card--yellow"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div
                class="process-card__header"
              >{{$t('developer.sections.operation_process.title2')}}</div>
              <div class="process-card__body">
                <p class="info">{{$t('developer.sections.operation_process.desc2')}}</p>

                <div class="process-card__icon">
                  <div class="circle">
                    <img src="~assets/NDP/Operation Process-2.png" alt />
                  </div>
                  <div class="arrow-container">
                    <div class="arrow"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="arrow-container--vertical">
              <div class="arrow"></div>
            </div>

            <div
              class="process-card process-card--green"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div
                class="process-card__header"
              >{{$t('developer.sections.operation_process.title3')}}</div>
              <div class="process-card__body">
                <p class="info">{{$t('developer.sections.operation_process.desc3')}}</p>

                <div class="process-card__icon">
                  <div class="circle">
                    <img src="~assets/NDP/Operation Process-3.png" alt />
                  </div>
                </div>
                <div class="arrow-container">
                  <div class="arrow"></div>
                </div>
              </div>
            </div>

            <div class="arrow-container--vertical">
              <div class="arrow"></div>
            </div>

            <div
              class="process-card process-card--yellow"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div
                class="process-card__header"
              >{{$t('developer.sections.operation_process.title4')}}</div>
              <div class="process-card__body">
                <p class="info">{{$t('developer.sections.operation_process.desc4')}}</p>

                <div class="process-card__icon">
                  <div class="circle">
                    <img src="~assets/NDP/Operation Process-4.png" alt />
                  </div>
                  <div class="arrow-container">
                    <div class="arrow"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="arrow-container--vertical">
              <div class="arrow"></div>
            </div>

            <div
              class="process-card process-card--green"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div
                class="process-card__header"
              >{{$t('developer.sections.operation_process.title5')}}</div>
              <div class="process-card__body">
                <p class="info">{{$t('developer.sections.operation_process.desc5')}}</p>

                <div class="process-card__icon">
                  <div class="circle">
                    <img src="~assets/NDP/Operation Process-5.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="service-support section" id="Service">
        <div class="containerXL">
          <!-- <img src="~assets/NDP/Servive&Support-bg.png" alt /> -->
          <div class="relative">
            <img src="~assets/NDP/quotation-marks.png" alt class="quotation-marks" />
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-anchor=".service-support__card"
              class="text-center md:text-left"
            >{{$t('developer.sections.service_and_support.header')}}</h1>
          </div>
          <div class="row relative">
            <img
              src="~assets/NDP/bg1.png"
              class="absolute hidden md:block"
              style="width: 400px; top: -65px; left: -42px;"
            />
            <img
              src="~assets/NDP/bg2.png"
              class="absolute hidden md:block"
              style="right: 20px;top: -118px; width: 400px;"
            />
            <div
              class="col-md-4 col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div class="service-support__card service-support__card--content">
                <div class="flex items-center">
                  <img src="~assets/NDP/Servive&Support-2.PNG" alt class="icon ff" />
                  <p class="title">{{$t('developer.sections.service_and_support.title1')}}</p>
                </div>
                <p class="content">{{$t('developer.sections.service_and_support.desc1')}}</p>
              </div>
            </div>

            <div
              class="col-md-4 col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div class="service-support__card service-support__card--app">
                <div class="flex items-center">
                  <img src="~assets/NDP/Servive&Support-3.PNG" alt class="icon" />
                  <p class="title">{{$t('developer.sections.service_and_support.title2')}}</p>
                </div>
                <p class="content">{{$t('developer.sections.service_and_support.desc2')}}</p>
              </div>
            </div>

            <div
              class="col-md-4 col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div class="service-support__card service-support__card--sdk">
                <div class="flex items-center">
                  <img src="~assets/NDP/Servive&Support-4.PNG" class="icon" alt />
                  <p class="title">{{$t('developer.sections.service_and_support.title3')}}</p>
                </div>
                <p class="content">{{$t('developer.sections.service_and_support.desc3')}}</p>
              </div>
            </div>
          </div>
          <div class="row relative">
            <img
              src="~assets/NDP/bg3.png"
              class="absolute hidden md:block"
              style="right: 60px; top: -50px;width: 200px;"
            />
            <div class="note">
              <p>{{$t('developer.footer')}}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <LazySignupDialog :visible.sync="signUpDialogVisible" :title="$t('login.sign_up')" />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabStyle: {},
      signUpDialogVisible: false,
    };
  },
  mounted() {
    this.$store.commit("SET_MENU", false);

    window.addEventListener("scroll", () => {
      const top = this.$refs.developerTabs.getBoundingClientRect().top;
      if (top >= 90 && top < 91) {
        this.$set(this.tabStyle, "boxShadow", "0 2px 5px rgb(0 0 0 / 5%)");
        // this.tabStyle.boxShadow = "0 2px 5px rgb(0 0 0 / 5%)";
      } else {
        this.tabStyle = {};
      }
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "../../assets/css/mixin";

$red: #d9534f;
$yellow: #e5a54b;
$green: #4bbf73;
$blue: #3d80e7;
$gray: #f9fafe;
$textColor: #333333;
$arrowHeight: 2px;

.developer {
  .developer-main {
    margin-top: 70px;
    background-color: $gray;
    @screen md {
      margin-top: 90px;
    }
  }
  .developer-header {
    padding: 50px 0;
    color: white;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 500px;
    background-image: url("assets/NDP/background-mobile.png");
    margin-bottom: 80px;

    @screen lg {
      background-image: url("assets/NDP/background.png");
      background-position: center;
      margin-bottom: 0;
      min-height: 830px;
      padding: 100px 0;
    }
    .developer-intro {
      line-height: 2;
      margin-bottom: 60px;
    }
    .price-button {
      background-color: #5cb478;
      padding: 15px;
      border-radius: 6px;
      color: #ffffff;
      display: inline-block;
      @screen sm {
        padding: 15px 33px;
      }
    }
    &__title-wrapper {
      padding: 50px 15px;
      @screen 2xl {
        padding: 100px 15px;
      }
    }
    @screen 2xl {
      min-height: 1100px;
    }
  }
  .developer-tabs {
    position: sticky;
    top: 90px;
    z-index: 2;
    background-color: $gray;
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
    h1 {
      font-size: 35px;
      @screen md {
        font-size: 45px;
      }
    }
    @screen md {
      padding: 80px;
    }
  }
  .app-store {
    background: #f9fafe;
    padding: 20px 15px;
    @screen md {
      padding: 0;
    }
    &__title {
      margin-bottom: 30px;
    }
    &__intro {
      line-height: 2;
      color: #666666;
    }
  }

  .operation-process {
    background: #ffffff;
    position: relative;
    .dashed-border {
      position: absolute;
      width: 105%;
      border: 1px dashed $blue;
      bottom: -30px;
      height: 200px;
      border-radius: 12px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      @screen md {
        display: block;
      }
    }
    &__title {
      margin-bottom: 50px;
    }

    .arrow-container--vertical {
      display: block;
      @screen md {
        display: none;
      }
      .arrow {
        width: 2px;
        height: 60px;
        position: relative;
        /* height: $arrowHeight; */
        background-color: $blue;
      }
      .arrow::after,
      .arrow::before {
        content: "";
        position: absolute;
        width: 2px;
        height: 36px;
        background-color: $blue;
        top: 32px;
      }

      .arrow::after {
        transform: rotate(-45deg);
        right: 12px;
      }

      .arrow::before {
        transform: rotate(45deg);
        right: -12px;
      }
    }

    .process-card {
      width: 60%;
      max-width: 260px;
      border-style: solid;
      margin: 10px 0;
      &.aos-animate {
        @screen md-max {
          transition-delay: 0ms;
        }
      }
      @screen sm {
        width: 40%;
      }
      @screen md {
        width: calc(20% - 16px);
        margin: 0 8px;
        margin-bottom: 20px;
      }
      &__header {
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
        color: #ffffff;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
      &__body {
        position: relative;
        border-width: 2px;
        border-style: solid;
        height: 250px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        padding: 20px;
        font-size: 16px;
        text-align: center;
        @screen md {
          height: 280px;
        }
        .info {
          /* margin-bottom: 70px; */
        }
        .arrow-container {
          position: absolute;
          z-index: 2;
          width: 130px;
          height: 60px;
          bottom: 40px;
          right: -75px;
          display: none;
          @screen md {
            display: block;
          }
          .arrow {
            position: absolute;
            top: 25px;
            width: 90%;
            height: 2px;
            height: $arrowHeight;
            background-color: $blue;
            /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); */
          }

          .arrow::after,
          .arrow::before {
            content: "";
            position: absolute;
            /* width: 44%; */
            width: 31%;
            height: $arrowHeight;
            right: -8px;
            background-color: $blue;
          }

          .arrow::after {
            top: -12px;
            transform: rotate(45deg);
          }

          .arrow::before {
            top: 12px;
            /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); */
            transform: rotate(-45deg);
          }
        }
      }
      &--red {
        border-color: $red;
        .process-card__header {
          background: $red;
        }
        .process-card__body {
          color: $red;
          border-color: $red;
        }
      }
      &--yellow {
        border-color: $yellow;
        .process-card__header {
          background: $yellow;
        }
        .process-card__body {
          color: $yellow;
          border-color: $yellow;
        }
      }
      &--green {
        border-color: $green;
        .process-card__header {
          background: $green;
        }
        .process-card__body {
          color: $green;
          border-color: $green;
        }
      }

      .process-card__icon {
        .circle {
          width: 100px;
          height: 100px;
          margin: 0 auto;
          border-radius: 50%;
          border: 2px solid $blue;
          position: absolute;
          left: 50%;
          bottom: 20px;
          transform: translateX(-50%);
          &::after {
            content: "";
            @include mixin.center;
            width: 80%;
            height: 80%;
            background-color: $blue;
            border-radius: 50%;
          }
          img {
            @include mixin.center;
            z-index: 1;
            width: 55px;
          }
        }
      }
    }
  }
  .service-support {
    background: #ffffff;
    h1 {
      z-index: 1;
      position: relative;
      margin-bottom: 60px;
    }
    .row {
      margin-bottom: 80px;
      @screen md {
        margin-bottom: 150px;
      }
    }
    .content {
      padding: 20px 0;
      line-height: 1.8;
      color: #333333;
      padding-left: 8px;
    }
    .quotation-marks {
      position: absolute;
      top: -13px;
      left: -12px;
      width: 60px;
      @screen md {
        top: -3px;
        left: -36px;
      }
    }
    .background {
      background-image: url("~assets/NDP/Servive&Support-bg.png");
      @include mixin.background-cover;
      min-height: 0;
    }
    .note {
      width: 80%;
      margin: 0 auto;
      background-color: #293042;
      border-radius: 10px;
      padding: 20px;
      color: #ffffff;
      line-height: 1.8;
      position: relative;
      text-align: center;
      @screen md {
        text-align: left;
        padding: 40px 100px;
      }
    }
    &__card {
      height: 250px;
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
      border-radius: 10px;
      padding: 20px;
      background-color: #ffffff;
      margin-bottom: 20px;
      .icon {
        width: 50px;
      }
      .title {
        font-weight: bold;
        font-size: 18px;
        padding-left: 10px;
      }
      &--content {
        .title {
          color: $blue;
        }
      }
      &--app {
        .title {
          color: $green;
        }
      }
      &--sdk {
        .title {
          color: $yellow;
        }
      }
    }
  }
}

.clearfix::after {
  @include mixin.clearfix;
}
</style>