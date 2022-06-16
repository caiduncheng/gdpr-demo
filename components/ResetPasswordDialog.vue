<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" @closed="handleClose">
    <div v-if="!success">
      <el-form
        class="w-4/5 m-auto"
        :model="form"
        ref="form"
        :rules="rules"
        @submit.prevent.native="submit"
      >
        <el-form-item prop="email">
          <el-input v-model="form.email" :placeholder="$t('login.enter_email_placeholder')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            native-type="submit"
            type="primary"
            class="w-full"
            :loading="loading"
          >{{$t('common.confirm')}}</el-button>
          <div class="text-center error-message" v-if="errorMessage">{{errorMessage}}</div>
        </el-form-item>
      </el-form>
    </div>
    <div v-else class="w-4/5 m-auto">
      <p class="py-4" v-html="$t('login.email_to_reset_password_tip', {email: form.email})"></p>
      <el-button class="w-full" type="primary" @click="handleClose">{{$t('common.confirm')}}</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      success: false,
      loading: false,
      errorMessage: "",
      form: {
        email: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: this.$t("login.email_required"),
          },
          {
            type: "email",
            message: this.$t("login.invalid_email_format"),
          },
          {
            max: 64,
            message: this.$t("login.invalid_email_length"),
          },
        ],
      },
    };
  },
  methods: {
    handleClose() {
      this.success = false;
      this.$nextTick(() => {
        this.$refs.form.resetFields();
      });
      this.errorMessage = "";
      this.$emit("update:visible", false);
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("sendResetEmail", {
              username: this.form.email,
              email: this.form.email,
            })
            .then(() => {
              this.$refs.form.resetFields();
              this.success = true;
            })
            .catch((error) => {
              this.errorMessage = error;
            })
            .finally(() => {
              this.loading = false;
            });
        }
      });
    },
  },
};
</script>

<style>
</style>