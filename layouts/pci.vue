<template>
  <div>
    <NavBar fixed alwaysShow />
    <div class="container pci-main containerXL">
      <el-row>
        <el-col :span="4" class="hidden lg:block">
          <div class="contents__col-inner">
            <div class="contents__col-item">
              <div class="contents-wrap" ref="list">
                <ol class="pci-contents">
                  <li
                    v-for="(i, index) in titles"
                    :key="index"
                    class="content-item"
                    :class="{last: index === 3}"
                  >
                    <button
                      type="button"
                      :class="['contents-button', {active: activeIndex === index}]"
                      :data-index="index"
                      @click="() => onClick(i)"
                    >{{i.title}}</button>
                  </li>
                  <span class="contents__line" :style="{top: topPosition}"></span>
                </ol>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :md="24" :lg="20">
          <Nuxt />
          <div class="py-5 text-center lg:text-left lg:w-4/5">
            <h3>{{$t('pci.layout.related_articles')}}</h3>

            <div class="flex flex-col lg:flex-row">
              <div class="flex-1 flex flex-col" v-show="!/^(lang-)?pci-pci$/.test($route.name)">
                <nuxt-link :to="{name: 'lang-pci-pci', params: { lang: $store.state.locale }}">
                  <img src="~assets/PCI/1.png" class="mr-3 mb-3" />
                </nuxt-link>
                <div class="px-2">
                  <h4 class="mb-2">PCI</h4>
                  <p>{{$t('pci.layout.pci')}}</p>
                </div>
              </div>

              <div class="flex-1" v-show="!$route.path.includes('/pci/pci-dss')">
                <nuxt-link :to="{name: 'lang-pci-pci-dss', params: { lang: $store.state.locale }}">
                  <img src="~assets/PCI/2.png" class="mr-3 mb-3" />
                </nuxt-link>
                <div class="px-2">
                  <h4 class="mb-2">PCI DSS</h4>
                  <p>{{$t('pci.layout.pci_dss')}}</p>
                </div>
              </div>

              <div class="flex-1" v-show="!$route.path.includes('/pci/pci-p2pe')">
                <nuxt-link :to="{name: 'lang-pci-pci-p2pe', params: { lang: $store.state.locale }}">
                  <img src="~assets/PCI/3.png" class="mr-3 mb-3" />
                </nuxt-link>
                <div class="px-2">
                  <h4 class="mb-2">PCI P2PE</h4>
                  <p>{{$t('pci.layout.pci_p2pe')}}</p>
                </div>
              </div>

              <div class="flex-1" v-show="!$route.path.includes('/pci/pci-pin')">
                <nuxt-link :to="{name: 'lang-pci-pci-pin', params: { lang: $store.state.locale }}">
                  <img src="~assets/PCI/11.png" class="mr-3 mb-3" />
                </nuxt-link>
                <div class="px-2">
                  <h4 class="mb-2">PCI PIN</h4>
                  <p>{{$t('pci.layout.pci_pin')}}</p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        {
          id: 0,
          title: "PCI",
          path: "/pci/pci",
        },
        {
          id: 1,
          title: "PCI DSS",
          path: "/pci/pci-dss",
        },
        {
          id: 2,
          title: "PCI PIN",
          path: "/pci/pci-pin",
        },
        {
          id: 3,
          title: "PCI P2PE",
          path: "/pci/pci-p2pe",
        },
      ],
    };
  },
  computed: {
    activeIndex() {
      const paths = {
        "/pci/pci": 0,
        "/pci/pci-dss": 1,
        "/pci/pci-pin": 2,
        "/pci/pci-p2pe": 3,
        "/zh-CN/pci/pci": 0,
        "/zh-CN/pci/pci-dss": 1,
        "/zh-CN/pci/pci-pin": 2,
        "/zh-CN/pci/pci-p2pe": 3,
      };
      return paths[this.$route.path];
    },
    topPosition() {
      const positions = {
        "/pci/pci": 0,
        "/pci/pci-dss": 45,
        "/pci/pci-pin": 95,
        "/pci/pci-p2pe": 144,
        "/zh-CN/pci/pci": 0,
        "/zh-CN/pci/pci-dss": 45,
        "/zh-CN/pci/pci-pin": 95,
        "/zh-CN/pci/pci-p2pe": 144,
      };
      return positions[this.$route.path] + "px";
    },
  },
  methods: {
    onClick(item) {
      this.$router.push("/" + this.$i18n.locale + item.path);
    },
  },
};
</script>

<style lang="scss">
.pci-main {
  font-family: museo-sans, Arial, sans-serif;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  @screen sm {
    padding-left: 0;
    padding-right: 0;
  }
  margin-top: 90px;
  .badge {
    background-color: #f1f3f5;
    border-radius: 20px;
    padding: 10px 25px;
    font-size: 14px;
    color: #1d2b36;
    display: inline-block;
    margin-left: 0;
    @screen lg {
      margin-left: 20px;
    }
  }
  .chapter {
    margin-bottom: 40px;
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    font-size: 45px;
    @screen lg {
      text-align: left;
      flex-direction: row;
    }
    flex-direction: column;
    text-align: center;
  }
  p {
    font-size: 1rem;
  }
  p,
  ul {
    line-height: 2;
  }
  ul {
    margin-left: 20px;
  }
  li {
    margin-bottom: 30px;
  }
  h3 {
    margin-bottom: 40px;
  }
  ul {
    list-style: disc;
  }
  .pci-contents {
    display: block;
    padding: 5px 0;
    border-left: 3px solid #e7e7e7;
    counter-reset: section;
    list-style-type: none;
    padding-left: 24px;
    position: relative;
    width: 100%;
    .contents__line {
      transition: all 0.3s;
      content: "";
      display: block;
      width: 3px;
      height: 34px;
      background-color: #1e71e1;
      position: absolute;
      top: 0;
      left: -3px;
    }
    .content-item {
      font-size: 18px;
      margin-bottom: 24px;
      display: block;
      position: static;
      &.last {
        margin-bottom: 0;
      }
    }
  }
  .contents-col {
    flex: 0 0 25%;
    max-width: 25%;
    @screen md-max {
      display: none;
    }
    .contents__col-inner {
      /* background-color: #ffffff; */
      overflow: hidden;
      position: relative;
      &.contents--fixed {
        position: fixed;
        top: 160px;
        z-index: 90;
      }
    }
  }
  .contents-wrap {
    position: relative;
    overflow-y: auto;
    /* padding-right: 40px; */
    width: 100%;
    box-sizing: content-box;
  }
  .contents-button {
    border: none;
    outline: none;
    transition: 0.3s ease-out;
    line-height: 24px;
    color: #000000;
    font-weight: 600;
    display: flex;
    text-align: left;
    &.active {
      color: #1e71e1;
    }
    &:hover {
      padding-left: 5px;
    }
  }
}
</style>