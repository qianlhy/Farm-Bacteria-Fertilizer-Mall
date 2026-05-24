Page({
  data: {
    qrImage: '/assets/benefit/benefit-officer-qr.jpg'
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
