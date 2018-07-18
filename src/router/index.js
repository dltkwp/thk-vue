import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/index'),
      name: 'Dashboard',
      meta: { title: '首页', noCache: true }
    }]
  },
  {
    path: '/product', // 主要是 主文件夹的名称
    component: Layout,
    alwaysShow: true,
    name: 'Product',
    meta: { title: '商品管理' },
    children: [
      {
        path: 'list',
        name: 'ProductList',
        component: () => import('@/views/product/productList'),
        meta: { title: '商品列表' }
      },
      { // 举个栗子
        path: 'config', // 期望的访问的地址
        name: 'ProductConfig', // 这个位置必须唯一
        component: () => import('@/views/product/productConfig'), // 页面地址，一般命名规则:主模块文件夹/功能模块的文件夹（最好带上主文件模块的名称，为了调试）
        meta: { title: '商品设置' }
      }
    ]
  },
  { // 订单模块的路由设置
    path: '/order',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'order/list',
      component: () => import('@/views/order/orderList'),
      name: 'Order',
      meta: { title: '订单列表', noCache: true }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

