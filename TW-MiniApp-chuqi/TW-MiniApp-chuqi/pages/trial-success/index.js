const { isLoggedIn } = require('../../utils/auth')
const { get, post } = require('../../utils/request')
const { mapBooking, maskPhone } = require('../../utils/trial')

Page({
  data: {
    booking: null,
    maskedPhone: '',
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
        maskedPhone: '',
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
      const booking = target ? mapBooking(target, { includeStatusCode: true }) : null

      this.setData({
        booking,
        maskedPhone: booking ? maskPhone(booking.phone) : '',
        loadFailed: false
      })
    } catch (error) {
      this.setData({
        booking: null,
        maskedPhone: '',
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
    wx.navigateTo({ url: '/pages/login/index' })
  },

  openTrialPage() {
    wx.navigateTo({ url: '/pages/trial/index' })
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
