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
        :label="appLabel.input.name.label"
        type="text"
        :placeholder="appLabel.input.name.placeholder"
        :value="name"
        @input="name = $event.target.value"
      />      
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
      <f7-list-input
        :label="appLabel.input.referral.label"
        type="text"
        :placeholder="appLabel.input.referral.placeholder"
        :value="referral"
        class="force-hairline"
        @input="referral = $event.target.value"
      />      
      <br>
    </f7-list>
    <f7-block>    
      <f7-row>
        <f7-col>
          <f7-button 
            fill
            large
            @click="register"
          >
            {{ appLabel.actions.register }}
          </f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-list>
      <f7-block-footer>
        {{ appLabel.login.title }}<br>
        <a
          href="javascript:void(0)"
          @click="$emit('login')"
        >
          {{ appLabel.login.action }}
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
      name: null,
      username: null,
      password: null,
      referral: null,
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
    register () {
      if (this.isLoading) return
      this.isLoading = true
      
      const vm = this
      // console.log(this.$store)
      this.$store.dispatch('uac/register', {
        name: this.name,
        username: this.username,
        password: this.password,
        referral: this.referral,
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
