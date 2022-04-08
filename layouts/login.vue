<template>
  <div class="background">
    <NavBar />
    <Nuxt />
    <div class="login-footer">
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
                href="https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText=newlandnpt"
                target="_blank"
              >
                <img src="~assets/sign-in/6.png" alt />
              </a>
            </div>
            <p
              class="text-gray text-xs"
            >Copyright 2021 Newland Payment Technology(newlandnpt.com). All rights reserved. ICP 15018196-2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

.login-footer {
  background: #f8f9fb;
  padding: 20px 0;
  /* position: absolute; */
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
}
</style>


