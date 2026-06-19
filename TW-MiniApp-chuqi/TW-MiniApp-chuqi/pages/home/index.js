const { getUser, isLoggedIn, fetchUserInfo } = require('../../utils/auth')
const { syncTabBarSelected } = require('../../utils/tabBar')

Page({
  data: {
    loggedIn: false,
    userPhone: '未登录',
    userName: '',
    fertilizerBalance: '0',
    topActions: [
      {
        icon: '/assets/svg-icons/group-check.svg',
        accent: 'ticket',
        title: '团购核销',
        desc: '抖音、美团大众'
      },
      {
        icon: '/assets/svg-icons/recharge.svg',
        accent: 'wallet',
        title: '充值',
        desc: '一充即用'
      }
    ],
    bottomActions: [
      { title: '成为合伙人' }
    ]
  },

  onShow() {
    syncTabBarSelected(this, '/pages/home/index')
    this.refreshUserInfo()
  },

  onLoginSuccess(userInfo) {
    this.refreshUserInfo()
  },

  async refreshUserInfo() {
    if (isLoggedIn()) {
      await fetchUserInfo()
    }

    const user = getUser()
    const loggedInNow = isLoggedIn()

    if (loggedInNow && user) {
      const wallet = user.wallet || {}
      this.setData({
        loggedIn: true,
        userPhone: user.phone || '',
        userName: user.nickname || '',
        fertilizerBalance: wallet.fertilizerBalance !== undefined ? wallet.fertilizerBalance : '0'
      })
    } else {
      this.setData({
        loggedIn: false,
        userPhone: '未登录',
        userName: '',
        fertilizerBalance: '0'
      })
    }
  },

  handleIdentityTap() {
    if (isLoggedIn()) {
      wx.switchTab({
        url: '/pages/mine/index'
      })
      return
    }

    wx.navigateTo({
      url: '/pages/login/index'
    })
  },

  openFeature(event) {
    const { title } = event.currentTarget.dataset

    if (title === '团购核销') {
      wx.navigateTo({
        url: '/pages/group-check/index?tab=douyin'
      })
      return
    }

    if (title === '充值') {
      if (!isLoggedIn()) {
        wx.navigateTo({ url: '/pages/login/index' })
        return
      }
      wx.navigateTo({
        url: '/pages/recharge/index'
      })
      return
    }

    if (title === '成为合伙人') {
      if (!isLoggedIn()) {
        wx.navigateTo({ url: '/pages/login/index' })
        return
      }
      wx.navigateTo({
        url: '/pages/join-partner/index'
      })
    }
  }
})
