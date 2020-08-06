<template>
  <div class="m-3">
    <f7-row class="content-center text-center">
      <f7-col width="100">
        <f7-card @click.native="$f7router.navigate('/cerita')">
          <f7-card-content>
            <p class="text-primary">
              <strong>Cerita</strong>
            </p>
            <!-- <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p> -->
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="100">
        <f7-card @click.native="$f7router.navigate('/event')">
          <f7-card-content>
            <p class="text-primary">
              <strong>Event</strong>
            </p>
            <!-- <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p> -->
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="100">
        <f7-card @click.native="$f7router.navigate('/galeri')">
          <f7-card-content>
            <p class="text-primary">
              <strong>Galeri</strong>
            </p>
            <!-- <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p> -->
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="100">
        <f7-card @click.native="$f7router.navigate('/tentang')">
          <f7-card-content>
            <p class="text-primary">
              <strong>Tentang</strong>
            </p>
            <!-- <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p> -->
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
    }
  }
}
</script>