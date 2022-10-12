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
      <!-- <div class="mt-8">
        <el-button type="primary" @click="handleEdit"> {{$t('login.edit_info')}}</el-button>
      </div> -->
    </div>
  </div>
</template>

<script>
import { getQueryParam } from "@/utils";

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
  methods:{
    handleEdit() {
      let characterCode = getQueryParam('characterCode')
      let token = getQueryParam('token')
      if (characterCode === 'DEV') {
        this.$router.push(`/resubmit-form-dev?token=${token}`);
      } else {
        this.$router.push(`/resubmit-form?token=${token}`);
      }
    }
  }
};
</script>

<style>
</style>