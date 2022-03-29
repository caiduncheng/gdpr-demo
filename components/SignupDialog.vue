<template>
  <div class="sign-up-dialog">
    <el-dialog v-bind="$attrs" v-on="$listeners" @closed="handleClose" width="30%">
      <div class="text-center mb-6">
        <div class="text-lg m-auto">
          <p style="word-break: break-word">{{ $t('home.enter_email_tip') }}</p>
        </div>
      </div>
      <el-form class="w-4/5 m-auto" :model="formData" :rules="rules" ref="form">
        <el-form-item prop="email">
          <el-input
            @keyup.enter="submit"
            class="email-collect-input"
            :placeholder="$t('home.enter_email_placeholder')"
            :maxlength="64"
            style
            v-model="formData.email"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="w-full"
            :loading="loading"
            @click="submit"
          >{{ $t('common.confirm') }}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      step: 1,
      formData: {
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
      this.$refs.form.resetFields();
      this.step = 1;
      this.$emit("update:visible", false);
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("sendEmail", this.formData.email)
            .then(() => {
              this.step = 2;
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

<style lang="scss" scoped>
.email-collect-input {
  input {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    padding: 1.2em 0.2em;
  }
}
</style>