const { getUser, fetchUserInfo } = require('../../utils/auth')
const { requireLogin } = require('../../utils/nav')
const { post } = require('../../utils/request')

Page({
  data: {
    accountName: '未登录',
    freightSubsidyText: '0',
    packagingCreditText: '0',
    pointsText: '0',
    codeInput: '',
    submitting: false,
    lastResult: null
  },

  onShow() {
    if (!requireLogin({ redirect: true })) {
      return
    }
    this.refreshBalances(true)
  },

  onLoginSuccess() {
    this.refreshBalances(true)
  },

  async refreshBalances(forceRemote = false) {
    if (forceRemote) {
      await fetchUserInfo()
    }
    const user = getUser()
    const wallet = user && user.wallet ? user.wallet : {}
    this.setData({
      accountName: user ? (user.nickname || user.phone || '微信用户') : '未登录',
      freightSubsidyText: String(wallet.freightSubsidy || 0),
      packagingCreditText: String(wallet.packagingCredit || 0),
      pointsText: String(wallet.pointsBalance || 0)
    })
  },

  goBack() {
    wx.navigateBack()
  },

  onCodeInput(event) {
    this.setData({
      codeInput: String(event.detail.value || '').trim().toUpperCase()
    })
  },

  async submitRedeem() {
    if (this.data.submitting) {
      return
    }

    const code = this.data.codeInput.trim()
    if (!code) {
      wx.showToast({ title: '请输入兑换码', icon: 'none' })
      return
    }

    this.setData({ submitting: true })

    try {
      const result = await post('/api/app/redemption/redeem', { code })
      await fetchUserInfo()
      this.refreshBalances()

      const rewards = []
      if (result.freightAmount > 0) rewards.push(`运装补贴 ￥${result.freightAmount}`)
      if (result.packagingAmount > 0) rewards.push(`包装抵扣 ￥${result.packagingAmount}`)
      if (result.pointsAmount > 0) rewards.push(`积分 ${result.pointsAmount}`)

      this.setData({
        codeInput: '',
        lastResult: {
          summary: rewards.length ? rewards.join('、') : '兑换成功',
          freightSubsidyAfter: result.freightSubsidyAfter,
          packagingCreditAfter: result.packagingCreditAfter,
          pointsAfter: result.pointsAfter
        }
      })

      wx.showToast({ title: '兑换成功', icon: 'success' })
    } catch (error) {
      // request.js already shows toast
    } finally {
      this.setData({ submitting: false })
    }
  }
})
