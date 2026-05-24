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

const FREIGHT_PAY_OPTIONS = [
  { key: 'cash', title: '现金支付', desc: '配送时现金支付运费' },
  { key: 'subsidy', title: '运费补贴', desc: '运补余额足够时全额抵扣' },
  { key: 'mixed', title: '组合支付', desc: '运补不足时差额现金补足' }
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
    return `1 桶 = ${config.blueBucketKg}Kg，配送需满 ${config.blueBucketMinCount} 桶。`
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
  const pointsBalance = Number(loggedIn ? (wallet.pointsBalance || user.pointsBalance || 0) : 0)
  const packaging = findPackagingOption(packagingOptions, state.selectedPackagingKey)
  const condition = findCondition(packaging, state.selectedConditionKey)
  const quantity = getSafeQuantity(state.quantity)
  const isDelivery = state.deliveryMethod === 'delivery'
  const inCounty = state.areaScope === 'county'
  const deliveryAddress = String(state.deliveryAddress || '').trim()
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

  let packagingCashDue = packagingFee
  let packagingPointsDue = 0
  let packagingPayHint = '转罐自备容器，不收包装物费用。'

  if (packagingFee > 0) {
    if (state.packagingPayMethod === 'points') {
      packagingCashDue = 0
      packagingPointsDue = packagingPointsCost
      packagingPayHint = `本次包装物费用将使用 ${formatInteger(packagingPointsCost)} 积分抵扣。`
    } else {
      packagingPayHint = `包装物费用现金支付 ￥${formatMoney(packagingFee)}，或改用 ${formatInteger(packagingPointsCost)} 积分支付。`
    }
  }

  let subsidyUsed = 0
  let freightCashDue = 0
  let freightPayHint = '自提无需支付配送费。'

  if (deliveryFee > 0) {
    if (state.freightPayMethod === 'cash') {
      freightCashDue = deliveryFee
      freightPayHint = `配送费将现金支付 ￥${formatMoney(deliveryFee)}。`
    } else if (state.freightPayMethod === 'subsidy') {
      subsidyUsed = Math.min(freightSubsidyBalance, deliveryFee)
      freightPayHint = freightSubsidyBalance >= deliveryFee
        ? '配送费将由运补余额全额抵扣。'
        : `当前运补仅够抵扣 ￥${formatMoney(subsidyUsed)}，请切换为组合支付或现金支付。`
    } else {
      subsidyUsed = Math.min(freightSubsidyBalance, deliveryFee)
      freightCashDue = roundMoney(deliveryFee - subsidyUsed)
      freightPayHint = subsidyUsed > 0
        ? `先抵扣运补 ￥${formatMoney(subsidyUsed)}，剩余现金 ￥${formatMoney(freightCashDue)}。`
        : `当前无可用运补，本次配送费将现金支付 ￥${formatMoney(deliveryFee)}。`
    }
  }

  const errors = []

  if (!loggedIn) {
    errors.push('请先登录后再提交提货。')
  }

  if (pickupBalance < totalKg) {
    errors.push('账户余额不足，无法完成本次提货。')
  }

  if (isDelivery && !inCounty) {
    errors.push('县城范围外暂不支持配送。')
  }

  if (isDelivery && inCounty && !meetsDeliveryMin) {
    errors.push(`配送起送量为 ${formatInteger(cfg.minKg)}Kg，还差 ${formatInteger(deliveryGapKg)}Kg。`)
  }

  if (isDelivery && inCounty && !deliveryAddress) {
    errors.push('请选择或填写配送地址。')
  }

  if (packagingPointsDue > pointsBalance) {
    errors.push('积分不足，无法使用积分支付包装物费用。')
  }

  if (deliveryFee > 0 && state.freightPayMethod === 'subsidy' && freightSubsidyBalance < deliveryFee) {
    errors.push('运补余额不足，请切换为组合支付或现金支付。')
  }

  const totalCashDue = roundMoney(packagingCashDue + freightCashDue)
  const balanceAfter = roundMoney(Math.max(pickupBalance - totalKg, 0))
  const pointsAfter = Math.max(pointsBalance - packagingPointsDue, 0)
  const freightSubsidyAfter = roundMoney(Math.max(freightSubsidyBalance - subsidyUsed, 0))

  return {
    accountName: loggedIn ? getAccountName(user) : '未登录',
    pickupBalanceText: formatWeight(pickupBalance),
    freightSubsidyBalanceText: formatMoney(freightSubsidyBalance),
    pointsBalanceText: formatInteger(pointsBalance),
    selectedPackaging: packaging,
    selectedCondition: condition,
    quantity,
    quantityText: String(quantity),
    deliveryAddress: state.deliveryAddress || '',
    quantityHint: getQuantityHint(packaging, cfg),
    totalKg,
    totalKgText: formatInteger(totalKg),
    packagingFee,
    packagingFeeText: formatMoney(packagingFee),
    packagingPointsCost,
    packagingPointsCostText: formatInteger(packagingPointsCost),
    deliveryFee,
    deliveryFeeText: formatMoney(deliveryFee),
    subsidyUsed,
    subsidyUsedText: formatMoney(subsidyUsed),
    freightCashDue,
    totalCashDue,
    totalCashLabel: totalCashDue > 0 ? `￥${formatMoney(totalCashDue)}` : '无需现金',
    totalPointsLabel: packagingPointsDue > 0 ? `${formatInteger(packagingPointsDue)}积分` : '无需积分',
    subsidyLabel: subsidyUsed > 0 ? `￥${formatMoney(subsidyUsed)}` : '未使用',
    balanceAfterText: formatWeight(balanceAfter),
    pointsAfterText: formatInteger(pointsAfter),
    freightSubsidyAfterText: formatMoney(freightSubsidyAfter),
    deliveryHint,
    deliveryWarning,
    packagingPayHint,
    freightPayHint,
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
    packagePayment: state.packagingPayMethod,
    freightPayment: state.freightPayMethod,
    freightSubsidyUsed: viewModel.subsidyUsed,
    receiverAddress: state.deliveryAddress,
    deliveryLocation: state.deliveryAddress,
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
    pointsBalanceText: '0',
    selectedPackagingKey: 'tonBucket',
    selectedConditionKey: 'used',
    deliveryMethod: 'delivery',
    areaScope: 'county',
    quantityText: '1',
    deliveryAddress: '',
    packagingPayMethod: 'cash',
    freightPayMethod: 'subsidy',
    selectedPackaging: null,
    selectedCondition: null,
    quantityHint: '',
    quantitySummaryText: '',
    packagingSummaryText: '',
    packagingFeeText: '0',
    packagingPointsCostText: '0',
    deliveryFeeText: '0',
    totalCashLabel: '无需现金',
    totalPointsLabel: '无需积分',
    subsidyLabel: '未使用',
    balanceAfterText: '0',
    pointsAfterText: '0',
    freightSubsidyAfterText: '0',
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
    this.refreshView(true)
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
    this.setData({
      deliveryAddress: event.detail.value || ''
    })

    this.syncView()
  },

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
