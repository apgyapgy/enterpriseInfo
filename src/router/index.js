import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail/Detail'
import Index from '@/components/Index/Index'
import List from '@/components/List/List'
import Login from '@/components/Login/Login'
import Registry from '@/components/Registry/Registry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta:{
      	title:'首页'
      },
      component: Index
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    },{
      path: '/list',
      name: 'List',
      component: List
    },{
      path: '/login',
      name: 'Login',
      meta:{
      	title:'登录'
      },
      component: Login
    },{
      path: '/registry',
      name: 'Registry',
      meta:{
      	title:'注册'
      },
      component: Registry
    }
  ]
})
