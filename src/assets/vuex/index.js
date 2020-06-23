import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import alert from './modules/alert'
// import cart from './modules/cart'
// import color from './modules/color'
import app from './modules/app'
import uac from './modules/uac'
import me from './modules/me'
// import transaction from './modules/transaction'
// import product from './modules/product'

// Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {
    app,
    uac,
    me,
  }
})
