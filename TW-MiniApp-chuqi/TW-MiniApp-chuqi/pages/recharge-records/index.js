const { isLoggedIn } = require('../../utils/auth')
const { get } = require('../../utils/request')

function formatTime(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const pad = n => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

Page({
  data: {
    records: [],
    loading: false
  },

  onShow() {
    if (!isLoggedIn()) {
      wx.navigateTo({ url: '/pages/login/index' })
      return
    }
    this.loadRecords()
  },

  async loadRecords() {
    this.setData({ loading: true })
    try {
      const records = await get('/api/app/recharge/records', { page: 1, pageSize: 50 })
      this.setData({
        records: (records || []).map(item => ({
          orderNo: item.orderNo,
          productName: item.productName || '',
          quantity: item.quantity || 1,
          totalKg: item.totalKg || 0,
          paidPrice: item.paidPrice || 0,
          pointsAwarded: item.pointsAwarded || 0,
          paymentMethod: item.paymentMethod === 'points' ? '积分兑换' : '微信支付',
          status: item.status,
          paidAt: formatTime(item.paidAt || item.createdAt),
          channelName: item.paymentMethod === 'points' ? '积分兑换' : '微信小程序充值'
        }))
      })
    } catch (e) {
      this.setData({ records: [] })
    } finally {
      this.setData({ loading: false })
    }
  },

  goBack() {
    wx.navigateBack()
  }
})
