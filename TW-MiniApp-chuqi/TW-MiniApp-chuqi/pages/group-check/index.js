const { isLoggedIn } = require('../../utils/auth')
const { post } = require('../../utils/request')

const platformTabs = [
  {
    key: 'alipay',
    label: '支付宝',
    title: '支付宝核销',
    placeholder: '请输入支付宝核销码'
  },
  {
    key: 'meituan',
    label: '美团大众',
    title: '美团大众团购核销',
    placeholder: '请输入美团大众核销码'
  },
  {
    key: 'douyin',
    label: '抖音',
    title: '抖音团购核销',
    placeholder: '请输入抖音核销码'
  },
  {
    key: 'taiwei',
    label: '肽为生态',
    title: '兑换码核销',
    placeholder: '请输入兑换码'
  }
]

Page({
  data: {
    activeTab: 'douyin',
    codeInput: '',
    currentTitle: '抖音团购核销',
    currentPlaceholder: '请输入抖音核销码',
    platformTabs,
    submitting: false
  },

  onLoad(options) {
    const tab = platformTabs.find(item => item.key === options.tab)

    if (tab) {
      this.applyTab(tab.key)
    }
  },

  goBack() {
    wx.navigateBack()
  },

  switchTab(event) {
    const { key } = event.currentTarget.dataset
    this.applyTab(key)
  },

  onCodeInput(event) {
    this.setData({
      codeInput: event.detail.value
    })
  },

  submitCheck() {
    if (this.data.submitting) {
      return
    }

    const code = (this.data.codeInput || '').trim()
    if (!code) {
      wx.showToast({ title: '请输入核销码', icon: 'none' })
      return
    }

    if (this.data.activeTab !== 'taiwei') {
      wx.showToast({ title: '该平台核销请在对应平台核销台操作', icon: 'none' })
      return
    }

    if (!isLoggedIn()) {
      wx.showToast({ title: '请先登录', icon: 'none' })
      setTimeout(() => {
        wx.navigateTo({ url: '/pages/login/index' })
      }, 800)
      return
    }

    this.setData({ submitting: true })

    post('/api/app/redemption/redeem', { code: code.toUpperCase() })
      .then((result) => {
        const rewards = []
        if (result && result.freightAmount > 0) rewards.push(`运装补贴 ￥${result.freightAmount}`)
        if (result && result.packagingAmount > 0) rewards.push(`包装抵扣 ￥${result.packagingAmount}`)
        if (result && result.pointsAmount > 0) rewards.push(`积分 ${result.pointsAmount}`)

        wx.showModal({
          title: '核销成功',
          content: rewards.length ? rewards.join('、') : '兑换码已核销',
          showCancel: false
        })
        this.setData({ codeInput: '' })
      })
      .catch(() => {
        // request.js 已统一弹出错误提示
      })
      .finally(() => {
        this.setData({ submitting: false })
      })
  },

  applyTab(key) {
    const tab = platformTabs.find(item => item.key === key) || platformTabs[0]

    this.setData({
      activeTab: tab.key,
      currentTitle: tab.title,
      currentPlaceholder: tab.placeholder,
      codeInput: ''
    })
  }
})
