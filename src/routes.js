import Home from './assets/vue/pages/dashboard/index.vue'
import Splash from './assets/vue/pages/splash.vue'
import Loader from './assets/vue/pages/loader.vue'
import Reset from './assets/vue/pages/reset-password.vue'
import Forget from './assets/vue/pages/forget-password.vue'

import Welcome from './assets/vue/pages/welcome.vue'
import store from './assets/vuex/index.js'

//Belajar
import materiIndex from './assets/vue/pages/dashboard/belajar/materi/index'
import materiDetail from './assets/vue/pages/dashboard/belajar/materi/detail'
import pertanyaanCreate from './assets/vue/pages/dashboard/belajar/pertanyaan/create'
import pertanyaanIndex from './assets/vue/pages/dashboard/belajar/pertanyaan/index'
import pertanyaanDetail from './assets/vue/pages/dashboard/belajar/pertanyaan/detail'
import pertanyaanMy from './assets/vue/pages/dashboard/belajar/pertanyaan/my/index'
import pertanyaanMyDetail from './assets/vue/pages/dashboard/belajar/pertanyaan/my/detail'
import resourceIndex from './assets/vue/pages/dashboard/belajar/resource/index'
import resourceDetail from './assets/vue/pages/dashboard/belajar/resource/detail'

//Komunitas
import ceritaIndex from './assets/vue/pages/dashboard/komunitas/cerita/index'
import ceritaDetail from './assets/vue/pages/dashboard/komunitas/cerita/detail'
import ceritaMy from './assets/vue/pages/dashboard/komunitas/cerita/my/index'
import ceritaMyDetail from './assets/vue/pages/dashboard/komunitas/cerita/my/detail'
import ceritaCreate from './assets/vue/pages/dashboard/komunitas/cerita/create'
import eventIndex from './assets/vue/pages/dashboard/komunitas/event/index'
import eventDetail from './assets/vue/pages/dashboard/komunitas/event/detail'
import galeriIndex from './assets/vue/pages/dashboard/komunitas/galeri/index'
import tentangIndex from './assets/vue/pages/dashboard/komunitas/tentang/index'

//Renungan
import renunganIndex from './assets/vue/pages/dashboard/renungan/index'
import renunganDetail from './assets/vue/pages/dashboard/renungan/detail'

//Saya
import misiIndex from './assets/vue/pages/dashboard/saya/misi/index'
import misiDetail from './assets/vue/pages/dashboard/saya/misi/detail'
import misiMy from './assets/vue/pages/dashboard/saya/misi/my/index'
import misiMyDetail from './assets/vue/pages/dashboard/saya/misi/my/detail'
import misiCreate from './assets/vue/pages/dashboard/saya/misi/create'
import doaIndex from './assets/vue/pages/dashboard/saya/doa/index'
import doaDetail from './assets/vue/pages/dashboard/saya/doa/detail'
import doaCreate from './assets/vue/pages/dashboard/saya/doa/create'
import passwordIndex from './assets/vue/pages/dashboard/saya/password/index'


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
            component: materiDetail,
            options: {
              props: (route) => ({
                id: route.params.id
              })
            }
          }
        ]
      },
      {
        path: '/pertanyaan',
        component: pertanyaanIndex,
        routes: [
          {
            path: '/create',
            component: pertanyaanCreate,
          },
          {
            path: '/my',
            component: pertanyaanMy,
            routes: [
              {
                path: '/:id',
                component: pertanyaanMyDetail,
                options: {
                  props: (route) => ({
                    id: route.params.id
                  })
                }
              }    
            ]
          },
          {
            path: '/:id',
            component: pertanyaanDetail,
            options: {
              props: (route) => ({
                id: route.params.id
              })
            }
          },
        ]
      },
      {
        path: '/resource',
        component: resourceIndex,
        routes: [
          {
            path: '/:id',
            component: resourceDetail,
            options: {
              props: (route) => ({
                id: route.params.id
              })
            }
          }
        ]
      },
      {
        path: '/cerita',
        component: ceritaIndex,
        routes: [
          {
            path: '/create',
            component: ceritaCreate,
          },
          {
            path: '/my',
            component: ceritaMy,
            routes: [
              {
                path: '/:id',
                component: ceritaMyDetail,
                options: {
                  props: (route) => ({
                    id: route.params.id
                  })
                }
              }    
            ]
          },
          {
            path: '/:id',
            component: ceritaDetail,
            options: {
              props: (route) => ({
                id: route.params.id
              })
            }
          }
        ]
      },
      {
        path: '/event',
        component: eventIndex,
        routes: [
          {
            path: '/:id',
            component: eventDetail,
            options: {
              props: (route) => ({
                id: route.params.id
              })
            }
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
            component: renunganDetail,
            options: {
              props: (route) => ({
                id: route.params.id
              })
            }
          }
        ]
      },
      {
        path: '/misi',
        component: misiIndex,
        routes: [
          {
            path: '/create',
            component: misiCreate,
          },
          {
            path: '/my',
            component: misiMy,
            routes: [
              {
                path: '/:id',
                component: misiMyDetail,
                options: {
                  props: (route) => ({
                    id: route.params.id
                  })
                }
              }    
            ]
          },
          {
            path: '/:id',
            component: misiDetail,
            options: {
              props: (route) => ({
                id: route.params.id
              })
            }
          }
        ]
      },
      {
        path: '/doa',
        component: doaIndex,
        routes: [
          {
            path: '/create',
            component: doaCreate,
          },
          {
            path: '/:id',
            component: doaDetail,
            options: {
              props: (route) => ({
                id: route.params.id
              })
            }
          }
        ]
      },
      {
        path: '/change-password',
        component: passwordIndex,
        routes: []
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
  {
    path: '/reset',
    component: Reset,
  },
  {
    path: '/forget',
    component: Forget,
  },
  
]
