<template>
  <div
    class="page"
    tabs
  >
    <f7-navbar
      :hidden="activeTab === 'home'"
      class="content-center"
    >
      <f7-nav-title>
        {{ title }}
      </f7-nav-title>
    </f7-navbar>
    <!-- Tabs -->
    <!-- <div class="animated-wrap"> -->
    <div class="tabs">
      <!-- Home tab -->
      <div
        id="tab-1"
        :class="(activeTab === 'home' ? 'tab-active ' : '') + 'page-content tab'"
      >
        <pagehome ref="home" />
      </div>
      <!-- Belajar tab -->
      <div
        id="tab-2"
        :class="(activeTab === 'belajar' ? 'tab-active ' : '') + 'page-content tab'"
      >
        <pagebelajar ref="belajar" />
        <!-- <page-product ref="product" /> -->
      </div>
      <!-- Komunitas tab -->
      <div
        id="tab-3"
        class="page-content tab"
        :class="(activeTab === 'komunitas' ? 'tab-active ' : '') + 'page-content tab'"
      >
        <pagekomunitas ref="komunitas" />
      </div>
      <!-- Renungan tab -->
      <div
        id="tab-4"
        class="page-content tab"
        :class="(activeTab === 'renungan' ? 'tab-active ' : '') + 'page-content tab'"
      >
        <pagerenungan ref="renungan" />
      </div>
      <!-- Account tab -->
      <div
        id="tab-5"
        class="page-content tab"
        :class="(activeTab === 'account' ? 'tab-active ' : '') + 'page-content tab'"
      >
        <pagesaya ref="account" />
      </div>                   
    </div>
    <!-- </div>  -->

    <!-- Additional "tabbar-labels" class -->
    <div class="toolbar tabbar tabbar-labels toolbar-bottom">
      <div class="toolbar-inner">
        <a
          ref="tabHome"
          href="#tab-1"
          :class="(activeTab === 'home' ? 'tab-link-active ' : '') + 'tab-link'"
          @click="activeTab = 'home'"
        >
          <!-- Different icons for iOS and MD themes -->
          <i
            class="icon f7-icons"
            style="font-size: 20px"
          >house_fill</i>
          <!-- Label text -->
          <span class="tabbar-label">Home</span>
        </a>
        <a
          ref="tabBelajar"
          href="#tab-2"
          :class="(activeTab === 'belajar' ? 'tab-link-active ' : '') + 'tab-link'"
          @click="activeTab = 'belajar'"
        >
          <i
            class="icon f7-icons"
            style="font-size: 20px"
          >square_favorites_fill</i>
          <span class="tabbar-label">Belajar</span>
        </a>
        <a
          ref="tabKomunitas"
          href="#tab-3"
          :class="(activeTab === 'komunitas' ? 'tab-link-active ' : '') + 'tab-link'"
          @click="activeTab = 'komunitas'"
        >
          <i
            class="icon f7-icons"
            style="font-size: 20px"
          >person_3_fill</i>
          <span class="tabbar-label">Komunitas</span>
        </a>
        <a
          ref="tabRenungan"
          href="#tab-4"
          class="tab-link"
          :class="(activeTab === 'renungan' ? 'tab-link-active ' : '') + 'tab-link'"
          @click="activeTab = 'renungan'"
        >
          <i
            class="icon f7-icons"
            style="font-size: 20px"
          >book_fill</i>
          <span class="tabbar-label">Renungan</span>
        </a>
        <a
          ref="tabAccount"
          href="#tab-5"
          class="tab-link"
          :class="(activeTab === 'account' ? 'tab-link-active ' : '') + 'tab-link'"
          @click="activeTab = 'account'"
        >
          <i
            class="icon f7-icons"
            style="font-size: 20px"
          >person_alt</i>
          <span class="tabbar-label">Saya</span>
        </a>                
      </div>
    </div>        
  </div>
</template>

<script>
import pagehome from './home/index.vue'
import pagebelajar from './belajar/index.vue'
import pagekomunitas from './komunitas/index.vue'
import pagerenungan from './renungan/index.vue'
import pagesaya from './saya/index.vue'
// import pagePolis from '../components/pagePolis.vue'
// import pageProduct from '../components/pageProduct.vue'
// import pageClaim from '../components/pageClaim.vue'
// import pageProfile from '../components/pageProfile.vue'
import appJson from '../../../json/app.json'

export default {
  components: {
    pagehome,
    pagebelajar,
    pagekomunitas,
    pagerenungan,
    pagesaya
  },
  data() {
    return {
      appJson,
      activeTab: 'home',
    }
  },
  computed: {
    
    title () {
      switch (this.activeTab) {
      case 'home':
        return 'Home'
      case 'belajar':
        return 'Belajar'
      case 'komunitas':
        return 'Komunitas'      
      case 'renungan':
        return 'Renungan'  
      case 'account':
        return 'Profile'  
      default:
        return 'Beranda'
      }
    }
  },
  watch: {
    activeTab (val) {
      // console.log('ROUTER HISTORY',this.$f7router.history)
      // console.log('ROUTE',this.$f7route)
      console.log('check val', val)
      this.$refs[val].init()
    }
  },
  mounted() {
    // init
  },
  methods: {
  },
}
</script>

<style scoped>
  .tab {
    padding-bottom: var(--f7-tabbar-labels-height);
  }
  .tab-link-active .tabbar-label,
  .tab-link-active .icon{
    color: var(--f7-theme-color) !important;
  }
  .tab-link .tabbar-label,
  .tab-link .icon{
    color: black;
  }
  .toolbar {
    background-color:white !important;
  }
  .navbar .navbar-bg {
    background-color: white !important;
  }
</style>