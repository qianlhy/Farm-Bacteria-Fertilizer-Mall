const { isLoggedIn } = require('../../utils/auth')
const { get, post } = require('../../utils/request')

const STATUS_TEXT = {
  1: '安排中',
  2: '已确认',
  3: '已完成',
  4: '已取消',
  5: '资料待填'
}

function maskPhone(phone) {
  const value = String(phone || '')
  if (value.length !== 11) {
    return value
  }

  return `${value.slice(0, 3)}****${value.slice(-4)}`
}

function mapBooking(record) {
  return {
    id: String(record.id),
    bookingNo: record.bookingNo,
    productName: record.productName,
    serviceName: `肽为服务点 | ${record.servicePoint}`,
    serviceAddress: record.address || '',
    docsCompleted: record.status === 5 || record.status === 2 || record.status === 3,
    phone: record.contactPhone,
    status: STATUS_TEXT[record.status] || record.status,
    statusCode: record.status,
    createdAt: record.createdAt || ''
  }
}

Page({
  data: {
    booking: null,
    maskedPhone: ''
  },

  onLoad(options) {
    this.bookingId = options.id || ''
  },

  onShow() {
    this.loadBooking()
  },

  async loadBooking() {
    if (!isLoggedIn()) {
      this.setData({ booking: null, maskedPhone: '' })
      return
    }

    try {
      const records = await get('/api/app/trial/records', { page: 1, pageSize: 20 })
      const list = Array.isArray(records) ? records : []
      const target = list.find(item => String(item.id) === String(this.bookingId)) || list[0] || null
      const booking = target ? mapBooking(target) : null

      this.setData({
        booking,
        maskedPhone: booking ? maskPhone(booking.phone) : ''
      })
    } catch (error) {
      this.setData({ booking: null, maskedPhone: '' })
    }
  },

  goBack() {
    wx.navigateBack()
  },

  triggerCancelTrial() {
    const booking = this.data.booking
    if (!booking || booking.statusCode === 4) {
      wx.showToast({
        title: '当前试用已取消',
        icon: 'none'
      })
      return
    }

    wx.showModal({
      title: '取消试用',
      content: '确认取消本次试用申请吗？',
      confirmText: '取消试用',
      cancelText: '返回',
      success: async ({ confirm }) => {
        if (!confirm) {
          return
        }

        try {
          await post(`/api/app/trial/cancel/${booking.id}`)
          await this.loadBooking()
          wx.showToast({
            title: '已取消试用',
            icon: 'success'
          })
        } catch (error) {
          // request.js already shows toast
        }
      }
    })
  },

  openRecords() {
    const booking = this.data.booking
    const suffix = booking ? `?id=${booking.id}` : ''
    wx.navigateTo({
      url: `/pages/trial-records/index${suffix}`
    })
  }
})
