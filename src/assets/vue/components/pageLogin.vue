<template>
  <div>
    <f7-login-screen-title>
      <img 
        :src="logo" 
        class="logo"
      >
    </f7-login-screen-title>
    <f7-list form>  
      <f7-list-input
        :label="appLabel.input.username.label"
        type="email"
        :placeholder="appLabel.input.username.placeholder"
        :value="username"
        @input="username = $event.target.value"
      />
      <f7-list-input
        :label="appLabel.input.password.label"
        type="password"
        :placeholder="appLabel.input.password.placeholder"
        :value="password"
        class="force-hairline"
        @input="password = $event.target.value"
      />
      <f7-block-footer class="text-right">
        <a 
          href="javascript:void(0)"
          @click="$emit('forgetPassword')"
        >
          {{ appLabel.forgetpassword }}
        </a>
        <br>
        <br>
      </f7-block-footer>
    </f7-list>
    <f7-block>    
      <f7-row>
        <f7-col>
          <f7-button 
            fill
            large
            @click="signIn"
          >
            {{ appLabel.actions.login }}
          </f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-list>
      <f7-block-footer>
        {{ appLabel.register.title }}<br>
        <a
          href="javascript:void(0)"
          @click="$emit('register')"
        >
          {{ appLabel.register.action }}
        </a>
        <br>
        <br>
      </f7-block-footer>
    </f7-list>
  </div>
</template>

<script>

export default {
  props: {
    logo: {
      default: '',
      type:String
    },
    appLabel: {
      default: () => {},
      type:Object
    }
  },
  data() {
    return {
      // username: null,
      // password: null,
      username: 'chelsy@thunderlab.id',
      password: 'masterg.rugi7',      
      isLoading: false
    }
  },
  watch: {
    isLoading (newVal) {
      if (newVal) {
        this.$f7.preloader.show()
      } else {
        this.$f7.preloader.hide()
      }
    }
  },
  methods: {
    signIn () {
      if (this.isLoading) return
      this.isLoading = true
      
      const vm = this

      // console.log(this.$store)
      this.$store.dispatch('uac/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        // todo: get profile callback
        console.log(res)

        vm.isLoading = false
        this.$nextTick(vm.fetchMyData)
      }).catch(e => {
        // console.log(e)
        const error = vm.$errorHandler.translate(e)

        // check error type, kalo login fail override dari label json
        if (error.code === 400 && error.data && error.data.error === 'invalid_grant') {
          error.text = error.text + '. Pastikan username dan password Anda benar'
        }
        // console.log(error)

        vm.$alert.show({
          vm: vm,
          type: 'error',
          text: error.text,
          autoClose: true
        })
        vm.isLoading = false
      })
    },
    fetchMyData () {
      if (this.isLoading) return
      this.isLoading = true
      
      const vm = this

      // console.log(this.$store)
      this.$store.dispatch('me/fetchMyInfo', {
        token: this.$store.getters['uac/getToken'],
      }).then(() => {
        // next page
        vm.$alert.show({
          vm: vm,
          type: 'success',
          text: this.appLabel.alert.loginsuccess,
          autoClose: true
        })        
        vm.isLoading = false
        this.$nextTick(vm.navigateNext)
      }).catch(e => {
        // console.log(e)
        const error = vm.$errorHandler.translate(e)

        // check error type, kalo login fail override dari label json
        if (error.code === 400 && error.data && error.data.error === 'invalid_grant') {
          error.text = error.text + '. Pastikan username dan password Anda benar'
        }
        // console.log(error)

        vm.$alert.show({
          vm: vm,
          type: 'error',
          text: error.text,
          autoClose: true
        })
        vm.isLoading = false
      })
    },
    navigateNext() {
      this.$f7router.navigate('/', {
        ignoreCache  : true,
        reloadCurrent : true
      })
    }
  },
}
</script>

<style lang="scss" scoped>
  .logo {
    width: 45%;
  }
</style>
