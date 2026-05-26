const { syncTabBarSelected } = require('../../utils/tabBar')
const { isLoggedIn } = require('../../utils/auth')

Page({
  data: {
    benefits: [
      { title: '加福利官领补贴', desc: '进福利群后，查看群公告领取补贴', action: '去加福利官' },
      { title: '邀好友得积分奖励', desc: '推荐新用户可获得额外积分', action: '转发邀请' },
      { title: '签到领取积分', desc: '连续签到7天，可领取专属积分', action: '立即签到' }
    ]
  },

  onShow() {
    syncTabBarSelected(this, '/pages/benefit/index')
  },

  onShareAppMessage() {
    return {
      title: '农家菌肥商城，绿色生态提质增产',
      path: '/pages/home/index'
    }
  },

  handleBenefitAction(event) {
    const { title } = event.currentTarget.dataset

    if (title === '加福利官领补贴') {
      wx.navigateTo({
        url: '/pages/benefit-officer/index'
      })
      return
    }

    if (title === '邀好友得积分奖励') {
      wx.showModal({
        title: '邀请好友',
        content: '请点击右上角「...」转发小程序给好友，成功邀请后可获得积分奖励。',
        showCancel: false
      })
      return
    }

    if (title === '签到领取积分') {
      if (!isLoggedIn()) {
        wx.navigateTo({ url: '/pages/login/index' })
        return
      }
      wx.navigateTo({ url: '/pages/lottery/index' })
    }
  }
})
