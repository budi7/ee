<template>
  <f7-page
    no-toolbar
    no-swipeback
    login-screen
  >
    <f7-login-screen-title>
      <div>
        <img 
          :src="appJson.images.applogo"
          class=""
          width="80"
        >
      </div>
      <div class="preloader color-red" />
    </f7-login-screen-title>
  </f7-page>
</template>

<script>
import appJson from '../../json/app.json'

export default {
  data() {
    return {
      appJson,
      auth: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.auth = this.$store.getters['uac/isAuthed']
      console.log('AAUTH',this.auth)
      this.navigateHome()
    }, 2000)
  },
  methods: {
    navigateHome () {
      console.log('LOADER')
      // this.$f7router.navigate('/home') // home ga punya child path materi dkk

      // debug, nanti di remove kalo uda pasang auth
      this.$store.commit('uac/login', {
        token: 123
      }) 

      this.$f7router.navigate('/', {
        ignoreCache  : true,
        reloadCurrent : true
      })
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