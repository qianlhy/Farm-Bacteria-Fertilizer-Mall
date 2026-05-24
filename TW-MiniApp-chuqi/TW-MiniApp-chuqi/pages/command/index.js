Page({
  data: {
    commandValue: '',
    canQuery: false
  },

  goBack() {
    wx.navigateBack()
  },

  handleInput(event) {
    const commandValue = event.detail.value
    this.setData({
      commandValue,
      canQuery: Boolean(commandValue.trim())
    })
  },

  submitCommand() {
    if (!this.data.canQuery) {
      wx.showToast({
        title: '请输入口令',
        icon: 'none'
      })
      return
    }

    wx.showToast({
      title: '口令输入错误',
      icon: 'none'
    })
  }
})
