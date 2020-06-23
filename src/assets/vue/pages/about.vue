<template>
  <f7-page>
    <f7-navbar
      back-link=""
    >
      <div class="title">
        {{ appLabel.title }}
      </div>
    </f7-navbar>
    <f7-block class="mt-3">
      <f7-row>
        <f7-col>
          <div
            v-for="(dt,i) in label"
            :key="i"
          >
            <h3 class="mt-0 mb-1">
              {{ dt.title }}
            </h3>
            <p
              class="mt-1 dynamic"
              v-html="dt.content"
            />
          </div>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
import appLabel from '../../json/labels.json'
import appJson from '../../json/app.json'

export default {
  data() {
    return {
      appLabel: appLabel.about,
      appJson,
      label: this.$store.state.app.policy['web.info'] ? this.$store.state.app.policy['web.info']['about'] : []
    }
  },
}
</script>

<style lang="scss">
.dynamic {
  ul {
    padding-left: 1.33em !important; 
  }
}
</style>