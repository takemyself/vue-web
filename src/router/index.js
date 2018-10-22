import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/common/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: _import('HelloWorld')
    },
    {
      path: '/',
      name: 'Index',
      component: Layout,
      redirect: '/index',
      children: [{
        path: 'index',
        component: _import('index/Index')
      }]
    },
    {
      path: '/News',
      name: 'News',
      component: Layout,
      redirect: '/News/lists',
      children: [
        {
          path: 'lists',
          component: _import('news/Newslist')
        },
        {
          path: 'content',
          component: _import('news/Newscontent')
        }
      ]
    },
    {
      path: '/Abouts',
      name: 'Abouts',
      component: Layout,
      redirect: '/Abouts/index',
      children: [{
        path: 'index',
        component: _import('about/Abouts')
      }]
    },
    {
      path: '/Recruit',
      name: 'Recruit',
      component: Layout,
      redirect: '/Recruit/index',
      children: [
        {
          path: 'index',
          component: _import('recruit/Recruit')
        },
        {
          path: 'content',
          component: _import('recruit/Recruitcontent')
        }
      ]
    },
    {
      path: '/Volunteers',
      name: 'Volunteers',
      component: Layout,
      redirect: '/Volunteers/index',
      children: [
        {
          path: 'index',
          component: _import('volunteers/Volunteers')
        },
        {
          path: 'content',
          component: _import('volunteers/Voluncontent')
        }
      ]
    },
    {
      path: '/Pro',
      name: 'Pro',
      component: Layout,
      redirect: '/Pro/index',
      children: [{
        path: 'index',
        component: _import('pro/Pro')
      }]
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Layout,
      redirect: '/Contact/index',
      children: [{
        path: 'index',
        component: _import('contact/Contact')
      }]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Layout,
      redirect: '/Login/index',
      children: [{
        path: 'index',
        component: _import('regislogin/Login')
      }]
    },
    {
      path: '/Regis',
      name: 'Regis',
      component: Layout,
      redirect: '/Regis/index',
      children: [{
        path: 'index',
        component: _import('regislogin/Regis')
      }]
    },
    {
      path: '/Person',
      name: 'Person',
      component: Layout,
      redirect: '/Person/index',
      children: [
        {
          path: 'index',
          component: _import('center/Person')
        },
        {
          path: 'safety',
          component: _import('center/Safety')
        },
        {
          path: 'actives',
          component: _import('center/Actives')
        },
        {
          path: 'repass',
          component: _import('center/Repass')
        },
        {
          path: 'succ',
          component: _import('center/Succ')
        },
        {
          path: 'help',
          component: _import('center/Help')
        }
      ]
    }
  ]
})
