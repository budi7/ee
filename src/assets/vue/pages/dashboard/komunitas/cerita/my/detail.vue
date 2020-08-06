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
              <strong>{{ content.reviewed_title ? content.reviewed_title : content.title }}</strong>
            </p>
          </f7-card-content>
        </f7-col>
      </f7-row>
    </f7-card>
    
    <f7-card :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''">
      <f7-row class="content-center">
        <f7-col>
          <f7-card-content v-if="content">
            <p v-if="content.published_at">
              {{ content.published_at | toDate }}
            </p>
            <p v-else>
              {{ content.created_at | toDate }}
            </p>
            <!-- <p>{{ content.reviewed_content }}</p> -->
            <div v-html="content.reviewed_content ? content.reviewed_content : content.content" />
          </f7-card-content>
        </f7-col>
      </f7-row>
    </f7-card>

    <f7-block
      v-if="content && !content.submitted_at"
      class="mb-2"
      style="background-color: white;position: fixed; bottom: 0px;width: 100%"
    >
      <f7-row class="text-center">
        <f7-col>
          <div>
            <h1 class="text-color-primary" />
            <f7-button
              fill
              @click="save()"
            >
              {{ 'Submit' }}
            </f7-button>
          </div>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import transporter from '../../../../../../modules/axiosTransporter'
import apiJson from '../../../../../../json/api.json'

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
      content: null,
      isLoading: false
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
      const api = this.apiJson.API + 'api/v1/user/cerita/my/' + vm.id

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
    save() {
      const vm = this
      var params = {
      }

      transporter.post({
        params,
        api: apiJson.API + 'api/v1/user/cerita/' + vm.id + '/submit',
        token: vm.$store.getters['uac/getToken']
      }).then((res) => {
        console.log('check res', res)
        if(res.status){
          vm.$alert.show({
            vm: vm,
            type: 'success',
            text: 'Berhasil Disimpan',
            autoClose: true
          })
          vm.isLoading = false
          vm.$f7router.navigate('/cerita/my', {
            ignoreCache  : true,
            reloadCurrent : true
          })
        }else{
          vm.$alert.show({
            vm: vm,
            type: 'error',
            text: 'Tidak dapat Menyimpan Data',
            autoClose: true
          })
          vm.isLoading = false
        }
      }).catch((err) => {
        const error = vm.$errorHandler.translate(err)

        vm.$alert.show({
          vm: vm,
          type: 'error',
          text: error.text,
          autoClose: true
        })
        vm.isLoading = false
      })
    }
  }
}
</script>