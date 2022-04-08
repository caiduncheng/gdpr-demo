<template>
  <div class="homepage">
    <NavBar fixed />
    <div id="headerIndex">
      <div class="background-wrapper">
        <div class="h-full w-full background"></div>
      </div>
      <div class="header-content">
        <NavBar />
      </div>
      <div class="container">
        <div class="header-info w-2/4">
          <h1 class="header-title">
            The TOMS platform was born for
            <br />terminal lifecycle management
          </h1>

          <p>
            Reduce manpower investment,improve management efficiency and
            <br />reduce operating costs.
          </p>
          <a class="start-button btn">
            <span>Start Now</span>
          </a>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container container-fluid" data-aos="fade-up" data-aos-duration="1200">
        <div class="section-title">
          <div class="text-center">
            <h2>Terminal Lifecycle Management</h2>
          </div>
        </div>
        <div class="text-center">
          <ul class="tabs">
            <li
              :class="['tab', 'lifecycle-tab', {active: activeIndex === index}]"
              v-for="(item, index) in terminalTabs"
              :key="index"
              @click="() => activeIndex = index "
              :data-index="index"
            >{{item}}</li>
            <div class="indicator" :style="indicatorStyle"></div>
          </ul>
        </div>
      </div>
      <div class="containerXL container-fluid">
        <div class="row tab-content justify-between items-center">
          <template v-if="activeIndex === 0">
            <div
              class="col-md-6"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/Zero-touchDeployment.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1200"
              style="padding: 0 50px"
            >
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div>
                    <h3 class="mb-2">Out of the box</h3>
                    <p
                      class="pr-2"
                    >The TOMS Client is pre-installed at the factory, access the TOMS platform instantly when booted.</p>
                  </div>
                </div>
                <div class="col-6">
                  <img src="~assets/img-2.png" alt class="mb-2" />
                  <h3 class="mb-2">Deployment in Batches</h3>
                  <p
                    class="pr-2"
                  >The device can bind the Installation Template in batches,this sets up the pre-installation environment to reduce repetitive labor.</p>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-3.png" alt class="mb-2" />
                  <h3 class="mb-2">Auto Pre-install</h3>
                  <p class="pr-2">Automatic Template Installation, rapid and efficient deployment.</p>
                </div>
                <div class="col-6">
                  <img src="~assets/img-4.png" alt class="mb-2" />
                  <h3 class="mb-2">Zero-touch Transfer</h3>
                  <p
                    class="pr-2"
                  >Can be allocated before deployment, making management one step faster.</p>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeIndex === 1">
            <div
              class="col-md-6"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/Multi-dimensional.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1200"
              style="padding: 0 50px"
            >
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div>
                    <h3 class="mb-2">Organization</h3>
                    <p
                      class="pr-2"
                    >Clearly know the equipment distribution of each organization and each store.</p>
                  </div>
                </div>
                <div class="col-6">
                  <img src="~assets/img-2.png" alt class="mb-2" />
                  <h3 class="mb-2">Group</h3>
                  <p
                    class="pr-2"
                  >By combining devices with the same label, devices can be repeatedly bound to groups,batch operation is easy and labor-saving.</p>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-3.png" alt class="mb-2" />
                  <h3 class="mb-2">Renewal Schedule</h3>
                  <p
                    class="pr-2"
                  >In addition to real-time updates, we also provide task plans which are scheduled for execution.</p>
                </div>
                <div class="col-6">
                  <img src="~assets/img-4.png" alt class="mb-2" />
                  <h3 class="mb-2">Single Device</h3>
                  <p
                    class="pr-2"
                  >Not only can be set in batches, but also can be specific to a single device operation, both convenient and accurate.</p>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeIndex === 2">
            <div
              class="col-md-6"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/Software.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1200"
              style="padding: 0 50px"
            >
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div>
                    <h3 class="mb-2">Remote Management</h3>
                    <p
                      class="pr-2"
                    >Remote firmware and application upgrades, and apply configurable parameters independently.</p>
                  </div>
                </div>
                <div class="col-6">
                  <img src="~assets/img-2.png" alt class="mb-2" />
                  <h3 class="mb-2">Parameter Template</h3>
                  <p
                    class="pr-2"
                  >Set the parameter template and default values for the application, and push the parameters in a smooth way.</p>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-3.png" alt class="mb-2" />
                  <h3 class="mb-2">Launch on Boot</h3>
                  <p
                    class="pr-2"
                  >Set up the application to start automatically with the device boot, no development adaptation, reduce the application development investment.</p>
                </div>
                <div class="col-6">
                  <img src="~assets/img-4.png" alt class="mb-2" />
                  <h3 class="mb-2">Kiosk</h3>
                  <p
                    class="pr-2"
                  >Lock down devices to one or some special apps,keep equipment in working condition at all times.</p>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeIndex === 3">
            <div
              class="col-md-6"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/device-monitoring.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6"
              style="padding: 0 50px"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div>
                    <h3 class="mb-2">Rich Chart</h3>
                    <p class="pr-2">
                      Graphical display of network usage, power, hardware life etc.intuitive generous
                      .
                    </p>
                  </div>
                </div>
                <div class="col-6">
                  <img src="~assets/img-2.png" alt class="mb-2" />
                  <h3 class="mb-2">Device Location</h3>
                  <p class="pr-2">Find the exact location of your devices</p>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-3.png" alt class="mb-2" />
                  <h3 class="mb-2">History</h3>
                  <p
                    class="pr-2"
                  >Device operation logs, asset flow, and application installation records help partners quickly understand devices.</p>
                </div>
                <div class="col-6">
                  <img src="~assets/img-4.png" alt class="mb-2" />
                  <h3 class="mb-2">More Info</h3>
                  <p
                    class="pr-2"
                  >Card type display Organization, application, firmware, system settings information, loud and clear.</p>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeIndex === 4">
            <div
              class="col-md-6"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/RemoteDiagnosis.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6"
              style="padding: 0 50px"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div>
                    <h3 class="mb-2">Log Extraction</h3>
                    <p
                      class="pr-2"
                    >Remote log extraction, no need to reproduce, help development locate problems, not to miss any exceptions.</p>
                  </div>
                </div>
                <div class="col-6">
                  <img src="~assets/img-2.png" alt class="mb-2" />
                  <h3 class="mb-2">Real-time Logcat</h3>
                  <p
                    class="pr-2"
                  >Real-time access to logs for troubleshooting can be performed by one-click solution.</p>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-3.png" alt class="mb-2" />
                  <h3 class="mb-2">Extract File</h3>
                  <p
                    class="pr-2"
                  >Extract the device-specified path file to get the application's own log and crash files.</p>
                </div>
                <div class="col-6">
                  <img src="~assets/img-4.png" alt class="mb-2" />
                  <h3 class="mb-2">System Settings</h3>
                  <p
                    class="pr-2"
                  >Remote setting WIFI IME language. Imitation terminal interface, abandon complex steps, immediately start.</p>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeIndex === 5">
            <div
              class="col-md-6"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/Customization.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6"
              style="padding: 0 50px"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div class="row mb-3">
                <div class="col-6">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div>
                    <h3 class="mb-2">Customization</h3>
                    <p
                      class="pr-2"
                    >Customizing the device boot animation and boot logo, highlight the brand.</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <section class="section value-add-service">
      <div class="container container-fluid" data-aos="fade-up" data-aos-duration="1200">
        <div class="section-title">
          <div class="text-center">
            <h2>Value-Added Service</h2>
          </div>
        </div>
        <div class="text-center">
          <ul class="tabs relative">
            <li
              :class="['tab', 'service-tab', {active: activeServiceIndex === index}]"
              v-for="(item, index) in serviceTabs"
              :key="index"
              @click="() => activeServiceIndex = index"
              :data-index="index"
            >{{item}}</li>
            <div class="indicator" :style="serviceIndicatorStyle"></div>
          </ul>
        </div>
      </div>
      <div class="containerXL container-fluid">
        <div class="row items-center no-gutters">
          <!-- FlyKey -->
          <template v-if="activeServiceIndex === 0">
            <div class="col-md-5" data-aos="fade-right" data-aos-duration="1200">
              <h1 class="value-add-service__title">Flykey</h1>
              <div class="line"></div>
              <p
                class="service-info"
              >Integrate FlyKey management portal onto TOMS. FlyKey is a remote key injection tool. Certified PCI-PIN3.0 secure.Remote key injection can be used for remote key filling and updating of POS terminals without door-to-door filling, which is flexible and fast and reduces labor cost.</p>
              <ul class="service-features">
                <li>
                  <img src="~/assets/Value-Added Service/1.png" alt />
                  Safe & Reliable
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/2.png" alt />
                  Flexible & Fast
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/3.png" alt />
                  Reduce Manpower
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/4.png" alt />
                  Repeated Injection
                </li>
              </ul>
            </div>
            <div
              class="col-md-7 value-added-service__bg flykey float-right"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img src="~assets/Value-Added Service/flykey/3.png" alt class="device" />
              <img
                src="~assets/Value-Added Service/flykey/1.png"
                alt
                class="flykey-line"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="1000"
              />
              <img src="~assets/Value-Added Service/flykey/2.png" alt class="cloud" />
              <!-- <img src="~assets/Value-Added Service/FlyDesk/7.png" alt class="w-full" /> -->
            </div>
          </template>
          <!-- FlyDesk -->
          <template v-else-if="activeServiceIndex === 1">
            <div class="col-md-5" data-aos="fade-right" data-aos-duration="1200">
              <h1 class="value-add-service__title">FlyDesk</h1>
              <div class="line"></div>
              <p
                class="service-info"
              >FlyDesk is a remote desktop control tool provided by the TOMS platform. With FlyDesk, you can control the POS terminal at any time and deal instantly with the Merchant. Improve merchant support processes while significantly reducing your costs.</p>
              <ul class="service-features">
                <li>
                  <img src="~/assets/Value-Added Service/1.png" alt />
                  Remote Troubleshooting
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/2.png" alt />
                  Instant Support
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/3.png" alt />
                  Easy & Efficient
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/4.png" alt />
                  Low cost
                </li>
              </ul>
            </div>
            <div
              class="col-md-7 value-added-service__bg fly-desk"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img src="~assets/Value-Added Service/FlyDesk/6.png" alt class="left" />
              <img src="~assets/Value-Added Service/FlyDesk/1.png" alt class="right" />
              <img src="~assets/Value-Added Service/FlyDesk/4.png" alt class="green-dot" />
              <img
                src="~assets/Value-Added Service/FlyDesk/2.png"
                alt
                class="flydesk-dialog"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              />
              <img
                src="~assets/Value-Added Service/FlyDesk/2.png"
                alt
                class="flydesk-dialog-2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1300"
              />
              <img
                src="~assets/Value-Added Service/FlyDesk/2.png"
                alt
                class="flydesk-dialog-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1600"
              />
              <!-- <img src="~assets/Value-Added Service/FlyDesk/7.png" alt class="w-full" /> -->
            </div>
          </template>
          <!-- Hardware -->
          <template v-else-if="activeServiceIndex === 2">
            <div class="col-md-5" data-aos="fade-right" data-aos-duration="1200">
              <h1 class="value-add-service__title">Hardware Diagnostics</h1>
              <div class="line"></div>
              <p
                class="service-info"
              >Hardware Diagnostics enables rapid detection of the Hardware capabilities of the device, supports automated and semi-automated detection, and generates diagnostic reports. Reduce unnecessary door-to-door support and improve personnel efficiency.</p>
              <ul class="service-features">
                <li>
                  <img src="~/assets/Value-Added Service/1.png" alt />
                  Automation
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/2.png" alt />
                  Generate Report
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/3.png" alt />
                  Quick Positioning
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/4.png" alt />
                  Improve Efficiency
                </li>
              </ul>
            </div>
            <div
              class="col-md-7 value-added-service__bg hardware"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img src="~assets/Value-Added Service/hardware-diagnostics/1.png" alt class="left" />
              <img src="~assets/Value-Added Service/hardware-diagnostics/5.png" alt class="right" />
              <!-- <img src="~assets/Value-Added Service/FlyDesk/7.png" alt class="w-full" /> -->
            </div>
          </template>
          <!-- Geo-fencing -->
          <template v-else-if="activeServiceIndex === 3">
            <div class="col-md-5" data-aos="fade-right" data-aos-duration="1200">
              <h1 class="value-add-service__title">Geo-fencing</h1>
              <div class="line"></div>
              <p
                class="service-info"
              >The Geo-fencing limits the use area of device. When the device out the fence area, an alarm is triggered to notify the administrator. Automatic locking can be set up to prevent improper or illegal use.</p>
              <ul class="service-features">
                <li>
                  <img src="~/assets/Value-Added Service/1.png" alt />
                  Out Fence Warning
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/2.png" alt />
                  Track Device
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/3.png" alt />
                  Auto Look
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/4.png" alt />
                  Trace export
                </li>
              </ul>
            </div>
            <div
              class="col-md-7 value-added-service__bg geo-fencing"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img src="~assets/Value-Added Service/Geo-fencing/1.png" alt class="left" />
              <img src="~assets/Value-Added Service/Geo-fencing/4.png" alt class="right" />
              <!-- <img src="~assets/Value-Added Service/FlyDesk/7.png" alt class="w-full" /> -->
            </div>
          </template>
          <!-- Pre-warning -->
          <template v-else-if="activeServiceIndex === 4">
            <div class="col-md-5" data-aos="fade-right" data-aos-duration="1200">
              <h1 class="value-add-service__title">Pre-warning</h1>
              <div class="line"></div>
              <p
                class="service-info"
              >When the device storage, traffic, printer, and battery trigger the user-set threshold, the user is warned to deal with it. Guarantee the production and avoid losses</p>
              <ul class="service-features">
                <li>
                  <img src="~/assets/Value-Added Service/1.png" alt />
                  In-station Alert
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/2.png" alt />
                  Email Alert
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/3.png" alt />
                  Threshold customization
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/4.png" alt />
                  Avoid Loss
                </li>
              </ul>
            </div>
            <div
              class="col-md-7 value-added-service__bg pre-warning"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img src="~assets/Value-Added Service/Pre-warning/1.png" alt class="left" />
            </div>
          </template>
        </div>
      </div>
    </section>

    <section class="section brand-store">
      <div class="containerXL container-fluid">
        <div class="row no-gutters items-center">
          <div class="col-md-7 brand-store-left">
            <!-- <img src="~assets/macbook.png" alt class="mac-book w-full" /> -->
          </div>
          <div class="col-md-5 text-white" data-aos="fade-up" data-aos-duration="1200">
            <h3 class="mb-10">Own Brand Store</h3>
            <ul>
              <li class="mb-10">
                <img src="~assets/OwnBrandStore/icon-1.png" alt />
                Private application store
              </li>
              <li class="mb-10">
                <img src="~assets/OwnBrandStore/icon-2.png" alt />
                Control application content by yourself
              </li>
              <li class="mb-10">
                <img src="~assets/OwnBrandStore/icon-3.png" alt />
                Free to build application
              </li>
              <li>
                <img src="~assets/OwnBrandStore/icon-4.png" alt />
                Flexible choice and more focus on industry
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      activeServiceIndex: 0,
      terminalTabs: [
        "Zero-touch Deployment",
        "Multi-dimensional",
        "Software",
        "Device Monitoring",
        "Remote Diagnosis",
        "Customization",
      ],
      serviceTabs: [
        "Flykey",
        "FlyDesk",
        "Hardware Diagnostics",
        "Geo-fencing",
        "Pre-warning",
      ],
      mounted: false,
    };
  },
  computed: {
    indicatorStyle() {
      if (this.mounted && process.browser) {
        let left = 0;
        if (this.activeIndex === 0) {
          left = 0;
        } else {
          let sum = 0;
          for (let i = 0; i < this.activeIndex; i++) {
            sum += document.querySelector(
              `.lifecycle-tab[data-index="${i}"]`
            ).clientWidth;
          }
          left = sum;
        }
        return {
          width:
            document.querySelector(
              `.lifecycle-tab[data-index="${this.activeIndex}"]`
            ).clientWidth + "px",
          left: left + "px",
        };
      }
    },
    serviceIndicatorStyle() {
      if (this.mounted && process.browser) {
        let left = 0;
        if (this.activeServiceIndex === 0) {
          left = 0;
        } else {
          let sum = 0;
          for (let i = 0; i < this.activeServiceIndex; i++) {
            sum += document.querySelector(
              `.service-tab[data-index="${i}"]`
            ).clientWidth;
          }
          left = sum;
        }
        return {
          width:
            document.querySelector(
              `.service-tab[data-index="${this.activeServiceIndex}"]`
            ).clientWidth + "px",
          left: left + "px",
        };
      }
    },
  },
  mounted() {
    this.mounted = true;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "../../assets/css/mixin";
@import "../../assets/css/animation.scss";

.homepage {
  overflow: hidden;
}

#headerIndex {
  height: auto;
  min-height: 100vh;
  position: relative;
}
.start-button {
  width: 200px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  span {
    position: relative;
    font-size: 14px;
    z-index: 2;
    vertical-align: middle;
  }
  @include mixin.btn-animated(#3982e9, #1d1d1d);
}
.background {
  background-image: url("~assets/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.header-content {
  position: relative;
}
.header-info {
  color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0 auto;
  /* transition: all 0.8s ease-in; */

  & > h1 {
    animation: fade 1s;
    font-size: 2.5rem;
    margin-bottom: 40px;
    line-height: 50px;
    text-transform: uppercase;
    /* line-height: 1.2; */
  }

  & > p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    /* padding: 0 100px; */
    margin-bottom: 40px;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
  }
}

.section {
  /* background: #f4f4f4; */
  .section-title {
    margin-bottom: 50px;
  }
  &.value-add-service {
    background-color: #f5faff;
  }

  &.brand-store {
    background-image: url("~assets/bg-2.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 150px 0;
    .brand-store-left {
      background-image: url("~assets/macbook.png");
      height: 500px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
}

.tabs {
  padding-bottom: 20px;
  white-space: nowrap;
  text-align: center;
  display: inline-block;
  position: relative;
  /* display: flex;
  justify-content: center; */
  margin-bottom: 50px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  .tab {
    cursor: pointer;
    padding: 14px 30px;
    color: #6c6c6c;
    display: inline-block;
    border-bottom: 1px solid rgba(33, 33, 33, 0.2);
    &.active {
      /* border-bottom: 3px solid !important; */
      color: #000000;
    }
  }
}

.indicator {
  top: 50px;
  position: absolute;
  height: 3px;
  background-color: rgb(33, 33, 33);
  transition: left 0.4s ease-in-out, width 0.4s ease-in-out;
  width: 200px;
  left: 100px;
}

.line {
  height: 1px;
}

.tab-content {
  min-height: 500px;
  h3 {
    font-size: 18px;
  }
}

.value-add-service__title {
  font-size: 2.5rem;
  display: inline-block;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #2c7be5;
}

.value-added-service__bg {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 500px;
  position: relative;
  &.flykey {
    background-image: url("~assets/Value-Added Service/flykey/4.png");
    .cloud {
      position: absolute;
      left: 140px;
      bottom: 70px;
      animation: moveUpAndDown 2s infinite;
    }
    .flykey-line {
      position: absolute;
      left: 387px;
      width: 238px;
      top: 253px;
    }
    .device {
      position: absolute;
      right: 100px;
      bottom: 0;
      width: 150px;
    }
  }
  &.hardware {
    background-image: url("~assets/Value-Added Service/hardware-diagnostics/4.png");
    .left {
      position: absolute;
      width: 250px;
      bottom: 0;
    }

    .right {
      right: 0;
      position: absolute;
      bottom: 0;
      width: 330px;
    }
  }
  &.pre-warning {
    background-image: url("~assets/Value-Added Service/Pre-warning/2.png");
    .left {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  &.fly-desk {
    background-image: url("~assets/Value-Added Service/FlyDesk/7.png");
    img {
      position: absolute;
    }
    .left {
      left: 200px;
      top: 120px;
      width: 200px;
    }
    .right {
      right: 70px;
      bottom: 0;
    }
    .green-dot {
      top: 133px;
      left: 265px;
      animation: fadeInAndOut 1s infinite;
      animation-direction: alternate;
    }
    .flydesk-dialog {
      top: 226px;
      left: 218px;
      width: 164px;
      /* animation: moveDialog 1s; */
      /* animation-delay: 1s; */
    }

    .flydesk-dialog-2 {
      top: 290px;
      left: 218px;
      width: 164px;
    }

    .flydesk-dialog-3 {
      top: 354px;
      left: 218px;
      width: 164px;
    }
  }
  &.geo-fencing {
    background-image: url("~assets/Value-Added Service/Geo-fencing/3.png");
    .left {
      position: absolute;
      left: 140px;
      bottom: 0;
    }
    .right {
      position: absolute;
      right: 96px;
      bottom: 0;
      width: 156px;
    }
  }
}

.service-info,
.service-features {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.service-info {
  margin-bottom: 20px;
  line-height: 2;
}

.service-features {
  li {
    margin-bottom: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.mac-book {
  /* transform: translateX(-300px); */
}
</style>