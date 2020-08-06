<template>
  <f7-page>
    <f7-navbar 
      :title="'Change Password'"
      :back-link="'/'"
    />
    <f7-block>
      <div class="list no-hairlines-md">
        <ul>
          <li class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-floating-label">
                Old Password
              </div>
              <div class="item-input-wrap">
                <input
                  v-model="old_password"
                  type="password"
                  placeholder="Old Password"
                >
                <span class="input-clear-button" />
              </div>
            </div>
          </li>
          <li class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-floating-label">
                New Password
              </div>
              <div class="item-input-wrap">
                <input
                  v-model="new_password"
                  type="password"
                  placeholder="New password"
                >
                <span class="input-clear-button" />
              </div>
            </div>
          </li>
          <li class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-floating-label">
                Confirm Password
              </div>
              <div class="item-input-wrap">
                <input
                  v-model="confirm_password"
                  type="password"
                  placeholder="Confirm password"
                >
                <span class="input-clear-button" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <f7-button
        :class="loading ? 'disabled mb-2':'mb-2'"
        style="width:100%"
        fill
        large
        @click="save"
      >
        <!-- @click="onSubmit(plan)" -->
        <f7-preloader
          v-if="loading"
          color="white"
        />
        {{ loading ? '' : 'Login' }}
      </f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
import appJson from '../../../../../json/app.json'
import apiJson from '../../../../../json/api.json'
import transporter from '../../../../../modules/axiosTransporter'
export default {
  components: {
  },
  data() {
    return {
      appJson,
      apiJson,
      loading: false,
      isError: false,
      old_password: null,
      new_password: null,
      confirm_password: null,
    }
  },
  mounted() {
    console.log('yes loaded')
    if (this.data) {
      this.$set(this, 'input', this.data)
    }
  },
  methods: {
    save() {
      const vm = this
      var params = {
        new_password: vm.new_password ? vm.new_password : null,
        old_password: vm.old_password ? vm.old_password : null
      }

      transporter.post({
        params,
        api: apiJson.API + 'api/v1/user/reset-password',
        token: vm.$store.getters['uac/getToken']
      }).then((res) => {
        console.log('check res', res)
        vm.$alert.show({
          vm: vm,
          type: 'success',
          text: res.message,
          autoClose: true
        })
        vm.loading = false
        vm.$f7router.navigate('/misi/' + res.data.id, {
          ignoreCache  : true,
          reloadCurrent : true
        })
      }).catch((err) => {
        const error = vm.$errorHandler.translate(err)

        vm.$alert.show({
          vm: vm,
          type: 'error',
          text: error.text,
          autoClose: true
        })
        vm.loading = false
      })
    }
  }
}
</script>