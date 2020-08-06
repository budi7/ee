<template>
  <div>
    <f7-list>
      <f7-list-item>
        <div class="row w-100">
          <div class="col">
            <h4
              class="title"
            >
              {{ profile.name }}
            </h4>

            <p class="mb-0 item-text">
              <small>
                {{ profile.username }}
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
            @click="$f7router.navigate('/misi')"
          >
            <div class="item-media">
              <i class="icon f7-icons small text-primary">checkmark_seal_fill</i>
            </div>
            <div class="item-inner">
              <div class="item-title">Misi</div>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="item-link item-content"
            @click="$f7router.navigate('/doa')"
          >
            <div class="item-media">
              <i class="icon f7-icons small text-primary">captions_bubble_fill</i>
            </div>
            <div class="item-inner">
              <div class="item-title">Doa</div>
            </div>
          </a>
        </li>
        <!-- <li>
          <a
            href="#"
            class="item-link item-content"
            @click="$f7router.navigate('/change-password')"
          >
            <div class="item-media">
              <i class="icon f7-icons small text-primary">lock_fill</i>
            </div>
            <div class="item-inner">
              <div class="item-title">Change Password</div>
            </div>
          </a>
        </li> -->
        <li>
          <a
            href="#"
            class="item-link item-content"
            @click="confirmLogout"
          >
            <div class="item-media">
              <i class="icon f7-icons small text-primary">power</i>
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
      profile: this.$store.getters['uac/profile']
    }
  },
  computed: {
  },
  mounted() {
    console.log('PROFILE',this.$$store.getters['uac/profile'])
    this.init()
  },
  methods: {
    init() {
    },
    confirmLogout() {
      const vm =this
      this.$f7.dialog.confirm('Yakin untuk keluar ?', 'Logout', function () {
        // do logout
        vm.$store.commit('uac/logout')
        vm.$f7router.navigate('/', {
          ignoreCache  : true,
          reloadCurrent : true
        })
      })

    }
  }
}
</script>