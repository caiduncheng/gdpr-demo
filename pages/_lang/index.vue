<template>
  <div>
    <div id="headerIndex">
      <div class="background-wrapper">
        <div class="h-full w-full background"></div>
      </div>
      <div class="header-content">
        <NavBar />
      </div>
      <div class="container">
        <div class="header-info w-2/4">
          <h1>The TOMS platform was born for terminal lifecycle management</h1>
          <p>
            Reduce manpower investment,improve management efficiency and
            <br />reduce operating costs.
          </p>
          <a class="start-button btn">
            <span>Start Now</span>
          </a>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="container container-fluid">
        <div class="section-title">
          <div class="text-center">
            <h2>Terminal Lifecycle Management</h2>
          </div>
        </div>

        <div class="tabs">
          <div class="tab active">Zero-touch Deployment</div>
          <div class="tab">Multi-dimensional</div>
          <div class="tab">Software</div>
          <div class="tab">Device Monitoring</div>
          <div class="tab">Remote Diagnosis</div>
          <div class="tab">Customization</div>
        </div>
      </div>
      <div class="containerXL container-fluid">
        <div class="row tab-content justify-between items-center">
          <div class="col-md-6">
            <img src="~assets/Zero-touchDeployment.png" class="w-4/5" alt />
          </div>
          <div class="col-md-6">
            <div class="row mb-3">
              <div class="col-6">
                <img src="~assets/img-1.png" alt class="mb-2" />
                <div>
                  <h3 class="mb-2">Out of the box</h3>
                  <p
                    class="pr-2"
                  >The TOMS Client is pre-installed at the factory, access the TOMS platform instantly when booted.</p>
                </div>
              </div>
              <div class="col-6">
                <img src="~assets/img-2.png" alt class="mb-2" />
                <h3 class="mb-2">Deployment in Batches</h3>
                <p
                  class="pr-2"
                >The device can bind the Installation Template in batches,this sets up the pre-installation environment to reduce repetitive labor.</p>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-6">
                <img src="~assets/img-3.png" alt class="mb-2" />
                <h3 class="mb-2">Auto Pre-install</h3>
                <p class="pr-2">Automatic Template Installation, rapid and efficient deployment.</p>
              </div>
              <div class="col-6">
                <img src="~assets/img-4.png" alt class="mb-2" />
                <h3 class="mb-2">Zero-touch Transfer</h3>
                <p
                  class="pr-2"
                >Can be allocated before deployment, making management one step faster.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section value-add-service">
      <div class="container container-fluid">
        <div class="section-title">
          <div class="text-center">
            <h2>Value-Added Service</h2>
          </div>
        </div>
        <div class="tabs">
          <div class="tab active">Flykey</div>
          <div class="tab">FlyDesk</div>
          <div class="tab">Hardware Diagnostics</div>
          <div class="tab">Geo-fencing</div>
          <div class="tab">Pre-warning</div>
        </div>
      </div>
      <div class="containerXL container-fluid">
        <div class="row items-center no-gutters">
          <div class="col-md-5">
            <h1 class="value-add-service__title">Flykey</h1>
            <p
              class="service-info"
            >Integrate FlyKey management portal onto TOMS. FlyKey is a remote key injection tool. Certified PCI-PIN3.0 secure.Remote key injection can be used for remote key filling and updating of POS terminals without door-to-door filling, which is flexible and fast and reduces labor cost.</p>
            <ul class="service-features">
              <li>
                <img src="~/assets/Value-Added Service/1.png" alt />
                Safe & Reliable
              </li>
              <li>
                <img src="~/assets/Value-Added Service/2.png" alt />
                Flexible & Fast
              </li>
              <li>
                <img src="~/assets/Value-Added Service/3.png" alt />
                Reduce Manpower
              </li>
              <li>
                <img src="~/assets/Value-Added Service/4.png" alt />
                Repeated Injection
              </li>
            </ul>
          </div>
          <div class="col-md-7">
            <img src="~assets/Value-Added Service/FlyDesk/7.png" alt class="w-full" />
          </div>
        </div>
      </div>
    </section>

    <section class="section brand-store">
      <div class="w-full">
        <div class="row no-gutters items-center">
          <div class="col-md-7">
            <img src="~assets/macbook.png" alt class="mac-book w-full" />
          </div>
          <div class="col-md-5 text-white">
            <h3 class="mb-4">Own Brand Store</h3>
            <ul>
              <li class="mb-5">
                <img src="~assets/OwnBrandStore/icon-1.png" alt />
                Private application store
              </li>
              <li class="mb-5">
                <img src="~assets/OwnBrandStore/icon-2.png" alt />
                Control application content by yourself
              </li>
              <li class="mb-5">
                <img src="~assets/OwnBrandStore/icon-3.png" alt />
                Free to build application
              </li>
              <li>
                <img src="~assets/OwnBrandStore/icon-4.png" alt />
                Flexible choice and more focus on industry
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../assets/css/mixin";

#headerIndex {
  height: auto;
  min-height: 100vh;
  position: relative;
}
.start-button {
  width: 200px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  span {
    position: relative;
    font-size: 14px;
    z-index: 2;
    vertical-align: middle;
  }
  @include mixin.btn-animated(#3982e9, #1d1d1d);
}
.background {
  background-image: url("~assets/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.header-content {
  position: relative;
}
.header-info {
  color: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0 auto;
  & > h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    line-height: 50px;
  }

  & > p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    /* padding: 0 100px; */
    margin-bottom: 40px;
  }
}

.section {
  /* background: #f4f4f4; */
  .section-title {
    margin-bottom: 50px;
  }
  &.value-add-service {
    background-color: #f5faff;
  }

  &.brand-store {
    background-image: url("~assets/bg-2.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.tabs {
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  .tab {
    color: #6c6c6c;
    &.active {
      color: #000000;
    }
  }
}

.tab-content {
  h3 {
    font-size: 18px;
  }
}

.value-add-service__title {
  font-size: 2.5rem;
}

.service-info,
.service-features {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.service-info {
  margin-bottom: 20px;
  line-height: 2;
}

.service-features {
  li {
    margin-bottom: 10px;
  }
}

.mac-book {
  /* transform: translateX(-300px); */
}
</style>