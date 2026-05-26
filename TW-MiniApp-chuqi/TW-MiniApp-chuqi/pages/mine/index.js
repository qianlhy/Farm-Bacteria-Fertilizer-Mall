const { clearAuth, getUser, isLoggedIn, fetchUserInfo } = require('../../utils/auth')
const { syncTabBarSelected } = require('../../utils/tabBar')

Page({
  data: {
    loggedIn: false,
    phone: '',
    license: '--',
    wallet: '0',
    coupon: '0',
    points: '0',
    nickname: '',
    avatar: '',
    tools: [
      { title: '账户充值', icon: '/assets/svg-icons/wallet-line.svg', auth: true },
      { title: '团购核销', icon: '/assets/svg-icons/coupon-line.svg', auth: false },
      { title: '兑换码', icon: '/assets/svg-icons/point-line.svg', auth: true },
      { title: '领话费券', icon: '/assets/svg-icons/money-line.svg', auth: true },
      { title: '礼品码', icon: '/assets/svg-icons/coupon-line.svg', auth: true },
      { title: '结算订单', icon: '/assets/svg-icons/order-line.svg', auth: true },
      { title: '领取积分', icon: '/assets/svg-icons/point-line.svg', auth: true, badge: 'HOT' },
      { title: '推荐奖励', icon: '/assets/svg-icons/coupon-line.svg', auth: true },
      { title: '联系客服', icon: '/assets/svg-icons/wallet-line.svg', auth: false },
      { title: '签到抽奖', icon: '/assets/svg-icons/order-line.svg', auth: true },
      { title: '加盟·合作', icon: '/assets/svg-icons/mall-line.svg', auth: true },
      { title: '意见反馈', icon: '/assets/svg-icons/dynamic.svg', auth: false },
      { title: '收费标准', icon: '/assets/svg-icons/money-line.svg', auth: false },
      { title: '找回密码', icon: '/assets/svg-icons/wallet-line.svg', auth: false },
      { title: '退出登录', icon: '/assets/svg-icons/article.svg', auth: true },
      { title: '关于我们', icon: '/assets/svg-icons/board.svg', auth: false }
    ]
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
        phone: user.phone || '微信用户',
        nickname: user.nickname || '',
        avatar: user.avatar || '',
        license: user.licensePlate || '--',
        wallet: wallet.fertilizerBalance !== undefined ? String(wallet.fertilizerBalance) : '0',
        coupon: wallet.couponBalance !== undefined ? String(wallet.couponBalance) : '0',
        points: wallet.pointsBalance !== undefined ? String(wallet.pointsBalance) : '0'
      })
    } else {
      this.setData({
        loggedIn: false,
        phone: '未登录',
        nickname: '',
        avatar: '',
        license: '--',
        wallet: '0',
        coupon: '0',
        points: '0'
      })
    }
  },

  handleLoginTap() {
    if (!isLoggedIn()) {
      wx.navigateTo({ url: '/pages/login/index' })
    }
  },

  handleToolTap(event) {
    const { index } = event.currentTarget.dataset
    const item = this.data.tools[index]

    if (item.title === '退出登录') {
      wx.showModal({
        title: '确认退出',
        content: '确定要退出当前账号吗？',
        success: (res) => {
          if (res.confirm) {
            clearAuth()
            wx.showToast({
              title: '已退出',
              icon: 'success'
            })
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

    if (item.title === '账户充值') {
      wx.navigateTo({ url: '/pages/recharge/index' })
      return
    }

    if (item.title === '团购核销') {
      wx.navigateTo({ url: '/pages/group-check/index?tab=douyin' })
      return
    }

    if (item.title === '兑换码') {
      wx.navigateTo({ url: '/pages/redeem-code/index' })
      return
    }

    if (item.title === '加盟·合作') {
      wx.navigateTo({ url: '/pages/join-partner/index' })
      return
    }

    if (item.title === '签到抽奖') {
      wx.navigateTo({ url: '/pages/lottery/index' })
      return
    }

    if (item.title === '联系客服') {
      wx.makePhoneCall({
        phoneNumber: '4001234567',
        fail: () => {
          wx.setClipboardData({
            data: '4001234567',
            success: () => {
              wx.showToast({ title: '已复制客服电话', icon: 'none' })
            }
          })
        }
      })
      return
    }

    if (item.title === '关于我们') {
      wx.showModal({
        title: '关于我们',
        content: '农家菌肥推广与销售小程序，专注菌肥推广、充值提货与试用服务。',
        showCancel: false
      })
      return
    }

    wx.showToast({
      title: `${item.title} 功能开发中`,
      icon: 'none'
    })
  }
})
