export default {
  store(_key, _val) {
    try {
      console.log(_key, _val)
      window.localStorage.setItem(_key, _val)
    } catch (error) {
      console.error(error)
      return {
        status: false,
        data: null,
        error
      }
    }
  
    return {
      status: true,
      data: null,
      error: null
    }
  },
  get(_key) {
    let dt
    try {
      console.log(_key)
      dt = window.localStorage.getItem(_key) ? 
        JSON.parse(window.localStorage.getItem(_key)) : window.localStorage.getItem(_key)
    } catch (error) {
      console.error(error)
      return {
        status: false,
        data: null,
        error
      }
    }
    
    return {
      status: true,
      data: dt,
      error: null
    }
  },
  remove(_key) {
    try {
      console.log(_key)
    } catch (error) {
      console.error(error)
      return {
        status: false,
        data: null,
        error
      }
    }
  
    return {
      status: true,
      data: null,
      error: null
    }
  }
}