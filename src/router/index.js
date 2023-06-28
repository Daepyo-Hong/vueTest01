import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "databinding" */'../views/DataBinding.vue')
  }
  ,
  {
    path: '/dataBindingHtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "databindinghtml" */'../views/DataBindingHtml.vue')
  },
  {
    path: '/dataBindingInputText',
    name: 'DataBindingInputText',
    component: () => import(/* webpackChunkName: "dataBindingInputText" */'../views/DataBindingInputText.vue')
  },
  {
    path: '/dataBindingInputNumber',
    name: 'DataBindingInputNumber',
    component: () => import(/* webpackChunkName: "dataBindingInputNumber" */'../views/DataBindingInputNumber.vue')
  },
  {
    path: '/dataBindingSelect',
    name: 'dataBindingSelect',
    component: () => import(/* webpackChunkName: "dataBindingInputNumber" */'../views/DataBindingSelect.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
