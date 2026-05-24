<template>
  <div>
    <el-card>
      <template #header>
        <span>系统配置</span>
        <el-button type="primary" size="small" style="float: right" :loading="saving" @click="handleSave">
          保存配置
        </el-button>
      </template>

      <el-alert
        title="保存后，小程序下次进入充值/提货/试用页面时会自动拉取最新配置。"
        type="info"
        :closable="false"
        show-icon
        style="margin-bottom: 16px"
      />

      <div v-loading="loading">
        <el-card
          v-for="group in groupedList"
          :key="group.name"
          shadow="never"
          style="margin-bottom: 16px"
        >
          <template #header>
            <span>{{ groupLabel(group.name) }}</span>
          </template>

          <el-table :data="group.items" stripe>
            <el-table-column prop="configName" label="配置名称" width="200" />
            <el-table-column prop="configKey" label="配置键" width="280" />
            <el-table-column prop="configValue" label="配置值">
              <template #default="{ row }">
                <el-input-number
                  v-if="row.configType === 'number'"
                  v-model="row.numberValue"
                  :precision="getNumberPrecision(row.configKey)"
                  :step="getNumberStep(row.configKey)"
                  :min="0"
                  controls-position="right"
                  style="width: 220px"
                />
                <el-input
                  v-else
                  v-model="row.configValue"
                  size="small"
                  :type="row.configType === 'json' ? 'textarea' : 'text'"
                  :autosize="row.configType === 'json' ? { minRows: 2, maxRows: 4 } : false"
                  style="max-width: 500px"
                />
              </template>
            </el-table-column>
            <el-table-column prop="remark" label="说明" show-overflow-tooltip />
          </el-table>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { getConfigList, updateConfig } from '@/api'

const loading = ref(false)
const saving = ref(false)
const list = ref([])

const GROUP_LABELS = {
  product: '充值产品',
  delivery: '配送规则',
  package: '包装规格',
  points: '积分规则',
  trial: '试用预约'
}

const groupedList = computed(() => {
  const map = new Map()
  list.value.forEach(item => {
    const groupName = item.configGroup || 'other'
    if (!map.has(groupName)) {
      map.set(groupName, [])
    }
    map.get(groupName).push(item)
  })

  return Array.from(map.entries()).map(([name, items]) => ({ name, items }))
})

onMounted(loadData)

function groupLabel(name) {
  return GROUP_LABELS[name] || name
}

function getNumberPrecision(key) {
  return key.includes('discount_rate') ? 2 : 0
}

function getNumberStep(key) {
  if (key.includes('discount_rate')) return 0.01
  if (key.includes('freight_per_kg')) return 0.1
  return 1
}

function hydrateList(records) {
  return records.map(item => ({
    ...item,
    numberValue: item.configType === 'number' ? Number(item.configValue || 0) : 0
  }))
}

async function loadData() {
  loading.value = true
  try {
    const res = await getConfigList()
    if (res.code === 200) {
      list.value = hydrateList(res.data.records || [])
    }
  } finally {
    loading.value = false
  }
}

function validateItem(item) {
  if (item.configType === 'number') {
    const value = Number(item.numberValue)
    if (!Number.isFinite(value) || value < 0) {
      return `${item.configName} 必须是大于等于 0 的数字`
    }
    if (item.configKey.includes('discount_rate') && (value <= 0 || value > 1)) {
      return `${item.configName} 必须在 0 到 1 之间`
    }
    return ''
  }

  if (item.configType === 'json') {
    try {
      const parsed = JSON.parse(item.configValue)
      if (!Array.isArray(parsed)) {
        return `${item.configName} 必须是 JSON 数组`
      }
    } catch (error) {
      return `${item.configName} JSON 格式不正确`
    }
    return ''
  }

  if (!String(item.configValue || '').trim()) {
    return `${item.configName} 不能为空`
  }

  return ''
}

function serializeItem(item) {
  if (item.configType === 'number') {
    return String(item.numberValue)
  }
  return String(item.configValue || '').trim()
}

async function handleSave() {
  for (const item of list.value) {
    const error = validateItem(item)
    if (error) {
      ElMessage.error(error)
      return
    }
  }

  saving.value = true
  let success = true

  try {
    for (const item of list.value) {
      const res = await updateConfig({
        configKey: item.configKey,
        configValue: serializeItem(item)
      })
      if (res.code !== 200) {
        success = false
      }
    }

    if (success) {
      ElMessage.success('配置已保存，小程序下次进入相关页面会自动生效')
      await loadData()
    } else {
      ElMessage.error('部分配置保存失败')
    }
  } finally {
    saving.value = false
  }
}
</script>
