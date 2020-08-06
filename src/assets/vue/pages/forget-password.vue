<template>
  <f7-page
    no-toolbar
    no-swipeback
    login-screen
  >
    <f7-login-screen-title>
      <f7-block-footer>Masukkan Email Anda untuk Mendapatkan Token Reset Password</f7-block-footer>
    </f7-login-screen-title>
    <div class="mr-3 ml-3">
      <f7-row>
        <f7-col width="70">
          <f7-list form>
            <f7-list-input
              :value="username"
              label="E-mail"
              type="email"
              placeholder="Your e-mail"
              clear-button
              @input="username = $event.target.value"
            />
          </f7-list>
        </f7-col>
        <f7-col width="30">
          <f7-button
            :class="loading || counter > 0 ? 'disabled mt-2':'mt-2'"
            style="width:100%"
            fill
            large
            @click="onSubmit"
          >
            <!-- @click="onSubmit(plan)" -->
            <f7-preloader
              v-if="loading && !loadingReset"
              color="white"
            />
            {{ loading ? !loadingReset ? '': 'Send' : counter === 0 ? 'Send' : counter }}
          </f7-button>
        </f7-col>
      </f7-row>
      <hr class="mb-3">
      <f7-login-screen-title>
        <f7-block-footer>Masukkan Token dan Password baru Anda</f7-block-footer>
      </f7-login-screen-title>
      <f7-list form>
        <f7-list-input
          :value="token"
          label="Token"
          type="text"
          placeholder="Token"
          clear-button
          @input="token = $event.target.value"
        />
        <f7-list-input
          :value="password"
          label="New Password"
          type="password"
          placeholder="New Password"
          clear-button
          @input="password = $event.target.value"
        />
        <f7-list-input
          :value="confirmpassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          clear-button
          @input="confirmpassword = $event.target.value"
        />
      </f7-list>
      <f7-button
        :class="loading ? 'disabled mt-2':'mt-2'"
        style="width:100%"
        fill
        large
        @click="onReset"
      >
        <!-- @click="onSubmit(plan)" -->
        <f7-preloader
          v-if="loadingReset"
          color="white"
        />
        {{ loadingReset ? '' : 'Submit' }}
      </f7-button>
    </div>
        
    <div class="block-footer mt-5">
      <f7-link
        class=""
        :animate="true"
        @click="onLogin"
      >
        Back to Login
      </f7-link>
    </div>
  </f7-page>
</template>

<script>
import apiJson from '../../json/api.json'
import appJson from '../../json/app.json'
import appLabel from '../../json/labels.json'
import transporter from '../../modules/axiosTransporter'

export default {
  components: {
  },
  data() {
    return {
      apiJson,
      appLabel: appLabel.uac,
      appJson,
      loading: false,
      loadingReset: false,
      counter: 0,
      username: '',
      token: '',
      password: '',
      confirmpassword: ''
    }
  },
  mounted() {
  },
  methods: {
    onLogin() {
      this.$f7router.navigate('/', {
        ignoreCache  : true,
        reloadCurrent : true
      })
    },
    onReset() {
      const vm = this
      if(vm.password !== vm.confirmpassword){
        vm.$alert.show({
          vm: vm,
          type: 'error',
          text: 'Password Konfirmasi Tidak Sama',
          autoClose: true
        })
      }else{
        var params = {
          username: vm.username ? vm.username : null,
          token: vm.token ? vm.token : null,
          password: vm.password ? vm.password : null,
        }
        vm.loadingReset = true
        vm.loading = true
    
        transporter.post({
          params,
          api: apiJson.API + 'api/v1/user/reset-password',
        }).then((res) => {
          console.log('check res', res)
          if(res.status){
            vm.$alert.show({
              vm: vm,
              type: 'success',
              text: 'Reset Password Berhasil',
              autoClose: true
            })
            vm.onLogin()
            vm.loading = false
            vm.loadingReset = false
          }else{
            let error = null
            if(res.data.forget_password_token){
              error = 'Token tidak valid'
            }
            vm.$alert.show({
              vm: vm,
              type: 'error',
              text: error ? error :'Mohon cek kelengkapan data',
              autoClose: true
            })
            vm.loading = false
            vm.loadingReset = false
          }
        }).catch((err) => {
          const error = vm.$errorHandler.translate(err)
    
          vm.$alert.show({
            vm: vm,
            type: 'error',
            text: error.text,
            autoClose: true
          })
          vm.loading = false
          vm.loadingReset = false
        })
      }
    },
    countDownTimer() {
      if(this.counter > 0) {
        setTimeout(() => {
          this.counter -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    onSubmit() {
      const vm = this
      var params = {
        username: vm.username ? vm.username : null,
      }
      vm.loading = true

      transporter.post({
        params,
        api: apiJson.API + 'api/v1/user/forget-password',
      }).then((res) => {
        console.log('check res', res)
        if(res.status){
          vm.$alert.show({
            vm: vm,
            type: 'success',
            text: 'Token Berhasil dikirim',
            autoClose: true
          })
          vm.counter = 60
          vm.countDownTimer()
          vm.loading = false
        }else{
          vm.$alert.show({
            vm: vm,
            type: 'error',
            text: 'Gagal Mengirim token',
            autoClose: true
          })
          vm.loading = false
        }
      }).catch((err) => {
        const error = vm.$errorHandler.translate(err)

        vm.$alert.show({
          vm: vm,
          type: 'error',
          text: error.text,
          autoClose: true
        })
        vm.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .logo {
    width: 8.75rem !important;
  }
</style>