/*
 * @Author: your name
 * @Date: 2020-01-11 16:54:07
 * @LastEditTime : 2020-01-11 17:55:31
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuedemo\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
