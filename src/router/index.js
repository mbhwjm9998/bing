import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Destination from '@/components/Destination'
import FreeTravel from '@/components/FreeTravel'
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
