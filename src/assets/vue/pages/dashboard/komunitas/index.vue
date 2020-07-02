<template>
  <div class="m-3">
    <f7-row 
        v-for="(i,key) in 4"
        :key="key"
        class="content-center">
        <f7-col>
        <f7-card>
          <f7-card-content>
            <p><strong>Upcoming Features</strong></p>
            <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
          </f7-card-content>
        </f7-card>
        </f7-col>
    </f7-row>
  </div>
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
      console.log('init')
    }
  }
}
</script>

<style>
  .banner {
    height: 17vh;
  }
</style>