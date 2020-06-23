import Home from './assets/vue/pages/home.vue'
import Notification from './assets/vue/pages/notification/index.vue'
import NotificationDetail from './assets/vue/pages/notification/detail.vue'
import Loader from './assets/vue/pages/loader.vue'
import quotationIndex from './assets/vue/pages/quotation/index.vue'

import profileEdit from './assets/vue/pages/profile/edit'

import quotationDetail from './assets/vue/pages/quotation/detail.vue'
import quotationCreatePa from './assets/vue/pages/quotation/create/pa'
import quotationCreateMobil from './assets/vue/pages/quotation/create/mobil'
import quotationCreateMotor from './assets/vue/pages/quotation/create/motor'
import quotationCreateNiaga from './assets/vue/pages/quotation/create/niaga'

import accountPhone from './assets/vue/pages/account/phone.vue'
import accountEmailWallet from './assets/vue/pages/account/emailwallet.vue'

import walletIndex from './assets/vue/pages/wallet/index.vue'
import walletTopup from './assets/vue/pages/wallet/topup.vue'
import walletWithdraw from './assets/vue/pages/wallet/withdraw.vue'

import membership from './assets/vue/pages/membership/index.vue'
import referralIndex from './assets/vue/pages/referral/index.vue'
import referralInvite from './assets/vue/pages/referral/invite.vue'

import about from './assets/vue/pages/about.vue'
import tos from './assets/vue/pages/tos.vue'
import privacy from './assets/vue/pages/privacy.vue'

import applicationIndex from './assets/vue/pages/application/index.vue'
import applicationDetail from './assets/vue/pages/application/detail.vue'
import applicationDeleted from './assets/vue/pages/application/deleted.vue'
import applicationEdit from './assets/vue/pages/application/edit.vue'
import applicationCoverage from './assets/vue/pages/application/coverage.vue'

import claim from './assets/vue/pages/claim/index.vue'
import claimCreate from './assets/vue/pages/claim/create.vue'
import claimDeleted from './assets/vue/pages/claim/deleted.vue'
import claimWorkshop from './assets/vue/pages/claim/workshop.vue'

import AboutPage from './assets/vue/pages/about.vue'
import FormPage from './assets/vue/pages/form.vue'
import DynamicRoutePage from './assets/vue/pages/dynamic-route.vue'

import PanelLeftPage from './assets/vue/pages/panel-left.vue'
import ColorThemes from './assets/vue/pages/color-themes.vue'
import Vuex from './assets/vue/pages/vuex.vue'

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
      {
        path: '/notification/',
        component: Notification,
        routes: [
          {
            path: '/:id',
            component: NotificationDetail
          }
        ]
      },
      {
        path: '/quotation/',
        component: quotationIndex,
        routes: [
          {
            path: '/:id',
            component: quotationDetail
          }                
        ]        
      },
      {
        path: '/product/',
        routes: [
          {
            path: 'createpa',
            component: quotationCreatePa
          },
          {
            path: 'createmobil',
            component: quotationCreateMobil
          },
          {
            path: 'createmotor',
            component: quotationCreateMotor
          },
          {
            path: 'createniaga',
            component: quotationCreateNiaga
          }, 
        ]
      },
      {
        path: '/application',
        component: applicationIndex,
        routes: [
          {
            path: '/:id',
            component: applicationDetail
          },
          {
            path: '/edit/:id',
            component: applicationEdit,
            options: {
              props: (route) => ({
                id: route.params.id
              })
            }
          },
          {
            path: '/setting/:id',
            component: applicationCoverage,
            options: {
              props: (route) => ({
                id: route.params.id
              })
            }
          }        
        ]
        // options: {
        //   query: {
        //     tab: '{{tab}}',        
        //   },
        // },    
      },
      {
        path: '/applicationdeleted',
        component: applicationDeleted
      },
      {
        path: '/claim',
        component: claim,
        routes: [
          {
            path: '/create',
            component: claimCreate
          },
          {
            path: '/deleted',
            component: claimDeleted            
          }
        ]
      },
      {
        path: '/workshop',
        component: claimWorkshop,
      },
      {
        path: '/profile',
        routes: [
          {
            path: '/phone',
            component: accountPhone
          },
          {
            path: '/emailWallet',
            component: accountEmailWallet
          }
        ]
      },
      {
        path: '/wallet',
        component: walletIndex,
        routes: [
          {
            path: '/topup',
            component: walletTopup
          },
          {
            path: '/withdraw',
            component: walletWithdraw
          }
        ]
      },
      {
        path: '/membership',
        component: membership,
      },
      {
        path: '/referral',
        component: referralIndex,
        routes: [
          {
            path: '/invite',
            component: referralInvite
          }
        ]
      },
      {
        path: '/editPorfile',
        component: profileEdit
      },
      {
        path: '/about',
        component: about,
      },
      {
        path: '/tos',
        component: tos,
      },
      {
        path: '/privacy',
        component: privacy,
      }               
    ]
  },
  {
    path: '/loader',
    component: Loader,
  }, 
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage
  },
  {
    path: '/color-themes/',
    component: ColorThemes
  },
  {
    path: '/vuex/',
    component: Vuex
  },
]
