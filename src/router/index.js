import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Destination from '@/views/Destination'
import FreeTravel from '@/views/FreeTravel'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/destination',
      name: 'Destination',
      component: Destination
    },
    {
      path: '/freetravel',
      name: 'FreeTravel',
      component: FreeTravel
    },
  ]
})
