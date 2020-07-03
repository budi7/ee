<template>
  <div class="m-3">
    <f7-row class="content-center">
      <f7-col>
        <f7-card @click.native="navigate('materi')">
          <f7-card-content>
            <p class="text-primary">
              <strong>Materi</strong>
            </p>
            <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
          </f7-card-content>
        </f7-card>
      </f7-col>
    </f7-row>
    <f7-row class="content-center">
      <f7-col>
        <f7-card @click="navigate('materi')">
          <f7-card-content>
            <p class="text-primary">
              <strong>Pertanyaan</strong>
            </p>
            <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
          </f7-card-content>
        </f7-card>
      </f7-col>
    </f7-row>
    <f7-row class="content-center">
      <f7-col>
        <f7-card @click="navigate('materi')">
          <f7-card-content>
            <p class="text-primary">
              <strong>Resource</strong>
            </p>
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
    },
    navigate(path) {
      this.$f7router.navigate('/materi')
      console.log('PATH',path)
    }
  }
}
</script>

<style>
  .banner {
    height: 17vh;
  }
</style>