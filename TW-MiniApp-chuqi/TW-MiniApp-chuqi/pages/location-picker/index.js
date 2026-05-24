const { getDefaultLocations, searchLocations } = require('../../data/china-location/search')

Page({
  data: {
    keyword: '',
    locations: getDefaultLocations()
  },

  onLoad() {
    this.eventChannel = this.getOpenerEventChannel()
  },

  closePage() {
    wx.navigateBack()
  },

  onKeywordChange(event) {
    const keyword = event.detail.value
    const locations = searchLocations(keyword, 20)

    this.setData({
      keyword,
      locations
    })
  },

  chooseNone() {
    if (this.eventChannel) {
      this.eventChannel.emit('locationSelected', '')
    }
    wx.navigateBack()
  },

  chooseLocation(event) {
    const { value } = event.currentTarget.dataset
    if (this.eventChannel) {
      this.eventChannel.emit('locationSelected', value)
    }
    wx.navigateBack()
  }
})
