<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3 offset-md-3">
          <div class="footer-info">
            <div class="flex items-center mb-5">
              <div class="divider"></div>
              <h4>Social</h4>
            </div>
            <div class="pl-3">
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
          </div>
        </div>
        <div class="col-md-6">
          <div class="footer-info">
            <div class="flex items-center mb-5">
              <div class="divider"></div>
              <h4>Contact Toms</h4>
            </div>
            <div>
              <address>
                <span class="label">Address:</span>Newland Science & Technology Park, NO.1 Rujiang Xi Rd.,
                <br />
                <span style="padding-left: 83px;">Mawei Dist., Fuzhou 350015, Fujian China</span>
              </address>
              <div>
                <span class="label">Phone:</span>
                <span style="padding-left: 10px">+86 591 83979622</span>
              </div>
              <div>
                <address>
                  <span class="label">Email:</span>
                  <a href="javacsript:;" class="mail-link">
                    <span style="padding-left: 20px;">TOMS-support@newlandnpt.com</span>
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
        <div class="col-md-4 offset-md-2">
          <ul class="links">
            <li>
              <NuxtLink
                :to="{ name: 'lang-privacy-privacy-policy', params: { lang: $store.state.locale } }"
              >Privacy Policy</NuxtLink>-
            </li>
            <li>
              <NuxtLink
                :to="{ name: 'lang-privacy-terms', params: { lang: $store.state.locale } }"
              >Terms & Conditions</NuxtLink>-
            </li>
            <li>
              <NuxtLink
                :to="{ name: 'lang-privacy-cookies', params: { lang: $store.state.locale } }"
              >Cookies Policy</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <span
            class="links"
          >Copyright © 2021 Newland Payment Technology(newlandnpt.com). All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  color: #ffffff;
  font-size: 14px;
  /* background: #283041; */
  background: #201f1d;
  padding: 80px 0 30px;
  hr {
    border-top: 1px solid #5a5959;
    margin: 90px 0 40px;
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
  h4 {
    text-transform: uppercase;
    font-weight: 400;
  }
}
</style>