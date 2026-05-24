const { syncTabBarSelected } = require('../../utils/tabBar')

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

  handleBenefitAction(event) {
    const { title } = event.currentTarget.dataset

    if (title === '加福利官领补贴') {
      wx.navigateTo({
        url: '/pages/benefit-officer/index'
      })
    }
  }
})
