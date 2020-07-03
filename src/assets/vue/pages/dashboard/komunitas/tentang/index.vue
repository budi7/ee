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
      appJson
    }
  },
  computed: {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
    }
  }
}
</script>