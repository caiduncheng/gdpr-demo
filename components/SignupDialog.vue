<template>
  <div class="sign-up-dialog">
    <el-dialog v-bind="$attrs" v-on="$listeners" @closed="handleClose">
      <div v-show="!success">
        <div class="text-center mb-6">
          <div class="text-lg m-auto">
            <p style="word-break: break-word" v-html="$t('login.enter_email_tip')"></p>
          </div>
        </div>
        <el-form
          class="w-4/5 m-auto"
          :model="formData"
          :rules="rules"
          ref="form"
          @submit.prevent.native="submit"
        >
          <el-form-item prop="email">
            <el-input
              @keyup.enter="submit"
              class="email-collect-input"
              :placeholder="$t('login.enter_email_placeholder')"
              :maxlength="64"
              style
              v-model="formData.email"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              native-type="submit"
              type="primary"
              class="w-full"
              :loading="loading"
            >{{ $t('common.confirm') }}</el-button>
            <div class="text-center error-message break-normal" v-if="errorMessage">
              <div v-if="errorMessage.code == '1301'">
                {{errorMessage.message}}
                <el-button v-if="$route.path.includes('/login')" type="text" @click="handleSign">{{$t('login.click_here_signin')}}</el-button>
              </div>
              <div v-else>
                {{errorMessage.message}}
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div v-show="success">
        <div class="text-center">
          <el-result icon="success" class="email-result">
            <h2 slot="title" class="text-3xl">{{ $t('login.congratulations') }}</h2>
            <h2
              slot="subTitle"
              class="text-2xl"
              style="word-break: break-word"
            >{{ $t('login.email_sent_successfully') }}</h2>
          </el-result>
          <el-button type="primary" class="w-full" @click="handleClose">{{ $t('common.confirm') }}</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      success: false,
      loading: false,
      errorMessage: "",
      formData: {
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
    handleSign() {
      this.$emit('login',this.formData.email)
      this.handleClose()
    },
    handleClose() {
      this.success = false;
      this.errorMessage = "";

      this.$refs.form.resetFields();
      this.$emit("update:visible", false);
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("sendEmail", this.formData.email)
            .then(() => {
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

<style lang="scss">
.sign-up-dialog {
}
</style>

<style lang="scss" scoped>
.email-collect-input {
  input {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    padding: 1.2em 0.2em;
  }
}

.email-result.el-result {
  padding: 0;
  margin-bottom: 40px;
}
</style>