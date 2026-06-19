<template>
  <el-container class="layout-container">
    <el-aside width="220px" class="aside">
      <div class="logo">农家菌肥商城</div>
      <el-menu :default-active="activeMenu" router class="aside-menu">
        <el-menu-item index="/dashboard">
          <el-icon><Odomometer /></el-icon>
          <span>工作台</span>
        </el-menu-item>
        <el-menu-item index="/users">
          <el-icon><User /></el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-sub-menu index="orders">
          <template #title><el-icon><Goods /></el-icon><span>订单管理</span></template>
          <el-menu-item index="/orders/recharge">充值订单</el-menu-item>
          <el-menu-item index="/orders/pickup">提货订单</el-menu-item>
          <el-menu-item index="/orders/trial">试用预约</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/content">
          <el-icon><Document /></el-icon>
          <span>内容管理</span>
        </el-menu-item>
        <el-menu-item index="/crops">
          <el-icon><Apple /></el-icon>
          <span>农业作物</span>
        </el-menu-item>
        <el-menu-item index="/partner">
          <el-icon><UserFilled /></el-icon>
          <span>合伙人申请</span>
        </el-menu-item>
        <el-menu-item index="/redemption">
          <el-icon><Ticket /></el-icon>
          <span>兑换码管理</span>
        </el-menu-item>
        <el-menu-item index="/config">
          <el-icon><Setting /></el-icon>
          <span>系统配置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div class="header-left">
          <span class="page-title">{{ route.meta.title }}</span>
        </div>
        <div class="header-right">
          <el-dropdown @command="handleCommand">
            <span class="user-info">
              <el-icon><UserFilled /></el-icon>
              {{ userStore.realName || userStore.username }}
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const activeMenu = computed(() => route.path)

function handleCommand(cmd) {
  if (cmd === 'logout') {
    userStore.logout()
    router.push('/login')
  }
}
</script>

<style scoped>
.layout-container { height: 100vh; }
.aside { background: #304156; }
.logo { height: 60px; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px; font-weight: bold; letter-spacing: 2px; }
.aside-menu { border-right: none; background: #304156; }
.aside-menu:not(.el-menu--collapse) { width: 220px; }
:deep(.el-menu-item), :deep(.el-sub-menu__title) { color: #bfcbd9; }
:deep(.el-menu-item:hover), :deep(.el-sub-menu__title:hover) { background: #263445; color: #fff; }
:deep(.el-menu-item.is-active) { background: #409EFF !important; color: #fff; }
.header { background: white; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e6e6e6; padding: 0 24px; }
.page-title { font-size: 18px; font-weight: 500; color: #333; }
.user-info { cursor: pointer; display: flex; align-items: center; gap: 6px; color: #666; }
.user-info:hover { color: #409EFF; }
.main { background: #f0f2f5; padding: 20px; overflow-y: auto; }
</style>
