const { isLoggedIn } = require('../../utils/auth')
const { get, post } = require('../../utils/request')

Page({
  data: {
    bookingId: '',
    fullName: '',
    contactPhone: '',
    deliveryAddress: '',
    consignee: '',
    consigneePhone: '',
    canSubmit: false,
    mapLatitude: 24.47979,
    mapLongitude: 118.08942,
    currentLocationText: ''
  },

  onLoad(options) {
    this.setData({
      bookingId: options.id || ''
    })
    this.loadBooking()
  },

  async loadBooking() {
    if (!isLoggedIn() || !this.data.bookingId) {
      return
    }

    try {
      const records = await get('/api/app/trial/records', { page: 1, pageSize: 20 })
      const booking = (Array.isArray(records) ? records : []).find(
        item => String(item.id) === String(this.data.bookingId)
      )

      if (!booking) {
        return
      }

      this.setData({
        fullName: booking.contactName || '',
        contactPhone: booking.contactPhone || '',
        deliveryAddress: booking.address || '',
        consignee: booking.receiverName || '',
        consigneePhone: booking.receiverPhone || '',
        currentLocationText: booking.address || '',
        mapLatitude: booking.latitude ? Number(booking.latitude) : this.data.mapLatitude,
        mapLongitude: booking.longitude ? Number(booking.longitude) : this.data.mapLongitude
      })
      this.updateSubmitState()
    } catch (error) {
      // ignore
    }
  },

  goBack() {
    wx.navigateBack()
  },

  onFullNameInput(event) {
    this.setData({
      fullName: event.detail.value
    })
    this.updateSubmitState()
  },

  onContactPhoneInput(event) {
    this.setData({
      contactPhone: event.detail.value.replace(/\D/g, '').slice(0, 11)
    })
    this.updateSubmitState()
  },

  onConsigneeInput(event) {
    this.setData({
      consignee: event.detail.value
    })
    this.updateSubmitState()
  },

  onConsigneePhoneInput(event) {
    this.setData({
      consigneePhone: event.detail.value.replace(/\D/g, '').slice(0, 11)
    })
    this.updateSubmitState()
  },

  onDeliveryAddressInput(event) {
    this.setData({
      deliveryAddress: event.detail.value
    })
    this.updateSubmitState()
  },

  fillCurrentLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: ({ latitude, longitude }) => {
        const currentLocationText = `当前位置 ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`
        this.setData({
          mapLatitude: latitude,
          mapLongitude: longitude,
          currentLocationText,
          deliveryAddress: this.data.deliveryAddress || currentLocationText
        })
        this.updateSubmitState()
      },
      fail: () => {
        wx.showToast({
          title: '暂时无法获取当前位置',
          icon: 'none'
        })
      }
    })
  },

  updateSubmitState() {
    const {
      fullName,
      contactPhone,
      deliveryAddress,
      consignee,
      consigneePhone
    } = this.data

    this.setData({
      canSubmit: Boolean(
        fullName.trim() &&
        /^1\d{10}$/.test(contactPhone) &&
        consignee.trim() &&
        /^1\d{10}$/.test(consigneePhone) &&
        deliveryAddress.trim()
      )
    })
  },

  async submitDocs() {
    if (!this.data.canSubmit) {
      wx.showToast({
        title: '请先完善信息',
        icon: 'none'
      })
      return
    }

    try {
      await post(`/api/app/trial/update-docs/${this.data.bookingId}`, {
        contactName: this.data.fullName.trim(),
        address: this.data.deliveryAddress.trim(),
        receiverName: this.data.consignee.trim(),
        receiverPhone: this.data.consigneePhone.trim(),
        latitude: this.data.mapLatitude,
        longitude: this.data.mapLongitude
      })

      wx.showToast({
        title: '已完善信息和资料',
        icon: 'success'
      })

      setTimeout(() => {
        wx.navigateBack()
      }, 280)
    } catch (error) {
      // request.js already shows toast
    }
  }
})
