// 农业页作物数据
// 数据来源：后端管理端「农业作物」配置（/api/app/crops）。
// 封面/头图未配置时使用占位图。

const { get } = require('./request')

const PLACEHOLDER_IMAGE = '/assets/home/about_useful.jpg'

function normalizeListItem(item) {
  return {
    id: item.id,
    name: item.name,
    cover: item.cover || PLACEHOLDER_IMAGE,
    summary: item.summary || ''
  }
}

function normalizeDetail(item) {
  if (!item) return null
  return {
    id: item.id,
    name: item.name,
    headerImage: item.headerImage || item.cover || PLACEHOLDER_IMAGE,
    title: item.title || item.name,
    body: item.body || '',
    reportName: item.reportName || '试验报告.pdf',
    pdfUrl: item.pdfUrl || ''
  }
}

function fetchCropList() {
  return get('/api/app/crops/list', null, { silent: true })
    .then(list => (list || []).map(normalizeListItem))
}

function fetchCrop(id) {
  return get(`/api/app/crops/detail/${id}`, null, { silent: true })
    .then(normalizeDetail)
}

module.exports = {
  fetchCropList,
  fetchCrop
}
