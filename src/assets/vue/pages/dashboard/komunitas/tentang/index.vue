<template>
  <f7-page
    login-screen  
  >
    <f7-navbar 
      :title="'Tentang'"
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
          <f7-card class="mb-3 mt-3">
            <f7-card-content
              :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''"
            >
              <f7-list
                accordion-list
              >
                <f7-list-item
                  accordion-item
                  :title="'About Us'"
                >
                  <f7-accordion-content class="pb-2">
                    <div
                      class="p-3"
                      v-html="content ? content.about : ''"
                    />
                  </f7-accordion-content>
                </f7-list-item>
                <f7-list-item
                  accordion-item
                  :title="'History'"
                >
                  <f7-accordion-content class="pb-2">
                    <div
                      class="p-3"
                      v-html="content ? content.history : ''"
                    />
                  </f7-accordion-content>
                </f7-list-item>
                <f7-list-item
                  accordion-item
                  :title="'Why EE4G'"
                >
                  <f7-accordion-content class="pb-2">
                    <div
                      class="p-3"
                      v-html="content ? content.why : ''"
                    />
                  </f7-accordion-content>
                </f7-list-item>
                <f7-list-item
                  accordion-item
                  :title="'Contact'"
                >
                  <f7-accordion-content class="pb-2">
                    <div
                      class="p-3"
                      v-html="content ? content.contact : ''"
                    />
                  </f7-accordion-content>
                </f7-list-item>
                <f7-list-item
                  accordion-item
                  :title="'Donation'"
                >
                  <f7-accordion-content class="pb-2">
                    <div
                      class="p-3"
                      v-html="content ? content.donation : ''"
                    />
                  </f7-accordion-content>
                </f7-list-item>
              </f7-list>
            </f7-card-content>
          </f7-card>
          <p>v2.0.0</p>
          <p>All right reserved</p>
        </f7-block>
      </f7-col>
    </f7-row>
  </f7-page>
</template>

<script>
import appJson from '../../../../../json/app.json'
import apiJson from '../../../../../json/api.json'
import transporter from '../../../../../modules/axiosTransporter'

export default {
  data() {
    return {
      appJson,
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
      const api = this.apiJson.API + 'api/v1/user/config/profile'

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