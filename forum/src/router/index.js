import Vue from 'vue'
import Router from 'vue-router'
import main from '../Pages/Header/main/main.vue'
import Header from '../Pages/Header/Header.vue'
import left from '../Pages/Header/main/left/left.vue'
import right from '../components/right/right.vue'
import person from '../Pages/Header/person/person.vue'
import register from '../Pages/register/register.vue'
import login from '../Pages/login/login.vue'
import forget from '../Pages/forget/forget.vue'
import detail from '../Pages/detail/detail.vue'
import send from '../Pages/send/send.vue'
import author from '../Pages/author/author.vue'
import download from '../Pages/Header/download/download.vue'
import down from '../Pages/Header/download/down/down.vue'
import load from '../Pages/load/load.vue'
import forget2 from '../Pages/forget2/forget2.vue'
import leftTitle from '../Pages/Header/main/left/leftTitle/leftTitle.vue'
import detailComment from '../Pages/detail/detailComment/detailComment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header,
      children: [
        {
          path: '/download',
          name: 'download',
          component: download,
          children: [
            {
              path: '/down',
              name: 'down',
              component: down
            }
          ]
        },
        {
          path: '/person',
          name: 'person',
          component: person
        },
        {
          path: '/',
          name: 'main',
          component: main,
          children: [
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
            }
          ]
        },
        {
          path: '/right',
          name: 'right',
          component: right
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
          path: '/detail/:id',
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
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/load/:id',
      name: 'load',
      component: load
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
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
