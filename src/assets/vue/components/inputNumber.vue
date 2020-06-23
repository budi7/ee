<template>
  <input
    v-model="formattedNumber"
    type="tel"
    :placeholder="placeholder"
  >
</template>

<script>
import {formatNumber} from '../../modules/numberFormat'

export default {
  props: {
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    inputValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      realValue: 0
    }
  },
  computed: {
    formattedNumber: {
      set: function(val) {
        this.realValue = parseInt(val.split('.').join(''))
        return this.realValue
      },
      get: function() {
        if (!this.realValue) return ''
        return formatNumber(this.realValue) 
      }
    }
  },
  watch: {
    realValue (v) {
      this.$emit('changed', v)
    }
  }
}
</script>

<style scoped>

</style>