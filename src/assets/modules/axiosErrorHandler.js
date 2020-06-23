export default {
  dictionary: null,
  init (payloadJson) {
    this.dictionary = payloadJson.axios
  },
  translate (error) {
    let _err = {}
    if (error.response) {
      /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
      console.log(error)
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)

      _err = {
        type: 'response',
        code: error.response.status,
        data: error.response.data,
      }

      switch (error.response.status) {
      case 400:
        if (error.response && error.response.data && error.response.data.error) {
          if(this.dictionary.response[400][error.response.data.error]) {
            _err .text = this.dictionary.response[400][error.response.data.error]
          } else {
            console.error('Dictionary for this error not defined')
            _err .text = this.dictionary.response[400]['default']
          }
        }else{
          _err .text = this.dictionary.response[400]['default']
        }
        break
      case 422:
        _err .text = this.dictionary.response[422]['default']
        break
      default:
        _err.text = this.dictionary.response.default
        break
      }
    } else if (error.request) {
      /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
      console.log(error)
      console.log(error.request)
      console.log(this.dictionary)
      _err = {
        type: 'request',
        code: null,
        data: null,
        text: this.dictionary.request.default
      }
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log(error)
      console.log(error.status)
      if (error.status) {
        _err = {
          type: 'policy',
          code: error.status,
          data: error.data,
          text: this.dictionary.policy.default
        }
      } else {
        _err = {
          type: 'unknown',
          code: null,
          data: null,
          text: this.dictionary.unknown.default
        }
      }
    }
    return _err
  }
}