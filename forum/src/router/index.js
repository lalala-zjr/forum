import Vue from 'vue'
import Router from 'vue-router'
import main from '../Pages/main/main.vue'
import head from '../Pages/main/head/head.vue'
import left from '../Pages/main/left/left.vue'
import leftTitle from '../Pages/main/left/leftTitle/leftTitle.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children: [
        {
          path: '/',
          name: 'head',
          component: head
        },
        {
          path: '/left',
          name: 'left',
          component: left,
          children: [
            {
              path: '/',
              name: 'leftTitle',
              component: leftTitle
            }
          ]
        }
      ]
    }
  ]
})
