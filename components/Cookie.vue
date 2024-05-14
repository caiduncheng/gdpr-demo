<template>
  <div class="cookie-bar" v-if="show">
    <div class="cookie-bar-container">
      <div>
        <h2 class="cookie-title">
          Privacy Preference Center
        </h2>
        <p class="cookie-bar-message">
          Why we use cookies?Our site enables script (e.g. cookies) that is able to read, store, and write information on your browser and in your device. The information processed by this script includes data relating to you which may include personal identifiers (e.g. IP address and session details) and browsing activity. We use this information for various purposes - e.g. to deliver content, maintain security, enable user choice, and improve our sites. You can reject all non-essential processing by choosing to accept only necessary cookies. To personalize your choice and learn more click here to adjust your preferences. More information
        </p>
      </div>
      <div class="cookie-btns">
        <el-button type="primary" class="cookie-bar-button" @click="acceptCookie">Allow All</el-button>
        <el-button type="primary" class="cookie-bar-button" @click="acceptCookie">Accept only necessary</el-button>
        <el-button type="primary" class="cookie-bar-button" @click="adjust">Adjust my Preferences</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie } from "@/utils";
import Preference from './Preference.vue'
export default {
  components: {
    Preference
  },
  data() {
    return {
      hasAcceptedCookie: getCookie("cookie_accepted"),
      show: true
    };
  },
  methods: {
    acceptCookie() {
      this.show = false
      // const date = new Date().getTime() + 1000 * 3600 * 24 * 30;
      // document.cookie = `cookie_accepted=true;path=/;expires=${new Date(date)}`;
      // this.hasAcceptedCookie = true;\
    },
    adjust() {
      this.$store.commit('OPEN_PREFERENCES_DIALOG')
    }
  },
  mounted() {
    // console.log(getCookie(cookie_accepted))
  },
};
</script>

<style lang="scss" scoped>
.cookie-bar {
  position: fixed;
  width: 75%;  
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  background: #ffffff;
  border-radius: 6.5px;
  text-align: center;
  line-height: 50px;
  padding: 20px 0;
  font-size: 15px;
  height: auto;
  // animation: 0.6s cubic-bezier(0.4, 0, 1, 1) 0s 1 slideFromDown;
  box-shadow: 0 -1px 10px 0 rgb(172 171 171 / 30%);
  z-index: 1000;
}

.cookie-title {
  font-size: 16px;
  text-align: left;
}

.cookie-bar-container {  
  margin: 0 50px;
  display: flex;  
  align-items: center;
  @screen md-max {
    flex-wrap: wrap;
  }
}

.cookie-bar-message {
  color: #40484f; 
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
  button {
    width: 100%;
  }
}

.cookie-btns {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

// @keyframes slideFromDown {
//   0% {
//     transform: translateY(100%);
//   }

//   100% {
//     transform: translate(0, 0);
//   }
// }
</style>
