<template>
  <div>
    <el-card>
      <template #header>
        <el-form inline :model="query" class="filter-form">
          <el-form-item label="关键词"><el-input v-model="query.keyword" placeholder="订单号" clearable /></el-form-item>
          <el-form-item label="状态">
            <el-select v-model="query.status" placeholder="全部" clearable>
              <el-option label="待支付" :value="1" />
              <el-option label="已支付" :value="2" />
            </el-select>
          </el-form-item>
          <el-form-item><el-button type="primary" @click="loadData">搜索</el-button></el-form-item>
        </el-form>
      </template>
      <el-table :data="list" v-loading="loading" stripe>
        <el-table-column prop="orderNo" label="订单号" width="200" />
        <el-table-column prop="productName" label="产品" />
        <el-table-column prop="quantity" label="数量" width="80" />
        <el-table-column prop="unitOriginalPrice" label="原价" width="80" />
        <el-table-column prop="discountRate" label="折扣" width="80">
          <template #default="{ row }">{{ (row.discountRate * 100).toFixed(0) }}%</template>
        </el-table-column>
        <el-table-column prop="paidPrice" label="实付" width="100">
          <template #default="{ row }"><span style="color:#f56c6c;font-weight:bold">{{ row.paidPrice }}元</span></template>
        </el-table-column>
        <el-table-column prop="totalKg" label="获得(kg)" width="100">
          <template #default="{ row }"><span style="color:#67c23a">{{ row.totalKg }}kg</span></template>
        </el-table-column>
        <el-table-column prop="pointsAwarded" label="奖励积分" width="100" />
        <el-table-column prop="paymentMethod" label="支付方式" width="100">
          <template #default="{ row }">{{ row.paymentMethod === 'points' ? '积分' : '现金' }}</template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="row.status === 2 ? 'success' : 'warning'">{{ row.status === 2 ? '已支付' : '待支付' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间" width="170" />
        <el-table-column label="操作" width="100" fixed="right">
          <template #default="{ row }">
            <el-button v-if="row.status === 1" type="success" size="small" link @click="handleConfirm(row)">确认</el-button>
            <span v-else style="color:#999">-</span>
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
import { getRechargeList, confirmRecharge } from '@/api'

const loading = ref(false)
const list = ref([])
const total = ref(0)
const query = reactive({ page: 1, pageSize: 20, keyword: '', status: null })

onMounted(loadData)

async function loadData() {
  loading.value = true
  try {
    const res = await getRechargeList(query)
    if (res.code === 200) {
      list.value = res.data.records
      total.value = res.data.total
    }
  } finally { loading.value = false }
}

async function handleConfirm(row) {
  await ElMessageBox.confirm('确认此充值订单已支付？', '确认')
  const res = await confirmRecharge(row.id)
  if (res.code === 200) {
    ElMessage.success('确认成功')
    loadData()
  }
}
</script>
