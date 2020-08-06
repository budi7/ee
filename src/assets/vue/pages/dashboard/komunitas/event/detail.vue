<template>
  <f7-page>
    <f7-navbar 
      :title="'Detail'"
      :back-link="'/'"
    />
    <f7-card :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''">
      <f7-row class="content-center">
        <f7-col>
          <f7-card-content v-if="content">
            <p class="text-primary">
              <strong>{{ content.title }}</strong>
            </p>
          </f7-card-content>
        </f7-col>
      </f7-row>
    </f7-card>
    
    <f7-card :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''">
      <f7-row class="content-center">
        <f7-col>
          <f7-card-content v-if="content">
            <p>{{ content.published_at | toDate }}</p>
            <div v-html="content.description" />
          </f7-card-content>
        </f7-col>
      </f7-row>
    </f7-card>
  </f7-page>
</template>

<script>
import transporter from '../../../../../modules/axiosTransporter'
import apiJson from '../../../../../json/api.json'

export default {
  props: {
    id: {
      type: [String, Number],
      default: null,
    }
  },
  data() {
    return {
      apiJson,
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
      const vm = this
      const api = this.apiJson.API + 'api/v1/user/event/' + vm.id

      vm.content_loading = true

      transporter.get({
        api: api,
        token: vm.$store.getters['uac/getToken']
      }).then((res) => {
        vm.content = res.data
        // vm.$set(vm, 'content', res.data)
        console.log('check res', vm.content)
      }).catch((err) => {
        console.error('error', err)
      })
      setTimeout(() => {
        this.content_loading = false
      }, 1000)
    },
  }
}
</script>