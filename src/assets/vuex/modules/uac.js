import axios from 'axios'
import apiJson from '../../json/api.json'

const uac = {
  namespaced: true,
  state () {
    return {
      token: null,
      profile: {}
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
    },
    logout: (state) => {
      state.profile = null
      state.token = null
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
          // grant_type: 'password',
          // client_id: apiJson.client_id,
          // client_secret: apiJson.client_secret,
          // scope: '*'
        }).then(resp => {
          // validate data
          commit('login', {
            token: resp.data.token.data
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
