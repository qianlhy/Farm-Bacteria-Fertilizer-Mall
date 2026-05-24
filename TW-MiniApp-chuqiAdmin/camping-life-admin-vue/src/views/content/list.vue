<template>
  <div>
    <el-card>
      <template #header>
        <el-form inline :model="query" class="filter-form">
          <el-form-item label="类型">
            <el-select v-model="query.channel" placeholder="全部" clearable>
              <el-option label="新闻" value="news" />
              <el-option label="动态" value="moment" />
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="query.status" placeholder="全部" clearable>
              <el-option label="待审核" :value="1" />
              <el-option label="已发布" :value="2" />
              <el-option label="已拒绝" :value="3" />
              <el-option label="已删除" :value="4" />
            </el-select>
          </el-form-item>
          <el-form-item><el-button type="primary" @click="loadData">搜索</el-button></el-form-item>
        </el-form>
      </template>
      <el-table :data="list" v-loading="loading" stripe>
        <el-table-column prop="id" label="ID" width="70" />
        <el-table-column prop="postNo" label="编号" width="180" />
        <el-table-column prop="userNickname" label="发布者" width="120" />
        <el-table-column prop="channel" label="类型" width="80">
          <template #default="{ row }">{{ row.channel === 'news' ? '新闻' : '动态' }}</template>
        </el-table-column>
        <el-table-column prop="title" label="标题" show-overflow-tooltip />
        <el-table-column prop="content" label="内容" show-overflow-tooltip />
        <el-table-column prop="viewCount" label="浏览" width="70" />
        <el-table-column prop="likeCount" label="点赞" width="70" />
        <el-table-column prop="commentCount" label="评论" width="70" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="statusType(row.status)">{{ statusText(row.status) }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间" width="170" />
        <el-table-column label="操作" width="180" fixed="right">
          <template #default="{ row }">
            <el-button v-if="row.status === 1" type="success" size="small" link @click="handleAudit(row, 2)">通过</el-button>
            <el-button v-if="row.status === 1" type="danger" size="small" link @click="handleAudit(row, 3)">拒绝</el-button>
            <el-button v-if="row.status === 2" type="danger" size="small" link @click="handleDelete(row)">删除</el-button>
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
import { getContentList, auditContent, deleteContent } from '@/api'

const loading = ref(false)
const list = ref([])
const total = ref(0)
const query = reactive({ page: 1, pageSize: 20, channel: '', status: null })

onMounted(loadData)

async function loadData() {
  loading.value = true
  try {
    const res = await getContentList(query)
    if (res.code === 200) { list.value = res.data.records; total.value = res.data.total }
  } finally { loading.value = false }
}

function statusType(s) { return { 1: 'warning', 2: 'success', 3: 'danger', 4: 'info' }[s] || '' }
function statusText(s) { return { 1: '待审核', 2: '已发布', 3: '已拒绝', 4: '已删除' }[s] || s }

async function handleAudit(row, status) {
  const action = status === 2 ? '通过' : '拒绝'
  await ElMessageBox.confirm(`确认${action}此内容？`, action)
  const res = await auditContent(row.id, { status, remark: '' })
  if (res.code === 200) { ElMessage.success(`已${action}`); loadData() }
}

async function handleDelete(row) {
  await ElMessageBox.confirm('确认删除此内容？', '删除', { type: 'warning' })
  const res = await deleteContent(row.id)
  if (res.code === 200) { ElMessage.success('已删除'); loadData() }
}
</script>
