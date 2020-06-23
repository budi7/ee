<template>
  <div>
    <f7-login-screen-title>
      <img 
        :src="logo" 
        class="logo"
      >
    </f7-login-screen-title>
    <f7-list form>  
      <f7-block>
        <h4>
          {{ appLabel.title }}
        </h4>
        <p>
          {{ appLabel.subtitle }}
        </p>
      </f7-block>
      <f7-list-input
        :label="appLabel.input.username.label"
        type="email"
        :placeholder="appLabel.input.username.placeholder"
        :value="username"
        class="force-hairline"
        @input="username = $event.target.value"
      />
      <br>
    </f7-list>
    <f7-block>    
      <f7-row>
        <f7-col>
          <f7-button 
            fill
            large
            @click="requestToken"
          >
            {{ appLabel.actions.reset }}
          </f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-list>
      <f7-block-footer>
        <a
          href="javascript:void(0)"
          @click="$emit('cancel')"
        >
          {{ appLabel.actions.cancel }}
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
      username: null,
      password: null,
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
    requestToken () {
      if (this.isLoading) return
      this.isLoading = true
      
      const vm = this
      // console.log(this.$store)
      this.$store.dispatch('uac/requestForgotPasswordToken', {
        username: this.username,
      }).then(res => {
        console.log(res)
        vm.$alert.show({
          vm: vm,
          type: 'success',
          text: this.appLabel.alert.requestsuccess,
          autoClose: true
        })        
        vm.isLoading = false
      }).catch(e => {
        // console.log(e)
        const error = vm.$errorHandler.translate(e)
        // check error type, kalo request fail override dari label json

        console.log(error)
        vm.$alert.show({
          vm: vm,
          type: 'error',
          text: error.text,
          autoClose: true
        })
        vm.isLoading = false
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
