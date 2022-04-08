<template>
  <div>
    <NavBar fixed alwaysShow />
    <div class="background-wrapper">
      <div class="h-full w-full flykey-background"></div>
    </div>
    <div class="container">
      <h1>Flykey Remoto Key Injection</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@use "../../../assets/css/mixin";

.flykey-background {
  @include mixin.background-cover;
  background-image: url("~assets/FLYKEY/01.png");
}
</style>