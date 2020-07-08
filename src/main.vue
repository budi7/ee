<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- <f7-statusbar></f7-statusbar> -->
    <!-- <f7-panel left cover>
            <f7-view url="/panel-left/" links-view=".view-main" />
        </f7-panel> -->
    <f7-view
      url="/splash"
      :main="true"
      class="ios-edges"
      :stack-pages="true"
    />
  </f7-app>
</template>
<script>
// Import Routes...
// import { f7App, f7Panel, f7View, f7Statusbar } from 'framework7-vue'
import { f7App, f7View } from 'framework7-vue'
import routes from './routes.js'
import dictionary from './assets/json/errors.json'

export default {
  components: {
    f7App,
    f7View,
    // f7Statusbar,
  },
  data() {
    return {
      f7params: {
        routes,
        id: 'io.framework7.testapp'
      }
    }
  },
  mounted() {
    // console.log(this)
    // console.log('ROUTES',routes)
    document.addEventListener('deviceready', this.onDeviceReady, false)
    this.$errorHandler.init(dictionary)
  },
  methods: {
    onDeviceReady() {
      console.log('ready')
      document.addEventListener('backbutton', this.onBackKeyDown, false)
    },
    onBackKeyDown(e) {
      e.preventDefault()
      if(this.$f7.views.main.router.url === '/'){
        navigator.app.exitApp()
      }else{
        this.$f7.views.main.router.back()
      }
      // this.$f7router.back()
    }
  }
}
</script>