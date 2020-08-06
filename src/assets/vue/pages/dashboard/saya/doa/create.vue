<template>
  <f7-page>
    <f7-navbar 
      :title="'Create Doa'"
      :back-link="''"
    />

    <f7-card>
      <f7-card-content>
        <f7-list no-hairlines-md>
          <!-- <f7-list-input
            label="Title"
            floating-label
            type="text"
            :value="title"
            placeholder="Title here"
            clear-button
            @input="title = $event.target.value"
          /> -->
          <f7-text-editor
            placeholder="Enter text..."
            :value="content"
            :buttons="buttons"
            @texteditor:change="(v) => content = v"
          />
        </f7-list>
      </f7-card-content>
    </f7-card>
    <!-- <f7-block>
        <div v-html="content"> </div>
    </f7-block> -->
    

    <f7-block
      class="mb-2"
      style="background-color: white;position: fixed; bottom: 0px;width: 100%"
    >
      <f7-row class="text-center">
        <f7-col>
          <div>
            <h1 class="text-color-primary" />
            <f7-button
              fill
              @click="save()"
            >
              {{ 'Save' }}
            </f7-button>
          </div>
        </f7-col>
      </f7-row>
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
      isLoading: false,
      isError: false,
      title: '',
      content: '',
      buttons: [
        ['bold', 'italic', 'underline'],
        ['orderedList', 'unorderedList'],
        ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify']
      ]
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
        // title: vm.title ? vm.title : null,
        content: vm.content ? vm.content : null
      }

      transporter.post({
        params,
        api: apiJson.API + 'api/v1/user/doa',
        token: vm.$store.getters['uac/getToken']
      }).then((res) => {
        console.log('check res', res)
        if(res.status){
          vm.$alert.show({
            vm: vm,
            type: 'success',
            text: 'Berhasil disimpan',
            autoClose: true
          })
          vm.isLoading = false
          vm.$f7router.navigate('/doa/' + res.data.id, {
            ignoreCache  : true,
            reloadCurrent : true
          })
        }else{
          vm.$alert.show({
            vm: vm,
            type: 'error',
            text: 'Gagal Menyimpan Data',
            autoClose: true
          })
        }
      }).catch((err) => {
        const error = vm.$errorHandler.translate(err)

        vm.$alert.show({
          vm: vm,
          type: 'error',
          text: error.text,
          autoClose: true
        })
        vm.isLoading = false
      })
    }
  }
}
</script>