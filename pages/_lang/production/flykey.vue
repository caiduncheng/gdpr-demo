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
            <div class="col-6">
              <h2 class="mb-3">Flykey Remoto Key Injection</h2>
              <p class="text-lg mb-3">
                Flykey is a value-added solution that provides
                <br />customers with completely secore remote key loading.
              </p>
              <el-button type="primary">Start now</el-button>
            </div>
            <div class="col-6">
              <div class="video-panel">
                <video
                  src="~assets/FLYKEY/FlyKey1.mp4"
                  id="video"
                  controls="controls"
                >Your browser does not support the video tag.</video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flykey-tabs">
        <div class="container">
          <ul>
            <li>
              <a v-scroll-to="'#Flykey'">About Flykey</a>
            </li>
            <li>
              <a v-scroll-to="'#Features'">Features</a>
            </li>
            <li>
              <a v-scroll-to="'#Functionality'">Functionality</a>
            </li>
            <li>
              <a v-scroll-to="'#Service'">Service & Support</a>
            </li>
          </ul>
        </div>
      </div>
      <section class="section-1 section" id="Flykey">
        <div class="container">
          <div class="row items-center">
            <div class="col-md-6" data-aos="fade-right" data-aos-duration="1200">
              <img src="~assets/FLYKEY/02.png" />
            </div>
            <div class="col-md-6" data-aos="fade-left" data-aos-duration="1200">
              <div class="pl-8">
                <h3 class="mb-3">Safe and convenient service</h3>
                <p
                  class="mb-5"
                >FFlyKey can integrates us more closely with customers, allowing us to further participate in customers use of financial payment products in addition to selling POS products to customers,and jointly improve the payment ecological chain, and through safe and convenient services Create value for customers and achieve a win-win situation.</p>
                <ul>
                  <li>
                    <i class="fa fa-check mr-2" />Create a customer account
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />Upload and store keys in secure enviroment
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />Configure the key group and associate with terminals
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />Remote key loading on POS device
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
            <div class="col-md-6" data-aos="fade-right" data-aos-duration="1200">
              <div>
                <h3 class="mb-3">Solve pain points in all aspects</h3>
                <p
                  class="mb-5"
                >FlyKey not only complies with the specification standards throughout the process, but also provides stable services and rich scalability. Compared to traditional key injection methods, FlyKey makes everything easier and more cost-effective.FlyKey not only complies with the specification standards throughout</p>
                <ul>
                  <li>
                    <i class="fa fa-check mr-2" />Pass PCI PIN 3.0 and P2PE certifications
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />Manages the key injection remotelyand securely
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />Secure room in warehouse
                  </li>
                  <li>
                    <i class="fa fa-check mr-2" />Mainstream security standards
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6" data-aos="fade-left" data-aos-duration="1200">
              <img src="~assets/FLYKEY/04.png" alt />
            </div>
          </div>
        </div>
      </section>
      <div class="flykey-bar">
        <div class="container">
          <div>
            <h3>Safe and efficient management</h3>
          </div>
        </div>
      </div>
      <div class="laptop section flex items-center justify-center">
        <img src="~assets/FLYKEY/14.png" alt />
      </div>
      <section class="section section-4" id="Functionality">
        <div class="container">
          <div class="row mb-3">
            <div class="col-md-6">
              <div class="flex items-start" data-aos="fade-up" data-aos-duration="1200">
                <img src="~assets/FLYKEY/09.png" />
                <div class="ml-3">
                  <h3>Remote Key Injection</h3>
                  <p>
                    A solution for remote secure flexible inject keys.
                    Supported key types:
                    <br />DUKPT, MK/SK
                    <br />Supported POS:
                    <br />Android/Linux/RTOS
                  </p>
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
                  <h3>Key Security</h3>
                  <p>Realize key security, standardization, efficiency, centralized and unified, full-life cycle security and compliance management, and include advanced key package management, group management,full monitoring.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <div
                class="flex items-start"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <img src="~assets/FLYKEY/06.png" alt />
                <div class="ml-3">
                  <h3>Terminal Management</h3>
                  <p>Provides a better management operation interface and supports exporting terminal key inject records.</p>
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
                  <h3>Dashboard</h3>
                  <p>Provides visual and up-to-date RKI information, terminal information, and account information.</p>
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
              <div class="col-md-5" data-aos="fade-right" data-aos-duration="1800">
                <h3 class="mb-5">Service & Support</h3>
                <p>FlyKey can integrates us more closely with customers, allowing us to further participate in customers use of financial payment products in addition to selling POS products to customers, and jointly improve the payment ecological chain, and through safe and convenient services Create value for customers and achieve a win-win situation.</p>
              </div>
              <div class="col-md-6 offset-md-1">
                <div class="feature-box" data-aos="fade-left" data-aos-duration="1200">
                  <img src="~assets/FLYKEY/17.png" />
                  <span>Technical Traning</span>
                </div>

                <div
                  class="feature-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <img src="~assets/FLYKEY/15.png" />
                  <span>Quick response team</span>
                </div>

                <div
                  class="feature-box"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <img src="~assets/FLYKEY/16.png" />
                  <span>Global support service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="map-panel"></div>
    <div class="flykey-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="mb-5">Contact Us</h3>
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
          <div class="col-md-6">
            <el-card class="footer-form">
              <el-form class="small" :model="form" @submit.prevent.native="submit">
                <el-form-item :label="$t('contact.email')" prop="email">
                  <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item :label="$t('contact.full_name')" prop="name">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item :label="$t('contact.character')" prop="mobile">
                  <el-input v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item
                  :label="$t('contact.country_region')"
                  prop="country"
                  class="form-select"
                >
                  <el-select v-model="form.countryCode" size="small">
                    <el-option
                      v-for="item in countries"
                      :key="item.countryCode3"
                      :label="item.countryNameEn"
                      :value="item.countryCode3"
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
                <el-form-item :label="$t('contact.company')" prop="company">
                  <el-input v-model="form.company"></el-input>
                </el-form-item>

                <el-form-item :label="$t('contact.industry')" prop="industry">
                  <el-input v-model="form.industry"></el-input>
                </el-form-item>

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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  data() {
    return {
      types: [
        {
          value: 0,
          label: "Contact Sales",
        },
        {
          value: 1,
          label: "Support",
        },
        {
          value: 2,
          label: "Partner",
        },
        {
          value: 3,
          label: "Marketing",
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

    mapboxgl.accessToken =
      "pk.eyJ1IjoieGlhb2hxIiwiYSI6ImNrdTUzbG5pdTJqdmMyb3FoY2hnMG84Z2oifQ.3CVuWTmyV5YJSsjVCI9qQA";

    const map = new mapboxgl.Map({
      container: "map-panel",
      style: "mapbox://styles/mapbox/light-v9",
      center: [119.4049, 26.0202],
      zoom: 15,
    });
    map.on("idle", function () {
      map.resize();
    });
    new mapboxgl.Marker().setLngLat([119.4049, 26.0202]).addTo(map);
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

  .flykey-main {
    position: relative;
    margin-top: 90px;
  }

  .flykey-header {
    background-image: url("~assets/FLYKEY/01.png");
    padding: 100px 0 200px;
    background-size: cover;

    .video-panel {
      & > video {
        border-radius: 10px;
        width: 100%;
      }
    }
  }
  .flykey-tabs {
    background-color: $bgGray;
    padding: 40px 0px;

    ul {
      display: flex;

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
    height: 550px;
    background-color: rgb(0, 110, 252);
    background-image: url("~assets/FLYKEY/10.png");
    color: #ffffff;
    background-size: cover;
    padding: 100px 0;
    background-repeat: no-repeat;
    .feature-box {
      color: #000000;
      font-size: 24px;
      background: #ffffff;
      padding: 20px;
      width: 450px;
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