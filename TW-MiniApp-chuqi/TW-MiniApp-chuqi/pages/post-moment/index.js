const {
  CHANNEL_MOMENT,
  CHANNEL_NEWS,
  TEMPLATE_DYNAMIC,
  getPublishedItem,
  upsertPublishedItem
} = require('../../utils/publish-store')
const { publishContent, isRemoteId } = require('../../utils/content-api')
const { uploadImages } = require('../../utils/upload')

Page({
  data: {
    channel: CHANNEL_MOMENT,
    pageTitle: '发动态',
    editingId: '',
    isEditing: false,
    title: '',
    content: '',
    images: [],
    selectedLocation: '',
    publishEnabled: false,
    showExitSheet: false
  },

  onLoad(options) {
    const channel = options.target === CHANNEL_NEWS ? CHANNEL_NEWS : CHANNEL_MOMENT
    this.setData({
      channel,
      pageTitle: channel === CHANNEL_NEWS ? '发布资讯动态' : '发布朋友圈动态'
    })

    if (options.id) {
      const editingItem = getPublishedItem(channel, options.id)

      if (editingItem) {
        this.setData({
          editingId: editingItem.id,
          isEditing: true,
          title: editingItem.title || '',
          content: editingItem.content || '',
          images: Array.isArray(editingItem.images) ? editingItem.images : [],
          selectedLocation: editingItem.location || ''
        })
        this.updatePublishState()
        return
      }
    }

    const draft = wx.getStorageSync(`draft-${channel}-${TEMPLATE_DYNAMIC}`)

    if (!draft) {
      return
    }

    this.setData({
      title: draft.title || '',
      content: draft.content || '',
      images: draft.images || [],
      selectedLocation: draft.selectedLocation || ''
    })
    this.updatePublishState()
  },

  onTitleChange(event) {
    this.setData({
      title: event.detail.value
    })
    this.updatePublishState()
  },

  onInputChange(event) {
    this.setData({
      content: event.detail.value
    })
    this.updatePublishState()
  },

  updatePublishState() {
    const { title, content, images } = this.data
    this.setData({
      publishEnabled: Boolean(
        (title || '').trim() ||
        (content || '').trim() ||
        (images || []).length
      )
    })
  },

  goBack() {
    if (!this.hasDraftContent()) {
      wx.navigateBack()
      return
    }

    this.setData({ showExitSheet: true })
  },

  chooseImages() {
    wx.showActionSheet({
      itemList: ['从相册选择', '拍摄图片'],
      success: ({ tapIndex }) => {
        if (tapIndex === 0) {
          this.openImagePicker(['album'])
          return
        }

        if (tapIndex === 1) {
          this.openImagePicker(['camera'])
        }
      }
    })
  },

  openImagePicker(sourceType) {
    wx.chooseMedia({
      count: 9 - this.data.images.length,
      mediaType: ['image'],
      sourceType,
      success: ({ tempFiles }) => {
        const images = this.data.images.concat(
          tempFiles.map(item => item.tempFilePath)
        ).slice(0, 9)

        this.setData({ images })
        this.updatePublishState()
      }
    })
  },

  previewImage(event) {
    const { src } = event.currentTarget.dataset
    wx.previewImage({
      current: src,
      urls: this.data.images
    })
  },

  removeImage(event) {
    const { index } = event.currentTarget.dataset
    const images = this.data.images.filter((_, imageIndex) => imageIndex !== Number(index))

    this.setData({ images })
    this.updatePublishState()
  },

  chooseLocation() {
    wx.navigateTo({
      url: '/pages/location-picker/index',
      events: {
        locationSelected: location => {
          this.setData({
            selectedLocation: location || ''
          })
        }
      }
    })
  },

  async publishPost() {
    if (!this.data.publishEnabled) {
      return
    }

    const token = wx.getStorageSync('app_token')
    const payload = {
      channel: this.data.channel,
      contentType: TEMPLATE_DYNAMIC,
      title: (this.data.title || '').trim(),
      content: (this.data.content || '').trim(),
      location: this.data.selectedLocation || ''
    }

    if (this.data.isEditing && isRemoteId(this.data.editingId)) {
      payload.id = Number(this.data.editingId)
    }

    wx.showLoading({ title: '发布中...', mask: true })

    try {
      if (token) {
        payload.images = await uploadImages(this.data.images || [])
        await publishContent(payload)
      } else {
        const createdAt = Date.now()
        const item = {
          id: this.data.editingId || `custom-${this.data.channel}-${TEMPLATE_DYNAMIC}-${createdAt}`,
          templateType: TEMPLATE_DYNAMIC,
          title: payload.title,
          content: payload.content,
          images: this.data.images,
          location: payload.location,
          createdAt
        }
        upsertPublishedItem(this.data.channel, item)
      }

      wx.removeStorageSync(`draft-${this.data.channel}-${TEMPLATE_DYNAMIC}`)
      wx.showToast({
        title: this.data.isEditing ? '内容已更新' : '内容已发布',
        icon: 'success'
      })

      setTimeout(() => {
        wx.navigateBack()
      }, 500)
    } catch (error) {
      wx.showToast({
        title: error.message || '发布失败',
        icon: 'none'
      })
    } finally {
      wx.hideLoading()
    }
  },

  hasDraftContent() {
    const { title, content, images, selectedLocation } = this.data
    return Boolean(
      (title || '').trim() ||
      (content || '').trim() ||
      (images || []).length ||
      selectedLocation
    )
  },

  closeExitSheet() {
    this.setData({ showExitSheet: false })
  },

  saveDraftAndExit() {
    wx.setStorageSync(`draft-${this.data.channel}-${TEMPLATE_DYNAMIC}`, {
      title: this.data.title,
      content: this.data.content,
      images: this.data.images,
      selectedLocation: this.data.selectedLocation
    })

    this.closeExitSheet()
    wx.navigateBack()
  },

  discardDraftAndExit() {
    wx.removeStorageSync(`draft-${this.data.channel}-${TEMPLATE_DYNAMIC}`)
    this.closeExitSheet()
    wx.navigateBack()
  }
})
