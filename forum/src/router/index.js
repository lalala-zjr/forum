import Vue from 'vue'
import Router from 'vue-router'
import main from '../Pages/main/main.vue'
import Header from '../components/Header/Header.vue'
import left from '../Pages/main/left/left.vue'
import right from '../Pages/main/right/right.vue'
import person from '../Pages/person/person.vue'
import register from '../Pages/main/register/register.vue'
import login from '../Pages/main/login/login.vue'
import forget from '../Pages/main/forget/forget.vue'
import detail from '../Pages/detail/detail.vue'
import send from '../Pages/send/send.vue'
import author from '../Pages/author/author.vue'
import forget2 from '../Pages/main/forget2/forget2.vue'
import leftTitle from '../Pages/main/left/leftTitle/leftTitle.vue'
import detailComment from '../Pages/detail/detailComment/detailComment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'main',
      component: main,
      children: [
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
          path: '/',
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
        }
      ]
    },
    {
      path: '/send',
      name: 'send',
      component: send
    },
    {
      path: '/author',
      name: 'author',
      component: author
    },
    {
      path: '/person',
      name: 'person',
      component: person
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
    }
  ]
})
