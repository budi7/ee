// Import Vue
import Vue from 'vue'
import Vuex from 'vuex'

// Import SASS
// eslint-disable-next-line no-unused-vars
import AppStyles from './assets/sass/main.scss'

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'

// Import F7 Style
// eslint-disable-next-line no-unused-vars
import Framework7CSS from './assets/css/framework7.bundle.css'

// Import F7 iOS Icons
// eslint-disable-next-line no-unused-vars
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Import Material Icons
// eslint-disable-next-line no-unused-vars
import MaterialIcons from 'material-design-icons/iconfont/material-icons.css'

// Import Fontawesome Theme Styles
// eslint-disable-next-line no-unused-vars
import FontAwesome from '@fortawesome/fontawesome-free/css/all.min.css'

// Import moment
import moment from 'moment'
// var moment = require('moment')

// Import fastClick
import FastClick from 'fastclick'

// Import App Custom Styles
// import AppStyles from './assets/sass/main.scss'

// Import App Component
import app from './main.vue'

// Import Vuex Storage
import store from './assets/vuex/index.js'


// modules
import moduleF7Alert from './assets/modules/f7Alert'
import axiosErrorHandler from './assets/modules/axiosErrorHandler'

import { toString, fromYMD, fromYMDHis } from './assets/modules/dateFormat'
import { formatPrice } from './assets/modules/numberFormat'

// Different F7-Vue plugin initialization with f7 v3.0
Framework7.use(Framework7Vue)

Vue.filter('formatDate', dt => {
  let rslt = dt
  try {
    rslt = toString(dt)
  } catch (error) {
    console.error(error)
  }
  return rslt
})
Vue.filter('formatDateString', dt => {
  let rslt = dt
  try {
    rslt = fromYMD(dt, ' ', true)
  } catch (error) {
    console.error(error)
  }
  return rslt
})
Vue.filter('idr', dt => {
  let rslt = dt
  try {
    rslt = formatPrice(dt)
  } catch (error) {
    console.error(error)
  }
  return rslt
})
Vue.filter('idrWithComma', function(number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')

  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? '.' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? ',' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec)
      return '' + (Math.round(n * k) / k).toFixed(prec)
    }

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }	

  return 'Rp ' + s.join(dec)
})
Vue.filter('toDate', function(value){
  if (!value) {
    console.error('toDate function need parameter value')
    return 
  }
  let rslt = value
  
  try {
    rslt =  fromYMD(moment(String(value)).format('DD-MM-YYYY'), '', true)
  } catch (error) {
    console.error(error)
  }
  return rslt
})
Vue.filter('toDateTime', function(value){
  if (!value) {
    console.error('toDateTime function need parameter value')
    return 
  }
  let rslt = value
  
  try {
    return fromYMDHis(moment(String(value)).format('YYYY-MM-DD HH:mm:ss'), ' ', true)
  } catch (error) {
    console.error(error)
  }
  return rslt
})
const plugin = {
  install () {
    Vue.alert = moduleF7Alert
    Vue.prototype.$alert = moduleF7Alert
    Vue.errorHandler = axiosErrorHandler
    Vue.prototype.$errorHandler = axiosErrorHandler
    Vue.prototype.$moment = moment
  }
}

Vue.use(plugin)
Vue.use(Vuex)

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  components: {
    app
  },
  mounted() {
    window.addEventListener('load', () => {
      // run after everything is in-place
      FastClick.attach(document.body)
    })
  },
  render: c => c('app')
})
