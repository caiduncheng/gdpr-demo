<template>
  <div class="cookie-bar" v-show="!hasAcceptedCookie == true">
    <div class="cookie-bar-container">
      <p class="cookie-bar-message">
        This website uses cookies. By continuing to browse this website, you are agreeing to our use of cookies. See our
        <router-link to="/privacy/cookies" class="text-blue-400">Cookies policy</router-link>&nbsp;for more information.
      </p>
      <el-button type="primary" class="cookie-bar-button" @click="acceptCookie">I Accept</el-button>
    </div>
  </div>
</template>

<script>
import { getCookie } from "@/utils";
export default {
  data() {
    return {
      hasAcceptedCookie: getCookie("cookie_accepted"),
    };
  },
  methods: {
    acceptCookie() {
      const date = new Date().getTime() + 1000 * 3600 * 24 * 30;
      document.cookie = `cookie_accepted=true;path=/;expires=${new Date(date)}`;
      this.hasAcceptedCookie = true;
    },
  },
  mounted() {
    // console.log(getCookie(cookie_accepted))
  },
};
</script>

<style lang="scss" scoped>
.cookie-bar {
  position: fixed;
  width: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  background: #ffffff;
  text-align: center;
  line-height: 50px;
  padding: 20px 0;
  font-size: 15px;
  height: auto;
  animation: 0.6s cubic-bezier(0.4, 0, 1, 1) 0s 1 slideFromDown;
  box-shadow: 0 -1px 10px 0 rgb(172 171 171 / 30%);
}

.cookie-bar-container {
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @screen md-max {
    flex-wrap: wrap;
  }
}

.cookie-bar-message {
  display: inline-block;
  line-height: 22px;
  font-size: 14px;
  text-align: left;
  margin: 0;
  @screen sm-max {
    margin-bottom: 15px;
  }
}

.cookie-bar-button {
  margin-left: 35px;
}

@keyframes slideFromDown {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
