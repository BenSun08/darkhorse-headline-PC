import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/pages/login.vue'
import index from '@/pages/index.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'index',
      path: '/',
      component: index
    }
  ]
})

export default router
