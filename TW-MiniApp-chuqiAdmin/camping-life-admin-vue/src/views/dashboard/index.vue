<template>
  <div class="dashboard" v-loading="loading">
    <el-row :gutter="20" class="stat-cards">
      <el-col :span="6">
        <div class="stat-card blue">
          <div class="stat-icon"><el-icon :size="32"><User /></el-icon></div>
          <div class="stat-info">
            <div class="stat-value">{{ stats.totalUsers || 0 }}</div>
            <div class="stat-label">用户总数</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stat-card green">
          <div class="stat-icon"><el-icon :size="32"><Wallet /></el-icon></div>
          <div class="stat-info">
            <div class="stat-value">{{ stats.totalFertilizerBalance || 0 }} kg</div>
            <div class="stat-label">化肥总余额</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stat-card orange">
          <div class="stat-icon"><el-icon :size="32"><TrendCharts /></el-icon></div>
          <div class="stat-info">
            <div class="stat-value">{{ stats.monthlyRevenue || 0 }} 元</div>
            <div class="stat-label">本月收入</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stat-card purple">
          <div class="stat-icon"><el-icon :size="32"><Goods /></el-icon></div>
          <div class="stat-info">
            <div class="stat-value">{{ stats.totalPointsBalance || 0 }}</div>
            <div class="stat-label">积分总余额</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="stat-cards" style="margin-top: 20px">
      <el-col :span="6">
        <div class="stat-card red">
          <div class="stat-icon"><el-icon :size="32"><Clock /></el-icon></div>
          <div class="stat-info">
            <div class="stat-value">{{ stats.pendingOrders || 0 }}</div>
            <div class="stat-label">待处理提货</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stat-card cyan">
          <div class="stat-icon"><el-icon :size="32"><Calendar /></el-icon></div>
          <div class="stat-info">
            <div class="stat-value">{{ stats.pendingTrials || 0 }}</div>
            <div class="stat-label">待处理试用</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stat-card yellow">
          <div class="stat-icon"><el-icon :size="32"><Document /></el-icon></div>
          <div class="stat-info">
            <div class="stat-value">{{ stats.pendingContent || 0 }}</div>
            <div class="stat-label">待审核内容</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stat-card teal">
          <div class="stat-icon"><el-icon :size="32"><UserFilled /></el-icon></div>
          <div class="stat-info">
            <div class="stat-value">{{ stats.pendingPartners || 0 }}</div>
            <div class="stat-label">待处理合伙人</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <el-card>
          <template #header><span>最近充值记录</span></template>
          <el-table :data="stats.recentRecharges || []" stripe>
            <el-table-column prop="orderNo" label="订单号" width="180" />
            <el-table-column prop="productName" label="产品" />
            <el-table-column prop="paidPrice" label="金额" width="100">
              <template #default="{ row }">{{ row.paidPrice }}元</template>
            </el-table-column>
            <el-table-column prop="totalKg" label="数量(kg)" width="100" />
            <el-table-column prop="createdAt" label="时间" width="160" />
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header><span>最近提货订单</span></template>
          <el-table :data="stats.recentOrders || []" stripe>
            <el-table-column prop="orderNo" label="订单号" width="180" />
            <el-table-column prop="pickupType" label="类型" width="100">
              <template #default="{ row }">{{ row.pickupType === 'transfer' ? '转让' : '送货' }}</template>
            </el-table-column>
            <el-table-column prop="totalKg" label="数量(kg)" width="100" />
            <el-table-column prop="status" label="状态" width="100">
              <template #default="{ row }">
                <el-tag :type="getStatusType(row.status)">{{ getStatusText(row.status) }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="createdAt" label="时间" width="160" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { getDashboard } from '@/api'

const stats = ref({})
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    const res = await getDashboard()
    if (res.code === 200) stats.value = res.data
    else ElMessage.error(res.message || '加载工作台数据失败')
  } finally {
    loading.value = false
  }
})

function getStatusType(s) {
  return { 1: 'warning', 2: 'primary', 3: 'success', 4: 'info' }[s] || ''
}
function getStatusText(s) {
  return { 1: '待确认', 2: '已确认', 3: '已完成', 4: '已取消' }[s] || s
}
</script>

<style scoped>
.stat-cards { }
.stat-card {
  background: white; padding: 24px; border-radius: 8px;
  display: flex; align-items: center; gap: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.stat-card.blue { background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
.stat-card.green { background: linear-gradient(135deg, #11998e, #38ef7d); color: white; }
.stat-card.orange { background: linear-gradient(135deg, #f093fb, #f5576c); color: white; }
.stat-card.purple { background: linear-gradient(135deg, #a18cd1, #fbc2eb); color: #333; }
.stat-card.red { background: linear-gradient(135deg, #ff9a9e, #fecfef); color: #333; }
.stat-card.cyan { background: linear-gradient(135deg, #a1c4fd, #c2e9fb); color: #333; }
.stat-card.yellow { background: linear-gradient(135deg, #f6d365, #fda085); color: #333; }
.stat-card.teal { background: linear-gradient(135deg, #4facfe, #00f2fe); color: #333; }
.stat-icon { opacity: 0.9; }
.stat-value { font-size: 28px; font-weight: bold; }
.stat-label { font-size: 14px; opacity: 0.85; margin-top: 4px; }
</style>
