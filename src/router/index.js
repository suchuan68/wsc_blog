import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/admin/page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Login',
      component: Login
    }
  ]
})
