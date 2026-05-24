const { isLoggedIn } = require('../../utils/auth')
const { fetchProductConfig, fetchServicePoints } = require('../../utils/config')
const { post } = require('../../utils/request')

Page({
  data: {
    products: [],
    servicePoints: [],
    selectedProductIndex: 0,
    selectedServiceIndex: 0,
    phoneCode: '+86',
    phone: '',
    canSubmit: false,
    submitting: false
  },

  onShow() {
    this.loadPageData(true)
  },

  async loadPageData(forceRefresh = false) {
    const config = await fetchProductConfig(forceRefresh)
    const points = await fetchServicePoints(forceRefresh)

    this.setData({
      products: [{
        id: 'product-1',
        name: config.trialProductName,
        subtitle: config.trialProductSubtitle
      }],
      servicePoints: points.map((name, index) => ({
        id: `service-${index + 1}`,
        name: `肽为服务点 | ${name}`,
        value: name
      })),
      selectedProductIndex: 0,
      selectedServiceIndex: 0
    })
  },

  goBack() {
    wx.navigateBack()
  },

  openRecords() {
    wx.navigateTo({
      url: '/pages/trial-records/index'
    })
  },

  chooseProduct() {
    wx.showActionSheet({
      itemList: this.data.products.map(item => item.name),
      success: ({ tapIndex }) => {
        this.setData({
          selectedProductIndex: tapIndex
        })
      }
    })
  },

  chooseServicePoint() {
    wx.showActionSheet({
      itemList: this.data.servicePoints.map(item => item.name),
      success: ({ tapIndex }) => {
        this.setData({
          selectedServiceIndex: tapIndex
        })
      }
    })
  },

  onPhoneInput(event) {
    const phone = event.detail.value.replace(/\D/g, '').slice(0, 11)
    this.setData({ phone })
    this.updateSubmitState(phone)
  },

  updateSubmitState(phone) {
    this.setData({
      canSubmit: /^1\d{10}$/.test(phone)
    })
  },

  async submitTrialBooking() {
    if (!this.data.canSubmit) {
      wx.showToast({
        title: '请输入正确手机号',
        icon: 'none'
      })
      return
    }

    if (!isLoggedIn()) {
      wx.navigateTo({ url: '/pages/login/index' })
      return
    }

    if (this.data.submitting) {
      return
    }

    const servicePoint = this.data.servicePoints[this.data.selectedServiceIndex]
    if (!servicePoint) {
      wx.showToast({
        title: '请选择服务网点',
        icon: 'none'
      })
      return
    }

    this.setData({ submitting: true })

    try {
      const booking = await post('/api/app/trial/book', {
        servicePoint: servicePoint.value,
        contactPhone: this.data.phone
      })

      wx.showToast({
        title: '预约成功',
        icon: 'success'
      })

      setTimeout(() => {
        wx.navigateTo({
          url: `/pages/trial-success/index?id=${booking.id}`
        })
      }, 280)
    } catch (error) {
      // request.js already shows toast
    } finally {
      this.setData({ submitting: false })
    }
  }
})
