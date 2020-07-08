import Home from './assets/vue/pages/dashboard/index.vue'
import Splash from './assets/vue/pages/splash.vue'
import Loader from './assets/vue/pages/loader.vue'

import Welcome from './assets/vue/pages/welcome.vue'
import store from './assets/vuex/index.js'

//Belajar
import materiIndex from './assets/vue/pages/dashboard/belajar/materi/index'
import materiDetail from './assets/vue/pages/dashboard/belajar/materi/detail'
import pertanyaanIndex from './assets/vue/pages/dashboard/belajar/pertanyaan/index'
import pertanyaanDetail from './assets/vue/pages/dashboard/belajar/pertanyaan/detail'
import resourceIndex from './assets/vue/pages/dashboard/belajar/resource/index'
import resourceDetail from './assets/vue/pages/dashboard/belajar/resource/detail'

//Komunitas
import ceritaIndex from './assets/vue/pages/dashboard/komunitas/cerita/index'
import ceritaDetail from './assets/vue/pages/dashboard/komunitas/cerita/detail'
import eventIndex from './assets/vue/pages/dashboard/komunitas/event/index'
import eventDetail from './assets/vue/pages/dashboard/komunitas/event/detail'
import galeriIndex from './assets/vue/pages/dashboard/komunitas/galeri/index'
import tentangIndex from './assets/vue/pages/dashboard/komunitas/tentang/index'

//Renungan
import renunganIndex from './assets/vue/pages/dashboard/renungan/index'
import renunganDetail from './assets/vue/pages/dashboard/renungan/detail'


export default [
  {
    path: '/',
    async(to, from, resolve) {
      console.log('store.state.uac.token',store.state.uac)
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
      {
        path: '/materi',
        component: materiIndex,
        routes: [
          {
            path: '/:id',
            component: materiDetail
          }
        ]
      },
      {
        path: '/pertanyaan',
        component: pertanyaanIndex,
        routes: [
          {
            path: '/:id',
            component: pertanyaanDetail
          }
        ]
      },
      {
        path: '/resource',
        component: resourceIndex,
        routes: [
          {
            path: '/:id',
            component: resourceDetail
          }
        ]
      },
      {
        path: '/cerita',
        component: ceritaIndex,
        routes: [
          {
            path: '/:id',
            component: ceritaDetail
          }
        ]
      },
      {
        path: '/event',
        component: eventIndex,
        routes: [
          {
            path: '/:id',
            component: eventDetail
          }
        ]
      },
      {
        path: '/galeri',
        component: galeriIndex,
        routes: [
        ]
      },
      {
        path: '/tentang',
        component: tentangIndex,
        routes: [
        ]
      },
      {
        path: '/renungan',
        component: renunganIndex,
        routes: [
          {
            path: '/:id',
            component: renunganDetail
          }
        ]
      },
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
