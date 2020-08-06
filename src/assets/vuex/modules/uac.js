import axios from 'axios'
import apiJson from '../../json/api.json'
import webstorage from '../../bridge/webStorage'

const uac = {
  namespaced: true,
  state () {
    return {
      token: webstorage.get('token').data ? webstorage.get('token').data : null,
      profile: webstorage.get('profile').data ? webstorage.get('profile').data : null
    }
  },
  getters: {
    isAuthed: state => {
      return !!state.token
    },
    username: state => {
      return state.profile ? state.profile.username : '_'
    },
    getToken: state => {
      if (!state.token) return null
      return 'Bearer ' + state.token
    },
    profile: state => {
      return state.profile
    }
  },
  mutations: {
    initStore: state => {
      state.token = null
      state.profile = {}
    },
    setProfile: (state, payload) => {
      state.profile = payload.profile
    },
    login: (state, payload) => {
      state.token = payload.token
      state.profile = payload
      webstorage.store('token',JSON.stringify(payload.token))
      webstorage.store('profile',JSON.stringify(payload.user))
    },
    logout: (state) => {
      state.profile = null
      state.token = null
      webstorage.store('token',null)
      webstorage.store('profile',null)
      // console.log('CEK TOKEN STORAGE',webstorage.get('token'))
    },
    requestForgetPasswordToken: (state, payload) => {
      console.log(payload)
      console.log(state)
    },
    register: (state, payload) => {
      state.profile = payload
    }    
  },
  actions: {
    login ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post(apiJson.API + 'api/v1/user/login', {
          username: payload.username,
          password: payload.password,
          device_name: payload.device_name
          // grant_type: 'password',
          // client_id: apiJson.client_id,
          // client_secret: apiJson.client_secret,
          // scope: '*'
        }).then(resp => {
          // validate data
          console.log('RESP',resp)
          commit('login', {
            token: resp.data.data.token,
            user: resp.data.data.user
          })
          resolve(resp)
        }).catch(err => {
          reject(err)
        })
      })
    },
    register ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post(apiJson.API + apiJson.endpoint.register, {
          name: payload.name,
          username: payload.username,
          password: payload.password,
          utm_source: 'android',
          utm_medium: payload.referral,
          utm_campaign: 'broadcast',
          grant_type: 'password',
          client_id: apiJson.client_id,
          client_secret: apiJson.client_secret,
          scope: '*'
        }).then(resp => {
          // validate data
          commit('login', resp)
          resolve(resp)
        }).catch(err => {
          reject(err)
        })
      })
    },
    requestForgotPasswordToken ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post(apiJson.API + apiJson.endpoint.forgotPassword, {
          username: payload.username,
          password: payload.password,
          grant_type: 'password',
          client_id: apiJson.client_id,
          client_secret: apiJson.client_secret,
          scope: '*'
        }).then(resp => {
          // validate data
          commit('requestForgetPasswordToken', resp)
          resolve(resp)
        }).catch(err => {
          reject(err)
        })
      })    
    }
  }
}

export default uac
