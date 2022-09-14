<template>
  <div>
    <div class="privacy">
      <div class="navigation">
        <div class="tabs-wrap container">
          <div class="tabs-heading">
            <div class="tabs__title">
              <NuxtLink class="tabs__link" to="/">
                <img src="~assets/logo.png" alt="toms logo" />
              </NuxtLink>
            </div>
            <div class="tabs__links-container">
              <ul class="tabs__links">
                <li class="tabs__links-item">
                  <NuxtLink
                    to="/privacy/distribution"
                    :class="{active: $route.path.includes('/privacy/distribution')}"
                  >Distribution Policy</NuxtLink>
                </li>
                <li class="tabs__links-item">
                  <NuxtLink
                    to="/privacy/services"
                    :class="{active: $route.path.includes('/privacy/services')}"
                  >Services</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul class="tabs__links--mobile">S
        <li class="tabs__links-item">
                  <NuxtLink
                    to="/privacy/distribution"
                    :class="{active: $route.path.includes('/privacy/distribution')}"
                  >Distribution Policy</NuxtLink>
                </li>
        <li class="tabs__links-item">
                  <NuxtLink
                    to="/privacy/services"
                    :class="{active: $route.path.includes('/privacy/services')}"
                  >Services</NuxtLink>
                </li>
      </ul>
      <div class="page-title">
        <div class="container">
          <div class="wrap">
            <div class="heading">{{header}}</div>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="pt-8 md:pt-20 px-10">
          <el-row type="flex" class="mx-5" :gutter="40">
            <el-col :md="8" class="contents-col">
              <div class="contents__col-inner">
                <div class="contents__col-item">
                  <div class="contents-wrap" ref="list">
                    <ul class="privacy-contents">
                      <li v-for="(i, index) in titles" :key="index" class="content-item">
                        <button
                          type="button"
                          class="contents-button"
                          :data-index="index"
                          @click="() => onClick(i.id)"
                        >{{i.title}}</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :md="16" :sm="24">
              <Nuxt />
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {},
  data() {
    return {
      // titles: [],
      $headerHeight: 0,
    };
  },
  computed: {
    titles() {
      return this.$store.state.privacyCatalogs;
    },
    header() {
      if (this.$route.path.includes("/privacy/distribution")) {
        return "Newland Developer Platform Distribution Agreement";
      } else if (this.$route.path.includes("/privacy/services")) {
        return "Newland Developer Platform Terms of Service";
      }
    },
  },
  methods: {
    onClick(id) {
      const $itemList = $(`#${id}`);
      const $itemOffset = $itemList.offset().top;
      console.log($itemOffset);
      $("html, body")
        .stop()
        .animate({ scrollTop: $itemOffset - this.$headerHeight - 15 }, 800);
    },
    setSideBarWidth() {
      const parentWidth = $(".contents__col-inner").parent().width();
      $(".contents__col-item").css("width", parentWidth);
    },
  },
  mounted() {
    this.setSideBarWidth();
    this.$headerHeight = $(".navigation").height();
    const $headerHeight = this.$headerHeight;
    const $list = $(".contents-wrap").parent().parent();
    const $offsetList = $list.offset().top;

    $(window).on("scroll", function () {
      const scrollTop = $(this).scrollTop();
      if (scrollTop > 1) {
        $(".navigation").addClass("scroll");
      } else {
        $(".navigation").removeClass("scroll");
      }
      if (scrollTop > $offsetList - $headerHeight) {
        $list.addClass("contents--fixed");
      } else if (scrollTop < $offsetList - $headerHeight) {
        $list.removeClass("contents--fixed");
      }

      $(".content")
        .find(".section-container")
        .each(function () {
          const sectionOffset = $(this).offset().top;
          const sectionHeight = $(this).height();
          const sectionIndex = $(this).data("index");
          const $activeButton = $(
            '.contents-button[data-index="' + sectionIndex + '"]'
          ).parent();
          const sectionOffsetWithHeader =
            sectionOffset - $(".navigation").height() - 20;

          if (
            sectionOffsetWithHeader <= scrollTop &&
            sectionOffsetWithHeader + sectionHeight >= scrollTop
          ) {
            if (!$activeButton.hasClass("active")) {
              $(".tabs__links-item").removeClass("active");
              $activeButton.addClass("active");
              $(".section-container").removeClass("active");
              $(this).addClass("active");
              var linePositionTop =
                $(".active").offset().top -
                $(".contents-wrap").offset().top +
                -$(".privacy-contents").position().top;
              // _this.$ipcLine.css({
              //   top: linePositionTop,
              //   height: $(".active").find(".js-ipc-button").height(),
              // });
              // _this.listFocus();
            }
          }
        });
    });

    $(window).on("resize", this.setSideBarWidth);
  },
};
</script>

<style lang="scss" scoped>
.privacy {
  height: auto;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .navigation {
    border-bottom: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
    /* position: sticky; */
    position: fixed;
    /* top: 80px; */
    top: 0;
    z-index: 150;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: saturate(180%) blur(20px);
    &.scroll {
      top: 0;
    }
  }
  .tabs-wrap {
  }
  .tabs-heading {
    display: flex;
    height: 80px;
    /* padding: 24px 0 0; */
    position: relative;
    align-items: center;
  }
  .tabs__title {
    font-size: 700;
    margin-top: 3px;
    text-align: center;
    flex: 1;
    @screen md {
      text-align: left;
      flex: 0;
    }
  }

  .tabs__link {
    color: #000;
  }
  .tabs__links-container {
    position: relative;
    margin-left: auto;
    margin-right: 30px;
  }

  .tabs__links--mobile {
    margin-top: 82px;
    display: flex;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
    @screen md {
      display: none;
    }
  }

  .tabs__links {
    display: none;
    @screen md {
      display: flex;
    }
  }

  .tabs__links-item {
    position: relative;
    padding: 0 16px;
    a {
      display: block;
      /* padding: 0 4px 24px; */
      color: #7f7f7f;
      text-align: center;
      &.active {
        color: #000000;
        font-weight: 700;
        /* border-bottom: 2px solid #000; */
      }
    }
  }
  .wrap {
    max-width: 1760px;
    margin: 0 auto;
    width: 100%;
  }
  .heading {
    line-height: 1.17;
    font-weight: 700;
    width: 100%;
    display: inline-block;
    font-size: 36px;
    @screen md {
      font-size: 48px;
    }
  }
  .privacy-contents {
    display: block;
    border-left: 2px solid #e7e7e7;
    counter-reset: section;
    list-style-type: none;
    padding-left: 24px;
    position: static;
    width: 100%;
    .content-item {
      margin-bottom: 24px;
      display: block;
      position: static;
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
    transition: 0.3s ease-out;
    line-height: 24px;
    color: #7f7f7f;
    font-weight: 400;
    display: flex;
    text-align: left;
    
    &:hover {
      padding-left: 5px;
    }
  }
}

.section-container,
.section-container--header {
  position: relative;
  margin-bottom: 80px;
  padding-left: 55px;

  @screen sm-max {
    padding-left: 0;
    margin-bottom: 64px;
  }
}

.section-heading {
  margin-bottom: 24px;
  font-size: 32px;
}

.privacy .page-title {
  padding-top: 80px;
  padding-bottom: 40px;
  @apply text-center;
  @screen md {
    padding-top: 160px;
  }
}

.privacy .container {
  padding: 0 40px;
  width: 100%;
  @screen lg {
    padding: 0 80px;
  }
}
.privacy .detail {
  /* width: 800px; */
  /* margin: 50px auto; */
}
.privacy .title {
  text-align: center;
  font-size: 3em;
  font-weight: 900;
  line-height: 1.3;
}
.privacy .content {
  counter-reset: number;
}

.privacy .content a {
  color: #2C7BE5;
  text-decoration: underline;
}
.privacy .content p {
  margin-bottom: 20px;
  line-height: 1.35;
}
.privacy .content h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
  @screen md {
    font-size: 32px;
  }
}
/* 已被访问的链接 */
.privacyPolicy .contact a:visited {
  color: #303133;
}
/* 将鼠标悬停在链接上 */
.privacyPolicy .contact a:hover {
  color: #303133;
}
</style>