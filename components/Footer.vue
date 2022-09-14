<template>
  <footer v-if="VUE_APP_NEWLAND_INFO == '1'" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 offset-lg-3 mb-5 lg:mb-0">
          <div class="footer-info">
            <div class="flex items-center mb-5 justify-center lg:justify-start">
              <div class="divider"></div>
              <h4>{{ $t("common.social") }}</h4>
            </div>
            <div class="pl-3">
              <a href="https://www.newlandnpt.com/" target="_blank">
                <img class="mr-2" src="~assets/footer/newland.png" alt />
              </a>

              <a href="https://www.linkedin.cn/injobs" target="_blank">
                <img class="mr-2" src="~assets/footer/linkedin.png" alt />
              </a>

              <a
                href="https://www.youtube.com/channel/UCrvhI9uCspr2H1otSvNpxvg"
                target="_blank"
              >
                <img src="~assets/footer/youtube.png" alt />
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="footer-info">
            <div class="flex items-center mb-5 justify-center lg:justify-start">
              <div class="divider"></div>
              <h4>{{ $t("common.contact_toms") }}</h4>
            </div>
            <div>
              <address>
                <span
                  class="label fix-width"
                  style="vertical-align: top;"
                >{{ $t("common.address") }}</span>
                <p style="display: inline-block">
                  <span>{{ $t("common.address1") }}</span>
                  <br />
                  <span>{{ $t("common.address2") }}</span>
                </p>
              </address>
              <div>
                <span class="label fix-width">{{ $t("common.phone") }}</span>
                <span>
                  {{
                  $t("common.phone1")
                  }}
                </span>
              </div>
              <div>
                <address>
                  <span class="label fix-width">{{ $t("common.email") }}</span>
                  <a href="javacsript:;" class="mail-link">
                    <span>
                      {{
                      $t("common.email1")
                      }}
                    </span>
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <hr />
    </div>
    <div class="containerXL container-fluid">
      <div class="row">
        <div class="col-lg-4 offset-lg-2">
          <ul class="links">
            <li>
              <NuxtLink
                :to="{
                  name: 'lang-privacy-privacy-policy',
                  params: { lang: $store.state.locale },
                }"
              >Privacy Policy</NuxtLink>-
            </li>
            <li>
              <NuxtLink
                :to="{
                  name: 'lang-privacy-terms',
                  params: { lang: $store.state.locale },
                }"
              >Terms & Conditions</NuxtLink>-
            </li>
            <li>
              <NuxtLink
                :to="{
                  name: 'lang-privacy-cookies',
                  params: { lang: $store.state.locale },
                }"
              >Cookies Policy</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <span class="links">
            Copyright © 2021 Newland Payment Technology(newlandnpt.com). All
            rights reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      VUE_APP_NEWLAND_INFO : process.env.VUE_APP_NEWLAND_INFO,
    }
  }
};
</script>

<style lang="scss">
.footer {
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  /* background: #283041; */
  background: #201f1d;
  padding: 80px 0 30px;
  hr {
    border-top: 1px solid #5a5959;
    margin: 40px 0;
    @screen lg {
      margin: 90px 0 40px;
    }
  }
  .links {
    color: #7b7b7b;
    li {
      display: inline-block;
    }
    a {
      transition: 0.3s ease-in-out;
      &:hover {
        color: #ffffff;
      }
    }
  }
  @screen lg {
    text-align: left;
  }
}

.divider {
  display: table;
  height: 18px;
  border-left: 2px solid #ffffff;
  margin-right: 20px;
}

.footer-info {
  .label {
    color: #7b7b7b;
    text-transform: uppercase;
    margin-right: 14px;
  }
  .fix-width {
    display: none;
    @screen md {
      display: inline-block;
      width: 4.2em;
    }
  }
  h4 {
    text-transform: uppercase;
    font-weight: 400;
  }
}
</style>