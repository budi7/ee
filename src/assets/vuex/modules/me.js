import axios from 'axios'
import apiJson from '../../json/api.json'

const uac = {
  namespaced: true,
  state () {
    return {
      myInfo: {},
      notifications: {},
      notificationCount: 0,
      profile: null
    }
  },
  getters: {
    countNotification: state => {
      return Object.keys(state.notifications).length
    },
  },
  mutations: {
    setProfile: (state, payload) => {
      state.profile = payload
    },
    setNotif: (state, payload) => {
      console.log(payload)
      state.notifications = payload.data
      state.notificationCount = payload.total
    },      
  },
  actions: {
    fetchMyInfo ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        const header = {
          params: payload.params,
          timeout: 5000,
          headers: {
            'Authorization': payload.token,
            'Content-Type': 'application/json'
          }
        }
        console.log(header)

        axios.all([
          axios.get(apiJson.API + apiJson.endpoint.me, header), // me
          axios.get(apiJson.API + apiJson.endpoint.notification, header) // notif
        ])
          .then(axios.spread((meRslt, notifRslt) => {
            // console.log(meRslt)
            // console.log(notifRslt)

            // validate data
            if (!meRslt.data.success) {
              let err = new Error(meRslt.data.message)
              err.status = 400
              err.data = meRslt.data.data
              throw err
            }

            // store
            commit('setProfile', meRslt.data.data)
            commit('setNotif', notifRslt.data.data)
            resolve({
              'me' : meRslt.data.data,
              'notif' : notifRslt.data.data
            })
          })).catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default uac
