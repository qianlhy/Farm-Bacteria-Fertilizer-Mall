const STATUS_TEXT = {
  1: '安排中',
  2: '已确认',
  3: '已完成',
  4: '已取消',
  5: '资料待填'
}

function maskPhone(phone) {
  const value = String(phone || '')
  if (value.length !== 11) {
    return value
  }

  return `${value.slice(0, 3)}****${value.slice(-4)}`
}

function mapBooking(record, options = {}) {
  const includeStatusCode = options.includeStatusCode === true

  const booking = {
    id: String(record.id),
    bookingNo: record.bookingNo,
    productName: record.productName,
    serviceName: `肽为服务点 | ${record.servicePoint}`,
    serviceAddress: record.address || '',
    docsCompleted: record.status === 5 || record.status === 2 || record.status === 3,
    phone: record.contactPhone,
    status: STATUS_TEXT[record.status] || record.status,
    createdAt: record.createdAt || ''
  }

  if (includeStatusCode) {
    booking.statusCode = record.status
  }

  return booking
}

module.exports = {
  STATUS_TEXT,
  mapBooking,
  maskPhone
}
