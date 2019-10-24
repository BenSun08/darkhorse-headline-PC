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

router.beforeEach((to, from, next) => {
  if (to.name === 'index') {
    let token = localStorage.getItem('dh_user_token_PC')
    if (!token) next('/login')
    else next()
  } else next()
})

export default router
