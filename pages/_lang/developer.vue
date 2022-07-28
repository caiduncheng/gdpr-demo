<template>
  <div class="developer">
    <NavBar fixed alwaysShow :hasShadow="false" :logo="require('../../assets/NDP/ndp-logo.png')" />
    <div class="developer-main">
      <div class="developer-header">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6 developer-header__title-wrapper text-center lg:text-left">
              <h1 class="mb-5">App Release</h1>
              <p
                class="developer-intro"
              >TOMS App Store empowers developers to distribute their applications, allowing applications to be quickly distributed to millions of POS terminals around the world.</p>
              <button class="price-button">
                <div class="flex items-center">
                  <div class="text-left mr-3">
                    <p>The promotion period is</p>
                    <p style="text-decoration: line-through">The registration fee is 25$</p>
                  </div>
                  <span class="text-5xl">Free</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="developer-tabs" :style="tabStyle">
        <div class="container">
          <ul>
            <li>
              <a v-scroll-to="{element: '#AppStore', offset: -200}">App Store</a>
            </li>
            <li>
              <a v-scroll-to="{element: '#Operation', offset: -200}">Operation Process</a>
            </li>
            <li>
              <a v-scroll-to="{element: '#Service', offset: -200}">Service & Support</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="overflow-hidden">
        <section class="app-store section" id="AppStore">
          <div class="containerXL">
            <div class="row items-center">
              <div class="col-lg-5" data-aos="fade-right-new" data-aos-duration="1200">
                <h1 class="app-store__title">App Store</h1>
                <p
                  class="app-store__intro"
                >TOMS Appstore is aimed at Newland devices distributed in various countries around the world . Device users around the world can use TOMS App Store to download various applications to meet their daily business needs.</p>
              </div>
              <div class="offset-lg-1 col-lg-6" data-aos="fade-left-new" data-aos-duration="1200">
                <img class="w-full" src="~assets/NDP/app-store.png" alt="app-store" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        class="operation-process section"
        id="Operation"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div class="containerXL relative">
          <div class="dashed-border"></div>
          <h1 class="text-center operation-process__title">Operation Process</h1>
          <div class="row" data-aos="fade-up" data-aos-duration="1200">
            <div class="process-card process-card--red">
              <div class="process-card__header">Register & Login</div>
              <div class="process-card__body">
                <p class="info">Register and login to the developer platform</p>

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

            <div class="process-card process-card--yellow">
              <div class="process-card__header">Get Development Device</div>
              <div class="process-card__body">
                <p class="info">Register and login to the developer platform</p>

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

            <div class="process-card process-card--green">
              <div class="process-card__header">Register & Login</div>
              <div class="process-card__body">
                <p class="info">Register and login to the developer platform</p>

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

            <div class="process-card process-card--yellow">
              <div class="process-card__header">Application Upload</div>
              <div class="process-card__body">
                <p class="info">Register and login to the developer platform</p>

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

            <div class="process-card process-card--green">
              <div class="process-card__header">Application Audit</div>
              <div class="process-card__body">
                <p class="info">Register and login to the developer platform</p>

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
            <h1 data-aos="fade-up" data-aos-duration="1200">Service&Support</h1>
          </div>
          <div class="row relative" data-aos="fade-up" data-aos-duration="1200">
            <img
              src="~assets/NDP/bg1.png"
              class="absolute"
              style="width: 400px; top: -65px; left: -42px;"
            />
            <img
              src="~assets/NDP/bg2.png"
              class="absolute"
              style="right: 20px;top: -118px; width: 400px;"
            />
            <div class="col-4">
              <div class="service-support__card service-support__card--content">
                <div class="flex items-center">
                  <img src="~assets/NDP/Servive&Support-2.PNG" alt class="icon" />
                  <p class="title">Content Review</p>
                </div>
                <p
                  class="content"
                >Identify illegal content in application information, including pornography,violence, terrorism, politically sensitive etc, and effectively defend against content risks.</p>
              </div>
            </div>

            <div class="col-4">
              <div class="service-support__card service-support__card--app">
                <div class="flex items-center">
                  <img src="~assets/NDP/Servive&Support-3.PNG" alt class="icon" />
                  <p class="title">App Signing</p>
                </div>
                <p
                  class="content"
                >Identify illegal content in application information, including pornography,violence, terrorism, politically sensitive etc, and effectively defend against content risks.</p>
              </div>
            </div>

            <div class="col-4">
              <div class="service-support__card service-support__card--sdk">
                <div class="flex items-center">
                  <img src="~assets/NDP/Servive&Support-4.PNG" class="icon" alt />
                  <p class="title">SDK API Documentation</p>
                </div>
                <p
                  class="content"
                >Identify illegal content in application information, including pornography,violence, terrorism, politically sensitive etc, and effectively defend against content risks.</p>
              </div>
            </div>
          </div>
          <div class="row relative">
            <div class="note">
              <img
                src="~assets/NDP/bg3.png"
                class="absolute"
                style="right: 60px; top: -50px; z-index: -1; width: 200px;"
              />
              <p>In order for the application to quickly access the terminal , we provide detailed SDK Apl documents to facilitate developers to easily connect to the terminal system ; in order to ensure the legality and security of the application , we provide application content detection and application signature to ensure Apps can be distributed normally in various countries around the world.</p>
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
      tabStyle: {},
    };
  },
  mounted() {
    this.$store.commit("SET_MENU", false);
    window.addEventListener("scroll", () => {
      if (scrollY > 800) {
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
    margin-top: 90px;
    background-color: $gray;
  }
  .developer-header {
    padding: 100px 0;
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
      min-height: 800px;
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
    padding: 80px;
    h1 {
      font-size: 45px;
    }
  }
  .app-store {
    background: #f9fafe;
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
    }
    &__title {
      margin-bottom: 50px;
    }

    .process-card {
      width: calc(20% - 16px);
      border-style: solid;
      margin: 0 8px;
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
        height: 280px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        padding: 20px;
        font-size: 16px;
        text-align: center;
        .info {
          /* margin-bottom: 70px; */
        }
        .arrow-container {
          position: absolute;
          width: 130px;
          height: 60px;
          bottom: 40px;
          right: -75px;
          z-index: 2;
          .arrow {
            position: absolute;
            top: 25px;
            width: 90%;
            height: $arrowHeight;
            background-color: $blue;
            /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); */
          }

          .arrow::after,
          .arrow::before {
            content: "";
            position: absolute;
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
      margin-bottom: 150px;
    }
    .content {
      padding: 20px 0;
      line-height: 1.8;
      color: #333333;
    }
    .quotation-marks {
      position: absolute;
      top: -40px;
      left: -57px;
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
      padding: 40px 100px;
      color: #ffffff;
      line-height: 1.8;
    }
    &__card {
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
      border-radius: 10px;
      padding: 20px;
      background-color: #ffffff;
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