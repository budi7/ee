import axios from 'axios'
import qs from 'qs'

export default {
  post: function(payload) {
    
    /*
      Payload
      { api, params, token }
    */
    // console.log(payload)
    // console.log('post')
    
    return new Promise((resolve, reject) => {
    // dummy
      axios.post(payload.api,
        payload.params,
        {
          // timeout: 5000,
          headers: {
            'Authorization': payload.token,
            'Content-Type': 'multipart/form-data'
          }
        }).then(resp => {
        // validate data
        if (!resp.data.success) {
          let err = new Error(resp.data.message)
          err.status = 400
          err.data = resp.data.data
          throw err
        }
        resolve(resp.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  postjson: function(payload) {
    
    /*
      Payload
      { api, params, token }
    */
    // console.log(payload)
    // console.log('post')
    
    return new Promise((resolve, reject) => {
    // dummy
      axios.post(payload.api,
        payload.params,
        {
          // timeout: 5000,
          headers: {
            'Authorization': payload.token,
            'Content-Type': 'application/json'
          }
        }).then(resp => {
        // validate data
        if (!resp.data.success) {
          let err = new Error(resp.data.message)
          err.status = 400
          err.data = resp.data.data
          throw err
        }
        resolve(resp.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  patch: function(payload) {
    console.log('check payload', payload)
    /*
      Payload
      { api, params, id, token }
    */
    return new Promise((resolve, reject) => {
      axios.patch(
        payload.api+ (payload.id ? '/' + payload.id : null), 
        qs.stringify(payload.params), 
        {  headers : {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Authorization': payload.token
        }
        }
      ).then(resp => {
      // validate data
        if (!resp.data.success) {
          let err = new Error(resp.data.message)
          err.status = 400
          err.data = resp.data.data
          throw err
        }
        resolve(resp.data)
      }).catch(err => {
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
    //  console.log('get')

    return new Promise((resolve, reject) => {
      axios.get(payload.api, {
        params: payload.params,
        // timeout: 5000,
        headers: {
          'Authorization': payload.token,
          'Content-Type': 'application/json'
        }        
      }).then(resp => {
        // validate data
        if (!resp.data.success) {
          let err = new Error(resp.data.message)
          err.status = 400
          err.data = resp.data.data
          throw err
        }
        resolve(resp.data)
      }).catch(err => {
        reject(err)
      })
    })    
  }
}