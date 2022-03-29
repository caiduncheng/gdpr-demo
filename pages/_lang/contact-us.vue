<template>
  <div>
    <div class="background">
      <NavBar />
      <div class="containerXL">
        <div class="row py-14 items-center">
          <div class="col-4 offset-md-3 mr-10">
            <div class="text-white mb-8 contact-title">
              <h3 class="mb-2">Contact Us</h3>
              <p class="text-xs">Get in touch with by completing the below form</p>
            </div>
            <el-card class="px-4">
              <el-form class="small">
                <el-form-item label="Email address">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Full name">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Character">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Country / Region">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Company">
                  <el-input></el-input>
                </el-form-item>

                <el-form-item label="Industry">
                  <el-input></el-input>
                </el-form-item>

                <el-form-item label="Message">
                  <el-input type="textarea" rows="5"></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="text-center">
                    <el-button type="primary">Send Message</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </el-card>
          </div>
          <div class="col-3">
            <h3 class="mb-5">Contact Us</h3>
            <div class="contact-info">
              <address class="mb-5 flex">
                <i class="fa fa-map-marker" style="margin-right: 12px"></i>
                Science & Technology Park, No.1 Rujiang Xi Rd., Mawei Dist., Fuzhou 350015, Fujian, China
              </address>
              <div class="mb-5 flex">
                <i class="fa fa-envelope-o mr-2"></i>
                <a href="javacsript:;" class="mail-link">
                  <span>TOMS-support@newlandnpt.com</span>
                </a>
              </div>
              <div class="flex">
                <i class="fa fa-phone mr-2"></i>
                +86(591) 83979921
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "~assets/css/mixin";
.background {
  background-image: linear-gradient(352deg, #ffffff 59%, transparent 60%),
    url("~assets/bg-4.png");
  @include mixin.background-cover;
  position: relative;
}

.contact-title {
  /* letter-spacing: 1px; */
}

.contact-info {
  line-height: 1.2;
  color: #6e84a3;
}
</style>