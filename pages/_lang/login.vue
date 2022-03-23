<template>
  <div>
    <div class="background-wrapper">
      <div class="h-full w-full background"></div>
    </div>
    <NavBar />
    <div class="container">
      <div class="row login py-40">
        <div class="col-8">
          <h1 class="text-white mb-3">Welcome!</h1>
          <p class="text-white text-3xl">Abandon the complexity / Embrace the world.</p>
        </div>
        <div class="col-4">
          <div class="login-form">
            <div class="login-form__header">Sign in</div>
            <div class="login-form__body">
              <p
                class="text-xs text-gray"
              >Sign in to your account using email and password provided during registration</p>
            </div>
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
.background {
  background-image: url("~assets/sign-in/bg.png");
  @include mixin.background-cover;
}

.welcome {
  color: #ffffff;
}

.login-form {
  border-radius: 5px;
}

.login-form__header {
  background-color: #283041;
}

.login-form__body {
  background: #ffffff;
}
</style>