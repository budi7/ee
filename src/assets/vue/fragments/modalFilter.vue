<template>
  <div class="page">
    <!-- navbar -->
    <f7-navbar 
      :title="appLabel.title"
    >
      <f7-nav-right>
        <f7-link popup-close>
          <i class="icon f7-icons">xmark</i>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>

    <!-- bottom toolbar -->
    <f7-toolbar
      position="bottom"
      class="toolbar-secondary no-hairline"
    >
      <div class="row w-100">
        <div 
          :class="!$f7.device.ios ? 'col-100 pl-2 pr-2' : 'col-100 pl-1 pl-1'"
        >
          <f7-button
            class="text-color-white"
            @click="apply"
          >
            {{ appLabel.actions.apply }}
          </f7-button>
        </div>
      </div>
    </f7-toolbar>       
    <div
      v-if="filterLists"
      class="page-content"
    >
      <template v-for="(fltr, i) in filterLists">
        <div :key="i">
          <f7-block-header class="capitalize">
            {{ appJson.dictionary[filterKey][i] }}
          </f7-block-header>
          <!-- content  -->
          <f7-list>
            <f7-list-item
              :ref="i + '-'"
              radio
              radio-icon="end"
              title="Semua"
              :name="'radio-' + i" 
              :checked="!filter[i] ? true : false"
              @click="handleFilterPick(i, null)"
            />
            <f7-list-item
              v-for="(dt,k) in fltr"
              :key="k"
              radio
              radio-icon="end"
              :title="appJson.dictionary[i][dt]"
              :name="'radio-' + i"
              :checked="filter[i] == dt ? true : false"
              @click="handleFilterPick(i, dt)"
            />
          </f7-list>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import appJson from '../../json/app.json'
import appLabel from '../../json/labels.json'

export default {  
  props: {
    filterLists: {
      default: () => { return  {} }, 
      type: Object
    },
    filterKey: {
      default: null,
      type: String
    }
  },
  data() {
    return {
      appJson,
      appLabel: appLabel.general.filter,
      filter: {}
    }
  },
  methods: {
    setFilter (dt) {
      if (dt) {
        this.filter = dt
      } else {
        this.filter = {}
      }
    },
    handleFilterPick(_key, _data) {
      this.filter[_key] = _data
    },
    apply () {
      console.log(this.filter)
      this.$emit('done', this.filter)
    }
  }
}
</script>

<style lang="scss" scoped>
  .toolbar-secondary .toolbar-inner a {
    color: white !important;
  }
</style>