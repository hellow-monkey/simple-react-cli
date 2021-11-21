import React from 'react'
import Main from '@/layout/main'
import Login from '@/page/login'
import Home from '@/page/home'

const routes = [
  {
    path: '/login',
    exact: true,
    title: '登录',
    component: Login
  },
  {
    path: '/',
    component: Main,
    routes: [
      {
        path: '/',
        exact: true,
        title: '首页',
        render (e) {
          return <Home />
        }
      }
    ]
  }
]

export default routes
