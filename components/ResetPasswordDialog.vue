<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" @closed="handleClose" width="40%">
    <div v-if="!success">
      <el-form
        class="w-4/5 m-auto"
        :model="form"
        ref="form"
        :rules="rules"
        @submit.prevent.native="submit"
      >
        <el-form-item prop="email">
          <el-input v-model="form.email" :placeholder="$t('home.enter_email_placeholder')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit" type="primary" class="w-full" :loading="loading">Confirm</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-else class="w-4/5 m-auto">
      <p class="py-4" v-html="$t('login.email_to_reset_password_tip', {email: form.email})"></p>
      <el-button class="w-full" type="primary" @click="handleClose">Confrim</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      success: false,
      loading: false,
      form: {
        email: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Email is required",
          },
          {
            type: "email",
            message: this.$t("home.invalid_email_format"),
          },
          {
            max: 64,
            message: "The max length of email is 64.",
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
              this.success = true;
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