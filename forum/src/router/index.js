import Vue from 'vue'
import Router from 'vue-router'
import main from '../Pages/main/main.vue'
import head from '../components/head/head.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/head',
      name: 'head',
      component: head
    }
  ]
})
