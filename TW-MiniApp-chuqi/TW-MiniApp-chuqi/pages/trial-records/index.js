const { isLoggedIn } = require('../../utils/auth')
const { get } = require('../../utils/request')

const STATUS_TEXT = {
  1: '安排中',
  2: '已确认',
  3: '已完成',
  4: '已取消',
  5: '资料待填'
}

function mapBooking(record) {
  return {
    id: String(record.id),
    productName: record.productName,
    serviceName: `肽为服务点 | ${record.servicePoint}`,
    serviceAddress: record.address || '',
    docsCompleted: record.status === 5 || record.status === 2 || record.status === 3,
    phone: record.contactPhone,
    status: STATUS_TEXT[record.status] || record.status,
    createdAt: record.createdAt || ''
  }
}

Page({
  data: {
    booking: null
  },

  onLoad(options) {
    this.bookingId = options.id || ''
  },

  onShow() {
    this.loadBooking()
  },

  async loadBooking() {
    if (!isLoggedIn()) {
      this.setData({ booking: null })
      return
    }

    try {
      const records = await get('/api/app/trial/records', { page: 1, pageSize: 20 })
      const list = Array.isArray(records) ? records : []
      const target = list.find(item => String(item.id) === String(this.bookingId)) || list[0] || null
      this.setData({
        booking: target ? mapBooking(target) : null
      })
    } catch (error) {
      this.setData({ booking: null })
    }
  },

  goBack() {
    wx.navigateBack()
  },

  openDocsPage() {
    const booking = this.data.booking
    if (!booking) {
      return
    }

    wx.navigateTo({
      url: `/pages/trial-docs/index?id=${booking.id}`
    })
  },

  callAgent() {
    wx.makePhoneCall({
      phoneNumber: '4001234567',
      fail: () => {
        wx.showToast({
          title: '暂时无法拨号',
          icon: 'none'
        })
      }
    })
  },

  messageAgent() {
    wx.setClipboardData({
      data: '4001234567',
      success: () => {
        wx.showToast({
          title: '已复制专员电话',
          icon: 'none'
        })
      }
    })
  },

  completeDocs() {
    const booking = this.data.booking
    if (!booking) {
      return
    }

    if (booking.docsCompleted) {
      wx.showToast({
        title: '信息和资料已完善',
        icon: 'none'
      })
      return
    }

    this.openDocsPage()
  },

  handlePrimaryAction() {
    if (!this.data.booking) {
      return
    }

    if (this.data.booking.docsCompleted) {
      this.callAgent()
      return
    }

    this.openDocsPage()
  }
})
