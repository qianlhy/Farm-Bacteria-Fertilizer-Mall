const { getUser, isLoggedIn, fetchUserInfo } = require('../../utils/auth')
const { syncTabBarSelected } = require('../../utils/tabBar')
const {
  buildDeliveryOptions,
  buildPackagingOptions,
  buildPackagingPayOptions,
  fetchProductConfig,
  normalizeProductConfig
} = require('../../utils/config')
const { post } = require('../../utils/request')
const {
  getDefaultAddress,
  listAddresses,
  removeAddress,
  saveAddress
} = require('../../utils/address-book')

const FREIGHT_PAY_OPTIONS = [
  { key: 'cash', title: '现金支付', desc: '配送时现金支付运费' }
]

function roundMoney(value) {
  return Math.round(Number(value || 0) * 100) / 100
}

function formatMoney(value) {
  const numeric = roundMoney(value)
  const hasDecimal = Math.abs(numeric % 1) > 0

  return numeric.toLocaleString('zh-CN', {
    minimumFractionDigits: hasDecimal ? 2 : 0,
    maximumFractionDigits: 2
  })
}

function formatWeight(value) {
  const numeric = roundMoney(value)
  const hasDecimal = Math.abs(numeric % 1) > 0

  return numeric.toLocaleString('zh-CN', {
    minimumFractionDigits: hasDecimal ? 2 : 0,
    maximumFractionDigits: 2
  })
}

function formatInteger(value) {
  const numeric = Math.round(Number(value || 0))

  if (!Number.isFinite(numeric)) {
    return '0'
  }

  return numeric.toLocaleString('zh-CN')
}

function getAccountName(user) {
  if (!user) {
    return '未登录'
  }

  return user.name || user.nickname || user.phone || '未登录'
}

function getFreightSubsidyBalance(user) {
  if (!user) {
    return 0
  }
  const wallet = user.wallet || {}
  if (wallet.freightSubsidy !== undefined && wallet.freightSubsidy !== null) {
    return Number(wallet.freightSubsidy || 0)
  }
  if (wallet.couponBalance !== undefined && wallet.couponBalance !== null) {
    return Number(wallet.couponBalance || 0)
  }
  if (user.freightSubsidyBalance !== undefined && user.freightSubsidyBalance !== null && user.freightSubsidyBalance !== '') {
    return Number(user.freightSubsidyBalance || 0)
  }
  return Number(user.couponBalance || 0)
}

function getPackagingCreditBalance(user) {
  if (!user) {
    return 0
  }
  const wallet = user.wallet || {}
  if (wallet.packagingCredit !== undefined && wallet.packagingCredit !== null) {
    return Number(wallet.packagingCredit || 0)
  }
  return 0
}

function findPackagingOption(packagingOptions, key) {
  return packagingOptions.find(item => item.key === key) || packagingOptions[0]
}

function findCondition(option, conditionKey) {
  if (!option || !Array.isArray(option.conditions) || !option.conditions.length) {
    return { key: 'default', label: '默认', fee: 0 }
  }

  return option.conditions.find(item => item.key === conditionKey) || option.conditions[0]
}

function getSafeQuantity(value) {
  const numeric = parseInt(String(value || '').replace(/[^\d]/g, ''), 10)

  if (!Number.isFinite(numeric) || numeric <= 0) {
    return 1
  }

  return numeric
}

function getQuantityHint(option, config) {
  if (!option) {
    return ''
  }

  if (option.key === 'blueBucket') {
    const minCount = Math.max(1, Math.ceil(config.minKg / config.blueBucketKg))
    return `1 桶 = ${config.blueBucketKg}Kg，配送需满 ${minCount} 桶。`
  }

  if (option.key === 'tonBucket') {
    return `1 个吨桶 = ${config.tonBucketKg}Kg，1 个即可配送。`
  }

  return `1 吨 = ${config.tonBucketKg}Kg，自备容器转罐。`
}

function buildViewModel(user, state, config, packagingOptions) {
  const cfg = normalizeProductConfig(config)
  const loggedIn = isLoggedIn() && Boolean(user)
  const wallet = user ? (user.wallet || {}) : {}
  const pickupBalance = Number(loggedIn ? (wallet.fertilizerBalance || user.fertilizerBalance || 0) : 0)
  const freightSubsidyBalance = getFreightSubsidyBalance(user)
  const packagingCreditBalance = getPackagingCreditBalance(user)
  const pointsBalance = Number(loggedIn ? (wallet.pointsBalance || user.pointsBalance || 0) : 0)
  const packaging = findPackagingOption(packagingOptions, state.selectedPackagingKey)
  const condition = findCondition(packaging, state.selectedConditionKey)
  const quantity = getSafeQuantity(state.quantity)
  const isDelivery = state.deliveryMethod === 'delivery'
  const inCounty = state.areaScope === 'county'
  const deliveryAddress = String(state.deliveryAddress || '').trim()
  const receiverName = String(state.receiverName || '').trim()
  const receiverPhone = String(state.receiverPhone || '').trim()
  const totalKg = packaging.unitKg * quantity
  const packagingFee = roundMoney(Number(condition.fee || 0) * quantity)
  const packagingPointsCost = Math.round(packagingFee * cfg.pointsRate)
  const deliveryFee = isDelivery && inCounty ? roundMoney(totalKg * cfg.freightPerKg) : 0
  const deliveryGapKg = Math.max(0, cfg.minKg - totalKg)
  const meetsDeliveryMin = totalKg >= cfg.minKg

  let deliveryHint = '自提免配送费。'
  let deliveryWarning = ''

  if (isDelivery) {
    if (!inCounty) {
      deliveryWarning = '县城范围外暂不支持配送，请切换为自提。'
    } else if (!meetsDeliveryMin) {
      deliveryWarning = `配送起送量为 ${formatInteger(cfg.minKg)}Kg，还差 ${formatInteger(deliveryGapKg)}Kg。`
    } else {
      deliveryHint = `配送费按 ${cfg.freightPerKg} 元 / Kg 计算，本次约 ￥${formatMoney(deliveryFee)}。`
    }
  }

  // 统一额度支付：1 元 = 1 Kg，包装费 + 配送费折算成额度，与提货量一起从化肥余额扣减
  const deductKg = roundMoney(totalKg + packagingFee + deliveryFee)
  const balanceAfter = roundMoney(Math.max(pickupBalance - deductKg, 0))

  const errors = []

  if (!loggedIn) {
    errors.push('请先登录后再提交提货。')
  }

  if (pickupBalance < deductKg) {
    errors.push(`额度不足，本次共需 ${formatInteger(deductKg)}Kg（含包装/配送费），当前 ${formatWeight(pickupBalance)}Kg。`)
  }

  if (isDelivery && !inCounty) {
    errors.push('县城范围外暂不支持配送。')
  }

  if (isDelivery && inCounty && !meetsDeliveryMin) {
    errors.push(`配送起送量为 ${formatInteger(cfg.minKg)}Kg，还差 ${formatInteger(deliveryGapKg)}Kg。`)
  }

  return {
    accountName: loggedIn ? getAccountName(user) : '未登录',
    pickupBalanceText: formatWeight(pickupBalance),
    pointsBalanceText: formatInteger(pointsBalance),
    selectedPackaging: packaging,
    selectedCondition: condition,
    quantity,
    quantityText: String(quantity),
    deliveryAddress: state.deliveryAddress || '',
    receiverName: state.receiverName || '',
    receiverPhone: state.receiverPhone || '',
    quantityHint: getQuantityHint(packaging, cfg),
    totalKg,
    totalKgText: formatInteger(totalKg),
    minKgText: formatInteger(cfg.minKg),
    packagingFee,
    packagingFeeText: formatMoney(packagingFee),
    packagingFeeKgText: formatInteger(packagingFee),
    deliveryFee,
    deliveryFeeText: formatMoney(deliveryFee),
    deliveryFeeKgText: formatInteger(deliveryFee),
    deductKg,
    deductKgText: formatInteger(deductKg),
    deductKgLabel: `${formatInteger(deductKg)}Kg`,
    balanceAfterText: formatWeight(balanceAfter),
    deliveryHint,
    deliveryWarning,
    canSubmit: errors.length === 0,
    primaryError: errors[0] || '',
    packagingSummaryText: `${condition.label} · ${formatMoney(condition.fee)} 元 / ${packaging.quantityUnit}`,
    quantitySummaryText: `${quantity}${packaging.quantityUnit} = ${formatInteger(totalKg)}Kg`,
    orderLabel: `${packaging.title}${condition.label ? ` · ${condition.label}` : ''}`,
    deliveryMethodLabel: state.deliveryMethod === 'delivery' ? '配送' : '自提',
    packagingPayAvailable: packagingFee > 0,
    freightAvailable: deliveryFee > 0,
    needsCountyScope: isDelivery
  }
}

function buildPickupPayload(state, viewModel) {
  const packaging = viewModel.selectedPackaging
  let pickupType = 'self_pickup'

  if (state.deliveryMethod === 'delivery') {
    pickupType = 'delivery'
  } else if (packaging.key === 'transfer') {
    pickupType = 'transfer'
  }

  let packageType = null
  if (packaging.key === 'blueBucket') packageType = 'blue_bucket'
  if (packaging.key === 'tonBucket') packageType = 'ton_bucket'

  let packageNewOrUsed = state.selectedConditionKey === 'new' ? 'new' : 'used'
  if (packaging.key === 'transfer') {
    packageNewOrUsed = 'used'
  }

  return {
    pickupType,
    packageType,
    packageNewOrUsed,
    totalKg: viewModel.totalKg,
    quantity: viewModel.quantity,
    freightPayment: 'quota',
    receiverAddress: state.deliveryAddress,
    deliveryLocation: state.deliveryAddress,
    receiverName: state.receiverName,
    receiverPhone: state.receiverPhone,
    contactPhone: state.receiverPhone,
    remark: `${viewModel.orderLabel} · ${viewModel.quantitySummaryText}`
  }
}

Page({
  data: {
    productConfig: null,
    packagingOptions: [],
    deliveryOptions: [],
    packagingPayOptions: [],
    freightPayOptions: FREIGHT_PAY_OPTIONS,
    accountName: '未登录',
    pickupBalanceText: '0',
    freightSubsidyBalanceText: '0',
    packagingCreditBalanceText: '0',
    pointsBalanceText: '0',
    selectedPackagingKey: 'tonBucket',
    selectedConditionKey: 'used',
    deliveryMethod: 'delivery',
    areaScope: 'county',
    quantityText: '1',
    deliveryAddress: '',
    receiverName: '',
    receiverPhone: '',
    addressBookVisible: false,
    addressList: [],
    showDetail: false,
    packagingPayMethod: 'cash',
    freightPayMethod: 'cash',
    selectedPackaging: null,
    selectedCondition: null,
    quantityHint: '',
    minKgText: '100',
    quantitySummaryText: '',
    packagingSummaryText: '',
    packagingFeeText: '0',
    packagingFeeKgText: '0',
    deliveryFeeText: '0',
    deliveryFeeKgText: '0',
    totalKgText: '0',
    deductKgText: '0',
    deductKgLabel: '0Kg',
    totalPointsLabel: '无需积分',
    subsidyLabel: '未使用',
    packagingCreditLabel: '未使用',
    balanceAfterText: '0',
    pointsAfterText: '0',
    freightSubsidyAfterText: '0',
    packagingCreditAfterText: '0',
    deliveryHint: '',
    deliveryWarning: '',
    packagingPayHint: '',
    freightPayHint: '',
    primaryError: '',
    canSubmit: false,
    packagingPayAvailable: false,
    freightAvailable: false,
    needsCountyScope: true,
    orderLabel: '',
    deliveryMethodLabel: '配送',
    submitting: false
  },

  onShow() {
    syncTabBarSelected(this, '/pages/service/index')
    this.loadSavedAddress()
    this.refreshView(true)
  },

  loadSavedAddress() {
    const saved = getDefaultAddress()
    if (saved && !this.data.deliveryAddress) {
      this.setData({
        deliveryAddress: saved.address || '',
        receiverName: saved.contactName || '',
        receiverPhone: saved.contactPhone || ''
      })
    }
  },

  refreshAddressList() {
    this.setData({ addressList: listAddresses() })
  },

  onLoginSuccess() {
    this.refreshView(true)
  },

  async refreshView(forceRefresh = false) {
    const config = await fetchProductConfig(forceRefresh)
    const packagingOptions = buildPackagingOptions(config)
    const deliveryOptions = buildDeliveryOptions(config)
    const packagingPayOptions = buildPackagingPayOptions(config)

    this.setData({
      productConfig: config,
      packagingOptions,
      deliveryOptions,
      packagingPayOptions
    })

    if (isLoggedIn()) {
      await fetchUserInfo()
    }
    this.syncView()
  },

  getFormState() {
    return {
      selectedPackagingKey: this.data.selectedPackagingKey,
      selectedConditionKey: this.data.selectedConditionKey,
      deliveryMethod: this.data.deliveryMethod,
      areaScope: this.data.areaScope,
      quantity: this.data.quantityText,
      deliveryAddress: this.data.deliveryAddress,
      receiverName: this.data.receiverName,
      receiverPhone: this.data.receiverPhone,
      packagingPayMethod: this.data.packagingPayMethod,
      freightPayMethod: this.data.freightPayMethod
    }
  },

  syncView(userOverride) {
    const user = userOverride || getUser()
    const config = this.data.productConfig || normalizeProductConfig()
    const packagingOptions = this.data.packagingOptions.length
      ? this.data.packagingOptions
      : buildPackagingOptions(config)
    const viewModel = buildViewModel(user, this.getFormState(), config, packagingOptions)

    this.setData(viewModel)
  },

  selectPackaging(event) {
    const { key } = event.currentTarget.dataset
    const packagingOptions = this.data.packagingOptions
    const option = findPackagingOption(packagingOptions, key)
    const nextCondition = option.conditions[0]

    this.setData({
      selectedPackagingKey: option.key,
      selectedConditionKey: nextCondition.key
    })

    this.syncView()
  },

  selectCondition(event) {
    const { key } = event.currentTarget.dataset

    this.setData({
      selectedConditionKey: key
    })

    this.syncView()
  },

  selectDeliveryMethod(event) {
    const { key } = event.currentTarget.dataset
    const nextData = {
      deliveryMethod: key
    }

    if (key === 'selfPickup') {
      nextData.freightPayMethod = 'cash'
    }

    this.setData(nextData)
    this.syncView()
  },

  selectAreaScope(event) {
    const { key } = event.currentTarget.dataset

    this.setData({
      areaScope: key
    })

    this.syncView()
  },

  selectPackagingPayMethod(event) {
    const { key } = event.currentTarget.dataset

    this.setData({
      packagingPayMethod: key
    })

    this.syncView()
  },

  selectFreightPayMethod(event) {
    const { key } = event.currentTarget.dataset

    this.setData({
      freightPayMethod: key
    })

    this.syncView()
  },

  decreaseQuantity() {
    const nextQuantity = Math.max(1, getSafeQuantity(this.data.quantityText) - 1)

    this.setData({
      quantityText: String(nextQuantity)
    })

    this.syncView()
  },

  increaseQuantity() {
    const nextQuantity = getSafeQuantity(this.data.quantityText) + 1

    this.setData({
      quantityText: String(nextQuantity)
    })

    this.syncView()
  },

  onQuantityInput(event) {
    const value = String(event.detail.value || '').replace(/[^\d]/g, '').slice(0, 4)

    this.setData({
      quantityText: value || ''
    })

    this.syncView()
  },

  onQuantityBlur() {
    const nextQuantity = getSafeQuantity(this.data.quantityText)

    this.setData({
      quantityText: String(nextQuantity)
    })

    this.syncView()
  },

  onDeliveryAddressInput(event) {
    this.setData({ deliveryAddress: event.detail.value || '' })
    this.syncView()
  },

  onReceiverNameInput(event) {
    this.setData({ receiverName: event.detail.value || '' })
    this.syncView()
  },

  onReceiverPhoneInput(event) {
    this.setData({ receiverPhone: event.detail.value || '' })
    this.syncView()
  },

  openAddressBook() {
    this.refreshAddressList()
    this.setData({ addressBookVisible: true })
  },

  closeAddressBook() {
    this.setData({ addressBookVisible: false })
  },

  applyAddress(event) {
    const { id } = event.currentTarget.dataset
    const target = this.data.addressList.find(item => item.id === id)
    if (!target) {
      return
    }

    this.setData({
      deliveryAddress: target.address || '',
      receiverName: target.contactName || '',
      receiverPhone: target.contactPhone || '',
      addressBookVisible: false
    })
    this.syncView()
  },

  removeAddressItem(event) {
    const { id } = event.currentTarget.dataset
    removeAddress(id)
    this.refreshAddressList()
    wx.showToast({ title: '已删除', icon: 'success' })
  },

  saveCurrentAddress() {
    const { deliveryAddress, receiverName, receiverPhone } = this.data
    if (!deliveryAddress.trim()) {
      wx.showToast({ title: '请先填写卸货地址', icon: 'none' })
      return
    }

    wx.showModal({
      title: '保存地址',
      editable: true,
      placeholderText: '地址备注，如：张老板-泉州仓',
      success: ({ confirm, content }) => {
        if (!confirm) {
          return
        }

        try {
          saveAddress({
            label: content || receiverName || '默认地址',
            address: deliveryAddress,
            contactName: receiverName,
            contactPhone: receiverPhone,
            isDefault: true
          })
          wx.showToast({ title: '已保存', icon: 'success' })
        } catch (error) {
          wx.showToast({ title: error.message || '保存失败', icon: 'none' })
        }
      }
    })
  },

  toggleDetail() {
    this.setData({ showDetail: !this.data.showDetail })
  },

  goRecords() {
    if (!isLoggedIn()) {
      wx.showToast({ title: '请先登录', icon: 'none' })
      setTimeout(() => {
        wx.navigateTo({ url: '/pages/login/index' })
      }, 800)
      return
    }
    wx.navigateTo({ url: '/pages/pickup-records/index' })
  },

  noop() {},

  async submitPickup() {
    if (!isLoggedIn()) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      })
      return
    }

    if (this.data.submitting) {
      return
    }

    const user = getUser()
    const state = this.getFormState()
    const config = this.data.productConfig || normalizeProductConfig()
    const packagingOptions = this.data.packagingOptions.length
      ? this.data.packagingOptions
      : buildPackagingOptions(config)
    const viewModel = buildViewModel(user, state, config, packagingOptions)

    if (!viewModel.canSubmit) {
      wx.showToast({
        title: viewModel.primaryError || '当前条件无法提货',
        icon: 'none'
      })
      return
    }

    const feeText = viewModel.packagingFee + viewModel.deliveryFee > 0
      ? `（含包装/配送费 ${formatInteger(viewModel.packagingFee + viewModel.deliveryFee)}Kg）`
      : ''
    const confirmed = await new Promise(resolve => {
      wx.showModal({
        title: '确认提货',
        content: `本次将从额度扣减 ${viewModel.deductKgText}Kg${feeText}。订单一旦进入打包将无法取消，是否继续？`,
        confirmText: '确认提货',
        cancelText: '再想想',
        success: res => resolve(Boolean(res.confirm)),
        fail: () => resolve(false)
      })
    })

    if (!confirmed) {
      return
    }

    this.setData({ submitting: true })

    try {
      await post('/api/app/pickup/create', buildPickupPayload(state, viewModel))
      await fetchUserInfo()
      this.syncView()

      wx.showToast({
        title: '提货已提交',
        icon: 'success'
      })
    } catch (error) {
      // request.js already shows toast
    } finally {
      this.setData({ submitting: false })
    }
  }
})
