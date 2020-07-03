<template>
  <f7-page>
    <f7-navbar 
      :title="'Galeri'"
      :back-link="'/'"
    />
    <f7-row class="content-center m-2">
      <f7-col 
        v-for="(i,key) in 10"
        :key="key"
        width="50"
      >
        <f7-card>
          <f7-card-content :padding="false">
            <img
              src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg"
              width="100%"
            >
          </f7-card-content>
          <f7-card-footer>
            <f7-link>Image {{ key+1 }}</f7-link>
          </f7-card-footer>
        </f7-card>
      </f7-col>
    </f7-row>
  </f7-page>
</template>

<script>
// import transporter from '../../modules/axiosTransporter'

export default {
  data() {
    return {
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