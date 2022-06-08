<template>
  <div class="detail">
    <div class="content">
      <div class="section-container--header">
        <div class="block-text">
          <p>
            We respect your concerns about privacy and value the relationship that we have with you, and only collect, use or disclose your personal data where it is fair and lawful to do so.
            We reserve the right to change, update, or correct any of this Cookie Statement or any information contained in the Site at any time without notice by posting an amended statement to the Site.
            We have tried to keep this Notice as simple as possible, but if you’re not familiar with terms, you can get relevant information from the Internet.
          </p>
        </div>
      </div>

      <div class="section-container">
        <div class="section-heading">
          <h3>HOW TOMS USES COOKIES</h3>
        </div>
        <div class="block-text">
          <p>
            Cookies policy
            We respect your concerns about privacy and value the relationship that we have with you, and only collect, use or disclose your personal data where it is fair and lawful to do so.
            We reserve the right to change, update, or correct any of this Cookie Statement or any information contained in the Site at any time without notice by posting an amended statement to the Site.
            We have tried to keep this Notice as simple as possible, but if you’re not familiar with terms, you can get relevant information from the Internet.
            HOW TOMS USES COOKIES
            A cookie is a small piece of text sent to your browser by a website you visit. It helps the site remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.
            For example, we use cookies to remember your preferred language.
            This page describes the types of cookies used by TOMS. See the Privacy Policy to learn how we protect your privacy in our use of cookies and other information.
            By using our websites, you are consenting to our use of cookies in accordance with this Cookie Notice and our Privacy Notice.
          </p>
        </div>
      </div>

      <div class="section-container">
        <div class="section-heading">
          <h3>TYPES OF COOKIES USED BY TOMS</h3>
        </div>
        <div class="block-text">
          <p>Some or all of the cookies described below may be stored in your browser.</p>
          <p class="font-bold">Functionality</p>
          <p>
            Cookies used for functionality allow users to interact with a service or site to access features that are fundamental to that service. Things considered fundamental to the service include preferences like the user’s choice of language, product optimizations that help maintain and improve a service, and maintaining information relating to a user’s session, such as the content of a setting.
            Some cookies are used to maintain a user’s preferences. For example, the user’s preferred language type will be stored in cookies, and the user’s language preference will be obtained from cookies when logging in next time
            Some cookies improve the performance of TOMS services. For example, the search box will prompt the user for the most recent input record so that it can be used directly without input.
          </p>
          <p class="font-bold">Security</p>
          <p>
            Cookies used for security authenticate users, prevent fraud, and protect users as they interact with a service.
            Some cookies are used to authenticate users, helping ensure that only the actual owner of an account can access that account. For example, cookies contain digitally signed and encrypted records of a user’s account and most recent sign-in time. The combination of these cookies allows us to block many types of attack, such as attempts to steal the content of forms submitted or user’s password in TOMS services.
          </p>
          <p class="font-bold">Analytics</p>
          <p>
            Cookies used for analytics help collect data that allows services to understand how users interact with a particular service. These insights allow services both to improve content and to build better features that improve the user’s experience.
            Some cookies help sites understand User preferences and frequently used functions. By analyzing these data, the website will make corresponding interface improvements
          </p>
          <p class="font-bold">Personalization</p>
          <p>Cookies used for personalization enhance the user’s experience by providing personalized content and features.For example, the user can set a remember account, and the account will be saved after logging in</p>
        </div>
      </div>

      <div class="section-container">
        <div class="section-heading">
          <h3>MANAGING COOKIES IN YOUR BROWSER</h3>
        </div>
        <div class="block-text">
          <p>You can adjust the settings in your browser in order to restrict or block cookies that are set by the Site (or any other site on the Internet). Your browser may include information on how to adjust your settings. If you disable the cookies we use, you may not be able to use the website normally</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import privacy from "@/mixins/privacy";
export default {
  layout: "privacy",
  props: {
    // generateCatalog: Function,
  },
  mounted() {
    this.$store.commit("SET_MENU", false);
  },
  mixins: [privacy],
};
</script>

<style>
</style>