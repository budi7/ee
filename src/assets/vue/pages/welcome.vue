<template>
  <f7-page
    no-toolbar
    no-swipeback
    login-screen
  >
    <f7-login-screen-title>
      <img 
        :src="appJson.images.applogo"
        class="logo mb-2"
        width="180"
      >
      <p class="text-white">
        Welcome to EE4G
      </p>
      <div class="block-footer">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <f7-block 
        class="pb-1"
        style="background-color: white;position: fixed; bottom: 0px;width: 100%"
      >
        <f7-button
          style="width:100%"
          fill
          large
          popup-open=".info-sheet"
        >
          Login
        </f7-button>
      </f7-block>
    </f7-login-screen-title>

    

    <f7-sheet 
      class="info-sheet"
      style="height:auto; --f7-sheet-bg-color: #fff;"
      swipe-to-close
      backdrop  
    >
      <!-- Scrollable sheet content -->
      <f7-block>
        <div class="list no-hairlines-md">
          <ul>
            <li class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-floating-label">
                  Username
                </div>
                <div class="item-input-wrap">
                  <input
                    type="text"
                    placeholder="08123123456"
                  >
                  <span class="input-clear-button" />
                </div>
              </div>
            </li>
            <li class="item-content item-input">
              <div class="item-inner">
                <div class="item-title item-floating-label">
                  Password
                </div>
                <div class="item-input-wrap">
                  <input
                    type="password"
                    placeholder="Your password"
                  >
                  <span class="input-clear-button" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <f7-button
          class="mb-2"
          style="width:100%"
          fill
          large
          @click="onSubmit"
        >
          <!-- @click="onSubmit(plan)" -->
          Login
        </f7-button>
      </f7-block>
    </f7-sheet>
  </f7-page>
</template>

<script>
import appJson from '../../json/app.json'
import appLabel from '../../json/labels.json'

export default {
  components: {
  },
  data() {
    return {
      appLabel: appLabel.uac,
      appJson
    }
  },
  methods: {
    onSubmit () {
      this.$f7.sheet.close()
      this.$f7router.navigate('/loader')
    }
  }
}
</script>
<style lang="scss" scoped>
  .logo {
    width: 8.75rem !important;
  }
</style>