<template>
  <div class="developer">
    <NavBar fixed alwaysShow />
    <div class="developer-main">
      <div class="developer-header">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h1 class="mb-5">App Release</h1>
              <p
                class="developer-intro"
              >TOMS App Store empowers developers to distribute their applications, allowing applications to be quickly distributed to millions of POS terminals around the world.</p>
              <button class="price-button">
                <div class="flex items-center">
                  <div class="text-left mr-3">
                    <p>The promotion period is</p>
                    <p style="text-decoration: line-through">The registration fee is 25$</p>
                  </div>
                  <span class="text-5xl">Free</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="developer-tabs">
        <div class="container">
          <ul>
            <li>
              <a v-scroll-to="{element: '#Flykey', offset: -200}">App Store</a>
            </li>
            <li>
              <a v-scroll-to="{element: '#Features', offset: -200}">Operation Process</a>
            </li>
            <li>
              <a v-scroll-to="{element: '#Functionality', offset: -200}">Service & Support</a>
            </li>
          </ul>
        </div>
      </div>
      <section class="app-store section">
        <div class="container">
          <div class="row items-center">
            <div class="col-5">
              <h1 class="app-store__title">App Store</h1>
              <p
                class="app-store__intro"
              >TOMS Appstore is aimed at Newland devices distributed in various countries around the world . Device users around the world can use TOMS App Store to download various applications to meet their daily business needs.</p>
            </div>
            <div class="offset-1 col-6">
              <img class="w-full" src="~assets/NDP/app-store.png" alt="app-store" />
            </div>
          </div>
        </div>
      </section>
      <section class="operation-process section">
        <div class="container">
          <h1 class="text-center operation-process__title">Operation Process</h1>
          <div class="row">
            <div class="col-12">
              <div class="process-card process-card--register">
                <div class="process-card__header">Register & Login</div>
                <div class="process-card__body">Register and login to the developer platform</div>
              </div>

              <div class="process-card process-card--register">
                <div class="process-card__header">Register & Login</div>
                <div class="process-card__body">Register and login to the developer platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../assets/css/mixin";

$register: #d9534f;

.developer {
  .developer-main {
    margin-top: 90px;
  }
  .developer-header {
    padding: 100px 0;
    color: white;
    @include mixin.background-cover;
    min-height: 800px;
    background-image: url("assets/NDP/background.png");
    .developer-intro {
      line-height: 2;
      margin-bottom: 60px;
    }
    .price-button {
      background-color: #5cb478;
      padding: 15px 33px;
      border-radius: 6px;
      color: #ffffff;
    }
  }
  .developer-tabs {
    /* position: sticky;
    top: 90px; */
    z-index: 1;
    background-color: #ffffff;
    padding: 40px 0px;
    @apply hidden md:block;

    ul {
      display: flex;
      flex-direction: column;
      li {
        text-align: center;
      }
      @screen md {
        flex-direction: row;
      }
      font-size: 24px;
      justify-content: space-between;
      a:hover {
        color: #3e80e5;
      }
    }
  }
  .section {
    padding: 80px;
  }
  .app-store {
    &__title {
      font-size: 45px;
      margin-bottom: 30px;
    }
    &__intro {
      line-height: 2;
      color: #666666;
    }
  }

  .operation-process {
    &__title {
      font-size: 45px;
      margin-bottom: 50px;
    }

    .process-card {
      width: 20%;
      border-style: solid;
      &__header {
        text-align: center;
        padding: 5px 0;
        color: #ffffff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      &__body {
        border-width: 1px;
        border-style: solid;
        height: 200px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &--register {
        border-color: #d9534f;
        .process-card__header {
          background: #d9534f;
        }
        .process-card__body {
          padding: 20px;
          font-size: 12px;
          text-align: center;
          color: #d9534f;
          border-color: #d9534f;
        }
      }
    }
  }
}
</style>