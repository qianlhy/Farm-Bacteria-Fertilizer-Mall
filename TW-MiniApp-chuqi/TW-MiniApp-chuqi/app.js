const { fetchProductConfig } = require('./utils/config')

App({
  globalData: {
    brandName: '农家菌肥'
  },

  onLaunch() {
    fetchProductConfig().catch(() => {})
  }
})
