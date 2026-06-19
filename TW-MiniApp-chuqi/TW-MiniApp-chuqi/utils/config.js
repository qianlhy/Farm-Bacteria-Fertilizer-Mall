const { get } = require('./request')

const CACHE_TTL = 5 * 60 * 1000

let productCache = null
let productCacheAt = 0
let servicePointsCache = null
let servicePointsCacheAt = 0

const DEFAULT_PRODUCT_CONFIG = {
  productKey: 'recharge',
  productName: '1吨农家菌肥',
  originalPrice: '1400',
  discountRate: '0.85',
  amountKg: '1000',
  minKg: '100',
  freightPerKg: '0.1',
  blueBucketNew: '35',
  blueBucketUsed: '15',
  tonBucketNew: '700',
  tonBucketUsed: '300',
  pointsRate: '10',
  blueBucketKg: '25',
  tonBucketKg: '1000',
  blueBucketMinCount: '40',
  trialProductName: '农家菌肥',
  trialProductSubtitle: '绿色生态，提质增产，提升地力'
}

function toNumber(value, fallback) {
  const numeric = Number(value)
  return Number.isFinite(numeric) ? numeric : fallback
}

function normalizeProductConfig(raw) {
  const source = raw || {}
  return {
    productKey: source.productKey || DEFAULT_PRODUCT_CONFIG.productKey,
    productName: source.productName || DEFAULT_PRODUCT_CONFIG.productName,
    originalPrice: toNumber(source.originalPrice, 1400),
    discountRate: toNumber(source.discountRate, 0.85),
    amountKg: toNumber(source.amountKg, 1000),
    minKg: toNumber(source.minKg, 100),
    freightPerKg: toNumber(source.freightPerKg, 0.1),
    blueBucketNew: toNumber(source.blueBucketNew, 35),
    blueBucketUsed: toNumber(source.blueBucketUsed, 15),
    tonBucketNew: toNumber(source.tonBucketNew, 700),
    tonBucketUsed: toNumber(source.tonBucketUsed, 300),
    pointsRate: toNumber(source.pointsRate, 10),
    blueBucketKg: toNumber(source.blueBucketKg, 25),
    tonBucketKg: toNumber(source.tonBucketKg, 1000),
    blueBucketMinCount: toNumber(source.blueBucketMinCount, 40),
    trialProductName: source.trialProductName || DEFAULT_PRODUCT_CONFIG.trialProductName,
    trialProductSubtitle: source.trialProductSubtitle || DEFAULT_PRODUCT_CONFIG.trialProductSubtitle
  }
}

async function fetchProductConfig(forceRefresh = false) {
  const now = Date.now()
  if (!forceRefresh && productCache && now - productCacheAt < CACHE_TTL) {
    return productCache
  }

  try {
    const raw = await get('/api/app/config/product', null, { silent: true })
    productCache = normalizeProductConfig(raw)
    productCacheAt = now
    return productCache
  } catch (error) {
    if (productCache) {
      return productCache
    }
    return normalizeProductConfig(DEFAULT_PRODUCT_CONFIG)
  }
}

async function fetchServicePoints(forceRefresh = false) {
  const now = Date.now()
  if (!forceRefresh && servicePointsCache && now - servicePointsCacheAt < CACHE_TTL) {
    return servicePointsCache
  }

  try {
    const list = await get('/api/app/config/service-points', null, { silent: true })
    servicePointsCache = Array.isArray(list) ? list : []
    servicePointsCacheAt = now
    return servicePointsCache
  } catch (error) {
    if (servicePointsCache) {
      return servicePointsCache
    }
    return ['漳州岩溪', '厦门湖里', '泉州丰泽']
  }
}

function buildPackagingOptions(config) {
  const cfg = normalizeProductConfig(config)
  const blueMinCount = Math.max(1, Math.ceil(cfg.minKg / cfg.blueBucketKg))
  const minKgText = `${cfg.minKg}Kg`

  return [
    {
      key: 'blueBucket',
      title: '25L桶',
      unitKg: cfg.blueBucketKg,
      unitLabel: `${cfg.blueBucketKg}Kg / 桶`,
      quantityUnit: '桶',
      detail: `适合小批量提货，${blueMinCount} 桶可凑满配送起送量。`,
      priceHint: `全新 ${cfg.blueBucketNew} 元 / 九成新 ${cfg.blueBucketUsed} 元`,
      conditions: [
        { key: 'used', label: '九成新', fee: cfg.blueBucketUsed },
        { key: 'new', label: '全新', fee: cfg.blueBucketNew }
      ]
    },
    {
      key: 'tonBucket',
      title: '吨桶',
      unitKg: cfg.tonBucketKg,
      unitLabel: `${cfg.tonBucketKg}Kg / 吨桶`,
      quantityUnit: '个',
      detail: `整吨提货更高效，1 个即可满足配送起送量（${minKgText}）。`,
      priceHint: `全新 ${cfg.tonBucketNew} 元 / 九成新 ${cfg.tonBucketUsed} 元`,
      conditions: [
        { key: 'used', label: '九成新', fee: cfg.tonBucketUsed },
        { key: 'new', label: '全新', fee: cfg.tonBucketNew }
      ]
    },
    {
      key: 'transfer',
      title: '转罐',
      unitKg: cfg.tonBucketKg,
      unitLabel: `${cfg.tonBucketKg}Kg / 吨`,
      quantityUnit: '吨',
      detail: '自备容器转运，不提供包装物。',
      priceHint: '转罐免费',
      conditions: [
        { key: 'self', label: '自备容器', fee: 0 }
      ]
    }
  ]
}

function buildDeliveryOptions(config) {
  const cfg = normalizeProductConfig(config)

  return [
    {
      key: 'selfPickup',
      title: '自提',
      desc: '到提货点自提，免配送费。'
    },
    {
      key: 'delivery',
      title: '配送',
      desc: `县城范围内可送，起送量 ${cfg.minKg}Kg，配送费 ${cfg.freightPerKg} 元 / Kg。`
    }
  ]
}

function buildPackagingPayOptions(config) {
  return [
    { key: 'cash', title: '现金支付', desc: '包装物费用现金结算' },
    { key: 'credit', title: '包装抵扣', desc: '使用兑换获得的包装费抵扣' }
  ]
}

function clearConfigCache() {
  productCache = null
  productCacheAt = 0
  servicePointsCache = null
  servicePointsCacheAt = 0
}

module.exports = {
  buildDeliveryOptions,
  buildPackagingOptions,
  buildPackagingPayOptions,
  clearConfigCache,
  fetchProductConfig,
  fetchServicePoints,
  normalizeProductConfig
}
