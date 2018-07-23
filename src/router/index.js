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
      name: 'Index',
      meta: { title: '首页', icon:'icon iconfont icon-icon',noCache: true }
    }]
  },
  { // 订单模块的路由设置
    path: '/order',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'order/list',
      component: () => import('@/views/order/orderList'),
      name: 'Order',
      meta: { title: '订单管理', noCache: true }
    }]
  },
  { // 商品管理的路由设置
    path: '/product',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'product/list',
      component: () => import('@/views/product/productList'),
      name: 'Product',
      meta: { title: '商品管理', noCache: true }
    },
    {
      hidden: true,
      path: 'product/add',
      component: () => import('@/views/product/addProduct'),
      name: 'AddProduct',
      meta: { title: '新增商品', noCache: true }
    }]
  },
  { // 会员管理的路由设置
    path: '/member',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'member/list',
      component: () => import('@/views/member/memberList'),
      name: 'Member',
      meta: { title: '会员管理', noCache: true }
    },
    {
      hidden: true,
      path: 'member/add',
      component: () => import('@/views/member/addMember'),
      name: 'AddMember',
      meta: { title: '新增会员', noCache: true }
    }]
  },
  { // 成员管理的路由设置
    path: '/employee',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'employee/list',
      component: () => import('@/views/employee/employeeList'),
      name: 'Employee',
      meta: { title: '成员管理', noCache: true }
    }]
  },
  { // 店铺公告的路由设置
    path: '/news',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'news/list',
      component: () => import('@/views/news/newsList'),
      name: 'News',
      meta: { title: '店铺公告（1期不做）', noCache: true }
    }]
  },
  { // 首页管理的路由设置
    path: '/dashboard',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard/dashboard',
      component: () => import('@/views/dashboard/dashboard'),
      name: 'Dashboard',
      meta: { title: '店铺装修（1期不做）', noCache: true }
    }]
  },
  {
    path: '/setting', // 主要是 主文件夹的名称
    component: Layout,
    redirect: 'noredirect',
    name: 'Setting',
    meta: { title: '设置' },
    children: [
      {
        path: 'shopinfo',
        name: 'ShopInfo',
        component: () => import('@/views/setting/shopInfo'),
        meta: { title: '店铺信息' }
      },
      {
        path: 'member', // 期望的访问的地址
        name: 'MemberConfig', // 这个位置必须唯一
        component: () => import('@/views/setting/memberConfig'), // 页面地址，一般命名规则:主模块文件夹/功能模块的文件夹（最好带上主文件模块的名称，为了调试）
        meta: { title: '会员设置' }
      },
      {
        path: 'type', // 期望的访问的地址
        name: 'TypeConfig', // 这个位置必须唯一
        component: () => import('@/views/setting/typeConfig'), // 页面地址，一般命名规则:主模块文件夹/功能模块的文件夹（最好带上主文件模块的名称，为了调试）
        meta: { title: '分类设置' }
      },
      {
        path: 'finance', // 期望的访问的地址
        name: 'FinanceConfig', // 这个位置必须唯一
        component: () => import('@/views/setting/financeConfig'), // 页面地址，一般命名规则:主模块文件夹/功能模块的文件夹（最好带上主文件模块的名称，为了调试）
        meta: { title: '财务设置' }
      },
      {
        path: 'employee', // 期望的访问的地址
        name: 'EmployeeConfig', // 这个位置必须唯一
        component: () => import('@/views/setting/employeeConfig'), // 页面地址，一般命名规则:主模块文件夹/功能模块的文件夹（最好带上主文件模块的名称，为了调试）
        meta: { title: '成员设置(1期不做）' }
      }
    ]
  },
  // 这个节点不能改变位置，只能放到最后
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

