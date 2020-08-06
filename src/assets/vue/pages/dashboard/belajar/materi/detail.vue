<template>
  <f7-page>
    <f7-navbar 
      :title="'Detail'"
      :back-link="'/'"
    />
    <f7-card
      v-if="audio || video"
      style="background-color: white;position: fixed; bottom: 0px;left: 0; right: 0"
      :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''"
    >
      <f7-row>
        <f7-col
          v-if="audio"
          :width="video ? 50 : 100 "
          @click="formatAudio"
        >
          <p class="text-center text-primary">
            <i
              class="icon f7-icons"
              style="font-size: 20px"
            >music_note_2</i> Audio
          </p>
        </f7-col>
        <f7-col
          v-if="video"
          :width="audio ? 50 : 100"
          @click="formatVideo"
        >
          <p class="text-center text-primary">
            <i
              class="icon f7-icons"
              style="font-size: 20px"
            >play_rectangle_fill</i> Video
          </p>
        </f7-col>
      </f7-row>
    </f7-card>

    <f7-card :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''">
      <f7-row class="content-center">
        <f7-col>
          <f7-card-content v-if="content">
            <p class="text-primary">
              <strong>
                {{ content.title }}
              </strong>
            </p>
            <div v-html="content.content" />
          </f7-card-content>
        </f7-col>
      </f7-row>
    </f7-card>
    
    <f7-photo-browser
      ref="standalone"
      :photos="source"
      back-link-text="Back"
    />
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
      audio: false,
      video: false,
      source: [],
      apiJson,
      title : null,
      content_loading: true,
      content: null
    }
  },
  computed: {
    videoCheck(){
      return this.content.medias.filter(function(data){
        return data.type === 'video'
      })
    },
    audioCheck(){
      return this.content.medias.filter(function(data){
        return data.type === 'audio'
      })
    }
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
      const api = this.apiJson.API + 'api/v1/user/material/' + vm.id

      vm.content_loading = true

      transporter.get({
        api: api,
        token: vm.$store.getters['uac/getToken']
      }).then((res) => {
        vm.content = res.data
        // vm.$set(vm, 'content', res.data)
        if(vm.audioCheck.length > 0){
          vm.audio = true
        }
        if(vm.videoCheck.length > 0){
          vm.video = true
        }
      }).catch((err) => {
        console.error('error', err)
      })
      setTimeout(() => {
        this.content_loading = false
      }, 1000)
    },
    formatAudio() {
      let vm = this
      vm.source = []
      vm.content.medias.forEach(element => {
        if(element.type === 'audio'){
          vm.source.push({
            html: `<audio controls><source src="${element.media_url}" type="audio/mpeg"></audio>`,
            caption: element.title
          })
        }
      })
      console.log('THIS SOURCE',vm.source)
      setTimeout(() => {
        if(vm.source.length > 0){
          vm.$refs.standalone.open()
        }
      }, 500)
    },
    formatVideo() {
      let vm = this
      vm.source = []
      vm.content.medias.forEach(element => {
        if(element.type === 'video'){
          vm.source.push({
            html: `<iframe src="${element.media_url}" frameborder="0" allow></iframe>`,
            caption: element.title
          })
        }
      })      
      console.log('THIS SOURCE',vm.source)
      setTimeout(() => {
        if(vm.source.length > 0){
          vm.$refs.standalone.open()
        }
      }, 500)
    }
  }
}
</script>