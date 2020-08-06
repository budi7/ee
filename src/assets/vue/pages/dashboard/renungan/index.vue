<template>
  <div>
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
      :api="apiJson.API + 'api/v1/user/renungan'"
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
          <div class="image-block mr-2">
            <img
              :src="data.thumbnail_url"
              alt=""
              width="80"
              height="80"
            >
            <!-- <img v-if="data.photo" :src="data.photo" alt="" width="120"> -->
            <!-- <i v-else class="icon f7-icons">cube</i> -->
          </div>
          <div class="item-inner">
            <div class="item-title-row">
              {{ data.title }}
            </div>
            <div class="item-subtitle">
              <small v-html="data.content" />
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
    <!-- <f7-fab
      slot="fixed"
      position="right-bottom"
      color="primary"
      class="mb-5 pb-5"
      href="/product/create"
    >
      <f7-icon
        ios="f7:plus"
        aurora="f7:plus"
        md="material:add"
      />
    </f7-fab> -->
  </div>
</template>

<script>
import appJson from '../../../../json/app.json'
import apiJson from '../../../../json/api.json'
import pageList from '../../../components/pageList.vue' 

export default {
  components: {
    pageList
  },
  data() {
    return {
      appJson,
      apiJson,
      isMoreData: true,
      isError: false,
      q_search: null,
      q_status: null
    }
  },
  mounted() {
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
      this.$f7router.navigate('/renungan/' + selected.id)
    }
  }
}
</script>

<style>
</style>