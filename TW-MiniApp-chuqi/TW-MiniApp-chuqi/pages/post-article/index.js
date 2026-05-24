const {
  CHANNEL_MOMENT,
  CHANNEL_NEWS,
  TEMPLATE_ARTICLE,
  getPublishedItem,
  normalizeBlocks,
  upsertPublishedItem
} = require('../../utils/publish-store')

function createTextBlock(value = '') {
  return {
    id: `text-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type: 'text',
    value
  }
}

function createImageBlock(src) {
  return {
    id: `image-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type: 'image',
    src
  }
}

Page({
  data: {
    channel: CHANNEL_NEWS,
    pageTitle: '发文章',
    editingId: '',
    isEditing: false,
    coverImage: '',
    title: '',
    articleBlocks: [createTextBlock('')],
    activeTextIndex: 0,
    selectedLocation: '',
    publishEnabled: false,
    showExitSheet: false
  },

  onLoad(options) {
    const channel = options.target === CHANNEL_MOMENT ? CHANNEL_MOMENT : CHANNEL_NEWS
    this.setData({
      channel,
      pageTitle: channel === CHANNEL_NEWS ? '发布资讯文章' : '发布朋友圈文章'
    })

    if (options.id) {
      const editingItem = getPublishedItem(channel, options.id)

      if (editingItem) {
        const articleBlocks = normalizeBlocks(editingItem.articleBlocks || [])
        this.setData({
          editingId: editingItem.id,
          isEditing: true,
          coverImage: editingItem.coverImage || '',
          title: editingItem.title || '',
          articleBlocks: articleBlocks.length ? articleBlocks : [createTextBlock('')],
          selectedLocation: editingItem.location || ''
        })
        this.updatePublishState()
        return
      }
    }

    const draft = wx.getStorageSync(`draft-${channel}-${TEMPLATE_ARTICLE}`)

    if (!draft) {
      return
    }

    const articleBlocks = normalizeBlocks(draft.articleBlocks || [])
    this.setData({
      coverImage: draft.coverImage || '',
      title: draft.title || '',
      articleBlocks: articleBlocks.length ? articleBlocks : [createTextBlock('')],
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

  onBlockTextChange(event) {
    const { index } = event.currentTarget.dataset
    const articleBlocks = this.data.articleBlocks.slice()
    articleBlocks[index] = {
      ...articleBlocks[index],
      value: event.detail.value
    }

    this.setData({ articleBlocks })
    this.updatePublishState()
  },

  onBlockFocus(event) {
    const { index } = event.currentTarget.dataset
    this.setData({
      activeTextIndex: Number(index)
    })
  },

  chooseCover() {
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
          coverImage: tempFiles[0]?.tempFilePath || ''
        })
        this.updatePublishState()
      }
    })
  },

  removeCoverImage() {
    this.setData({ coverImage: '' })
    this.updatePublishState()
  },

  chooseBlockImage() {
    wx.showActionSheet({
      itemList: ['从相册选择', '拍摄图片'],
      success: ({ tapIndex }) => {
        if (tapIndex === 0) {
          this.openBlockImagePicker(['album'])
          return
        }

        if (tapIndex === 1) {
          this.openBlockImagePicker(['camera'])
        }
      }
    })
  },

  openBlockImagePicker(sourceType) {
    wx.chooseMedia({
      count: 9,
      mediaType: ['image'],
      sourceType,
      success: ({ tempFiles }) => {
        const imageBlocks = tempFiles.map(file => createImageBlock(file.tempFilePath))
        const articleBlocks = this.data.articleBlocks.slice()
        const insertIndex = Number(this.data.activeTextIndex || 0) + 1

        articleBlocks.splice(insertIndex, 0, ...imageBlocks)

        if (!articleBlocks[insertIndex + imageBlocks.length] || articleBlocks[insertIndex + imageBlocks.length].type !== 'text') {
          articleBlocks.splice(insertIndex + imageBlocks.length, 0, createTextBlock(''))
        }

        this.setData({
          articleBlocks,
          activeTextIndex: insertIndex + imageBlocks.length
        })
        this.updatePublishState()
      }
    })
  },

  removeBlockImage(event) {
    const { index } = event.currentTarget.dataset
    const articleBlocks = this.data.articleBlocks.filter((_, blockIndex) => blockIndex !== Number(index))

    this.setData({
      articleBlocks: articleBlocks.length ? articleBlocks : [createTextBlock('')]
    })
    this.updatePublishState()
  },

  previewBlockImage(event) {
    const { src } = event.currentTarget.dataset
    const urls = this.data.articleBlocks
      .filter(block => block.type === 'image' && block.src)
      .map(block => block.src)

    if (!src || !urls.length) {
      return
    }

    wx.previewImage({
      current: src,
      urls
    })
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

  updatePublishState() {
    const hasText = this.data.articleBlocks.some(block => block.type === 'text' && (block.value || '').trim())
    const hasImage = this.data.articleBlocks.some(block => block.type === 'image' && block.src)

    this.setData({
      publishEnabled: Boolean(
        this.data.coverImage ||
        (this.data.title || '').trim() ||
        hasText ||
        hasImage
      )
    })
  },

  publishPost() {
    if (!this.data.publishEnabled) {
      return
    }

    const createdAt = Date.now()
    const blocks = normalizeBlocks(this.data.articleBlocks)
    const textSummary = blocks
      .filter(block => block.type === 'text')
      .map(block => block.value)
      .join('\n')
      .trim()

    const item = {
      id: this.data.editingId || `custom-${this.data.channel}-${TEMPLATE_ARTICLE}-${createdAt}`,
      templateType: TEMPLATE_ARTICLE,
      title: (this.data.title || '').trim() || textSummary.slice(0, 24) || '最新文章',
      content: textSummary,
      articleBlocks: blocks,
      coverImage: this.data.coverImage || '',
      location: this.data.selectedLocation || '',
      createdAt
    }

    upsertPublishedItem(this.data.channel, item)
    wx.removeStorageSync(`draft-${this.data.channel}-${TEMPLATE_ARTICLE}`)

    wx.showToast({
      title: this.data.isEditing ? '文章已更新' : '文章已发布',
      icon: 'success'
    })

    setTimeout(() => {
      wx.navigateBack()
    }, 500)
  },

  goBack() {
    if (!this.hasDraftContent()) {
      wx.navigateBack()
      return
    }

    this.setData({
      showExitSheet: true
    })
  },

  hasDraftContent() {
    const hasText = this.data.articleBlocks.some(block => block.type === 'text' && (block.value || '').trim())
    const hasImage = this.data.articleBlocks.some(block => block.type === 'image' && block.src)

    return Boolean(
      this.data.coverImage ||
      (this.data.title || '').trim() ||
      hasText ||
      hasImage ||
      this.data.selectedLocation
    )
  },

  closeExitSheet() {
    this.setData({ showExitSheet: false })
  },

  saveDraftAndExit() {
    wx.setStorageSync(`draft-${this.data.channel}-${TEMPLATE_ARTICLE}`, {
      coverImage: this.data.coverImage,
      title: this.data.title,
      articleBlocks: this.data.articleBlocks,
      selectedLocation: this.data.selectedLocation
    })

    this.closeExitSheet()
    wx.navigateBack()
  },

  discardDraftAndExit() {
    wx.removeStorageSync(`draft-${this.data.channel}-${TEMPLATE_ARTICLE}`)
    this.closeExitSheet()
    wx.navigateBack()
  }
})
