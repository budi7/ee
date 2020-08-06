<template>
  <f7-page class="mb-5 pb-5">
    <f7-navbar 
      :title="'Detail'"
      :back-link="'/'"
    />
    <f7-card :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''">
      <f7-row class="content-center">
        <f7-col>
          <f7-card-content v-if="content">
            <p class="text-primary">
              <strong>{{ content.name }}</strong>
            </p>
            <p>{{ content.address }}</p>
          </f7-card-content>
        </f7-col>
      </f7-row>
    </f7-card>

    <f7-card :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''">
      <f7-card-content v-if="content">
        <p class="text-primary">
          <strong>Persahabatan</strong>
        </p>
        <f7-list
          accordion-list
        >
          <f7-list-item
            accordion-item
            :title="`Kegiatan Rohani`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.persahabatan.kegiatan_rohani }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
          <f7-list-item
            accordion-item
            :title="`Kehidupan Sehari-hari`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.persahabatan.kehidupan_sehari_hari }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
          <f7-list-item
            accordion-item
            :title="`Kisah Injil`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.persahabatan.kisah_injil }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
          <f7-list-item
            accordion-item
            :title="`Latar Belakang Rohani`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.persahabatan.latar_belakang_rohani }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
          <f7-list-item
            accordion-item
            :title="`PD 1`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.persahabatan.pd1 }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
          <f7-list-item
            accordion-item
            :title="`PD 2`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.persahabatan.pd2 }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
          <f7-list-item
            accordion-item
            :title="`Pertanyaan Jembatan`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.persahabatan.pertanyaan_jembatan }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
        </f7-list>
      </f7-card-content>
    </f7-card>

    <f7-card :class="content_loading ? 'skeleton-text skeleton-effect-fade' : ''">
      <f7-card-content v-if="content">
        <p class="text-primary">
          <strong>Komitmen</strong>
        </p>
        <f7-list
          accordion-list
        >
          <f7-list-item
            accordion-item
            :title="`Doa Komitmen`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.komitmen.doa_komitmen }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
          <f7-list-item
            accordion-item
            :title="`Keterangan`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.komitmen.keterangan }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
          <f7-list-item
            accordion-item
            :title="`Pertumbuhan`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.komitmen.pertumbuhan }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
          <f7-list-item
            accordion-item
            :title="`Pertumbuhan Komitmen`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.komitmen.pert_komitmen }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
          <f7-list-item
            accordion-item
            :title="`Pertumbuhan Penjelasan`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ content.content.komitmen.pert_komitmen }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
        </f7-list>
      </f7-card-content>
    </f7-card>

    <f7-card :class="content_loading ? 'skeleton-text skeleton-effect-fade mb-5' : 'mb-5'">
      <f7-card-content v-if="content">
        <p class="text-primary">
          <strong>Penyaji</strong>
        </p>
        <f7-list
          accordion-list
        >
          <f7-list-item
            v-for="(item,index) in content.content.penyaji"
            :key="index"
            accordion-item
            :title="`Penyaji ` + (index+1)"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <div>
                  <p>{{ item }}</p>
                </div>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
        </f7-list>
      </f7-card-content>
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
import appJson from '../../../../../json/app.json'
import apiJson from '../../../../../json/api.json'
import transporter from '../../../../../modules/axiosTransporter'

export default {
  props: {
    id: {
      type: [String, Number],
      default: null,
    }
  },
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
      const api = this.apiJson.API + 'api/v1/user/mission/' + vm.id

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
        api: apiJson.API + 'api/v1/user/mission/' + vm.id + '/submit',
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
          vm.$f7router.navigate('/mission', {
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