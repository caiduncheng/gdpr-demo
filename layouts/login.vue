<template>
  <div class="background">
    <NavBar />
    <Nuxt class="nuxt-container"/>
    <div class="login-footer" v-if="VUE_APP_NEWLAND_INFO == '1'">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="mb-3">
              <a href="https://www.newlandnpt.com/" target="_blank">
                <img class="mr-2" src="~assets/sign-in/4.png" alt />
              </a>

              <a href="https://www.linkedin.cn/injobs" target="_blank">
                <img class="mr-2" src="~assets/sign-in/5.png" alt />
              </a>

              <a
                href="https://www.youtube.com/channel/UCrvhI9uCspr2H1otSvNpxvg"
                target="_blank"
              >
                <img src="~assets/sign-in/youtube.png" alt />
              </a>
            </div>
            <p
              class="text-gray text-xs"
            >Copyright 2021 Newland Payment Technology(newlandnpt.com). All rights reserved. ICP 15018196-2</p>
          </div>
        </div>
      </div>
    </div>
    <Cookie />
    <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/27053303.js"></script>
  </div>
</template>

<script>
export default {
  data() {
    return {
      VUE_APP_NEWLAND_INFO: process.env.VUE_APP_NEWLAND_INFO,
    }
  }
};
</script>

<style lang="scss" scoped>
@use "~assets/css/mixin";
@use "~assets/css/variables";
.background {
  background-image: url("~assets/sign-in/bg.png");
  @include mixin.background-cover;
  min-height: 100vh;
  position: relative;
}

.nuxt-container {
  min-height: calc(100vh - 252px);

}

.login-footer {
  background: #f8f9fb;
  padding: 20px 0;
  bottom: 0;
  width: 100%;
  z-index: 2;
  margin-top: 48px;
}
</style>


