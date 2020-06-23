<template>
  <img 
    :src="imgData"
    class="banner card-photo"
  >
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      imgData: null,
    }
  },
  mounted() {
    setTimeout(this.getImg, 250)
  },
  methods: {
    getImg () {
      const vm = this
      
      var xhr = new XMLHttpRequest()
      xhr.responseType = 'arraybuffer'
      xhr.open('GET', this.url, true)
      xhr.onreadystatechange = function() {
        if(this.readyState == this.DONE) {
          let TYPED_ARRAY = new Uint8Array(this.response)
          const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
            return data + String.fromCharCode(byte)
          }, '')

          vm.imgData = STRING_CHAR
        }
      }
      xhr.send(null)
    },
  },
}
</script>

<style scoped>
  .card-photo {
    background-color: #ccc;
    height: 33vh;
  }
</style>