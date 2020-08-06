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
      <!-- <p class="text-primary">
        Welcome to EE4G
      </p> -->
      <div class="block-footer">
        <p>Come for Christ, Go for Christ</p>
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
        <f7-list form>
          <f7-list-input
            :value="username"
            label="E-mail"
            type="email"
            placeholder="Your e-mail"
            clear-button
            @input="username = $event.target.value"
          />
          <f7-list-input
            :value="password"
            label="Password"
            type="password"
            placeholder="Your e-mail"
            clear-button
            @input="password = $event.target.value"
          />
        </f7-list>
        <f7-button
          :class="loading ? 'disabled mb-2':'mb-2'"
          style="width:100%"
          fill
          large
          @click="onSubmit"
        >
          <!-- @click="onSubmit(plan)" -->
          <f7-preloader
            v-if="loading"
            color="white"
          />
          {{ loading ? '' : 'Login' }}
        </f7-button>
        <div class="mt-3 pt-3 text-center">
          <f7-link
            class=""
            :animate="true"
            @click="onForget"
          >
            Forget Password
          </f7-link>
        </div>
      </f7-block>
    </f7-sheet>
  </f7-page>
</template>

<script>
import apiJson from '../../json/api.json'
import appJson from '../../json/app.json'
import appLabel from '../../json/labels.json'

export default {
  components: {
  },
  data() {
    return {
      apiJson,
      appLabel: appLabel.uac,
      appJson,
      loading: false,
      username: '',
      password: '',
    }
  },
  mounted() {
    console.log('cektoken',this.$store.getters['uac/getToken'])
  },
  methods: {
    onForget() {
      this.$f7.sheet.close()
      this.$f7router.navigate('/forget', {
        ignoreCache  : true,
        reloadCurrent : true
      })
    },
    onSubmit () {
      // this.$f7router.navigate('/loader', {
      //   ignoreCache  : true,
      //   reloadCurrent : true
      // })
      // this.$f7.sheet.close()
      if (this.loading) return
      this.loading = true
      
      const vm = this

      this.$store.dispatch('uac/login', {
        username: this.username,
        password: this.password,
        device_name: 'android'
      }).then(res => {
        if(res.data.status){
          console.log(res)
          vm.$alert.show({
            vm: vm,
            type: 'success',
            text: 'Autentikasi Berhasil',
            autoClose: true
          })        
          vm.loading = false
          this.$f7.sheet.close()
          vm.$f7router.navigate('/loader', {
            ignoreCache  : true,
            reloadCurrent : true
          })
        }else{
          vm.$alert.show({
            vm: vm,
            type: 'error',
            text: 'Pastikan username dan password Anda benar',
            autoClose: true
          })
          vm.loading = false
        }
      }).catch(e => {
        console.log('error',e)
        const error = vm.$errorHandler.translate(e)

        if (error.code === 400 && error.data && error.data.error === 'invalid_grant' || error.code === 401) {
          error.text = error.text + '. Pastikan username dan password Anda benar'
        }

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