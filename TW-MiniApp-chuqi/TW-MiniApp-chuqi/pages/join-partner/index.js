const { isLoggedIn } = require('../../utils/auth')
const { post } = require('../../utils/request')

const partnerTypes = [
  { key: 'light', label: '轻代理' },
  { key: 'general', label: '总代理' },
  { key: 'company', label: '公司合伙人' }
]

Page({
  data: {
    partnerTypes,
    selectedType: 'light',
    name: '',
    phone: '',
    city: '',
    submitting: false
  },

  goBack() {
    wx.navigateBack()
  },

  selectType(event) {
    const { key } = event.currentTarget.dataset
    this.setData({
      selectedType: key
    })
  },

  onNameInput(event) {
    this.setData({
      name: event.detail.value
    })
  },

  onPhoneInput(event) {
    this.setData({
      phone: event.detail.value
    })
  },

  onCityInput(event) {
    this.setData({
      city: event.detail.value
    })
  },

  submitForm() {
    if (this.data.submitting) {
      return
    }

    const name = (this.data.name || '').trim()
    const phone = (this.data.phone || '').trim()
    const city = (this.data.city || '').trim()
    const partnerType = this.data.selectedType

    if (!name) {
      wx.showToast({ title: '请填写姓名', icon: 'none' })
      return
    }
    if (!/^1\d{10}$/.test(phone)) {
      wx.showToast({ title: '请输入正确的手机号', icon: 'none' })
      return
    }

    if (!isLoggedIn()) {
      wx.showToast({ title: '请先登录', icon: 'none' })
      setTimeout(() => {
        wx.navigateTo({ url: '/pages/login/index' })
      }, 800)
      return
    }

    this.setData({ submitting: true })

    post('/api/app/partner/apply', { name, phone, city, partnerType })
      .then(() => {
        wx.showToast({ title: '提交成功', icon: 'success' })
        setTimeout(() => {
          wx.navigateBack()
        }, 1200)
      })
      .catch((err) => {
        wx.showToast({ title: (err && err.message) || '提交失败', icon: 'none' })
      })
      .finally(() => {
        this.setData({ submitting: false })
      })
  }
})
