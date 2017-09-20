import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../views/example/mock/mockTest.vue'], resolve)
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
