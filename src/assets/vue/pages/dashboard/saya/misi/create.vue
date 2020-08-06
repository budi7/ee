<template>
  <f7-page class="mb-5 pb-5">
    <f7-navbar 
      :title="'Create Misi'"
      :back-link="''"
    />
    <f7-card class="pb-3">
      <f7-card-content>
        <f7-list form>
          <f7-list-input
            :value="name"
            label="Name"
            type="text"
            placeholder="Your Name"
            clear-button
            :error-message="error && error.name ? error.name : ''"
            :error-message-force="error && error.name ? true : false"
            @input="name = $event.target.value"
          />
          <f7-list-input
            :value="address"
            label="Address"
            type="text"
            placeholder="Your Address"
            clear-button
            :error-message="error && error.address ? error.address : ''"
            :error-message-force="error && error.address ? true : false"
            @input="address = $event.target.value"
          />
          <f7-list-input
            :value="city"
            label="City"
            type="text"
            placeholder="Your City"
            clear-button
            :error-message="error && error.city ? error.city : ''"
            :error-message-force="error && error.city ? true : false"
            @input="city = $event.target.value"
          />
        </f7-list>
      </f7-card-content>
    </f7-card>

    <div class="ml-2 mb-2">
      <h3
        class="text-primary"
        style="margin-block-end: 0"
      >
        <strong>Evangelism Note</strong>
      </h3>
    </div>

    <f7-card class="pb-3 mb-5">
      <f7-card-content>
        <div>
          <strong class="text-primary">Persahabatan</strong>
        </div>
        <f7-list form>
          <f7-list-input
            :value="persahabatan.kehidupan_sehari_hari"
            label="Kehidupan Sehari-hari"
            type="text"
            placeholder="Kehidupan Sehari-hari"
            clear-button
            :error-message="error && error.kehidupan_sehari_hari ? error.kehidupan_sehari_hari : ''"
            :error-message-force="error && error.kehidupan_sehari_hari ? true : false"
            @input="persahabatan.kehidupan_sehari_hari = $event.target.value"
          />
          <f7-list-input
            :value="persahabatan.latar_belakang_rohani"
            label="Latar Belakang Rohani"
            type="text"
            placeholder="Latar Belakang Rohani"
            clear-button
            :error-message="error && error.latar_belakang_rohani ? error.latar_belakang_rohani : ''"
            :error-message-force="error && error.latar_belakang_rohani ? true : false"
            @input="persahabatan.latar_belakang_rohani = $event.target.value"
          />
          <f7-list-input
            :value="persahabatan.kegiatan_rohani"
            label="Kegiatan Rohani"
            type="text"
            placeholder="Kegiatan Rohani"
            clear-button
            :error-message="error && error.kegiatan_rohani ? error.kegiatan_rohani : ''"
            :error-message-force="error && error.kegiatan_rohani ? true : false"
            @input="persahabatan.kegiatan_rohani = $event.target.value"
          />
          <f7-list-input
            :value="persahabatan.pertanyaan_jembatan"
            label="Pertanyaan Jembatan"
            type="text"
            placeholder="Pertanyaan Jembatan"
            clear-button
            :error-message="error && error.pertanyaan_jembatan ? error.pertanyaan_jembatan : ''"
            :error-message-force="error && error.pertanyaan_jembatan ? true : false"
            @input="persahabatan.pertanyaan_jembatan = $event.target.value"
          />
          <f7-list-input
            :value="persahabatan.pd1"
            label="Pd1"
            type="text"
            placeholder="Pd1"
            clear-button
            :error-message="error && error.pd1 ? error.pd1 : ''"
            :error-message-force="error && error.pd1 ? true : false"
            @input="persahabatan.pd1 = $event.target.value"
          />
          <f7-list-input
            :value="persahabatan.pd2"
            label="Pd2"
            type="text"
            placeholder="Pd2"
            clear-button
            :error-message="error && error.pd2 ? error.pd2 : ''"
            :error-message-force="error && error.pd2 ? true : false"
            @input="persahabatan.pd2 = $event.target.value"
          />
          <f7-list-input
            :value="persahabatan.kisah_injil"
            label="Kisah Injil"
            type="text"
            placeholder="Kisah Injil"
            clear-button
            :error-message="error && error.kisah_injil ? error.kisah_injil : ''"
            :error-message-force="error && error.kisah_injil ? true : false"
            @input="persahabatan.kisah_injil = $event.target.value"
          />
        </f7-list>
        
        <div class="mt-4">
          <strong class="text-primary">Komitmen</strong>
        </div>
        <f7-list form>
          <f7-list-input
            :value="komitmen.pert_penjelasan"
            label="Pert Penjelasan"
            type="text"
            placeholder="Pert Penjelasan"
            clear-button
            :error-message="error && error.doa_komitmen ? error.doa_komitmen : ''"
            :error-message-force="error && error.doa_komitmen ? true : false"
            @input="komitmen.pert_penjelasan = $event.target.value"
          />
          <f7-list-input
            :value="komitmen.pert_komitmen"
            label="Pert Komitmen"
            type="text"
            placeholder="Pert Komitmen"
            clear-button
            :error-message="error && error.pert_komitmen ? error.pert_komitmen : ''"
            :error-message-force="error && error.pert_komitmen ? true : false"
            @input="komitmen.pert_komitmen = $event.target.value"
          />
          <f7-list-input
            :value="komitmen.doa_komitmen"
            label="Doa Komitmen"
            type="text"
            placeholder="Doa Komitmen"
            clear-button
            :error-message="error && error.doa_komitmen ? error.doa_komitmen : ''"
            :error-message-force="error && error.doa_komitmen ? true : false"
            @input="komitmen.doa_komitmen = $event.target.value"
          />
          <f7-list-input
            :value="komitmen.pertumbuhan"
            label="Pertumbuhan"
            type="text"
            placeholder="Pertumbuhan"
            clear-button
            :error-message="error && error.pertumbuhan ? error.pertumbuhan : ''"
            :error-message-force="error && error.pertumbuhan ? true : false"
            @input="komitmen.pertumbuhan = $event.target.value"
          />
          <f7-list-input
            :value="komitmen.keterangan"
            label="Keterangan"
            type="text"
            placeholder="Keterangan"
            clear-button
            :error-message="error && error.keterangan ? error.keterangan : ''"
            :error-message-force="error && error.keterangan ? true : false"
            @input="komitmen.keterangan = $event.target.value"
          />
        </f7-list>

        <div class="mt-4">
          <strong class="text-primary">Penyaji</strong>
        </div>
        <f7-list form>
          <f7-list-input
            :value="penyaji.pertama"
            label="1"
            type="text"
            placeholder=""
            clear-button
            :error-message="error && error.pertama ? error.pertama : ''"
            :error-message-force="error && error.pertama ? true : false"
            @input="penyaji.pertama = $event.target.value"
          />
          <f7-list-input
            :value="penyaji.kedua"
            label="2"
            type="text"
            placeholder=""
            clear-button
            :error-message="error && error.kedua ? error.kedua : ''"
            :error-message-force="error && error.kedua ? true : false"
            @input="penyaji.kedua = $event.target.value"
          />
          <f7-list-input
            :value="penyaji.ketiga"
            label="3"
            type="text"
            placeholder=""
            clear-button
            :error-message="error && error.ketiga ? error.ketiga : ''"
            :error-message-force="error && error.ketiga ? true : false"
            @input="penyaji.ketiga = $event.target.value"
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
      error: null,
      name: '',
      address: '',
      city: '',
      persahabatan: {
        kehidupan_sehari_hari: null,
        latar_belakang_rohani: null,
        kegiatan_rohani: null,
        pertanyaan_jembatan: null,
        pd1: null,
        pd2: null,
        kisah_injil: null
      },
      komitmen: {
        pert_penjelasan: null,
        pert_komitmen: null,
        doa_komitmen: null,
        pertumbuhan: null,
        keterangan: null
      },
      penyaji: {
        pertama: null,
        kedua: null,
        ketiga: null
      }
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
        name: vm.name,
        address: vm.address,
        city: vm.city,
        content: {
          persahabatan: vm.persahabatan,
          komitmen: vm.komitmen,
          penyaji: {
            1: vm.penyaji.pertama,
            2: vm.penyaji.kedua,
            3: vm.penyaji.ketiga
          }
        }
      }

      transporter.post({
        params,
        api: apiJson.API + 'api/v1/user/mission',
        token: vm.$store.getters['uac/getToken']
      }).then((res) => {
        console.log('check res', res)
        if (res.status) {
          vm.$alert.show({
            vm: vm,
            type: 'success',
            text: 'Success',
            autoClose: true
          })
          vm.isLoading = false
          vm.$f7router.navigate('/misi/' + res.data.id, {
            ignoreCache  : true,
            reloadCurrent : true
          })
        }else{
          vm.error = {
            name: res.data.name ? res.data.name :null,
            city: res.data.city ? res.data.city : null,
            doa_komitmen: res.data && res.data['content.komitmen.doa_komitmen'] ? res.data['content.komitmen.doa_komitmen'] : null,
            keterangan: res.data && res.data['content.komitmen.keterangan'] ? res.data['content.komitmen.keterangan'] : null,
            pert_komitmen: res.data && res.data['content.komitmen.pert_komitmen'] ? res.data['content.komitmen.pert_komitmen'] : null,
            pert_penjelasan: res.data && res.data['content.komitmen.pert_penjelasan'] ? res.data['content.komitmen.pert_penjelasan'] : null,
            pertumbuhan: res.data && res.data['content.komitmen.pertumbuhan'] ? res.data['content.komitmen.pertumbuhan'] : null,
            pertama: res.data && res.data['content.penyaji.1'] ? res.data['content.penyaji.1'] : null,
            kedua: res.data && res.data['content.penyaji.2'] ? res.data['content.penyaji.2'] : null,
            ketiga: res.data && res.data['content.penyaji.3'] ? res.data['content.penyaji.3'] : null, 
            kegiatan_rohani: res.data && res.data['content.persahabatan.kegiatan_rohani'] ? res.data['content.persahabatan.kegiatan_rohani'] : null,
            kehidupan_sehari_hari: res.data && res.data['content.persahabatan.kehidupan_sehari_hari'] ? res.data['content.persahabatan.kehidupan_sehari_hari'] : null,
            kisah_injil: res.data && res.data['content.persahabatan.kisah_injil'] ? res.data['content.persahabatan.kisah_injil'] : null,
            latar_belakang_rohani: res.data && res.data['content.persahabatan.latar_belakang_rohani'] ? res.data['content.persahabatan.latar_belakang_rohani'] : null,
            pd1: res.data && res.data['content.persahabatan.pd1'] ? res.data['content.persahabatan.pd1'] : null,
            pd2: res.data && res.data['content.persahabatan.pd2'] ? res.data['content.persahabatan.pd2'] : null,
            pertanyaan_jembatan: res.data && res.data['content.persahabatan.pertanyaan_jembatan'] ? res.data['content.persahabatan.pertanyaan_jembatan'] : null,
          }
          console.log('RES DATA',res.data)
          console.log('RES DATA CONTENT',res.data['content.penyaji.1'])
          console.log('ERROR',vm.error)
          vm.$alert.show({
            vm: vm,
            type: 'error',
            text: 'Failed',
            autoClose: true
          })
          vm.isLoading = false
          
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