<template>
  <div class="wrapp">
    <div class="box fade-in">
      <img 
        :src="appJson.images.logo"
        class="logo"
      >
      <p class="tagline">
        <small>{{ appLabel.tagline }}</small>
      </p>
      <div class="banner">
        <img 
          :src="appJson.images.ojk"
        >
        <img 
          :src="appJson.images.ik"
        >        
      </div>

      <div class="spacer" />

      <div v-show="isLoading">
        <f7-preloader color="blue" />
        <p>
          <small>{{ appStatus === 'checkUpdate' ? appLabel.checkupdate : appLabel.update }}</small>
        </p>
      </div>
      <div
        v-show="isError"
        class="retry"
      >
        <a
          href="javascript:void(0)"
          @click="retry"
        >
          <i class="icon f7-icons retry-icon">arrow_clockwise_circle</i> <br>
          Coba Lagi
        </a>   
      </div>
      <div
        v-show="isNeedUpdate"
        class="retry update"
      >
        <p>
          {{ appLabel.outdated.description }}
        </p>
        <f7-button @click="updateApps">
          Perbarui Aplikasi
        </f7-button>
      </div>         
    </div>
  </div>
</template>

<script>
import appLabel from '../../json/labels.json'
import appJson from '../../json/app.json'

export default {
  data() {
    return {
      appLabel: appLabel.general,
      appStatus: 'checkUpdate',
      isError: false,
      isNeedUpdate: false,
      isLoading: true,
      policyVersion: 0,
      appJson
    }
  },
  mounted() {
    this.$store.commit('app/init')
    setTimeout(() => {
      this.fetchCheckUpdate()
    }, 300)
  },
  methods: {
    fetchCheckUpdate () {
      //init
      this.isLoading = true
      this.isError = false
      const vm = this

      // dispatch
      this.$store.dispatch('app/checkUpdate', {
        /* payload */
      }).then(res => {
        /* success */

        // check app version 
        if (!vm.$store.state.app.appVersion || vm.$store.state.app.appVersion === 0) {
          // commit version
          vm.$store.commit('app/updateAppVersion',res.data.android_app )
        } else {
          if (res.data.android_app > vm.$store.state.app.appVersion) {
          // return need update apps
            vm.$f7.dialog.alert(vm.appLabel.outdated.description, vm.appLabel.outdated.title)
            vm.isNeedUpdate = true
            vm.isLoading = false
            return
          }
        }

        // check policy version to decide update or not
        if (vm.$store.state.app.policyVersion === 0 || 
          res.data.policy > vm.$store.state.app.policyVersion 
        ) {
          /* outdated */
          vm.appStatus = 'updating'
          vm.policyVersion = res.data.policy 
          vm.fetchUpdateConfig()
        } else {
          /* up to date */
          // go to login
          vm.navigateHome()
        }
      }).catch(e => {
        /* fail */
        const error = vm.$errorHandler.translate(e)
        vm.$alert.show({
          vm: vm,
          type: 'error',
          text: error.text,
          autoClose: true
        })
        vm.isLoading = false
        vm.isError = true
      })
    },
    fetchUpdateConfig () {
      //init
      this.isLoading = true
      this.isError = false
      const vm = this

      // dispatch
      this.$store.dispatch('app/update', {
        /* payload */
      }).then(res => {
        /* success */

        // store policy (commit)
        vm.$store.commit('app/updatePolicy',{
          version: vm.policyVersion,
          policy: res.data 
        })

        // go to login
        vm.navigateHome()
      }).catch(e => {
        /* fail */
        const error = vm.$errorHandler.translate(e)
        vm.$alert.show({
          vm: vm,
          type: 'error',
          text: error.text,
          autoClose: true
        })
        vm.isLoading = false
        vm.isError = true
      })
    },
    retry () {
      if (this.appStatus === 'checkUpdate') {
        this.fetchCheckUpdate()
      } else {
        this.fetchUpdateConfig()
      }
    },
    updateApps () {
      // check platform

      // open updater

    },
    navigateHome () {
      this.$f7router.back('/')
    }
  }
}
</script>

<style lang="scss" scoped>

  .box {
    .logo {
      margin-top: -1.75rem;
      width: 8.75rem !important;
    }
    .tagline {
      margin-top: -1.5rem;
      color: #000 !important;
    }
    .banner {
      margin-top: 2rem;
      height: 7rem;
      display: flex;
      justify-content: center;

      img {
        margin-left: .5rem;
        margin-right: .5rem;
        height: 1.8rem !important;
        align-items: center;
        opacity: .87;
      }
    }
    .retry-icon {
      margin-bottom: .7rem;
    }

    .spacer {
      height: 30vh;
    }

    .retry {
      min-height: 5.05rem;
    }

    .update{
      margin-right: 2.5rem;
      margin-left: 2.5rem;
    }
  }
</style>