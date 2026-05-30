const STORAGE_KEY = 'pickup_address_book'

function createId() {
  return `addr_${Date.now()}_${Math.floor(Math.random() * 1000)}`
}

function listAddresses() {
  const stored = wx.getStorageSync(STORAGE_KEY)
  return Array.isArray(stored) ? stored : []
}

function persistAddresses(list) {
  wx.setStorageSync(STORAGE_KEY, list)
}

function getDefaultAddress() {
  const list = listAddresses()
  return list.find(item => item.isDefault) || list[0] || null
}

function saveAddress(entry) {
  const list = listAddresses()
  const payload = {
    id: entry.id || createId(),
    label: String(entry.label || '').trim(),
    address: String(entry.address || '').trim(),
    contactName: String(entry.contactName || '').trim(),
    contactPhone: String(entry.contactPhone || '').trim(),
    isDefault: Boolean(entry.isDefault)
  }

  if (!payload.address) {
    throw new Error('请填写卸货地址')
  }

  const nextList = list.filter(item => item.id !== payload.id)
  if (payload.isDefault) {
    nextList.forEach(item => {
      item.isDefault = false
    })
  }

  nextList.unshift(payload)
  persistAddresses(nextList.slice(0, 30))
  return payload
}

function removeAddress(id) {
  const nextList = listAddresses().filter(item => item.id !== id)
  persistAddresses(nextList)
  return nextList
}

module.exports = {
  getDefaultAddress,
  listAddresses,
  removeAddress,
  saveAddress
}
