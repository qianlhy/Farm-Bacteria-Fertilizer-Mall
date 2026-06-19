const { fetchCrop } = require('../../utils/crops')

Page({
  data: {
    crop: null,
    hasPdf: false,
    loaded: false
  },

  onLoad(query) {
    const id = query && query.id
    if (!id && id !== 0) {
      this.setData({ crop: null, hasPdf: false, loaded: true })
      return
    }
    fetchCrop(id)
      .then(crop => {
        this.setData({
          crop,
          hasPdf: Boolean(crop && crop.pdfUrl),
          loaded: true
        })
      })
      .catch(() => {
        this.setData({ crop: null, hasPdf: false, loaded: true })
      })
  },

  goBack() {
    wx.navigateBack({
      fail: () => wx.switchTab({ url: '/pages/benefit/index' })
    })
  },

  openReport() {
    const crop = this.data.crop
    if (!crop || !crop.pdfUrl) {
      wx.showToast({ title: '报告整理中，敬请期待', icon: 'none' })
      return
    }

    wx.showLoading({ title: '加载报告...', mask: true })
    wx.downloadFile({
      url: crop.pdfUrl,
      success: (res) => {
        if (res.statusCode === 200) {
          wx.openDocument({
            filePath: res.tempFilePath,
            fileType: 'pdf',
            showMenu: true,
            fail: () => wx.showToast({ title: '打开报告失败', icon: 'none' })
          })
        } else {
          wx.showToast({ title: '报告下载失败', icon: 'none' })
        }
      },
      fail: () => wx.showToast({ title: '报告下载失败', icon: 'none' }),
      complete: () => wx.hideLoading()
    })
  }
})
