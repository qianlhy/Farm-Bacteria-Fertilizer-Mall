const { getUser, isLoggedIn, fetchUserInfo } = require('../../utils/auth')
const { requireLogin } = require('../../utils/nav')
const { fetchProductConfig } = require('../../utils/config')
const { get, post } = require('../../utils/request')

Page({
  data: {
    accountName: '未登录',
    balance: '0',
    points: '0',
    quantity: 1,
    productName: '1吨农家菌肥',
    productImage: '/pages/recharge/assets/final_tank_label.jpg',
    amountText: '1 吨',
    amountKg: 1000,
    discountRate: 0.85,
    originalPrice: 1400,
    unitPrice: 1190,
    totalPaidPrice: 1190,
    totalKg: 1000,
    totalPointsCost: 0,
    rewardPoints: 1190,
    totalSavings: 210,
    pointsRate: 10,
    loading: false,
    submitting: false
  },

  onShow() {
    if (!requireLogin({ redirect: true })) {
      return
    }
    this.refreshPage(true)
  },

  onLoginSuccess() {
    this.refreshPage(true)
  },

  async refreshPage(forceRefresh = false) {
    this.setData({ loading: true })
    try {
      await fetchUserInfo()
      const config = await fetchProductConfig(forceRefresh)
      const user = getUser()
      const wallet = user && user.wallet ? user.wallet : {}

      this.setData({
        productName: config.productName,
        originalPrice: config.originalPrice,
        discountRate: config.discountRate,
        amountKg: config.amountKg,
        pointsRate: config.pointsRate,
        amountText: `${config.amountKg / 1000} 吨`,
        accountName: user ? (user.nickname || user.phone || '未登录') : '未登录',
        balance: wallet.fertilizerBalance !== undefined ? String(wallet.fertilizerBalance) : '0',
        points: wallet.pointsBalance !== undefined ? String(wallet.pointsBalance) : '0'
      })

      await this.recalculatePrice('cash')
    } catch (error) {
      const user = getUser()
      if (user && user.wallet) {
        this.setData({
          accountName: user.nickname || user.phone || '未登录',
          balance: String(user.wallet.fertilizerBalance || 0),
          points: String(user.wallet.pointsBalance || 0)
        })
      }
    } finally {
      this.setData({ loading: false })
    }
  },

  goBack() {
    wx.navigateBack()
  },

  refreshBalance() {
    this.refreshPage(true)
  },

  openRechargeRecords() {
    wx.navigateTo({ url: '/pages/recharge-records/index' })
  },

  changeQuantity(event) {
    const { action } = event.currentTarget.dataset
    const current = this.data.quantity
    const next = action === 'plus' ? current + 1 : Math.max(1, current - 1)
    if (next === current) return
    this.setData({ quantity: next })
    this.recalculatePrice('cash')
  },

  async recalculatePrice(paymentMethod) {
    try {
      const result = await get('/api/app/recharge/calculate', {
        paymentMethod,
        quantity: this.data.quantity
      })

      const config = await fetchProductConfig()
      const originalPrice = config.originalPrice
      const unitPrice = Math.round(originalPrice * config.discountRate)
      const totalOriginal = originalPrice * this.data.quantity

      this.setData({
        unitPrice,
        totalPaidPrice: result.totalPaidPrice,
        totalKg: result.totalKg,
        rewardPoints: result.pointsAwarded,
        totalPointsCost: result.totalPointsCost || Math.round(result.totalPaidPrice * config.pointsRate),
        totalSavings: Math.round((totalOriginal - result.totalPaidPrice) * 100) / 100
      })
    } catch (error) {
      const { quantity, originalPrice, discountRate, amountKg, pointsRate } = this.data
      const unitPrice = Math.round(originalPrice * discountRate)
      const totalPaidPrice = Math.round(unitPrice * quantity * 100) / 100
      const totalKg = amountKg * quantity
      this.setData({
        unitPrice,
        totalPaidPrice,
        totalKg,
        rewardPoints: Math.round(totalPaidPrice),
        totalPointsCost: Math.round(totalPaidPrice * pointsRate),
        totalSavings: Math.round((originalPrice * quantity - totalPaidPrice) * 100) / 100
      })
    }
  },

  formatNumber(value) {
    return Math.round(Number(value || 0)).toLocaleString('zh-CN')
  },

  async submitCashRecharge() {
    if (this.data.submitting) return

    wx.showModal({
      title: '确认支付',
      content: `确认支付 ￥${this.data.totalPaidPrice} 充值 ${this.data.totalKg}Kg ${this.data.productName}？`,
      confirmText: '确认支付',
      success: async (res) => {
        if (!res.confirm) return
        await this.doRecharge('cash')
      }
    })
  },

  async submitPointsExchange() {
    if (this.data.submitting) return

    const { totalPointsCost, points } = this.data
    const currentPoints = Number(points)

    if (currentPoints < totalPointsCost) {
      wx.showToast({
        title: `积分不足，当前${currentPoints}积分，还差${totalPointsCost - currentPoints}积分`,
        icon: 'none'
      })
      return
    }

    wx.showModal({
      title: '确认兑换',
      content: `确认用 ${this.formatNumber(totalPointsCost)} 积分兑换 ${this.formatNumber(this.data.totalKg)}Kg 农家菌肥？`,
      confirmText: '确认兑换',
      success: async (res) => {
        if (!res.confirm) return
        await this.doRecharge('points')
      }
    })
  },

  async doRecharge(paymentMethod) {
    if (this.data.submitting) return

    this.setData({ submitting: true })

    try {
      await post('/api/app/recharge/submit', {
        paymentMethod,
        quantity: this.data.quantity
      })

      wx.showToast({
        title: paymentMethod === 'cash' ? '支付成功' : '兑换成功',
        icon: 'success'
      })

      setTimeout(() => {
        this.refreshPage(true)
      }, 500)
    } catch (err) {
      // error already shown by request.js
    } finally {
      this.setData({ submitting: false })
    }
  }
})
