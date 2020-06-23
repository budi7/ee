import axios from 'axios'
import apiJson from '../../json/api.json'
import localStorage from '../../bridge/webStorage'

const uac = {
  namespaced: true,
  state () {
    return {
      appVersion: 0,
      policyVersion: 0,
      policy: null,
      config: {}
    }
  },
  getters: {

  },
  mutations: {
    init (state) {
      // load from bridge store
      const ls = localStorage.get('app')
      if (!ls.status || ls.data === null) return // no data or error

      state.appVersion = ls.data.appVersion
      state.policyVersion = ls.data.policyVersion
      state.config = ls.data.config
      state.policy = ls.data.policy
      console.log(state)
    },
    updateAppVersion (state, payload) {
      state.appVersion = payload
      // save to bridge store
      localStorage.store('app', JSON.stringify(state))
    },
    updatePolicy(state, payload) {
      state.policyVersion = payload.version
      state.policy = payload.policy
      // save to bridge store
      console.log(payload)
      localStorage.store('app', JSON.stringify(state))
    }
  },
  actions: {
    checkUpdate () {
      return new Promise((resolve, reject) => {
        axios.get(apiJson.API + apiJson.endpoint.checkUpdate, {
        }).then(resp => {
          // validate data
          if (!resp.data.success) {
            let err = new Error(resp.data.message)
            err.status = 400
            err.data = resp.data.data
            throw err
          }
          // resolve
          resolve(resp.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    update () {
      return new Promise((resolve, reject) => {
        axios.get(apiJson.API + apiJson.endpoint.update, {
        }).then(resp => {
          // validate data
          if (!resp.data.success) {
            let err = new Error(resp.data.message)
            err.status = 400
            err.data = resp.data.data
            throw err
          }
          // resolve
          console.log(resp.data)
          resolve(resp.data)
        }).catch(err => {
          reject(err)
        })
      })
    }    
  }
}

export default uac
