<template>
  <div>
    <NavBar fixed alwaysShow />
    <div
      class="
        flex
        items-center
        justify-center
        flex-col
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
      "
    >
      <img src="~assets/sign-in/clock-filling.png" width="128" class="mb-5" />
      <p class="text-2xl">{{ $t("login.under_verification") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async validate({ params, query, store, $axios }) {
    try {
        await $axios({
        url: "/online/authorization/operator/self",
        headers: {
          "WEB-TOKEN": query.token,
        },
      });
    } catch {
      return false;
    }    
    return true;
  },
};
</script>

<style>
</style>