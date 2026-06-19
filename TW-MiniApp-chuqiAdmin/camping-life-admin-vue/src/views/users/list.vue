<template>
  <div class="user-list">
    <el-card>
      <template #header>
        <el-form inline :model="query" class="filter-form">
          <el-form-item label="关键词"><el-input v-model="query.keyword" placeholder="手机/昵称/车牌" clearable /></el-form-item>
          <el-form-item label="用户类型">
            <el-select v-model="query.userType" placeholder="全部" clearable>
              <el-option label="普通用户" :value="1" />
              <el-option label="合伙人" :value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="query.status" placeholder="全部" clearable>
              <el-option label="正常" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
          <el-form-item><el-button type="primary" @click="loadData">搜索</el-button></el-form-item>
        </el-form>
      </template>
      <el-table :data="list" v-loading="loading" stripe>
        <el-table-column prop="id" label="ID" width="70" />
        <el-table-column prop="phone" label="手机号" width="120" />
        <el-table-column prop="nickname" label="昵称" />
        <el-table-column prop="licensePlate" label="车牌" width="100" />
        <el-table-column prop="totalRechargeKg" label="累计充值(kg)" width="120">
          <template #default="{ row }">{{ row.totalRechargeKg || 0 }}</template>
        </el-table-column>
        <el-table-column label="钱包余额" width="200">
          <template #default="{ row }">
            化肥: {{ row.fertilizerBalance || 0 }}kg<br/>
            积分: {{ row.pointsBalance || 0 }}<br/>
            运装补贴: {{ row.freightSubsidy || 0 }}元
          </template>
        </el-table-column>
        <el-table-column prop="userType" label="类型" width="80">
          <template #default="{ row }">
            <el-tag :type="row.userType === 2 ? 'success' : ''">{{ row.userType === 2 ? '合伙人' : '普通' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="80">
          <template #default="{ row }">
            <el-tag :type="row.status === 1 ? 'success' : 'danger'">{{ row.status === 1 ? '正常' : '禁用' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="注册时间" width="170" />
        <el-table-column label="操作" width="150" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" size="small" link @click="showDetail(row)">详情</el-button>
            <el-button type="warning" size="small" link @click="showAdjust(row)">调账</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:current-page="query.page"
        v-model:page-size="query.pageSize"
        :total="total"
        :page-sizes="[10, 20, 50]"
        layout="total, sizes, prev, pager, next"
        @current-change="loadData"
        @size-change="loadData"
        style="margin-top: 16px; justify-content: flex-end"
      />
    </el-card>

    <el-dialog v-model="detailVisible" title="用户详情" width="600px">
      <el-descriptions :column="2" border v-if="currentUser">
        <el-descriptions-item label="ID">{{ currentUser.id }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ currentUser.phone }}</el-descriptions-item>
        <el-descriptions-item label="昵称">{{ currentUser.nickname }}</el-descriptions-item>
        <el-descriptions-item label="车牌">{{ currentUser.licensePlate }}</el-descriptions-item>
        <el-descriptions-item label="累计充值">{{ currentUser.totalRechargeKg }} kg</el-descriptions-item>
        <el-descriptions-item label="邀请码">{{ currentUser.inviteCode }}</el-descriptions-item>
        <el-descriptions-item label="化肥余额">{{ currentUser.fertilizerBalance }} kg</el-descriptions-item>
        <el-descriptions-item label="积分余额">{{ currentUser.pointsBalance }}</el-descriptions-item>
        <el-descriptions-item label="运装补贴">{{ currentUser.freightSubsidy }} 元</el-descriptions-item>
        <el-descriptions-item label="优惠券">{{ currentUser.couponBalance }} 元</el-descriptions-item>
        <el-descriptions-item label="注册时间">{{ currentUser.createdAt }}</el-descriptions-item>
      </el-descriptions>
    </el-dialog>

    <el-dialog v-model="adjustVisible" title="钱包调账" width="500px">
      <el-form label-width="120px">
        <el-form-item label="用户">{{ currentUser?.phone }}</el-form-item>
        <el-form-item label="操作类型">
          <el-select v-model="adjustForm.type" style="width: 100%">
            <el-option label="增加化肥" value="fertilizer_add" />
            <el-option label="扣除化肥" value="fertilizer_sub" />
            <el-option label="增加积分" value="points_add" />
            <el-option label="扣除积分" value="points_sub" />
            <el-option label="增加运装补贴" value="freight_add" />
            <el-option label="增加优惠券" value="coupon_add" />
          </el-select>
        </el-form-item>
        <el-form-item label="数量/金额">
          <el-input-number v-model="adjustForm.amount" :min="0" :precision="2" style="width: 100%" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="adjustForm.remark" placeholder="调账原因" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="adjustVisible = false">取消</el-button>
        <el-button type="primary" @click="handleAdjust" :loading="adjustLoading">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { getUserList, getUserDetail, adjustWallet } from '@/api'

const loading = ref(false)
const list = ref([])
const total = ref(0)
const query = reactive({ page: 1, pageSize: 20, keyword: '', userType: null, status: null })
const detailVisible = ref(false)
const adjustVisible = ref(false)
const adjustLoading = ref(false)
const currentUser = ref(null)
const adjustForm = reactive({ type: 'fertilizer_add', amount: 0, remark: '' })

onMounted(loadData)

async function loadData() {
  loading.value = true
  try {
    const res = await getUserList(query)
    if (res.code === 200) {
      list.value = res.data.records
      total.value = res.data.total
    }
  } finally { loading.value = false }
}

async function showDetail(row) {
  const res = await getUserDetail(row.id)
  if (res.code === 200) {
    currentUser.value = { ...row, ...res.data.wallet }
    detailVisible.value = true
  }
}

function showAdjust(row) {
  currentUser.value = row
  adjustForm.type = 'fertilizer_add'
  adjustForm.amount = 0
  adjustForm.remark = ''
  adjustVisible.value = true
}

async function handleAdjust() {
  adjustLoading.value = true
  try {
    const res = await adjustWallet({ userId: currentUser.value.id, ...adjustForm })
    if (res.code === 200) {
      ElMessage.success('调整成功')
      adjustVisible.value = false
      loadData()
    } else {
      ElMessage.error(res.message)
    }
  } finally { adjustLoading.value = false }
}
</script>

<style scoped>
.user-list { }
.filter-form { margin-bottom: 0; }
</style>
