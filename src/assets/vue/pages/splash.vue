<template>
  <div class="wrapp">
    <div class="box fade-in">
      <img 
        :src="appJson.images.applogo"
        class="logo"
      >
    </div>
  </div>
</template>

<script>
import appJson from '../../json/app.json'

export default {
  data() {
    return {
      appJson
    }
  },
  mounted() {
    setTimeout(() => {
      this.navigateHome()
    }, 1500)
  },
  methods: {
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
      width: 8rem !important;
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