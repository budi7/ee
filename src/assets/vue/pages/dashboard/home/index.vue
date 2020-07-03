<template>
  <div style="margin-top:-3em">
    <div class="ml-2 mb-1">
      <h2
        class="text-primary"
        style="margin-block-end: 0"
      >
        <strong>Renungan Hari ini</strong>
      </h2>
    </div>
    <f7-card class="demo-card-header-pic">
      <f7-card-header
        class="no-border"
        valign="bottom"
        style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg); height:8em"
      />
      <f7-card-content>
        <p><strong>Lorem ipsum dolor</strong></p>
        <p class="date">
          Posted on January 21, 2015
        </p>
        <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
      </f7-card-content>
      <f7-card-footer>
        <f7-link />
        <f7-link>Read more</f7-link>
      </f7-card-footer>
    </f7-card>
    <div class="ml-2 mb-1">
      <h2
        class="text-primary"
        style="margin-block-end: 0"
      >
        <strong>News</strong>
      </h2>
    </div>
    <f7-swiper
      pagination
      :params="{speed:500, slidesPerView: 'auto', spaceBetween: 10, autoplay:{delay: 5000}}"
    >
      <f7-swiper-slide
        v-for="(i,key) in 3"
        :key="key"
      >
        <f7-card
          outline
          title="Card header"
          content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
          footer="Card footer"
        />
      </f7-swiper-slide>
    </f7-swiper>
    <div class="ml-2 mb-1">
      <h2
        class="text-primary"
        style="margin-block-end: 0"
      >
        <strong>Event Mendatang</strong>
      </h2>
    </div>
    
    <f7-card class="mb-3">
      <f7-card-content>
        <f7-list
          accordion-list
        >
          <f7-list-item
            v-for="(i,key) in 3"
            :key="key"
            accordion-item
            title="Lorem Ipsum"
          >
            <f7-accordion-content>
              <f7-block>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.
                </p>
              </f7-block>
            </f7-accordion-content>
          </f7-list-item>
        </f7-list>
      </f7-card-content>
    </f7-card>
  </div>
</template>

<script>
// import transporter from '../../modules/axiosTransporter'

export default {
  data() {
    return {
    }
  },
  computed: {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      console.log('init')
    }
  }
}
</script>

<style>
  .banner {
    height: 17vh;
  }
</style>