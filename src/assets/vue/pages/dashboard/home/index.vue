<template>

  <div style="margin-top:-3em">
    <div class="ml-2 mb-1">
      <h2
        class="text-primary"
        style="margin-block-end: 0"
      >
        <strong>Renungan</strong>
      </h2>
    </div>
    <f7-card
      v-if="first_content"
      :class="'demo-card-header-pic'"
    >
      <f7-card-header
        v-if="first_content"
        class="no-border"
        valign="bottom"
        :style="first_content_loading ?'' : `background-image:url(${first_content.image_url}); min-height:10em`"
      />
      <f7-card-content v-if="first_content">
        <p><strong>{{ first_content.title }}</strong></p>
        <p class="date">
          {{ first_content.published_at | toDate }}
        </p>
        <div v-html="first_content.content" />
      </f7-card-content>
    </f7-card>
    <f7-card
      v-else
      :class="first_content_loading ? 'skeleton-text skeleton-effect-fade' : ''"
      :content="first_content_loading ? 'This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element.' : 'Tidak ada Data'"
    />
    <div class="ml-2 mb-1">
      <h2
        class="text-primary"
        style="margin-block-end: 0"
      >
        <strong>News</strong>
      </h2>
    </div>
    <f7-swiper
      v-if="second_content"
      pagination
      :params="{speed:500, touchMoveStopPropagation:true, slidesPerView: 'auto', spaceBetween: 10, autoplay:{delay: 5000}}"
    >
      <f7-swiper-slide
        v-for="(content,key) in second_content"
        :key="key"
        @click.native="onNavigate(content.link_to)"
      >
        <!-- <a href="https://framework7.io/vue/swiper.html"> -->
        <f7-card
          :class="second_content_loading ? 'skeleton-text skeleton-effect-fade' : ''"
          :style="`background-image:url(${content.slider_url});min-height: 100px`"
          outline
        />
        <!-- </a> -->
      </f7-swiper-slide>
    </f7-swiper>
    <f7-card
      v-else
      :class="'skeleton-text skeleton-effect-fade'"
      content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
    />
    
    <div class="ml-2 mb-1">
      <h2
        class="text-primary"
        style="margin-block-end: 0"
      >
        <strong>Event Mendatang</strong>
      </h2>
    </div>
    
    <f7-card class="mb-3">
      <f7-card-content
        v-if="third_content"
        :class="third_content_loading ? '' : ''"
      >
        <f7-list
          v-if="third_content.length > 0"
          accordion-list
        >
          <f7-list-item
            v-for="(content,key) in third_content"
            :key="key"
            accordion-item
            :title="`${content.title}`"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <f7-row class="mt-2">
                  <f7-col>
                    <div>
                      {{ content.at | toDate }}
                    </div>
                  </f7-col>
                </f7-row>
                <f7-row class="mt-3">
                  <f7-col>
                    <div v-html="content.description" />
                  </f7-col>
                </f7-row>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
        </f7-list>
        <div v-else>
          Tidak ada Data
        </div>
      </f7-card-content>
      <f7-card-content
        v-else
        :class="third_content_loading ? 'skeleton-text skeleton-effect-fade' : ''"
      >
        <f7-list
          v-if="third_content_loading"
          accordion-list
        >
          <f7-list-item
            v-for="(content,key) in 3"
            :key="key"
            accordion-item
            :title="`This is a simple card to test This is a `"
          >
            <f7-accordion-content class="pb-2">
              <f7-block>
                <f7-row class="mt-2">
                  <f7-col>
                    <div />
                  </f7-col>
                </f7-row>
                <f7-row class="mt-3">
                  <f7-col>
                    <div />
                  </f7-col>
                </f7-row>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
        </f7-list>
        <div v-else>
          Tidak ada Data
        </div>
      </f7-card-content>
    </f7-card>
  </div>
</template>

<script>
import transporter from '../../../../modules/axiosTransporter'
import apiJson from '../../../../json/api.json'

export default {
  data() {
    return {
      apiJson,
      first_content: null,
      second_content: null,
      third_content: null,
      first_content_loading: true,
      second_content_loading: true,
      third_content_loading: true,
      first_content_error: false,
      second_content_error: false,
      third_content_error: false,
    }
  },
  computed: {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.resetSetting()
      this.loadData()
    },
    onNavigate(link){
      window.open(link)
    },
    resetSetting() {
      this.first_content = null
      this.second_content = null
      this.third_content = null
      this.first_content_loading = true
      this.second_content_loading = true
      this.third_content_loading = true
      this.first_content_error = false
      this.second_content_error = false
      this.third_content_error = false
    },
    loadData() {
      this.load_first_content()
      this.load_second_content()
      this.load_third_content()
    },
    load_first_content() {
      const vm = this
      const api = this.apiJson.API + 'api/v1/user/renungan'
      let param = {
        skip: 0,
        take: 1
      }
      vm.first_content_loading = true
      vm.first_content_error = false

      transporter.get({
        params: param,
        api: api,
        token: vm.$store.getters['uac/getToken']
      }).then((res) => {
        vm.first_content = res.status ? res.data[0] : null
        // vm.$set(vm, 'first_content', res.data)
        console.log('first content', vm.res.data[0])
      }).catch((err) => {
        console.error('error', err)
        this.first_content_error = true
      })
      setTimeout(() => {
        this.first_content_loading = false
      }, 2000)
    },
    load_second_content() {
      const vm = this
      const api = this.apiJson.API + 'api/v1/user/config/slider'

      vm.second_content_loading = true
      vm.second_content_error = false

      transporter.get({
        api: api,
        token: vm.$store.getters['uac/getToken']
      }).then((res) => {
        vm.second_content = res.data
        // vm.$set(vm, 'second_content', res.data)
        // console.log('check res', vm.second_content)
      }).catch((err) => {
        console.error('error', err)
        this.second_content_error = true
      })
      setTimeout(() => {
        this.second_content_loading = false
      }, 2000)
    },
    load_third_content() {
      const vm = this
      const api = this.apiJson.API + 'api/v1/user/event'
      let param = {
        skip: 0,
        take: 3
      }
      vm.third_content_loading = true
      vm.third_content_error = false

      transporter.get({
        params: param,
        api: api,
        token: vm.$store.getters['uac/getToken']
      }).then((res) => {
        vm.third_content = res.data ? res.data : null
        // vm.$set(vm, 'third_content', res.data)
        // console.log('third content', res)
      }).catch((err) => {
        console.error('error', err)
        this.third_content_error = true
      })
      setTimeout(() => {
        this.third_content_loading = false
      }, 2000)
    }
  }
}
</script>
<style>
  .list .item-title{
    font-size: 12pt !important;
    font-weight: bold;
  }
</style>