import Vue from 'vue'
import Router from 'vue-router'
import main from '../Pages/main/main.vue'
import head from '../Pages/main/head/head.vue'
import left from '../Pages/main/left/left.vue'
import right from '../Pages/main/right/right.vue'
import person from '../Pages/main/person/person.vue'
import register from '../Pages/main/register/register.vue'
import login from '../Pages/main/login/login.vue'
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
          path: '/register',
          name: 'register',
          component: register
        },
        {
          path: '/login',
          name: 'login',
          component: login
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
        },
        {
          path: '/right',
          name: 'right',
          component: right
        },
        {
          path: '/person',
          name: 'person',
          component: person
        }
      ]
    }
  ]
})
