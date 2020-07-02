import Home from './assets/vue/pages/dashboard/index.vue'
import Splash from './assets/vue/pages/splash.vue'
import Loader from './assets/vue/pages/loader.vue'

import Welcome from './assets/vue/pages/welcome.vue'
import store from './assets/vuex/index.js'

export default [
  {
    path: '/',
    async(to, from, resolve) {
      if (store.state.uac.token) {
        resolve({ component: Home })
      } else {
        resolve({ component: Welcome })
      }
    },
    options: {
      animate: false,
    },
    routes: [
    ]
  },
  {
    path: '/splash',
    component: Splash,
  },
  {
    path: '/loader',
    component: Loader,
  },
  {
    path: '/home',
    component: Home,
  },
  
]
