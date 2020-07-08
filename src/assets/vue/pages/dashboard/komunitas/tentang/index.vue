<template>
  <f7-page
    login-screen  
  >
    <f7-navbar 
      :title="'Galeri'"
      :back-link="'/'"
    />
    <f7-row class="content-center">
      <f7-col>
        <f7-block class="text-center content-center">
          <div>
            <img 
              :src="appJson.images.applogo"
              class=""
              width="120"
            >
          </div>
          <div :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''">
            <p class="text-primary">
              <strong>About Us</strong>
            </p>
            <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
            <p class="text-primary">
              <strong>Description</strong>
            </p>
            <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
            <p class="text-primary">
              <strong>Version</strong>
            </p>
            <p>v1.0.0</p>
            <p>All right reserved</p>
          </div>
        </f7-block>
      </f7-col>
    </f7-row>
  </f7-page>
</template>

<script>
// import transporter from '../../modules/axiosTransporter'
import appJson from '../../../../../json/app.json'

export default {
  data() {
    return {
      appJson,
      title : null,
      content_loading: true,
      content: null
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.resetSetting()
      this.loadContent()
    },
    resetSetting(){
      this.content_loading = true
      this.content = null
    },
    loadContent() {
      setTimeout(() => {
        this.content_loading = false
      }, 2000)
    },
  }
}
</script>