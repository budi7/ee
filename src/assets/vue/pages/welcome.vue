<template>
  <f7-page
    no-toolbar
    no-navbar
    no-swipeback
    login-screen
  >
    <pageLogin 
      v-show="nav === 'login'"
      :logo="appJson.images.logo"
      :app-label="appLabel.login"
      @actionSuccess="hadleLoggedIn"
      @actionFail="handleFailedLogin"
      @forgetPassword="nav='forgetPassword'"
      @register="nav='register'"
    />
    <pageRegister 
      v-show="nav === 'register'"
      logo=""
      :app-label="appLabel.register"
      @actionSuccess="handleRegistered"
      @actionFail="handleFailedRegister"
      @login="nav='login'"
    />
    <pageForgetPassword
      v-show="nav === 'forgetPassword'"
      logo=""
      :app-label="appLabel.forgetpassword"
      @actionSuccess="handleReseted"
      @actionFail="handleFailedReset"
      @cancel="nav='login'"    
    />
  </f7-page>
</template>

<script>
import appJson from '../../json/app.json'
import appLabel from '../../json/labels.json'
import pageLogin from '../components/pageLogin.vue'
import pageForgetPassword from '../components/pageForgetPassword.vue'
import pageRegister from '../components/pageRegister.vue'

export default {
  components: {
    pageLogin,
    pageRegister,
    pageForgetPassword,
  },
  data() {
    return {
      appLabel: appLabel.uac,
      nav: 'login',
      isShowEmergencyModal: false,
      appJson
    }
  },
  methods: {
    hadleLoggedIn () {
    
    },
    handleFailedLogin () {

    },
    handleRegistered () {
    
    },
    handleFailedRegister () {

    },
    handleReseted () {
      
    }, 
    handleFailedReset () {

    }
  }
}
</script>