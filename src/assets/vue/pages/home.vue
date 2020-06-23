<template>
  <div class="page">
    <f7-navbar
      v-bind="shadowCorrector"
    >
      <div class="title">
        {{ title }}
      </div>
      <!-- menus -->
      <f7-nav-right v-show="activeTab === 'home'">
        <a
          href="/notification/"
          class="tab-link link"
        >
          <i class="icon f7-icons">bell_fill
            <span
              v-if="stat_notif"
              class="badge color-red"
            >
              {{ stat_notif }}
            </span>
          </i>
        </a>          
      </f7-nav-right>
    </f7-navbar>    

    <!-- searchbar & toolbar -->
    <div
      v-if="activeTab === 'polis'"
      class="toolbar tabbar tabbar-scrollable toolbar-top"
    >
      <div
        class="toolbar-inner"
      >
        <a
          v-for="(dt,i) in toolbarData"
          :key="i"
          :href="'#' + i" 
          :class="'tab-link ' + (i === toolbarActiveKey ? 'tab-link-active' : '')"
          @click="handleToolbarChanged(i)"
        >{{ dt }}</a>
      </div>
      <f7-subnavbar
        :inner="false"
        class="searchbar-base"
      >
        <f7-searchbar
          :placeholder="appLabel.polis.index.input.search.placeholder"
          :disable-button="true"
          @change="handleActionSearch"
        />
      </f7-subnavbar>    
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <!-- Home tab -->
      <div
        id="tab-1"
        :class="(activeTab === 'home' ? 'tab-active ' : '') + 'page-content tab'"
      >
        <page-home
          ref="home"
          @init="homeInit"
          @navigate="homeNavigate"
        />
      </div>
      <!-- Asuransi tab -->
      <div
        id="tab-2"
        :class="(activeTab === 'product' ? 'tab-active ' : '') + 'page-content tab'"
      >
        <page-product ref="product" />
      </div>
      <!-- Polis tab -->
      <div
        id="tab-3"
        :class="(activeTab === 'polis' ? 'tab-active ' : '') + 'page-content tab'"
      >
        <page-polis ref="polis" />
      </div>
      <!-- claim tab -->
      <div
        id="tab-4"
        class="page-content tab"
        :class="(activeTab === 'claim' ? 'tab-active ' : '') + 'page-content tab'"
      >
        <page-claim ref="claim" />
      </div>
      <!-- Account tab -->
      <div
        id="tab-5"
        class="page-content tab"
        :class="(activeTab === 'profile' ? 'tab-active ' : '') + 'page-content tab'"
      >
        <page-profile ref="profile" />
      </div>                   
    </div>      

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
          <i class="icon f7-icons">house_fill</i>
          <!-- Label text -->
          <span class="tabbar-label">{{ appLabel.general.menu.home }}</span>
        </a>
        <a
          ref="tabProduct"
          href="#tab-2"
          :class="(activeTab === 'product' ? 'tab-link-active ' : '') + 'tab-link'"
          @click="activeTab = 'product'"
        >
          <i class="icon f7-icons">umbrella_fill</i>
          <span class="tabbar-label">{{ appLabel.general.menu.product }}</span>
        </a>
        <a
          ref="tabPolis"
          href="#tab-3"
          :class="(activeTab === 'polis' ? 'tab-link-active ' : '') + 'tab-link'"
          @click="homeNavigate({
            tab: 'polis',
            params: { filters: null }
          })"
        >
          <i class="icon f7-icons">shield_lefthalf_fill</i>
          <span class="tabbar-label">{{ appLabel.general.menu.polis }}</span>
        </a>
        <a
          ref="tabClaim"
          href="#tab-4"
          class="tab-link"
          :class="(activeTab === 'claim' ? 'tab-link-active ' : '') + 'tab-link'"
          @click="activeTab = 'claim'"
        >
          <i class="icon f7-icons">exclamationmark_bubble_fill</i>
          <span class="tabbar-label">{{ appLabel.general.menu.claim }}</span>
        </a>
        <a
          ref="tabProfile"
          href="#tab-5"
          class="tab-link"
          :class="(activeTab === 'profile' ? 'tab-link-active ' : '') + 'tab-link'"
          @click="activeTab = 'profile'"
        >
          <i class="icon f7-icons">person_alt</i>
          <span class="tabbar-label">{{ appLabel.general.menu.profile }}</span>
        </a>                
      </div>
    </div>        
  </div>
</template>

<script>
import pageHome from '../components/pageHome.vue'
import pagePolis from '../components/pagePolis.vue'
import pageProduct from '../components/pageProduct.vue'
import pageClaim from '../components/pageClaim.vue'
import pageProfile from '../components/pageProfile.vue'
import appLabel from '../../json/labels.json'
import appJson from '../../json/app.json'
import menuGenerator from '../../modules/menuGenerator'
import debounce from '../../modules/debouncer' 

export default {
  components: {
    pageHome,
    pagePolis,
    pageProduct,
    pageClaim,
    pageProfile,
  },
  data() {
    return {
      appJson,
      menuGenerator,
      activeTab: 'home',
      appLabel: appLabel,
      toolbarActiveKey: null,
      toolbarData: [],
      stat_notif: 0
    }
  },
  computed: {
    title () {
      switch (this.activeTab) {
      case 'polis':
        return this.appLabel.general.menu.polis
      case 'product':
        return this.appLabel.general.menu.product
      case 'claim':
        return this.appLabel.general.menu.claim      
      case 'profile':
        return this.appLabel.general.menu.profile  
      default:
        return 'GantiRugi'
      }
    },
    shadowCorrector () {
      if (this.activeTab !== 'polis') return '' 
      return {
        'no-hairline': 'no-hairline', 
        'no-shadow': 'no-shadow'
      }
    }
  },
  watch: {
    activeTab (val) {
      try {
        this.$refs[val].init()

        if (this.activeTab === 'home') {
          if(this.$refs.home.dashboardData){
            this.stat_notif = this.$refs.home.dashboardData.stat.notification
          }
        }
        // if (this.activeTab === 'polis') {
        //   this.$refs[val].init()
        // }
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    // init
    this.toolbarData = menuGenerator(this.appJson.menus.polisstatus, this.$store.state.app.policy['insurance.status'])
    this.toolbarActiveKey = Object.keys(this.toolbarData)[0]
  },
  methods: {
    handleToolbarChanged (dt) {
      this.toolbarActiveKey = dt
      this.$refs.polis.filterStatus(dt)
    },
    handleActionSearch (searchbar) {
      const vm = this
      debounce(() => {
        vm.$refs.polis.search(searchbar.target.value)
      }, 75)
    },
    homeInit(dt) {
      this.stat_notif = dt.stat.notification
    },
    homeNavigate(dt) {
      this.activeTab = dt.tab
      if(dt.route) {
        this.$f7router.navigate(dt.route, {
          props: dt.params
        })
      } else {
        // if(this.activeTab === 'home') {
        //   this.$refs.tabHome.click()
        // }
        if(this.activeTab === 'polis') {
          // this.$refs.tabPolis.click()
          this.$refs['polis'].initPreFilter(dt.params ? dt.params : {})
        }
        // if(this.activeTab === 'product') {
        //   this.$refs.tabProduct.click()
        // }
        // if(this.activeTab === 'claim') {
        //   this.$refs.tabClaim.click()
        // }
        // if(this.activeTab === 'profile') {
        //   this.$refs.tabProfile.click()
        // }
      }
    }
  },
}
</script>

<style scoped>
  .tab {
    padding-bottom: var(--f7-tabbar-labels-height);
  }
  .tab-polis {
    margin-Top: calc( var(--f7-toolbar-height));
  }
</style>