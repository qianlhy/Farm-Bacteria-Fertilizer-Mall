const { syncTabBarSelected } = require('../../utils/tabBar')
const { fetchCropList } = require('../../utils/crops')

Page({
  data: {
    crops: [],
    loaded: false
  },

  onLoad() {
    this.loadCrops()
  },

  onShow() {
    syncTabBarSelected(this, '/pages/benefit/index')
  },

  loadCrops() {
    fetchCropList()
      .then(crops => {
        this.setData({ crops, loaded: true })
      })
      .catch(() => {
        this.setData({ crops: [], loaded: true })
      })
  },

  onShareAppMessage() {
    return {
      title: '农家菌肥 · 作物试验报告',
      path: '/pages/home/index'
    }
  },

  openCrop(event) {
    const { id } = event.currentTarget.dataset
    if (!id && id !== 0) {
      return
    }
    wx.navigateTo({
      url: `/pages/crop-detail/index?id=${id}`
    })
  }
})
