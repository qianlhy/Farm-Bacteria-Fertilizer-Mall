const { isLoggedIn } = require('../../utils/auth')
const { requireLogin } = require('../../utils/nav')
const { get } = require('../../utils/request')
const { mapBooking } = require('../../utils/trial')

Page({
  data: {
    booking: null,
    loading: false,
    loadFailed: false,
    notLoggedIn: false
  },

  onLoad(options) {
    this.bookingId = options.id || ''
  },

  onShow() {
    this.loadBooking()
  },

  async loadBooking() {
    if (!isLoggedIn()) {
      this.setData({
        booking: null,
        loading: false,
        loadFailed: false,
        notLoggedIn: true
      })
      return
    }

    this.setData({
      loading: true,
      loadFailed: false,
      notLoggedIn: false
    })

    try {
      const records = await get('/api/app/trial/records', { page: 1, pageSize: 20 })
      const list = Array.isArray(records) ? records : []
      const target = list.find(item => String(item.id) === String(this.bookingId)) || list[0] || null
      this.setData({
        booking: target ? mapBooking(target) : null,
        loadFailed: false
      })
    } catch (error) {
      this.setData({
        booking: null,
        loadFailed: true
      })
    } finally {
      this.setData({ loading: false })
    }
  },

  goBack() {
    wx.navigateBack()
  },

  goLogin() {
    requireLogin()
  },

  openTrialPage() {
    wx.navigateTo({ url: '/pages/trial/index' })
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
