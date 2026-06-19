const { requireLogin } = require('../../utils/nav')
const { get } = require('../../utils/request')

const STATUS_TEXT = {
  1: '待确认',
  2: '打包中',
  3: '已发货',
  4: '已收货',
  5: '已取消'
}

const PICKUP_TYPE_TEXT = {
  self: '自提',
  self_pickup: '自提',
  delivery: '配送',
  transfer: '转罐'
}

function formatTime(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  const pad = n => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function toNumber(value) {
  const num = Number(value)
  return Number.isFinite(num) ? num : 0
}

Page({
  data: {
    records: [],
    loading: false
  },

  onShow() {
    if (!requireLogin({ redirect: true })) {
      return
    }
    this.loadRecords()
  },

  onLoginSuccess() {
    this.loadRecords()
  },

  async loadRecords() {
    this.setData({ loading: true })
    try {
      const records = await get('/api/app/pickup/records', { page: 1, pageSize: 50 })
      this.setData({
        records: (records || []).map(item => ({
          id: item.id,
          orderNo: item.orderNo,
          status: item.status,
          statusText: STATUS_TEXT[item.status] || '处理中',
          pickupTypeText: PICKUP_TYPE_TEXT[item.pickupType] || item.pickupType || '',
          totalKg: toNumber(item.totalKg),
          deductKg: Math.round(toNumber(item.totalKg) + toNumber(item.totalAmount)),
          receiverAddress: item.receiverAddress || item.deliveryLocation || '',
          createdAt: formatTime(item.createdAt)
        }))
      })
    } catch (e) {
      this.setData({ records: [] })
      wx.showToast({ title: '加载提货记录失败', icon: 'none' })
    } finally {
      this.setData({ loading: false })
    }
  },

  goBack() {
    wx.navigateBack()
  }
})
