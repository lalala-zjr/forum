import Vue from 'vue'
import Router from 'vue-router'
import main from '../Pages/main/main.vue'
import head from '../Pages/main/head/head.vue'
import left from '../Pages/main/left/left.vue'
import right from '../Pages/main/right/right.vue'
import person from '../Pages/main/person/person.vue'
import register from '../Pages/main/register/register.vue'
import login from '../Pages/main/login/login.vue'
import forget from '../Pages/main/forget/forget.vue'
import detail from '../Pages/main/detail/detail.vue'
import send from '../Pages/main/send/send.vue'
import forget2 from '../Pages/main/forget2/forget2.vue'
import leftTitle from '../Pages/main/left/leftTitle/leftTitle.vue'
import detailComment from '../Pages/main/detail/detailComment/detailComment.vue'

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
          path: '/send',
          name: 'send',
          component: send
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
          path: '/forget',
          name: 'forget',
          component: forget
        },
        {
          path: '/forget2',
          name: 'forget2',
          component: forget2
        },
        {
          path: '/detail',
          name: 'detail',
          component: detail,
          children: [
            {
              path: '/',
              name: 'detailComment',
              component: detailComment
            }
          ]
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
