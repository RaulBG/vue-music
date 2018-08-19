import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import routes from '@/routes'

import EventBus from '@/plugins/event-bus'

import MsToMm from '@/filters/ms-to-mm'

import blur from '@/directives/blur'

import store from '@/store'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(MsToMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
