<template>
  <f7-page>
    <f7-navbar 
      :title="'Materi'"
      :back-link="'/'"
    />
    <f7-list :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''" media-list>
      <f7-list-item
        v-for="(i,key) in 10"
        :key="key"
        class="text-primary"
        link="#"
        title="Some title"
        after="17:14"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        @click.native="$f7router.navigate('/materi/' + i)"
      />
    </f7-list>
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