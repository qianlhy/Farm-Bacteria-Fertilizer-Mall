const partnerTypes = [
  { key: 'production', label: '生产合作' },
  { key: 'wholesale', label: '经销批发' },
  { key: 'site', label: '场地合作' }
]

Page({
  data: {
    partnerTypes,
    selectedType: 'production',
    name: '',
    phone: '',
    city: ''
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
    wx.showToast({
      title: '提交功能待接后台',
      icon: 'none'
    })
  }
})
