<template>
  <div>
    <el-card>
      <template #header>
        <el-form inline :model="query" class="filter-form">
          <el-form-item label="关键词"><el-input v-model="query.keyword" placeholder="订单号" clearable /></el-form-item>
          <el-form-item label="类型">
            <el-select v-model="query.pickupType" placeholder="全部" clearable>
              <el-option label="配送" value="delivery" />
              <el-option label="转罐" value="transfer" />
              <el-option label="自提" value="self_pickup" />
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="query.status" placeholder="全部" clearable>
              <el-option label="待确认" :value="1" />
              <el-option label="已确认" :value="2" />
              <el-option label="已完成" :value="3" />
              <el-option label="已取消" :value="4" />
            </el-select>
          </el-form-item>
          <el-form-item><el-button type="primary" @click="loadData">搜索</el-button></el-form-item>
        </el-form>
      </template>
      <el-table :data="list" v-loading="loading" stripe>
        <el-table-column prop="orderNo" label="订单号" width="200" />
        <el-table-column prop="pickupType" label="类型" width="80">
          <template #default="{ row }">{{ pickupTypeText(row.pickupType) }}</template>
        </el-table-column>
        <el-table-column prop="packageType" label="包装" width="100">
          <template #default="{ row }">
            {{ row.packageType === 'blue_bucket' ? '蓝桶' : row.packageType === 'ton_bucket' ? '吨桶' : '-' }}
            ({{ row.packageNewOrUsed === 'new' ? '新' : '旧' }})
          </template>
        </el-table-column>
        <el-table-column prop="totalKg" label="数量(kg)" width="100" />
        <el-table-column prop="totalAmount" label="金额" width="100">
          <template #default="{ row }">{{ row.totalAmount }}元</template>
        </el-table-column>
        <el-table-column prop="receiverName" label="收货人" width="100" />
        <el-table-column prop="receiverPhone" label="联系电话" width="120" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="statusType(row.status)">{{ statusText(row.status) }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间" width="170" />
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <el-button v-if="row.status === 1" type="success" size="small" link @click="handleConfirm(row)">确认</el-button>
            <el-button v-if="row.status === 2" type="primary" size="small" link @click="handleComplete(row)">完成</el-button>
            <el-button v-if="row.status < 3" type="danger" size="small" link @click="handleCancel(row)">取消</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:current-page="query.page" v-model:page-size="query.pageSize" :total="total"
        layout="total, prev, pager, next" @current-change="loadData" style="margin-top: 16px; justify-content: flex-end"
      />
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getPickupList, confirmPickup, completePickup, cancelPickup } from '@/api'

const loading = ref(false)
const list = ref([])
const total = ref(0)
const query = reactive({ page: 1, pageSize: 20, keyword: '', pickupType: '', status: null })

onMounted(loadData)

async function loadData() {
  loading.value = true
  try {
    const res = await getPickupList(query)
    if (res.code === 200) { list.value = res.data.records; total.value = res.data.total }
  } finally { loading.value = false }
}

function statusType(s) { return { 1: 'warning', 2: 'primary', 3: 'success', 4: 'info' }[s] || '' }
function statusText(s) { return { 1: '待确认', 2: '已确认', 3: '已完成', 4: '已取消' }[s] || s }
function pickupTypeText(type) {
  return { delivery: '配送', transfer: '转罐', self_pickup: '自提' }[type] || type || '-'
}

async function handleConfirm(row) {
  await ElMessageBox.confirm('确认此订单？', '确认')
  const res = await confirmPickup(row.id)
  if (res.code === 200) { ElMessage.success('已确认'); loadData() }
}

async function handleComplete(row) {
  await ElMessageBox.confirm('确认完成此订单？', '确认')
  const res = await completePickup(row.id)
  if (res.code === 200) { ElMessage.success('已完成'); loadData() }
}

async function handleCancel(row) {
  await ElMessageBox.confirm('取消此订单？', '取消', { type: 'warning' })
  const res = await cancelPickup(row.id, { remark: '管理员取消' })
  if (res.code === 200) { ElMessage.success('已取消'); loadData() }
}
</script>
