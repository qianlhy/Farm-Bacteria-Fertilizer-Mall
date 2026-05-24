<template>
  <div>
    <el-card>
      <template #header>
        <el-form inline :model="query" class="filter-form">
          <el-form-item label="关键词"><el-input v-model="query.keyword" placeholder="姓名/电话/城市" clearable /></el-form-item>
          <el-form-item label="状态">
            <el-select v-model="query.status" placeholder="全部" clearable>
              <el-option label="待处理" :value="1" />
              <el-option label="合作中" :value="2" />
              <el-option label="已拒绝" :value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="query.partnerType" placeholder="全部" clearable>
              <el-option label="区域合伙人" value="regional" />
              <el-option label="村级合伙人" value="village" />
            </el-select>
          </el-form-item>
          <el-form-item><el-button type="primary" @click="loadData">搜索</el-button></el-form-item>
        </el-form>
      </template>
      <el-table :data="list" v-loading="loading" stripe>
        <el-table-column prop="id" label="ID" width="70" />
        <el-table-column prop="name" label="姓名" width="100" />
        <el-table-column prop="phone" label="电话" width="120" />
        <el-table-column prop="city" label="城市" width="120" />
        <el-table-column prop="partnerType" label="类型" width="120">
          <template #default="{ row }">{{ row.partnerType === 'regional' ? '区域合伙人' : '村级合伙人' }}</template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="statusType(row.status)">{{ statusText(row.status) }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注" show-overflow-tooltip />
        <el-table-column prop="createdAt" label="申请时间" width="170" />
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row }">
            <el-button v-if="row.status === 1" type="success" size="small" link @click="handleAction(row, 2, '合作中')">合作</el-button>
            <el-button v-if="row.status === 1" type="danger" size="small" link @click="handleAction(row, 3, '已拒绝')">拒绝</el-button>
            <el-button type="primary" size="small" link @click="handleContact(row)">联系</el-button>
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
import { getPartnerList, handlePartner } from '@/api'

const loading = ref(false)
const list = ref([])
const total = ref(0)
const query = reactive({ page: 1, pageSize: 20, keyword: '', status: null, partnerType: '' })

onMounted(loadData)

async function loadData() {
  loading.value = true
  try {
    const res = await getPartnerList(query)
    if (res.code === 200) { list.value = res.data.records; total.value = res.data.total }
  } finally { loading.value = false }
}

function statusType(s) { return { 1: 'warning', 2: 'success', 3: 'info' }[s] || '' }
function statusText(s) { return { 1: '待处理', 2: '合作中', 3: '已拒绝' }[s] || s }

async function handleAction(row, status, label) {
  await ElMessageBox.confirm(`确认设为"${label}"？`, label)
  const res = await handlePartner(row.id, { status, remark: '' })
  if (res.code === 200) { ElMessage.success(`已设为${label}`); loadData() }
}

function handleContact(row) {
  ElMessageBox.alert(`联系人: ${row.name}\n电话: ${row.phone}\n城市: ${row.city}`, '联系方式')
}
</script>
