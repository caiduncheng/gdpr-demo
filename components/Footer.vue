<template>
  <footer v-if="VUE_APP_NEWLAND_INFO == '1'" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-10 lg:mb-0">
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
              <p>
                <span class="label fix-width">{{ $t("common.phone") }}</span>
                <span>
                  {{
                  $t("common.phone1")
                  }}
                </span>
              </p>
              <p>
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
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="footer-info pci">
            <div class="flex items-center mb-5 justify-center lg:justify-start">
              <div class="divider"></div>
              <h4>TOMS IS NOW PCI DSS CERTIFIED</h4>
            </div>
            <nuxt-link  :to="{
                  name: 'lang-pci-pci',
                  params: { lang: $store.state.locale },
                }" >
              <img src="~assets/PCI/4.png" alt class="mb-2 mr-10" />
            </nuxt-link>
            <div class="divider-pci">
            </div>
            <nuxt-link :to="{
                  name: 'lang-pci-pci-dss',
                  params: { lang: $store.state.locale },
                }">
              <img src="~assets/PCI/10.png" alt class="mb-2" />
            </nuxt-link>
            <p>TOMS passed the relevant certification of PCI DSS.</p>
          </div>
        </div>  
      </div>
    </div>
    <div class="w-full">
      <hr />
    </div>
    <div class="containerXL container-fluid">
      <div class="row">
        <div class="col-12 offset-lg-1 col-lg-5 pl-3">
          <a href="https://www.newlandnpt.com/" target="_blank">
            <img class="mr-2" src="~assets/footer/newland.png" alt />
          </a>

          <a href="https://www.linkedin.cn/injobs" target="_blank">
            <img class="mr-2" src="~assets/footer/linkedin.png" alt />
          </a>

          <a
            href="https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText=newlandnpt"
            target="_blank"
          >
            <img src="~assets/footer/alibaba.png" alt />
          </a>
        </div>
        <div class="col-12 col-lg-6 lg:text-right text-center">
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
          <span class="links">
            Copyright © 2021-2022 Newland Payment Technology(newlandnpt.com). All
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
      VUE_APP_NEWLAND_INFO: process.env.VUE_APP_NEWLAND_INFO,
    };
  },
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
  p {
    line-height: 1.5;
  }
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
  &.pci {
    .divider-pci {         
      position: absolute;
      width: 1px;
      height: 36px;
      /* right: -20px; */
      top: 50%;
      transform: translateY(-13px);
      background-color: #556685;
      left: 270px;
      display: none;
      @screen xl {
        display: block;
      }
    }
    h4 {
      color: #ff7e00;
    }
    .divider {
      border-color: #ff7e00;
    }
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