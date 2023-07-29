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
  },
  {
    path: '/dataBindingCheckbox',
    name: 'dataBindingCheckbox',
    component: () => import(/* webpackChunkName: "dataBindingCheckbox" */'../views/DataBindingCheckbox.vue')
  },
  {
    path: '/dataBindingCheckbox2',
    name: 'dataBindingCheckbox2',
    component: () => import(/* webpackChunkName: "dataBindingCheckbox2" */'../views/DataBindingCheckbox2.vue')
  },
  {
    path: '/dataBindingRadio',
    name: 'dataBindingRadio',
    component: () => import(/* webpackChunkName: "dataBindingRadio" */'../views/DataBindingRadio.vue')
  },
  {
    path: '/dataBindingAttribute',
    name: 'dataBindingAttribute',
    component: () => import(/* webpackChunkName: "dataBindingAttribute" */'../views/DataBindingAttribute.vue')
  },
  {
    path: '/dataBindingButton',
    name: 'dataBindingButton',
    component: () => import(/* webpackChunkName: "dataBindingButton" */'../views/DataBindingButton.vue')
  },
  {
    path: '/dataBindingClass',
    name: 'dataBindingClass',
    component: () => import(/* webpackChunkName: "dataBindingClass" */'../views/DataBindingClass.vue')
  }
  ,
  {
    path: '/dataBindingClass2',
    name: 'dataBindingClass2',
    component: () => import(/* webpackChunkName: "dataBindingClass2" */'../views/DataBindingClass2.vue')
  },
  {
    path: '/dataBindingStyle',
    name: 'dataBindingStyle',
    component: () => import(/* webpackChunkName: "dataBindingStyle" */'../views/DataBindingStyle.vue')
  },
  {
    path: '/dataBindingList',
    name: 'dataBindingList',
    component: () => import(/* webpackChunkName: "dataBindingList" */'../views/DataBindingList.vue')
  },
  {
    path: '/renderingVIf',
    name: 'renderingVIf',
    component: () => import(/* webpackChunkName: "renderingVIf" */'../views/RenderingVIf.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
