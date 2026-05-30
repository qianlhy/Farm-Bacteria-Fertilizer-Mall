<template>
  <div class="content-edit">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>{{ isEdit ? '编辑内容' : '新建内容' }}</span>
          <el-button @click="goBack">返回列表</el-button>
        </div>
      </template>

      <el-form ref="formRef" :model="form" :rules="rules" label-width="100px" v-loading="loading">
        <el-form-item label="内容分类" prop="channel">
          <el-radio-group v-model="form.channel" :disabled="isEdit">
            <el-radio label="news">轮播资讯</el-radio>
            <el-radio label="moment">朋友圈动态</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="内容类型" prop="contentType">
          <el-radio-group v-model="form.contentType" class="content-type-group">
            <template v-if="form.channel === 'news'">
              <el-radio label="announcement">公告</el-radio>
              <el-radio label="notice">通知</el-radio>
              <el-radio label="article">文章</el-radio>
              <el-radio label="video">视频</el-radio>
            </template>
            <template v-else>
              <el-radio label="dynamic">图文动态</el-radio>
              <el-radio label="video">视频动态</el-radio>
              <el-radio label="article">文章</el-radio>
            </template>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" maxlength="200" show-word-limit placeholder="轮播图展示标题 / 视频标题" />
        </el-form-item>

        <el-form-item label="正文" prop="content">
          <el-input
            v-model="form.content"
            type="textarea"
            :rows="5"
            maxlength="2000"
            show-word-limit
            placeholder="详情页正文 / 朋友圈文案"
          />
        </el-form-item>

        <el-form-item v-if="form.channel === 'moment'" label="发布者">
          <el-input v-model="form.userNickname" maxlength="50" placeholder="默认：肽为农家菌肥" />
        </el-form-item>

        <el-form-item v-if="form.channel === 'moment'" label="位置">
          <el-input v-model="form.location" maxlength="100" placeholder="如：泉州市·示范棚" />
        </el-form-item>

        <el-form-item v-if="form.contentType !== 'video'" label="图片">
          <div class="upload-block">
            <el-upload
              v-model:file-list="imageFileList"
              list-type="picture-card"
              :http-request="handleImageUpload"
              :on-remove="handleImageRemove"
              accept="image/*"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>
            <div class="upload-tip">轮播至少 1 张封面图；图文动态最多 9 张</div>
          </div>
        </el-form-item>

        <template v-if="form.contentType === 'video'">
          <el-form-item label="视频封面" required>
            <div class="upload-block">
              <el-upload
                class="cover-uploader"
                :show-file-list="false"
                :http-request="handleCoverUpload"
                accept="image/*"
              >
                <img v-if="form.videoCover" :src="form.videoCover" class="cover-preview" />
                <el-icon v-else class="cover-uploader-icon"><Plus /></el-icon>
              </el-upload>
              <div class="upload-tip">建议上传 16:9 封面图，小程序列表与详情页展示</div>
            </div>
          </el-form-item>

          <el-form-item label="视频文件" required>
            <div class="upload-block">
              <el-upload
                :show-file-list="false"
                :http-request="handleVideoUpload"
                accept="video/*"
              >
                <el-button type="primary" :loading="videoUploading">
                  {{ form.videoUrl ? '重新上传视频' : '上传视频' }}
                </el-button>
              </el-upload>
              <div v-if="form.videoUrl" class="video-preview">
                <video
                  class="video-preview__player"
                  :src="form.videoUrl"
                  :poster="form.videoCover"
                  controls
                  preload="metadata"
                ></video>
                <div class="video-url">{{ form.videoUrl }}</div>
              </div>
              <div v-else class="upload-tip">支持 mp4 / mov，最大 100MB</div>
            </div>
          </el-form-item>
        </template>

        <el-form-item label="发布状态">
          <el-radio-group v-model="form.status">
            <el-radio :label="2">立即发布</el-radio>
            <el-radio :label="1">待审核</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :loading="saving" @click="handleSubmit">保存</el-button>
          <el-button @click="goBack">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { getContentDetail, saveContent, uploadFile } from '@/api'

const route = useRoute()
const router = useRouter()
const formRef = ref()
const loading = ref(false)
const saving = ref(false)
const videoUploading = ref(false)
const imageFileList = ref([])

const form = reactive({
  id: null,
  channel: 'news',
  contentType: 'announcement',
  title: '',
  content: '',
  userNickname: '肽为农家菌肥',
  location: '',
  images: [],
  videoUrl: '',
  videoCover: '',
  status: 2,
})

const isEdit = computed(() => Boolean(form.id))

const rules = {
  channel: [{ required: true, message: '请选择分类', trigger: 'change' }],
  contentType: [{ required: true, message: '请选择类型', trigger: 'change' }],
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
}

watch(
  () => form.channel,
  (channel) => {
    if (isEdit.value) return
    form.contentType = channel === 'news' ? 'announcement' : 'dynamic'
  }
)

onMounted(async () => {
  const channel = route.query.channel
  if (channel === 'news' || channel === 'moment') {
    form.channel = channel
    form.contentType = channel === 'news' ? 'announcement' : 'dynamic'
  }

  if (route.query.type === 'video') {
    form.channel = route.query.channel === 'news' ? 'news' : 'moment'
    form.contentType = 'video'
  }

  const id = route.query.id
  if (id) {
    await loadDetail(id)
  }
})

async function loadDetail(id) {
  loading.value = true
  try {
    const res = await getContentDetail(id)
    if (res.code !== 200 || !res.data) {
      ElMessage.error('内容不存在')
      goBack()
      return
    }
    const data = res.data
    Object.assign(form, {
      id: data.id,
      channel: data.channel || 'moment',
      contentType: data.contentType || 'dynamic',
      title: data.title || '',
      content: data.content || '',
      userNickname: data.userNickname || '肽为农家菌肥',
      location: data.location || '',
      images: data.images || [],
      videoUrl: data.videoUrl || '',
      videoCover: data.videoCover || '',
      status: data.status === 1 ? 1 : 2,
    })
    syncImageFileList()
  } finally {
    loading.value = false
  }
}

function syncImageFileList() {
  imageFileList.value = (form.images || []).map((url, index) => ({
    name: `image-${index}`,
    url,
  }))
}

async function handleImageUpload(options) {
  try {
    const res = await uploadFile(options.file)
    if (res.code !== 200) {
      ElMessage.error(res.message || '上传失败')
      options.onError(new Error(res.message || '上传失败'))
      return
    }
    form.images.push(res.data)
    options.onSuccess(res.data)
  } catch (error) {
    options.onError(error)
  }
}

function handleImageRemove(file) {
  const url = file.url || file.response
  form.images = form.images.filter(item => item !== url)
}

async function handleCoverUpload(options) {
  try {
    const res = await uploadFile(options.file)
    if (res.code !== 200) {
      ElMessage.error(res.message || '上传失败')
      return
    }
    form.videoCover = res.data
    options.onSuccess(res.data)
  } catch (error) {
    options.onError(error)
  }
}

watch(
  () => form.contentType,
  (type) => {
    if (type === 'video') {
      form.images = []
      imageFileList.value = []
    }
  }
)

async function handleVideoUpload(options) {
  videoUploading.value = true
  try {
    const res = await uploadFile(options.file)
    if (res.code !== 200) {
      ElMessage.error(res.message || '上传失败')
      options.onError(new Error(res.message || '上传失败'))
      return
    }
    form.videoUrl = res.data
    if (!form.videoCover && form.images.length) {
      form.videoCover = form.images[0]
    }
    ElMessage.success('视频上传成功')
    options.onSuccess(res.data)
  } catch (error) {
    options.onError(error)
  } finally {
    videoUploading.value = false
  }
}

async function handleSubmit() {
  await formRef.value.validate()

  if (form.contentType === 'video') {
    if (!form.videoUrl) {
      ElMessage.warning('请上传视频文件')
      return
    }
    if (!form.videoCover) {
      ElMessage.warning('请上传视频封面图')
      return
    }
  } else if (form.channel === 'news' && !form.images.length) {
    ElMessage.warning('轮播资讯请至少上传一张封面图')
    return
  }

  saving.value = true
  try {
    const payload = {
      id: form.id,
      channel: form.channel,
      contentType: form.contentType,
      title: form.title,
      content: form.content,
      images: form.contentType === 'video' ? [] : form.images,
      videoUrl: form.contentType === 'video' ? form.videoUrl : '',
      videoCover: form.contentType === 'video' ? form.videoCover : '',
      location: form.location,
      userNickname: form.userNickname,
      status: form.status,
    }
    const res = await saveContent(payload)
    if (res.code === 200) {
      ElMessage.success('保存成功')
      router.push('/content')
    }
  } finally {
    saving.value = false
  }
}

function goBack() {
  router.push('/content')
}
</script>

<style scoped>
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.upload-block {
  width: 100%;
}

.upload-tip {
  margin-top: 8px;
  color: #909399;
  font-size: 12px;
}

.cover-uploader {
  width: 148px;
  height: 148px;
  border: 1px dashed #dcdfe6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cover-preview {
  width: 148px;
  height: 148px;
  object-fit: cover;
}

.cover-uploader-icon {
  font-size: 28px;
  color: #8c939d;
}

.content-type-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
}

.video-preview {
  margin-top: 12px;
}

.video-preview__player {
  width: 100%;
  max-width: 480px;
  max-height: 270px;
  border-radius: 8px;
  background: #000;
}

.video-url {
  margin-top: 8px;
  color: #606266;
  font-size: 12px;
  word-break: break-all;
}
</style>
