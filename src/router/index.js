import Vue from 'vue'
import Router from 'vue-router'
import ListView from '@/components/ListView'
import HomeDetail from '@/components/HomeDetail'
import Form from '@/components/Form'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListView',
      component: ListView
    },
    {
      path: '/home/',
      component: HomeDetail
    },
    {
      path: '/form',
      component: Form 
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
