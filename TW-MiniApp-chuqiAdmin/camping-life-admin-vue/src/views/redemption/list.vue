<template>
  <div>
    <el-card>
      <template #header>
        <div class="header-row">
          <el-form inline :model="query" class="filter-form">
            <el-form-item label="兑换码"><el-input v-model="query.keyword" placeholder="兑换码" clearable /></el-form-item>
            <el-form-item label="批次号"><el-input v-model="query.batchNo" placeholder="批次号" clearable /></el-form-item>
            <el-form-item label="状态">
              <el-select v-model="query.status" placeholder="全部" clearable>
                <el-option label="未使用" :value="1" />
                <el-option label="已使用" :value="2" />
                <el-option label="已过期" :value="3" />
                <el-option label="已禁用" :value="4" />
              </el-select>
            </el-form-item>
            <el-form-item><el-button type="primary" @click="loadData">搜索</el-button></el-form-item>
          </el-form>
          <el-button type="success" @click="openGenerate">生成兑换码</el-button>
        </div>
      </template>

      <el-table :data="list" v-loading="loading" stripe>
        <el-table-column prop="code" label="兑换码" width="160" />
        <el-table-column prop="batchNo" label="批次号" width="170" />
        <el-table-column prop="freightAmount" label="运装补贴(元)" width="120" />
        <el-table-column prop="packagingAmount" label="包装抵扣(元)" width="120" />
        <el-table-column prop="pointsAmount" label="积分" width="90" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="statusType(row.status)">{{ statusText(row.status) }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="userId" label="兑换用户" width="90" />
        <el-table-column prop="redeemedAt" label="兑换时间" width="170" />
        <el-table-column prop="expiresAt" label="过期时间" width="170" />
        <el-table-column prop="remark" label="备注" show-overflow-tooltip />
        <el-table-column prop="createdAt" label="创建时间" width="170" />
        <el-table-column label="操作" width="100" fixed="right">
          <template #default="{ row }">
            <el-button v-if="row.status === 1" type="danger" size="small" link @click="handleDisable(row)">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        v-model:current-page="query.page" v-model:page-size="query.pageSize" :total="total"
        layout="total, prev, pager, next" @current-change="loadData" style="margin-top: 16px; justify-content: flex-end"
      />
    </el-card>

    <el-dialog v-model="generateVisible" title="生成兑换码" width="520px">
      <el-form :model="generateForm" label-width="110px">
        <el-form-item label="运装补贴(元)">
          <el-input-number v-model="generateForm.freightAmount" :min="0" :precision="2" :step="10" />
        </el-form-item>
        <el-form-item label="包装抵扣(元)">
          <el-input-number v-model="generateForm.packagingAmount" :min="0" :precision="2" :step="10" />
        </el-form-item>
        <el-form-item label="积分奖励">
          <el-input-number v-model="generateForm.pointsAmount" :min="0" :step="100" />
        </el-form-item>
        <el-form-item label="生成数量">
          <el-input-number v-model="generateForm.count" :min="1" :max="500" />
        </el-form-item>
        <el-form-item label="过期时间">
          <el-date-picker
            v-model="generateForm.expiresAt"
            type="datetime"
            placeholder="可选，不填则永久有效"
            value-format="YYYY-MM-DD HH:mm:ss"
            style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="generateForm.remark" placeholder="可选" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="generateVisible = false">取消</el-button>
        <el-button type="primary" :loading="generating" @click="submitGenerate">生成</el-button>
      </template>
    </el-dialog>

    <el-dialog v-model="resultVisible" title="生成结果" width="560px">
      <div class="result-meta">批次号：{{ generateResult.batchNo }}，共 {{ generateResult.count }} 个</div>
      <el-input type="textarea" :rows="10" readonly :model-value="(generateResult.codes || []).join('\n')" />
      <template #footer>
        <el-button type="primary" @click="copyCodes">复制全部</el-button>
        <el-button @click="resultVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { generateRedemptionCodes, getRedemptionCodeList, disableRedemptionCode } from '@/api'

const loading = ref(false)
const generating = ref(false)
const generateVisible = ref(false)
const resultVisible = ref(false)
const list = ref([])
const total = ref(0)
const generateResult = ref({ codes: [], batchNo: '', count: 0 })
const query = reactive({ page: 1, pageSize: 20, keyword: '', batchNo: '', status: null })
const generateForm = reactive({
  freightAmount: 0,
  packagingAmount: 0,
  pointsAmount: 0,
  count: 10,
  expiresAt: '',
  remark: ''
})

onMounted(loadData)

async function loadData() {
  loading.value = true
  try {
    const res = await getRedemptionCodeList(query)
    if (res.code === 200) {
      list.value = res.data.records
      total.value = res.data.total
    }
  } finally {
    loading.value = false
  }
}

function openGenerate() {
  generateVisible.value = true
}

async function submitGenerate() {
  if (generateForm.freightAmount <= 0 && generateForm.packagingAmount <= 0 && generateForm.pointsAmount <= 0) {
    ElMessage.warning('请至少设置一项奖励')
    return
  }
  generating.value = true
  try {
    const res = await generateRedemptionCodes({ ...generateForm })
    if (res.code === 200) {
      generateResult.value = res.data
      generateVisible.value = false
      resultVisible.value = true
      ElMessage.success('生成成功')
      loadData()
    }
  } finally {
    generating.value = false
  }
}

async function handleDisable(row) {
  await ElMessageBox.confirm(`确认禁用兑换码 ${row.code}？`, '禁用')
  const res = await disableRedemptionCode(row.id)
  if (res.code === 200) {
    ElMessage.success('已禁用')
    loadData()
  }
}

function statusType(s) {
  return { 1: 'success', 2: 'info', 3: 'warning', 4: 'danger' }[s] || ''
}

function statusText(s) {
  return { 1: '未使用', 2: '已使用', 3: '已过期', 4: '已禁用' }[s] || s
}

async function copyCodes() {
  const text = (generateResult.value.codes || []).join('\n')
  try {
    await navigator.clipboard.writeText(text)
    ElMessage.success('已复制到剪贴板')
  } catch (error) {
    ElMessage.warning('复制失败，请手动复制')
  }
}
</script>

<style scoped>
.header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}
.result-meta {
  margin-bottom: 12px;
  color: #666;
}
</style>
