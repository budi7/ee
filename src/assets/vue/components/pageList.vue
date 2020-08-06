<template>
  <div class="page">
    <!-- navbar -->
    <f7-navbar 
      v-if="withNavbar"
      :title="navbarTitle"
      :back-link="navbarBack"
    />

    <!-- searchbar & toolbar -->
    <div
      v-if="withToolbar"
      class="toolbar tabbar tabbar-scrollable toolbar-top"
    >
      <div
        class="toolbar-inner"
      >
        <a
          v-for="(dt,i) in toolbarData"
          :key="'toolbar' + i"
          :href="'#' + i" 
          :class="'tab-link ' + (i === toolbarActiveKey ? 'tab-link-active' : '')"
          @click="handleTollbarChange(i)"
        >{{ dt }}</a>
      </div>
      <f7-subnavbar
        v-if="withSearchbar"
        :inner="false"
      >
        <f7-searchbar
          v-if="withSearchbar"
          :placeholder="searchbarPlaceholder"
          :disable-button="true"
          @change="handleSearch"
        />
      </f7-subnavbar>
    </div>

    <slot name="additional" />

    <!-- pull to refresh -->
    <div
      :class="'page-content ptr-content infinite-scroll-content ptr-' + keyStamp" 
      @ptr:refresh="refresh"
      @scroll="handleScroll"
    > 
      <div
        v-if="withPtr"
        class="ptr-preloader"
      >
        <div class="preloader" />
        <div class="ptr-arrow" />
      </div>

      <div
        class="list media-list virtual-list chevron-center"
      >
        <!-- search -->
        
        <!-- data  -->      
        <ul>
          <li
            v-for="(dt) in datas"
            :key="'datas-' + dt.id"
          >
            <div 
              :class="'item-content ' + (isListClickable ? 'item-link' : '') "
              @click="$emit('SELECTED', dt)"
            >
              <slot
                name="listcard"
                class="item-link"
                :data="dt" 
              />
            </div>
          </li>
          <!-- skeleton -->
          <li
            v-for="(dt,i) in listPerPage"
            v-show="isMoreData"
            :key="i"
            :ref="i < 1 ? 'infiniterHolder' : null"
            :class="'item-content skeleton-text skeleton-effect-fade'"
          >
            <slot name="skeleton" />
          </li>
        </ul>
      </div>

      <!-- error -->
      <div
        v-show="isError"
        class="block-card text-center"
      > 
        <img 
          :src="errorLogo" 
          class="logo"
        >      
        <p>{{ errorTitle }}</p>
        <a
          v-if="allowRetry"
          href="#"
          @click="fetch"
        >
          {{ retryTitle }}
        </a>
      </div>

      <!-- empty -->
      <div
        v-show="isMoreData === false && datas.length === 0"
        class="block-card text-center"
      > 
        <img 
          :src="emptyLogo" 
          class="logo"
        >          
        <p>{{ emptyTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import transporter from '../../modules/axiosTransporter' 
import debounce from '../../modules/debouncer' 

export default {
  components:{
  },
  props: {
    withNavbar: {
      default: true,
      type: Boolean
    },
    navbarTitle: {
      default: 'No Title Set',
      type: String
    },
    navbarBack: {
      default: '',
      type: String
    },
    withToolbar: {
      default: false,
      type:Boolean
    },
    toolbarData: {
      default: () => { return  {} }, 
      type: Object
    },
    toolbarKey: {
      default: null,
      type: String
    },    
    withSearchbar: {
      default: true,
      type:Boolean
    },
    withSearch: {
      default: true,
      type: Boolean
    },
    searchbarPlaceholder: {
      default: 'Search',
      type: String
    },
    withFilterSimple: {
      default: false,
      type: Boolean
    },
    listPerPage: {
      default: 15,
      type: Number
    },
    errorLogo: {
      default: null,
      type: String
    },      
    errorTitle: {
      default: 'Error retrieving data',
      type: String
    },
    retryTitle: {
      default: 'Retry',
      type: String
    },
    allowRetry: {
      default: true,
      type: Boolean
    },
    emptyLogo: {
      default: null,
      type: String
    },   
    emptyTitle: {
      default: 'No data',
      type: String
    },
    isListClickable: {
      default: true,
      type: Boolean
    },
    withPtr: {
      default: true,
      type: Boolean
    },
    token: {
      default: null,
      type: String
    },   
    api: {
      default: null,
      type: String
    },
    type: {
      default: null,
      type: String
    },
    definedFilter : {
      default: () => { return  {} }, 
      type: Object
    }
  },
  data() {
    return {
      keyStamp: Date.now(),
      isRefreshing: false,
      isMoreData: true,
      isError: false,
      isEmpty: false,
      isLoading: false,
      datas: [],
      currentPage: 1,
      searchQuery: null,
      toolbarActiveKey: null,
      customQuery : {}
    }
  },
  mounted() {
    // console.log('check mounted page list')
  },
  methods: {
    init () {
      this.datas = []
      // init toolbar
      if (this.withToolbar) this.toolbarActiveKey = Object.keys(this.toolbarData)[0]

      // init data
      this.currentPage = 1 
      this.isMoreData = true
      this.fetch()
    },
    fetch () {
      // console.log('check fetch',this.datas)
      const successCallback = (resp) => {
        console.log(resp)
      }
      const errorCallback = (err) => {
        console.log(err)
      }      
      this.queryData(this, successCallback, errorCallback)
    },
    refresh() {
      if (this.isLoading) {
        this.$f7.ptr.get('.ptr-' + this.keyStamp).done()
        return
      }

      this.currentPage = 1

      const vm = this
      const successCallback = function () {
        vm.datas = []
        vm.isMoreData = true
        vm.$f7.ptr.get('.ptr-' + vm.keyStamp).done()
      }
      const errorCallback = function (err) {
        console.log(err)
      }  
      this.queryData(this, successCallback, errorCallback)
    },

    /* interface */
    setCustomQuery (_q) {
      this.datas = []
      this.isMoreData = true
      this.currentPage = 1  

      this.customQuery = JSON.parse(JSON.stringify(_q))
      if (this.customQuery.search) this.searchQuery = this.customQuery.search
      this.$nextTick(this.fetch)
    },

    /* Engines */
    queryData(vm, successCallback, errorCallback) {
      if (vm.isLoading) return
      vm.isLoading = true
      vm.isError = false

      let params = {
        search: vm.searchQuery,
        skip: (vm.currentPage - 1) * vm.listPerPage,
        take: vm.listPerPage
      }

      // console.log('check params', params)

      // defined filter
      if (Object.keys(this.definedFilter).length > 0) {
        params = Object.assign(params, this.definedFilter)
      }

      // toolbar
      if (vm.withToolbar){
        if (vm.toolbarKey) {
          //validation
          if ( !params[vm.toolbarKey]) {
            params[vm.toolbarKey] = vm.toolbarActiveKey
          } else {
            console.error('toolbar data filter may not working: toolbar key allready difined on definedFilter paramter')
          }
        } else {
          console.error('toolbar data filter may not working: no toolbar key')
        }
      }

      // custom query 
      if (Object.keys(this.customQuery).length > 0) {
        params = Object.assign(params, this.customQuery)
      }

      transporter.get({
        params,
        api: vm.api,
        token: vm.token
      }).then((rslt) => { 
        // console.log('check rslt', rslt)
        // console.log('check rslt', vm.datas)
        if (successCallback) successCallback(rslt)
        // compile data

        if (vm.type && vm.type === 'subscription') {
          vm.datas = vm.datas.concat(rslt.data.data)

          // next page
          if (rslt.data.data.length === rslt.data.per_page) {
            vm.currentPage = vm.currentPage + parseInt(1)
          }else {
            vm.isMoreData = false
          }

        } else {
          vm.datas = vm.datas.concat(rslt.data)
          // next page
          if (rslt.data.length === rslt.take) {
            vm.currentPage = vm.currentPage + parseInt(1)
          }else {
            vm.isMoreData = false
          }
        }


        vm.isLoading = false
      }).catch((err) => {
        if (errorCallback) errorCallback(err)

        vm.isLoading = false
        vm.isError = false
        vm.isEmpty = false
      })
    },
    handleScroll (e) {
      // more data?
      // console.log('here')
      if (!this.isMoreData) return

      // infiniterHolder ?  
      let limiter = parseInt(e.target.scrollHeight)
      if (this.$refs.infiniterHolder) {
        limiter = limiter - (parseInt(this.$refs.infiniterHolder[0].scrollHeight) * this.listPerPage)
      } 

      if ((parseInt(e.target.scrollTop) + parseInt(e.target.clientHeight)) >= (limiter - parseInt(15))) {
        this.fetch()
      }
    },
    handleSearch (searchbar) {
      console.log('here')
      this.$f7.ptr.get('.ptr-' + this.keyStamp).done()

      const vm = this
      debounce(() => {
        vm.datas = []
        vm.isMoreData = true
        vm.searchQuery = searchbar.target.value
        vm.currentPage = 1
        vm.fetch()
      }, 75)
    },
    handleTollbarChange (val) {
      this.toolbarActiveKey = val
      this.$f7.ptr.get('.ptr-' + this.keyStamp).done()

      this.datas = []
      this.isMoreData = true
      this.currentPage = 1      
      this.fetch()
    }
  }
}
</script>

<style lang="scss" scoped>
.block-card{
    padding-top: 1.5rem;
    padding-bottom: 2.5rem;
}
</style>