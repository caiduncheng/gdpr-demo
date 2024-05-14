<template>
  <el-dialog :visible="visible" title="Preference Center" class="preference-center" @close="handleClose">
    <div v-if="showPreferences">
      <div class="preference-header">
        Cookie Consent Preference Center
      </div>
      <div class="break-normal">
        When you visit our website, we store cookies on your browser to collect information. The information collected might relate to you, your preferences or your device, and is mostly used to make the site work as you expect it to and to provide a more personalized web experience. However, you can choose not to allow certain types of cookies, which may impact your experience of the site and the services we are able to offer. Click on the different category headings to find out more and change our default settings according to your preference. You cannot opt-out of our First Party Strictly Necessary Cookies as they are deployed in order to ensure the proper functioning of our website (such as prompting the cookie banner and remembering your settings, to log into your account, to redirect you when you log out, etc.). For more information about the First and Third Party Cookies used please follow this link.
      </div>
      <h2 class="preference-header">
        Manage Consent Preferences 
      </h2>
      <div> 
        <div class="accordion-layout">
          <div class="accordion-button" :class="{'expanded': expands1}" @click="() => expands1 = !expands1">
            <div class="plus-minus">
              <span></span>
              <span></span>
            </div>
            <span class="accordion-name">Strictly Necessary Cookies</span>
            <span class="text-primary float-right">Always Active</span>
          </div>
          <div class="accordion-text break-normal">
            <p class="accordion-desc">
            These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
            </p>
            <div class="cookies-details">
              <button @click="() => showPreferences = false">
                Cookies Details
              </button>
            </div>
          </div>
        </div>

        <div class="accordion-layout">
          <div :class="[{'expanded': expands2}, 'accordion-button']" @click="() => expands2 = !expands2">
            <div class="plus-minus">
              <span></span>
              <span></span>
            </div>
            <span class="accordion-name">Performance Cookies</span>
            <el-switch v-model="performance"></el-switch>
          </div>
          <div class="accordion-text break-normal">
            <p class="accordion-desc">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
            </p>
            <div class="cookies-details">
              <button @click="() => showPreferences = false">
                Cookies Details
              </button>
            </div>
          </div>
        </div>

        <div class="accordion-layout">
          <div class="accordion-button" :class="{'expanded': expands3}"  @click="() => expands3 = !expands3">            
            <div class="plus-minus">
              <span></span>
              <span></span>
            </div>
            <span class="accordion-name">Functional Cookies</span>            
            <el-switch v-model="functional"></el-switch>
          </div>
                <div class="accordion-text break-normal">
            <p class="accordion-desc">
              These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
            </p>
            <div class="cookies-details">
              <button @click="() => showPreferences = false">
                Cookies Details
              </button>
            </div>
          </div>
        </div>

        <div class="accordion-layout">
          <div class="accordion-button" :class="{'expanded': expands4}"   @click="() => expands4 = !expands4">
            <div class="plus-minus">
              <span></span>
              <span></span>
            </div>
            <span class="accordion-name">Targeting Cookies</span>
            <el-switch v-model="targeting"></el-switch>
          </div>
                <div class="accordion-text break-normal">
            <p class="accordion-desc">
              These cookies are used to make advertising messages more relevant to you and may be set through our site by us or by our advertising partners. They may be used to build a profile of your interests and show you relevant advertising on our site or on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device.
            </p>
            <div class="cookies-details">
              <button @click="() => showPreferences = false">
                Cookies Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div style="display: flex; align-items: center">
        <button @click="() => showPreferences = true" style="font-size: 16px; width: 12px; height: 18px; margin-right: 8px">
        <svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xml:space="preserve"><title>Back</title><g><path fill="#000000" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                      l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                      c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                      s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                      L213.13,222.409z"></path></g></svg>
        </button>
        <span style="font-size: 20px; color: #000000">Cookie List</span>
      </div>
      <ul style="padding: 15px 15px 15px 10px;" >
        <li>
          <div>
            <div style="width: 30%; float: left; padding: 5px 0;">Name</div>
            <div style="width: 70%; float: left; padding: 5px 0;">ga_client_id</div>
          </div>

          <div>
           <div style="width: 30%; float: left; padding: 5px 0;">Host</div>
            <div style="width: 70%; float: left; padding: 5px 0;">www.google-analytics.com</div>
          </div>

          <div>
             <div style="width: 30%; float: left; padding: 5px 0;">Type</div>
            <div style="width: 70%; float: left; padding: 5px 0;">Third Party</div>
          </div>

          <div>
             <div style="width: 30%; float: left; padding: 5px 0;">Category</div>
            <div style="width: 70%; float: left; padding: 5px 0;">Performance Cookies</div>
          </div>

          <div >
             <div style="width: 30%; float: left; padding: 5px 0;">Description</div>
            <div style="width: 70%; float: left; padding: 5px 0;margin-bottom: 20px">This domain is owned by Google. The main business activity is: Analytics Services</div>
          </div>
        </li>
      </ul>

      

      <ul style="padding: 15px 15px 15px 10px; margin-bottom: 10px;" >
        <li>
          <div>
            <div style="width: 30%; float: left; padding: 5px 0;">Name</div>
            <div style="width: 70%; float: left; padding: 5px 0;">ga_client_id</div>
          </div>

          <div>
           <div style="width: 30%; float: left; padding: 5px 0;">Host</div>
            <div style="width: 70%; float: left; padding: 5px 0;">www.google-analytics.com</div>
          </div>

          <div>
             <div style="width: 30%; float: left; padding: 5px 0;">Type</div>
            <div style="width: 70%; float: left; padding: 5px 0;">Third Party</div>
          </div>

          <div>
             <div style="width: 30%; float: left; padding: 5px 0;">Category</div>
            <div style="width: 70%; float: left; padding: 5px 0;">Performance Cookies</div>
          </div>

          <div>
             <div style="width: 30%; float: left; padding: 5px 0;">Description</div>
            <div style="width: 70%; float: left; padding: 5px 0;">This domain is owned by Google. The main business activity is: Analytics Services</div>
          </div>
        </li>
      </ul>
    </div>
    <template slot="footer">
      <el-button type="primary">Save my Preferences</el-button>
      <el-button type="primary">Accept only neccessary</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      expands1: false,
      expands2: false,
      expands3: false,
      expands4: false,
      performance: false,
      functional: false,
      targeting: false,
      showPreferences: true,      
    }
  },
  computed: {
    visible() {
      return this.$store.state.showPrefencesDialog
    }
  },
  methods: {
    expand(idx) {
      this.expands[idx] = !this.expands[idx]
    },
    handleClose() {
      this.$store.commit('CLOSE_PREFERENCES_DIALOG')
    }
  }
}
</script>

<style lang="scss" scoped>

.preference-header {
  font-size: 16px;
  margin: 10px 0;
  color: #000000;
}

.accordion-layout {  

  padding: 12px 10px;
  border: 1px solid #D9D9D9;
  .accordion-name {
    flex: 1;
  }
  .accordion-button {
    cursor: pointer;
    display: flex;
    &.expanded {
      & ~ .accordion-text{
        display: block;
      }
      .plus-minus {
        span {
          transform: rotate(90deg);
        }
        span:last-of-type {
          left: 50%;
          right: 50%;
        }
      }
    }
  }
  .accordion-text {
    display: none;
    .accordion-desc {
      padding-left: 20px;
      padding-right: 20px;
      width: calc(100% - 40px);
      font-size: 14px;
      margin-bottom: 10px;
      margin-top: 15px;
    }

    .cookies-details {    
      padding-left: 20px;
      margin-bottom: 5px;      
      width: calc(100% - 20px);
      display: inline-block;
      margin-top: 0;
      padding-bottom: 2px;
      button {
        @apply text-primary;
        &:hover {
          text-decoration: underline;
        }
      }     
    }
  }
  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  &:not(:first-child) {
    border-top: none;
  }
}

.plus-minus {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  span {
    position: absolute;
    background: #27455c;
    border-radius: 1px;
    &:first-of-type {
      top: 25%;
      bottom: 25%;
      width: 10%;
      left: 45%;
    }    
    &:last-of-type {
      left: 25%;
      right: 25%;
      height: 10%;
      top: 45%;
    }
  }
}

</style>