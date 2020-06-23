<template>
  <f7-page
    no-toolbar
    no-swipeback
  >
    <f7-navbar
      :title="data.title"
    >
      <f7-nav-right>
        <f7-link popup-close>
          <i class="icon f7-icons">xmark</i>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div
      class="block-card"
    > 
      <div
        v-show="isLoading"
        class="mt-3 ml-3 mr-3"
      >
        <div
          class="table-mock skeleton-block skeleton-effect-blink"
        />
        <div
          class="table-mock skeleton-block skeleton-effect-blink mb-3"
        />
        <h4 class="skeleton-text skeleton-effect-blink mb-2">
          Title Browser
        </h4>
        <div class="skeleton-text skeleton-effect-blink">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>        
      </div>
      <iframe 
        v-show="isLoading === false"
        :src="data ? data.url: null"
        class="frame"
        @load="loaded"
      />
    </div>
  </f7-page>
</template>

<script>

export default {
  props: {
    data: {
      default: () => { return  {} }, 
      type: Object
    }
  },
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    init() {
      this.isLoading = true
    //   const vm = this
    //   axios.get(this.data.url)
    //     .then(resp => {
    //       console.log(resp.data)
    //       vm.html = resp.data
    //     }).catch(err => {
    //       console.log(err)
    //     })
    },
    loaded () {
      this.isLoading = false
    }
  },
}
</script>

<style scoped>
    .frame {
        width: 100vw;
        height: 100vh;
        border: none !important;
    }
</style>