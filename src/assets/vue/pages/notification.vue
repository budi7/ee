<template>
  <page-list
    ref="pageList"
    :navbar-title="appLabel.title"
    :with-searchbar="false"
    :list-per-page="appJson.perPage"
    :error-title="appErrors.fetcherror"
    :retry-title="appLabel.actions.retry"
    :empty-title="appErrors.fetchnodata"
    :empty-logo="appJson.images.empty"
    :error-logo="appJson.images.error"
    :api="apiJson.API + apiJson.endpoint.notification"
    :token="$store.getters['uac/getToken']"
  >
    <!-- list data  -->
    <template
      v-slot:listcard="{data}"
    > 
      <div class="item-inner">
        <div class="item-title-row">
          <div class="item-title">
            {{ data.title }}
          </div>
        </div>

        <div class="item-text">
          {{ data.description }}
        </div>        
      </div>
    </template>

    <!-- list skeleton  -->
    <template slot="skeleton">
      <div class="item-inner">
        <div class="item-title-row">
          <div class="item-title">
            Judul Notifikasi
          </div>
        </div>
        <div class="item-text">
          Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. 
        </div>
      </div>
    </template>
  </page-list>

  <!-- <f7-list
        media-list
        class="skeleton-text skeleton-effect-blink"
      >
        <f7-list-item
          v-for="(dt,i) in perPage"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
        />
      </f7-list>     -->
  <!-- <f7-list
      class="searchbar-found"
      media-list
      virtual-list
      :virtual-list-params="{ items, searchAll, renderExternal, height: $theme.ios ? 63 : ($theme.md ? 73 : 46)}"
    >
      <ul>
        <f7-list-item
          v-for="(item, index) in 20"
          :key="index"
          media-item
          link="#"
          :title="item.title"
          :subtitle="item.subtitle"
          :style="`top: ${vlData.topPosition}px`"
        />
      </ul>
    </f7-list> -->
</template>

<script>
import appJson from '../../json/app.json'
import apiJson from '../../json/api.json'
import appLabel from '../../json/labels.json'
import appErrors from '../../json/errors.json'
import pageList from '../components/pageList.vue' 
import iconGenerator from '../../modules/f7IconGenerator'

export default {
  components: {
    pageList
  },
  data() {
    return {
      appJson,
      apiJson,
      iconGenerator,
      appLabel: appLabel.notification,
      appErrors: appErrors.general,
      isMoreData: true,
      isError: false,
      insuranceCoverageLevel: this.$store.state.app.policy['insurance.coverage_level']
    }
  },
  mounted() {
    const vm = this
    this.$nextTick(() => {
      vm.$refs.pageList.init()
    })
  },
  methods: {
  },
}
</script>

<style>

</style>