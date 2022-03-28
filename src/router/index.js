import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'index',
      component: () => import('@/views/index/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },

  {
    path: '/systemsetone',
    component: Layout,
    redirect: '/systemsetone/demolistone',
    name: 'SystemSetOne',
    meta: { title: '系统设置一', icon: 'el-icon-video-camera-solid' },
    children: [
      {
        path: 'demolistone',
        name: 'demolistone',
        component: () => import('@/views/demolistone/index'),
        meta: { title: '列表1', icon: 'el-icon-s-unfold' }
      },
      {
        path: 'demolisttwo',
        name: 'demolisttwo',
        component: () => import('@/views/demolisttwo/index'),
        meta: { title: '列表2', icon: 'table' }
      },
    ]
  },
  {
    path: '/systemsettwo',
    component: Layout,
    redirect: '/systemsetone/demolistone',
    name: 'SystemSetTwo',
    meta: { title: '系统设置二', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'demolistone',
        name: 'demolistone',
        component: () => import('@/views/demolistone/index'),
        meta: { title: '列表1', icon: 'table' }
      },
      {
        path: 'demolisttwo',
        name: 'demolisttwo',
        component: () => import('@/views/demolisttwo/index'),
        meta: { title: '列表2', icon: 'table' }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
