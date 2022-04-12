<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" @closed="handleClose" width="40%">
    <div class="text-center">
      <p class="text-lg mb-5">Are you sure you want to exit?</p>
      <el-button type="primary" style="width: 400px;" @click="confirm">{{$t('common.confirm')}}</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
    confirm() {
      this.$store.dispatch("logout").then(() => {
        this.$store.commit("REMOVE_TOKEN");
        this.handleClose();
      });
    },
  },
};
</script>

<style>
</style>