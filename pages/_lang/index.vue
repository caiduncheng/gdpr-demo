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
        <div class="header-info md:w-2/4 w-full">
          <h1 class="header-title" v-html="$t('home.first_screen.slogan')"></h1>

          <p v-html="$t('home.first_screen.target')"></p>
          <a class="start-button btn" :href="platformLocation">
            <span>{{ $t("home.first_screen.start") }}</span>
          </a>
        </div>
      </div>
    </div>
    <!-- Terminal Lifecycle Management -->
    <section class="section">
      <div class="container container-fluid" data-aos="fade-up" data-aos-duration="1200">
        <div class="section-title">
          <div class="text-center">
            <h2>{{ $t("home.lifecycle.title") }}</h2>
          </div>
        </div>
        <div class="text-center hidden md:block">
          <ul class="tabs">
            <li
              :class="[
                'tab',
                'lifecycle-tab',
                { active: activeIndex === index },
              ]"
              v-for="(item, index) in terminalTabs"
              :key="index"
              @click="() => (activeIndex = index)"
              :data-index="index"
            >{{ $t(item) }}</li>
            <div class="indicator" :style="indicatorStyle"></div>
          </ul>
        </div>
        <div class="container">
          <div class="dropdown mb-14 block md:hidden">
            <a class="btn dropdown-toggle" @click="toggleLifeCycleMenu">
              {{$t(terminalTabs[activeIndex])}}
              <i
                class="fa fa-caret-down float-right"
                style="line-height: 22px"
              ></i>
            </a>
            <div class="dropdown-menu" :style="{display: lifeCycleMenuShown ? 'block' : 'none'}">
              <a
                v-for="(item, index) in terminalTabs"
                :key="item"
                :class="['dropdown-item', {'current-item': activeIndex === index}]"
                @click="() => lifeCycleMenuClick(index)"
              >{{$t(item)}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="containerXL container-fluid">
        <div class="row tab-content justify-between items-center">
          <template v-if="activeIndex === 0">
            <div
              class="col-md-6 text-center mb-5 md:mb-0 hidden md:block"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/Zero-touchDeployment.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6 relative"
              data-aos="new-animation"
              data-aos-duration="1200"
              style="padding: 0 50px; z-index: -1;"
            >
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.deployment.feature1") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.deployment.detail1") }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <img src="~assets/img-2.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.deployment.feature2") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.deployment.detail2") }}</p>
                  </div>
                </div>
              </div>
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-3.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.deployment.feature3") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.deployment.detail3") }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <img src="~assets/img-4.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.deployment.feature4") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.deployment.detail4") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeIndex === 1">
            <div
              class="col-md-6 text-center mb-5 md:mb-0 hidden md:block"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/Multi-dimensional.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6 relative"
              data-aos="new-animation"
              data-aos-duration="1200"
              style="padding: 0 50px; z-index: -1;"
            >
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.multi_dimen.feature1") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.multi_dimen.detail1") }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <img src="~assets/img-2.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.multi_dimen.feature2") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.multi_dimen.detail2") }}</p>
                  </div>
                </div>
              </div>
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-3.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.multi_dimen.feature3") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.multi_dimen.detail3") }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <img src="~assets/img-4.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.multi_dimen.feature4") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.multi_dimen.detail4") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeIndex === 2">
            <div
              class="col-md-6 text-center mb-5 md:mb-0 hidden md:block"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/Software.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6 relative"
              data-aos="new-animation"
              data-aos-duration="1200"
              style="padding: 0 50px; z-index: -1;"
            >
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.software.feature1") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.software.detail1") }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <img src="~assets/img-2.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.software.feature2") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.software.detail2") }}</p>
                  </div>
                </div>
              </div>
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-3.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.software.feature3") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.software.detail3") }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <img src="~assets/img-4.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.software.feature4") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.software.detail4") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeIndex === 3">
            <div
              class="col-md-6 text-center mb-5 md:mb-0 hidden md:block"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/device-monitoring.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6 relative"
              style="padding: 0 50px; z-index: -1;"
              data-aos="new-animation"
              data-aos-duration="1200"
            >
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.monitor.feature1") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.monitor.detail1") }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <img src="~assets/img-2.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.monitor.feature2") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.monitor.detail2") }}</p>
                  </div>
                </div>
              </div>
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-3.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.monitor.feature3") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.monitor.detail3") }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <img src="~assets/img-4.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.monitor.feature4") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.monitor.detail4") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeIndex === 4">
            <div
              class="col-md-6 text-center mb-5 md:mb-0 hidden md:block"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/RemoteDiagnosis.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6 relative"
              style="padding: 0 50px; z-index: -1;"
              data-aos="new-animation"
              data-aos-duration="1200"
            >
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.diagnosis.feature1") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.diagnosis.detail1") }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <img src="~assets/img-2.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.diagnosis.feature2") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.diagnosis.detail2") }}</p>
                  </div>
                </div>
              </div>
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-3.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.diagnosis.feature3") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.diagnosis.detail3") }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <img src="~assets/img-4.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.diagnosis.feature4") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.diagnosis.detail4") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeIndex === 5">
            <div
              class="col-md-6 text-center mb-5 md:mb-0 hidden md:block"
              style="padding: 0 50px"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img src="~assets/Customization.png" class="w-4/5" alt />
            </div>
            <div
              class="col-md-6 relative"
              style="padding: 0 50px; z-index: -1;"
              data-aos="new-animation"
              data-aos-duration="1200"
            >
              <div class="row mb-3 text-center md:text-left">
                <div class="col-md-6 col-12">
                  <img src="~assets/img-1.png" alt class="mb-2" />
                  <div class="mb-3">
                    <h3 class="mb-2">{{ $t("home.lifecycle.customization.feature1") }}</h3>
                    <p class="pr-2">{{ $t("home.lifecycle.customization.detail1") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
    <!-- Value-Added Services -->
    <section class="section value-add-service">
      <div class="container container-fluid" data-aos="fade-up" data-aos-duration="1200">
        <div class="section-title">
          <div class="text-center">
            <h2>{{ $t("home.vas.title") }}</h2>
          </div>
        </div>
        <div class="text-center hidden md:block">
          <ul class="tabs relative">
            <li
              :class="[
                'tab',
                'service-tab',
                { active: activeServiceIndex === index },
              ]"
              v-for="(item, index) in serviceTabs"
              :key="index"
              @click="() => (activeServiceIndex = index)"
              :data-index="index"
            >{{ $t(item) }}</li>
            <div class="indicator" :style="serviceIndicatorStyle"></div>
          </ul>
        </div>
        <div class="container">
          <div class="dropdown mb-14 block md:hidden">
            <a class="btn dropdown-toggle" @click="toggleServiceMenu">
              {{$t(serviceTabs[activeServiceIndex])}}
              <i
                class="fa fa-caret-down float-right"
                style="line-height: 22px"
              ></i>
            </a>
            <div class="dropdown-menu" :style="{display: serviceMenuShown ? 'block' : 'none'}">
              <a
                v-for="(item, index) in serviceTabs"
                :key="item"
                :class="['dropdown-item', {'current-item': activeServiceIndex === index}]"
                @click="() => serviceMenuClick(index)"
              >{{$t(item)}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="containerXL container-fluid relative" style="z-index: -1;">
        <div class="row items-center no-gutters">
          <!-- FlyKey -->
          <template v-if="activeServiceIndex === 0">
            <div class="col-md-5" data-aos="new-animation" data-aos-duration="1200">
              <div class="value-add-service__title">
                <h1 class="value-add-service__title">{{ $t("home.vas.flykey.title") }}</h1>
              </div>
              <div class="line"></div>
              <p class="service-info">{{ $t("home.vas.flykey.detail") }}</p>
              <ul class="service-features">
                <li>
                  <img src="~/assets/Value-Added Service/1.png" alt />
                  {{ $t("home.vas.flykey.f1") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/2.png" alt />
                  {{ $t("home.vas.flykey.f2") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/3.png" alt />
                  {{ $t("home.vas.flykey.f3") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/4.png" alt />
                  {{ $t("home.vas.flykey.f4") }}
                </li>
              </ul>
            </div>
            <div
              class="col-md-7 value-added-service__bg flykey float-right hidden md:block"
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
            <div class="col-md-5" data-aos="new-animation" data-aos-duration="1200">
              <div class="value-add-service__title">
                <h1>{{ $t("home.vas.flydesk.title") }}</h1>
              </div>
              <div class="line"></div>
              <p class="service-info">{{ $t("home.vas.flydesk.detail") }}</p>
              <ul class="service-features">
                <li>
                  <img src="~/assets/Value-Added Service/1.png" alt />
                  {{ $t("home.vas.flydesk.f1") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/2.png" alt />
                  {{ $t("home.vas.flydesk.f2") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/3.png" alt />
                  {{ $t("home.vas.flydesk.f3") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/4.png" alt />
                  {{ $t("home.vas.flydesk.f4") }}
                </li>
              </ul>
            </div>
            <div
              class="col-md-7 value-added-service__bg fly-desk hidden md:block"
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
            <div class="col-md-5" data-aos="new-animation" data-aos-duration="1200">
              <div class="value-add-service__title">
                <h1>{{ $t("home.vas.diagnosis.title") }}</h1>
              </div>
              <div class="line"></div>
              <p class="service-info">{{ $t("home.vas.diagnosis.detail") }}</p>
              <ul class="service-features">
                <li>
                  <img src="~/assets/Value-Added Service/1.png" alt />
                  {{ $t("home.vas.diagnosis.f1") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/2.png" alt />
                  {{ $t("home.vas.diagnosis.f2") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/3.png" alt />
                  {{ $t("home.vas.diagnosis.f3") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/4.png" alt />
                  {{ $t("home.vas.diagnosis.f4") }}
                </li>
              </ul>
            </div>
            <div
              class="col-md-7 value-added-service__bg hardware hidden md:block"
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
            <div class="col-md-5" data-aos="new-animation" data-aos-duration="1200">
              <div class="value-add-service__title">
                <h1>{{ $t("home.vas.geo_fencing.title") }}</h1>
              </div>
              <div class="line"></div>
              <p class="service-info">{{ $t("home.vas.geo_fencing.detail") }}</p>
              <ul class="service-features">
                <li>
                  <img src="~/assets/Value-Added Service/1.png" alt />
                  {{ $t("home.vas.geo_fencing.f1") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/2.png" alt />
                  {{ $t("home.vas.geo_fencing.f2") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/3.png" alt />
                  {{ $t("home.vas.geo_fencing.f3") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/4.png" alt />
                  {{ $t("home.vas.geo_fencing.f4") }}
                </li>
              </ul>
            </div>
            <div
              class="col-md-7 value-added-service__bg geo-fencing hidden md:block"
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
            <div class="col-md-5" data-aos="new-animation" data-aos-duration="1200">
              <div class="value-add-service__title">
                <h1>{{ $t("home.vas.pre_warning.title") }}</h1>
              </div>
              <div class="line"></div>
              <p class="service-info">{{ $t("home.vas.pre_warning.detail") }}</p>
              <ul class="service-features">
                <li>
                  <img src="~/assets/Value-Added Service/1.png" alt />
                  {{ $t("home.vas.pre_warning.f1") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/2.png" alt />
                  {{ $t("home.vas.pre_warning.f2") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/3.png" alt />
                  {{ $t("home.vas.pre_warning.f3") }}
                </li>
                <li>
                  <img src="~/assets/Value-Added Service/4.png" alt />
                  {{ $t("home.vas.pre_warning.f4") }}
                </li>
              </ul>
            </div>
            <div
              class="col-md-7 value-added-service__bg pre-warning hidden md:block"
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
          <div class="hidden md:block col-md-7 brand-store-left">
            <!-- <img src="~assets/macbook.png" alt class="mac-book w-full" /> -->
          </div>
          <div
            class="col-12 col-md-5 text-white text-center md:text-left"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h3 class="mb-10">{{ $t("home.appstore.title") }}</h3>
            <ul>
              <li class="mb-10">
                <img class="brand-store-icon" src="~assets/OwnBrandStore/icon-1.png" alt />
                {{ $t("home.appstore.f1") }}
              </li>
              <li class="mb-10">
                <img class="brand-store-icon" src="~assets/OwnBrandStore/icon-2.png" alt />
                {{ $t("home.appstore.f2") }}
              </li>
              <li class="mb-10">
                <img class="brand-store-icon" src="~assets/OwnBrandStore/icon-3.png" alt />
                {{ $t("home.appstore.f3") }}
              </li>
              <li>
                <img class="brand-store-icon" src="~assets/OwnBrandStore/icon-4.png" alt />
                {{ $t("home.appstore.f4") }}
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
import { computePosition, offset } from "@floating-ui/dom";

export default {
  data() {
    return {
      activeIndex: 0,
      activeServiceIndex: 0,
      terminalTabs: [
        "home.lifecycle.deployment.title",
        "home.lifecycle.multi_dimen.title",
        "home.lifecycle.software.title",
        "home.lifecycle.monitor.title",
        "home.lifecycle.diagnosis.title",
        "home.lifecycle.customization.title",
      ],
      serviceTabs: [
        "home.vas.flykey.title",
        "home.vas.flydesk.title",
        "home.vas.diagnosis.title",
        "home.vas.geo_fencing.title",
        "home.vas.pre_warning.title",
      ],
      mounted: false,
      lifeCycleMenuShown: false,
      serviceMenuShown: false,
    };
  },
  computed: {
    platformLocation() {
      if (this.$store.state.hasLogin) {
        let location = "";
        switch (this.$store.state.platform) {
          case "OPERATOR":
            location = process.env.VUE_APP_OPERATOR_ADDRESS;
            break;
          case "MANUFACTURER":
            location = process.env.VUE_APP_MANUFACTURER_ADDRESS;
            break;
          case "ADMIN":
            location = process.env.VUE_APP_ADMIN_ADDRESS;
            break;
        }
        return location;
      } else {
        return `/${this.$store.state.locale}/contact-us`;
      }
    },
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

    const button = document.querySelector(".dropdown-toggle");
    const tooltip = document.querySelector(".dropdown-menu");

    computePosition(button, tooltip);
  },
  methods: {
    toggleLifeCycleMenu() {
      this.lifeCycleMenuShown = !this.lifeCycleMenuShown;
    },
    toggleServiceMenu() {
      this.serviceMenuShown = !this.serviceMenuShown;
    },
    lifeCycleMenuClick(index) {
      this.lifeCycleMenuShown = false;
      this.activeIndex = index;
    },
    serviceMenuClick(index) {
      this.serviceMenuShown = false;
      this.activeServiceIndex = index;
    },
  },
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
  background-position: center;
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
    line-height: 40px;
    font-size: 2rem;
    margin-bottom: 40px;
    padding: 0px 20px;

    @screen sm {
      padding: 0;
      font-size: 2.5rem;
      line-height: 50px;
      /* font-size:  */
    }

    .header-toms {
      font-style: italic;
      font-weight: bold;
      font-size: 40px;
      @screen sm {
        font-size: 60px;
      }
    }
    /* text-transform: uppercase; */
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
    position: relative;
    z-index: 2;
    background-color: #f5faff;
  }

  &.brand-store {
    background-image: url("~assets/bg-2.png");
    background-size: cover;
    background-repeat: no-repeat;
    @screen md {
      padding: 150px 0;
    }
    .brand-store-left {
      background-image: url("~assets/macbook.png");
      height: 500px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    .brand-store-icon {
      margin: 0 auto;
      display: block;
      @screen md {
        display: inline-block;
        maring: 0;
      }
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

.dropdown {
  background: #1d1d1d;
  color: #ffffff;
  text-align: center;
  position: relative;
  .dropdown-menu {
    position: absolute;
    top: 55px;
    left: 0;
    margin-top: 7px;
    padding: 10px 0;
    border: none;
    width: 100%;
    background: #6c6c6c;
  }
  .dropdown-item {
    /* position: absolute; */
    padding: 10px;
    display: block;
    width: 100%;
    font-size: 14px;
    letter-spacing: 1px;
    &.current-item {
      color: #efc337;
    }
  }
  .btn {
    padding: 16px 20px;
    background: #1d1d1d;
    width: 100%;
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
  @screen md {
    min-height: 500px;
  }
  h3 {
    font-size: 18px;
  }
}

.value-add-service__title {
  @apply text-center md:text-left;
  h1 {
    display: inline-block;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 2px solid #2c7be5;
    font-size: 24px;
    @screen md {
      padding-bottom: 20px;
      font-size: 2.5rem;
    }
  }
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
</style>