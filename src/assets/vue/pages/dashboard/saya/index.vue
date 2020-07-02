<template>
  <div>
    <f7-list>
      <f7-list-item>
        <div class="row w-100">
          <div class="col">
            <h4
              class="title"
            >
              Ardian Kurniawan
            </h4>

            <p class="mb-0 item-text">
              <small>
                ardian@thunderlab.id
              </small>
            </p>         
          </div>
        </div>
      </f7-list-item>
    </f7-list>
    <div class="list">
      <ul>
        <li>
          <a
            href="#"
            class="item-link item-content"
          >
            <div class="item-media">
              <i class="icon f7-icons small text-color-red"></i>
            </div>
            <div class="item-inner">
              <div class="item-title">Change Password</div>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="item-link item-content"
          >
            <div class="item-media">
              <i class="icon f7-icons small text-color-red">power</i>
            </div>
            <div class="item-inner">
              <div class="item-title">Log out</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import transporter from '../../modules/axiosTransporter'
import appJson from '../../../../json/app.json'

export default {
  data() {
    return {
      appJson,
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