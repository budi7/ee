<template>
  <f7-page>
    <f7-navbar 
      :title="'Detail'"
      :back-link="'/'"
    />
    <f7-card :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''">
      <f7-row class="content-center">
        <f7-col width="70">
          <f7-card-content>
            <p class="text-primary">
              <strong>Title</strong>
            </p>
            <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
          </f7-card-content>
        </f7-col>
        <f7-col width="30">
          <f7-card-content>
            <p class="text-primary">
              <strong>Media</strong>
            </p>
            <p class="text-primary mb-3">
              <i
                class="icon f7-icons"
                style="font-size: 20px"
              >music_note_2</i> Audio
            </p>
            <p class="text-primary mt-3">
              <i
                class="icon f7-icons"
                style="font-size: 20px"
              >play_rectangle_fill</i> Video
            </p>
          </f7-card-content>
        </f7-col>
      </f7-row>
    </f7-card>
    <f7-card :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''">
      <f7-row class="content-center">
        <f7-col>
            <f7-card-content>
              <p class="text-primary">
                <strong>Content</strong>
              </p>
              <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
            </f7-card-content>
        </f7-col>
      </f7-row>
    </f7-card>
  </f7-page>
</template>

<script>
// import transporter from '../../modules/axiosTransporter'

export default {
  data() {
    return {
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