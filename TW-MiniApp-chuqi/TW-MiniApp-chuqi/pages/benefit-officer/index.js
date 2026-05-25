Page({
  data: {
    qrImage: '/pages/benefit-officer/assets/benefit-officer-qr.jpg'
  },

  goBack() {
    wx.navigateBack()
  },

  previewQr() {
    wx.previewImage({
      current: this.data.qrImage,
      urls: [this.data.qrImage]
    })
  }
})
