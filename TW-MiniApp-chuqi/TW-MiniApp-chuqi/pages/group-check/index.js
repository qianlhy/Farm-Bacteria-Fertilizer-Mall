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
    platformTabs
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
    wx.showToast({
      title: '核销功能待接后台',
      icon: 'none'
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
