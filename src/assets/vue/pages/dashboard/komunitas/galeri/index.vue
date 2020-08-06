<template>
  <f7-page>
    <f7-navbar 
      :title="'Gallery'"
      :back-link="''"
    />
    <page-list
      ref="pageList"
      :with-navbar="false"
      :with-searchbar="true"
      :with-toolbar="false"
      toolbar-key="status"
      :list-per-page="appJson.perPage"
      :error-title="'Gagal terhubung ke server'"
      :retry-title="'Coba lagi'"
      :empty-title="'Tidak ada data'"
      :api="apiJson.API + 'api/v1/user/gallery'"
      :token="$store.getters['uac/getToken']"
      class=""
      @SELECTED="(dt) => { onSelected(dt) }"
    >
      <!-- list data  -->
      <template v-slot:listcard="{data}">
        <div
          class="item-media width-100"
          @click="onSelected(data)"
        >
          <div class="item-inner">
            <div class="item-title-row">
              {{ data.published_at | toDate }}
            </div>
            <div class="item-subtitle">
              <small>{{ data.title }}</small>
            </div>
          </div>
        </div>
      </template>

      <!-- list skeleton  -->
      <template slot="skeleton">
        <div class="item-media">
          <div
            class="skeleton-block icon-block"
          />
        </div>
        <div class="item-inner">
          <div class="item-title-row">
            <div class="item-title">
              Product
            </div>
          </div>
          <div class="item-subtitle">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </div>
          <div class="item-text">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </div>
        </div>
      </template>
    </page-list>
    <f7-photo-browser
      ref="standalone"
      :photos="photos"
      back-link-text="Back"
    />
  </f7-page>
</template>

<script>
import appJson from '../../../../../json/app.json'
import apiJson from '../../../../../json/api.json'
import pageList from '../../../../components/pageList.vue' 

export default {
  components: {
    pageList
  },
  data() {
    return {
      appJson,
      apiJson,
      title : null,
      photos: [],
      isMoreData: true,
      isError: false,
      q_search: null,
      q_status: null
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.$refs.pageList.init()
  },
  methods: {
    init(q) {
      this.q_status = q
      this.refreshComponent()
    },
    search (q) {
      this.q_search = q
      this.refreshComponent()
    },
    filterStatus (q) {
      this.q_status = q
      this.refreshComponent()
    },
    filterCategory (q) {
      console.log(q)
      this.refreshComponent()
    },
    refreshComponent () {
      this.$refs.pageList.init()
      // this.$refs.pageList.setCustomQuery({
      //   status: this.q_status,
      //   search: this.q_search,
      // })
    },
    navigate() {
      
    },
    onSelected(selected) {
      let vm = this
      vm.photos = []
      selected.medias.forEach(element => {
        vm.photos.push({
          url: element.media_url,
          caption: element.title
        })
      })
      setTimeout(() => {
        console.log('PHOTOS : ',vm.photos)
        if(vm.photos.length > 0){
          vm.$refs.standalone.open()
        }
      }, 500)
    }
  }
}
</script>
<style>

.navbar-photo-browser .navbar-inner {
  background: rgb(190, 55, 60);
}

.navbar-photo-browser .navbar-inner .title {
  color: white !important;  
}

.navbar-photo-browser .navbar-inner .right .link {
  color: white !important;
}

.toolbar .toolbar-inner .photo-browser-prev {
  color: white !important;
}

.toolbar .toolbar-inner .photo-browser-next {
  color: white !important;
}
</style>