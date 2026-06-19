<template>
  <div>
    <el-card>
      <template #header>
        <div class="header-row">
          <el-form inline :model="query" class="filter-form">
            <el-form-item label="作物名称"><el-input v-model="query.keyword" placeholder="作物名称" clearable /></el-form-item>
            <el-form-item label="状态">
              <el-select v-model="query.status" placeholder="全部" clearable>
                <el-option label="上架" :value="1" />
                <el-option label="下架" :value="0" />
              </el-select>
            </el-form-item>
            <el-form-item><el-button type="primary" @click="loadData">搜索</el-button></el-form-item>
          </el-form>
          <el-button type="success" @click="openCreate">新增作物</el-button>
        </div>
      </template>

      <el-table :data="list" v-loading="loading" stripe>
        <el-table-column label="封面" width="90">
          <template #default="{ row }">
            <el-image v-if="row.cover" :src="row.cover" fit="cover" style="width: 56px; height: 56px; border-radius: 6px" />
            <span v-else style="color:#bbb">无</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="作物名称" width="120" />
        <el-table-column prop="summary" label="简介" show-overflow-tooltip />
        <el-table-column label="试验报告" width="120">
          <template #default="{ row }">
            <el-tag v-if="row.pdfUrl" type="success" size="small">已上传</el-tag>
            <span v-else style="color:#bbb">无</span>
          </template>
        </el-table-column>
        <el-table-column prop="sortOrder" label="排序" width="80" />
        <el-table-column prop="status" label="状态" width="90">
          <template #default="{ row }">
            <el-tag :type="row.status === 1 ? 'success' : 'info'">{{ row.status === 1 ? '上架' : '下架' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="updatedAt" label="更新时间" width="170" />
        <el-table-column label="操作" width="140" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" size="small" link @click="openEdit(row)">编辑</el-button>
            <el-button type="danger" size="small" link @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        v-model:current-page="query.page" v-model:page-size="query.pageSize" :total="total"
        layout="total, prev, pager, next" @current-change="loadData" style="margin-top: 16px; justify-content: flex-end"
      />
    </el-card>

    <el-dialog v-model="dialogVisible" :title="form.id ? '编辑作物' : '新增作物'" width="640px">
      <el-form :model="form" label-width="100px">
        <el-form-item label="作物名称" required>
          <el-input v-model="form.name" maxlength="50" placeholder="如：番茄" />
        </el-form-item>
        <el-form-item label="列表封面">
          <div class="upload-block">
            <el-upload
              class="img-uploader"
              :show-file-list="false"
              :http-request="(o) => handleImageUpload(o, 'cover')"
              accept="image/*"
            >
              <img v-if="form.cover" :src="form.cover" class="img-preview" />
              <el-icon v-else class="img-uploader-icon"><Plus /></el-icon>
            </el-upload>
            <div class="upload-tip">农业页列表展示的封面图</div>
          </div>
        </el-form-item>
        <el-form-item label="详情头图">
          <div class="upload-block">
            <el-upload
              class="img-uploader"
              :show-file-list="false"
              :http-request="(o) => handleImageUpload(o, 'headerImage')"
              accept="image/*"
            >
              <img v-if="form.headerImage" :src="form.headerImage" class="img-preview" />
              <el-icon v-else class="img-uploader-icon"><Plus /></el-icon>
            </el-upload>
            <div class="upload-tip">作物详情页顶部大图（不填则使用封面）</div>
          </div>
        </el-form-item>
        <el-form-item label="详情标题">
          <el-input v-model="form.title" maxlength="100" placeholder="不填默认与作物名称相同" />
        </el-form-item>
        <el-form-item label="列表简介">
          <el-input v-model="form.summary" maxlength="255" placeholder="如：菌肥在番茄上的应用与试验效果" />
        </el-form-item>
        <el-form-item label="详情正文">
          <el-input v-model="form.body" type="textarea" :rows="5" maxlength="2000" show-word-limit placeholder="作物试验内容、长势/产量/品质对比等" />
        </el-form-item>
        <el-form-item label="报告名称">
          <el-input v-model="form.reportName" maxlength="100" placeholder="如：番茄试验报告.pdf" />
        </el-form-item>
        <el-form-item label="试验报告">
          <div class="upload-block">
            <el-upload
              :show-file-list="false"
              :http-request="handlePdfUpload"
              accept="application/pdf,.pdf"
            >
              <el-button type="primary" :loading="pdfUploading">
                {{ form.pdfUrl ? '重新上传 PDF' : '上传 PDF' }}
              </el-button>
            </el-upload>
            <div v-if="form.pdfUrl" class="pdf-url">{{ form.pdfUrl }}</div>
            <div v-else class="upload-tip">上传后小程序可在线查看 / 下载报告</div>
          </div>
        </el-form-item>
        <el-form-item label="排序">
          <el-input-number v-model="form.sortOrder" :min="0" :step="1" />
          <span class="upload-tip" style="margin-left: 10px">数字越小越靠前</span>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio :label="1">上架</el-radio>
            <el-radio :label="0">下架</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" :loading="saving" @click="submitForm">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { getCropList, saveCrop, deleteCrop, uploadFile } from '@/api'

const loading = ref(false)
const saving = ref(false)
const pdfUploading = ref(false)
const dialogVisible = ref(false)
const list = ref([])
const total = ref(0)
const query = reactive({ page: 1, pageSize: 20, keyword: '', status: null })

const emptyForm = () => ({
  id: null,
  name: '',
  cover: '',
  headerImage: '',
  title: '',
  summary: '',
  body: '',
  reportName: '',
  pdfUrl: '',
  sortOrder: 0,
  status: 1,
})
const form = reactive(emptyForm())

onMounted(loadData)

async function loadData() {
  loading.value = true
  try {
    const res = await getCropList(query)
    if (res.code === 200) {
      list.value = res.data.records
      total.value = res.data.total
    }
  } finally {
    loading.value = false
  }
}

function openCreate() {
  Object.assign(form, emptyForm())
  dialogVisible.value = true
}

function openEdit(row) {
  Object.assign(form, emptyForm(), row)
  dialogVisible.value = true
}

async function handleImageUpload(options, field) {
  try {
    const res = await uploadFile(options.file)
    if (res.code !== 200) {
      ElMessage.error(res.message || '上传失败')
      options.onError(new Error(res.message || '上传失败'))
      return
    }
    form[field] = res.data
    options.onSuccess(res.data)
  } catch (error) {
    options.onError(error)
  }
}

async function handlePdfUpload(options) {
  pdfUploading.value = true
  try {
    const res = await uploadFile(options.file)
    if (res.code !== 200) {
      ElMessage.error(res.message || '上传失败')
      options.onError(new Error(res.message || '上传失败'))
      return
    }
    form.pdfUrl = res.data
    if (!form.reportName) {
      form.reportName = options.file.name
    }
    ElMessage.success('报告上传成功')
    options.onSuccess(res.data)
  } catch (error) {
    options.onError(error)
  } finally {
    pdfUploading.value = false
  }
}

async function submitForm() {
  if (!form.name.trim()) {
    ElMessage.warning('请填写作物名称')
    return
  }
  saving.value = true
  try {
    const res = await saveCrop({ ...form })
    if (res.code === 200) {
      ElMessage.success('保存成功')
      dialogVisible.value = false
      loadData()
    }
  } finally {
    saving.value = false
  }
}

async function handleDelete(row) {
  await ElMessageBox.confirm(`确认删除作物「${row.name}」？`, '删除', { type: 'warning' })
  const res = await deleteCrop(row.id)
  if (res.code === 200) {
    ElMessage.success('已删除')
    loadData()
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
.upload-block {
  width: 100%;
}
.upload-tip {
  margin-top: 6px;
  color: #909399;
  font-size: 12px;
}
.img-uploader {
  width: 120px;
  height: 120px;
  border: 1px dashed #dcdfe6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}
.img-preview {
  width: 120px;
  height: 120px;
  object-fit: cover;
}
.img-uploader-icon {
  font-size: 26px;
  color: #8c939d;
}
.pdf-url {
  margin-top: 8px;
  color: #606266;
  font-size: 12px;
  word-break: break-all;
}
</style>
