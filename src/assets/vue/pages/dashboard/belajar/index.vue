<template>
  <div class="m-3">
    <f7-row class="content-center">
      <f7-col>
        <f7-card @click.native="$f7router.navigate('/materi')">
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
        <f7-card @click.native="$f7router.navigate('/pertanyaan')">
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
        <f7-card @click.native="$f7router.navigate('/resource')">
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
    }
  }
}
</script>