import axios from 'axios'

export default {
  post: function(payload) {
    /*
      Payload
      { api, params, token }
    */

    // console.log(payload)

    return new Promise((resolve, reject) => {
      axios.post(payload.api, payload.params, {
        timeout: 5000,
        headers: {
          'Authorization': payload.token,
          'Content-Type': 'application/json'
        }        
      }).then(resp => {
        if(this.isDebug) console.log(resp)
        // validate data
        // if (!resp.data.status) {
        //   let err = new Error(resp.data.message)
        //   err.status = 400
        //   err.data = resp.data.data
        //   throw err
        // }
        resolve(resp.data)
      }).catch(err => {
        if(this.isDebug) console.log(err)
        reject(err)
      })
    })
  },
  get: function(payload) {
    /*
      Payload
      { api, params, token }
    */

    // console.log(payload)

    return new Promise((resolve, reject) => {
      axios.get(payload.api, {
        params: payload.params,
        // timeout: 800,
        headers: {
          'Authorization': payload.token,
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        }        
      }).then(resp => {
        console.log('check respon', resp)
        if(this.isDebug) console.log(resp)
        // validate data
        if (!resp.data.status) {
          let err = new Error(resp.data.message)
          err.status = 400
          err.data = resp.data.data
          throw err
        }
        resolve(resp.data)
      }).catch(err => {
        if(this.isDebug) console.log(err)
        reject(err)
      })
    })    
  },
  patch: function(payload) {
    /*
      Payload
      { api, params, token }
    */

    // console.log(payload)

    return new Promise((resolve, reject) => {
      axios.patch(payload.api, payload.params, {
        timeout: 5000,
        headers: {
          'Authorization': payload.token,
          'Content-Type': 'application/json'
        }        
      }).then(resp => {
        if(this.isDebug) console.log(resp)
        // validate data
        if (!resp.data.status) {
          let err = new Error(resp.data.message)
          err.status = 400
          err.data = resp.data.data
          throw err
        }
        resolve(resp.data)
      }).catch(err => {
        if(this.isDebug) console.log(err)
        reject(err)
      })
    })
  },

  delete: function(payload) {
    return new Promise((resolve, reject) => {
      axios.delete(payload.api, payload.params, {
        timeout: 5000,
        headers: {
          'Authorization': payload.token,
          'Content-Type': 'application/json'
        }
      }).then(resp => {
        if(this.isDebug) console.log(resp)
        // validate data
        // if (!resp.data.status) {
        //   let err = new Error(resp.data.message)
        //   err.status = 400
        //   err.data = resp.data.data
        //   throw err
        // }
        resolve(resp.data)
      }).catch(err => {
        if(this.isDebug) console.log(err)
        reject(err)
      })
    })
  }
}
