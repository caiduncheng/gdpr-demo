<template>
  <div>
    <div class="background">
      <NavBar />
      <div class="containerXL container-fluid">
        <div class="row py-14 justify-center">
          <div class="col-md-6">
            <div class="text-white mb-8 contact-title">
              <h3 class="mb-2">Information</h3>
              <p class="text-xs">Please fill in your information</p>
            </div>
            <el-card>
              <el-form class="small">
                <el-form-item label="Login e-mail">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Company name">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Contact">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Country / Region">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Address">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="UTC Time">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Language">
                  <el-input></el-input>
                </el-form-item>
                <hr class="my-6" />
                <el-form-item label="CSR" required prop="file">
                  <div style="display: flex; align-items: flex-start">
                    <el-upload
                      style="float: left; margin-right: 30px"
                      action="#"
                      :file-list="fileList"
                      :auto-upload="false"
                      :limit="1"
                      :on-change="handleChange"
                      :on-remove="handleRemove"
                      :class="{hide: uploadDisabled}"
                      class="upload"
                    >
                      <el-button size="small" type="primary">{{ $t('login.upload') }}</el-button>
                    </el-upload>
                    <div class="upload-hint">
                      <p>
                        {{ $t('login.upload_tip1') }}
                        {{ $t('login.upload_tip2') }}
                      </p>
                      <p>{{ $t('login.upload_tip3') }}</p>
                    </div>
                  </div>
                </el-form-item>
                <hr class="my-6" />
                <el-form-item label="Password">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Confirm Password">
                  <el-input></el-input>
                </el-form-item>
                <hr class="my-6" />
                <el-form-item class="text-center">
                  <el-button type="primary">Submit</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      uploadDisabled: false,
    };
  },
  methods: {
    handleChange() {},
    handleRemove() {},
  },
};
</script>

<style lang="scss" scoped>
@use "~assets/css/mixin";
.background {
  background-image: linear-gradient(180deg, transparent 60%, #ffffff 59%),
    url("~assets/bg-4.png");
  @include mixin.background-cover;
  position: relative;
}

.upload-hint {
  float: left;
  line-height: 1.5;
  width: 500px;
  padding-left: 50px;
  display: inline-block;
  color: #999999;
  font-size: 14px;
}
.upload-hint > p {
  margin: 0;
  display: inline-block;
}
</style>