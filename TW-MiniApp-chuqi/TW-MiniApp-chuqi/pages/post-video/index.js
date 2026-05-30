const {
  CHANNEL_MOMENT,
  CHANNEL_NEWS,
  TEMPLATE_VIDEO,
  getPublishedItem,
  upsertPublishedItem
} = require('../../utils/publish-store')
const { publishContent, isRemoteId } = require('../../utils/content-api')
const { uploadIfNeeded } = require('../../utils/upload')

Page({
  data: {
    channel: CHANNEL_NEWS,
    pageTitle: '发视频',
    editingId: '',
    isEditing: false,
    title: '',
    content: '',
    video: null,
    customCover: '',
    publishEnabled: false,
    selectedLocation: '',
    showExitSheet: false
  },

  onLoad(options) {
    const channel = options.target === CHANNEL_MOMENT ? CHANNEL_MOMENT : CHANNEL_NEWS
    this.setData({
      channel,
      pageTitle: channel === CHANNEL_NEWS ? '发布资讯视频' : '发布朋友圈视频'
    })

    if (options.id) {
      const editingItem = getPublishedItem(channel, options.id)

      if (editingItem) {
        this.setData({
          editingId: editingItem.id,
          isEditing: true,
          title: editingItem.title || '',
          content: editingItem.content || '',
          customCover: editingItem.customVideoCover || '',
          selectedLocation: editingItem.location || '',
          video: editingItem.videoPath ? {
            path: editingItem.videoPath,
            durationText: editingItem.videoDuration || '',
            thumbTempFilePath: editingItem.videoPoster || editingItem.videoPath
          } : null
        })
        this.updatePublishState()
        return
      }
    }

    const draft = wx.getStorageSync(`draft-${channel}-${TEMPLATE_VIDEO}`)

    if (draft) {
      this.setData({
        title: draft.title || '',
        content: draft.content || '',
        video: draft.video || null,
        customCover: draft.customCover || '',
        selectedLocation: draft.selectedLocation || ''
      })
      this.updatePublishState()
      return
    }

    this.promptVideoSource()
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
    this.setData({
      publishEnabled: Boolean(
        (this.data.title || '').trim() ||
        (this.data.content || '').trim() ||
        this.data.video
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

  promptVideoSource() {
    wx.showActionSheet({
      itemList: ['现场拍视频', '从手机里选视频'],
      success: ({ tapIndex }) => {
        if (tapIndex === 0) {
          this.chooseVideo(['camera'])
          return
        }

        if (tapIndex === 1) {
          this.chooseVideo(['album'])
        }
      }
    })
  },

  chooseVideo(sourceType) {
    wx.chooseMedia({
      count: 1,
      mediaType: ['video'],
      sourceType,
      maxDuration: 60,
      camera: 'back',
      success: ({ tempFiles }) => {
        const file = tempFiles[0]
        const video = file ? {
          path: file.tempFilePath,
          durationText: this.formatDuration(file.duration || 0),
          thumbTempFilePath: file.thumbTempFilePath || ''
        } : null

        this.setData({ video })
        this.updatePublishState()
      }
    })
  },

  chooseCustomCover() {
    wx.showActionSheet({
      itemList: ['从相册选择', '拍摄图片'],
      success: ({ tapIndex }) => {
        if (tapIndex === 0) {
          this.openCoverPicker(['album'])
          return
        }

        if (tapIndex === 1) {
          this.openCoverPicker(['camera'])
        }
      }
    })
  },

  openCoverPicker(sourceType) {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType,
      success: ({ tempFiles }) => {
        this.setData({
          customCover: tempFiles[0]?.tempFilePath || ''
        })
      }
    })
  },

  removeCustomCover() {
    this.setData({ customCover: '' })
  },

  removeVideo() {
    this.setData({
      video: null,
      customCover: ''
    })
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

  formatDuration(duration) {
    const total = Math.max(0, Math.floor(duration || 0))
    const minutes = String(Math.floor(total / 60)).padStart(2, '0')
    const seconds = String(total % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  },

  async publishPost() {
    if (!this.data.publishEnabled) {
      return
    }

    const token = wx.getStorageSync('app_token')
    const payload = {
      channel: this.data.channel,
      contentType: TEMPLATE_VIDEO,
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
        payload.videoUrl = await uploadIfNeeded(this.data.video?.path || '')
        payload.videoCover = await uploadIfNeeded(
          this.data.customCover || this.data.video?.thumbTempFilePath || this.data.video?.path || ''
        )
        await publishContent(payload)
      } else {
        const createdAt = Date.now()
        const item = {
          id: this.data.editingId || `custom-${this.data.channel}-${TEMPLATE_VIDEO}-${createdAt}`,
          templateType: TEMPLATE_VIDEO,
          title: payload.title,
          content: payload.content,
          videoPath: this.data.video?.path || '',
          videoPoster: this.data.video?.thumbTempFilePath || this.data.video?.path || '',
          videoDuration: this.data.video?.durationText || '',
          customVideoCover: this.data.customCover || '',
          location: payload.location,
          createdAt
        }
        upsertPublishedItem(this.data.channel, item)
      }

      wx.removeStorageSync(`draft-${this.data.channel}-${TEMPLATE_VIDEO}`)
      wx.showToast({
        title: this.data.isEditing ? '视频已更新' : '视频已发布',
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
    return Boolean(
      (this.data.title || '').trim() ||
      (this.data.content || '').trim() ||
      this.data.video ||
      this.data.customCover ||
      this.data.selectedLocation
    )
  },

  closeExitSheet() {
    this.setData({ showExitSheet: false })
  },

  saveDraftAndExit() {
    wx.setStorageSync(`draft-${this.data.channel}-${TEMPLATE_VIDEO}`, {
      title: this.data.title,
      content: this.data.content,
      video: this.data.video,
      customCover: this.data.customCover,
      selectedLocation: this.data.selectedLocation
    })

    this.closeExitSheet()
    wx.navigateBack()
  },

  discardDraftAndExit() {
    wx.removeStorageSync(`draft-${this.data.channel}-${TEMPLATE_VIDEO}`)
    this.closeExitSheet()
    wx.navigateBack()
  }
})
