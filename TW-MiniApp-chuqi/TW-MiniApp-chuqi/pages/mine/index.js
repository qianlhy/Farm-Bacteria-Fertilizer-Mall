const { clearAuth, getUser, isLoggedIn, fetchUserInfo } = require('../../utils/auth')
const { syncTabBarSelected } = require('../../utils/tabBar')

const TOOL_ROUTES = {
  '账户充值': '/pages/recharge/index',
  '充值记录': '/pages/recharge-records/index',
  '团购核销': '/pages/group-check/index?tab=douyin',
  '兑换码': '/pages/redeem-code/index',
  '试用记录': '/pages/trial-records/index',
  '加盟合作': '/pages/join-partner/index',
  '签到抽奖': '/pages/lottery/index'
}

Page({
  data: {
    loggedIn: false,
    phone: '',
    wallet: '0',
    freightSubsidy: '0',
    points: '0',
    nickname: '',
    avatar: '',
    tools: [
      { title: '账户充值', icon: '/assets/svg-icons/wallet-line.svg', auth: true },
      { title: '充值记录', icon: '/assets/svg-icons/order-line.svg', auth: true },
      { title: '团购核销', icon: '/assets/svg-icons/coupon-line.svg', auth: false },
      { title: '兑换码', icon: '/assets/svg-icons/point-line.svg', auth: true },
      { title: '试用记录', icon: '/assets/svg-icons/group-check.svg', auth: true },
      { title: '加盟合作', icon: '/assets/svg-icons/mall-line.svg', auth: true },
      { title: '签到抽奖', icon: '/assets/svg-icons/recharge.svg', auth: true },
      { title: '联系客服', icon: '/assets/svg-icons/wallet-line.svg', auth: false },
      { title: '关于我们', icon: '/assets/svg-icons/board.svg', auth: false },
      { title: '退出登录', icon: '/assets/svg-icons/article.svg', auth: true, loginOnly: true }
    ],
    displayTools: []
  },

  onShow() {
    syncTabBarSelected(this, '/pages/mine/index')
    this.refreshUser()
  },

  onLoginSuccess() {
    this.refreshUser()
  },

  async refreshUser() {
    if (isLoggedIn()) {
      await fetchUserInfo()
    }

    const loggedInNow = isLoggedIn()
    const user = getUser()

    if (loggedInNow && user) {
      const wallet = user.wallet || {}
      this.setData({
        loggedIn: true,
        phone: user.phone || user.nickname || '微信用户',
        nickname: user.nickname || '',
        avatar: user.avatar || '',
        wallet: wallet.fertilizerBalance !== undefined ? String(wallet.fertilizerBalance) : '0',
        freightSubsidy: wallet.freightSubsidy !== undefined
          ? String(wallet.freightSubsidy)
          : String(wallet.couponBalance || 0),
        points: wallet.pointsBalance !== undefined ? String(wallet.pointsBalance) : '0',
        displayTools: this.data.tools.filter(item => !item.loginOnly || loggedInNow)
      })
    } else {
      this.setData({
        loggedIn: false,
        phone: '',
        nickname: '',
        avatar: '',
        wallet: '--',
        freightSubsidy: '--',
        points: '--',
        displayTools: this.data.tools.filter(item => !item.loginOnly)
      })
    }
  },

  handleLoginTap() {
    if (!isLoggedIn()) {
      wx.navigateTo({ url: '/pages/login/index' })
    }
  },

  openPartner() {
    if (!isLoggedIn()) {
      wx.navigateTo({ url: '/pages/login/index' })
      return
    }
    wx.navigateTo({ url: '/pages/join-partner/index' })
  },

  handleToolTap(event) {
    const { index } = event.currentTarget.dataset
    const item = this.data.displayTools[index]

    if (!item) {
      return
    }

    if (item.title === '退出登录') {
      wx.showModal({
        title: '确认退出',
        content: '确定要退出当前账号吗？',
        success: (res) => {
          if (res.confirm) {
            clearAuth()
            wx.showToast({ title: '已退出', icon: 'success' })
            this.refreshUser()
          }
        }
      })
      return
    }

    if (item.auth && !isLoggedIn()) {
      wx.navigateTo({ url: '/pages/login/index' })
      return
    }

    if (item.title === '联系客服') {
      wx.makePhoneCall({
        phoneNumber: '4001234567',
        fail: () => {
          wx.setClipboardData({
            data: '4001234567',
            success: () => wx.showToast({ title: '已复制客服电话', icon: 'none' })
          })
        }
      })
      return
    }

    if (item.title === '关于我们') {
      wx.showModal({
        title: '关于我们',
        content: '农家菌肥小程序，提供菌肥充值、提货、试用与福利服务。',
        showCancel: false
      })
      return
    }

    const route = TOOL_ROUTES[item.title]
    if (route) {
      wx.navigateTo({ url: route })
      return
    }

    wx.showToast({ title: `${item.title} 即将上线`, icon: 'none' })
  }
})
