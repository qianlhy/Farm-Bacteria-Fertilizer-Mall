import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' },
  },
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      { path: 'dashboard', name: 'Dashboard', component: () => import('@/views/dashboard/index.vue'), meta: { title: '工作台' } },
      { path: 'users', name: 'Users', component: () => import('@/views/users/list.vue'), meta: { title: '用户管理' } },
      { path: 'orders/recharge', name: 'RechargeOrders', component: () => import('@/views/orders/recharge.vue'), meta: { title: '充值订单' } },
      { path: 'orders/pickup', name: 'PickupOrders', component: () => import('@/views/orders/pickup.vue'), meta: { title: '提货订单' } },
      { path: 'orders/trial', name: 'TrialOrders', component: () => import('@/views/order/trial.vue'), meta: { title: '试用预约' } },
      { path: 'content', name: 'Content', component: () => import('@/views/content/list.vue'), meta: { title: '内容管理' } },
      { path: 'partner', name: 'Partner', component: () => import('@/views/partner/list.vue'), meta: { title: '合伙人申请' } },
      { path: 'config', name: 'Config', component: () => import('@/views/config/index.vue'), meta: { title: '系统配置' } },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - 农家菌肥商城管理` : '农家菌肥商城管理'
  const userStore = useUserStore()
  if (to.path !== '/login' && !userStore.token) {
    next('/login')
  } else {
    next()
  }
})

export default router
