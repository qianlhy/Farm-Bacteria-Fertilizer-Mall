const {
  CHANNEL_MOMENT,
  CHANNEL_NEWS,
  TEMPLATE_ARTICLE,
  TEMPLATE_DYNAMIC,
  TEMPLATE_VIDEO,
  deletePublishedItem,
  getEditorUrl,
  getMediaCover,
  getPublishedItems
} = require('../../utils/publish-store')
const { syncTabBarSelected } = require('../../utils/tabBar')

const defaultHeadlineNews = [
  {
    id: 'news-1',
    title: '春耕旺季发货加速，菌肥套装已覆盖 12 个示范村',
    imageClass: 'news-slide--field'
  },
  {
    id: 'news-2',
    title: '菌肥试验田反馈出炉，土壤状态与保水表现持续稳定',
    imageClass: 'news-slide--soil'
  },
  {
    id: 'news-3',
    title: '本月下单领券活动开启，老用户转介绍可叠加福利',
    imageClass: 'news-slide--coupon'
  },
  {
    id: 'news-4',
    title: '示范棚回访持续进行中，多地用户反馈作物长势更稳',
    imageClass: 'news-slide--harvest'
  }
]

const defaultMomentFeed = [
  {
    id: 'moment-1',
    sourceType: 'default',
    templateType: TEMPLATE_DYNAMIC,
    currentMediaIndex: 0,
    title: '客户案例：棚内状态更整齐',
    content: '连续使用后，棚内管理更顺手，作物整体状态也更稳定。这一组现场图主要用于展示客户案例和实际使用反馈。',
    images: [
      '/assets/trial/hero.jpg',
      '/assets/trial/tank.png.jpeg',
      '/assets/trial/success-card-cropped.jpg',
      '/assets/trial/success-bg.png.jpeg'
    ],
    location: '泉州市·示范棚'
  },
  {
    id: 'moment-2',
    sourceType: 'default',
    templateType: TEMPLATE_VIDEO,
    currentMediaIndex: 0,
    title: '客户使用情况记录',
    content: '这一条以视频形式展示客户现场使用过程，后续可以继续补充不同场景下的真实使用画面与反馈内容。',
    videoPoster: '/assets/trial/hero.jpg',
    videoLabel: '现场短视频记录',
    videoDuration: '00:28',
    location: '厦门市·温室基地'
  }
]

function buildHeadlineNews() {
  const customHeadlines = getPublishedItems(CHANNEL_NEWS).map(item => ({
    id: item.id,
    sourceType: 'custom',
    templateType: item.templateType,
    channel: CHANNEL_NEWS,
    title: item.title,
    coverImage: getMediaCover(item),
    imageClass: item.imageClass
  }))

  return customHeadlines.concat(defaultHeadlineNews).slice(0, 9)
}

function buildMomentFeed() {
  const customFeed = getPublishedItems(CHANNEL_MOMENT).map(item => ({
    id: item.id,
    sourceType: 'custom',
    channel: CHANNEL_MOMENT,
    templateType: item.templateType,
    currentMediaIndex: 0,
    title: item.title,
    content: item.content || item.summary || '',
    images: item.templateType === TEMPLATE_DYNAMIC
      ? item.images
      : item.templateType === TEMPLATE_ARTICLE && getMediaCover(item)
        ? [getMediaCover(item)]
        : [],
    videoPath: item.templateType === TEMPLATE_VIDEO ? item.videoPath : '',
    videoPoster: item.templateType === TEMPLATE_VIDEO ? (item.customVideoCover || item.videoPoster || item.videoPath) : '',
    videoLabel: item.templateType === TEMPLATE_VIDEO ? (item.title || item.summary || '视频内容') : '',
    videoDuration: item.templateType === TEMPLATE_VIDEO ? item.videoDuration : '',
    location: item.location || ''
  }))

  return customFeed.concat(defaultMomentFeed).slice(0, 20)
}

const plusMenuItems = [
  {
    key: 'news-dynamic',
    section: '资讯',
    label: '动态',
    icon: '/assets/svg-icons/dynamic.svg',
    path: getEditorUrl(CHANNEL_NEWS, TEMPLATE_DYNAMIC)
  },
  {
    key: 'news-video',
    section: '资讯',
    label: '视频',
    icon: '/assets/svg-icons/video.svg',
    path: getEditorUrl(CHANNEL_NEWS, TEMPLATE_VIDEO)
  },
  {
    key: 'news-article',
    section: '资讯',
    label: '文章',
    icon: '/assets/svg-icons/article.svg',
    path: getEditorUrl(CHANNEL_NEWS, TEMPLATE_ARTICLE)
  },
  {
    key: 'moment-dynamic',
    section: '朋友圈',
    label: '动态',
    icon: '/assets/svg-icons/dynamic.svg',
    path: getEditorUrl(CHANNEL_MOMENT, TEMPLATE_DYNAMIC)
  },
  {
    key: 'moment-video',
    section: '朋友圈',
    label: '视频',
    icon: '/assets/svg-icons/video.svg',
    path: getEditorUrl(CHANNEL_MOMENT, TEMPLATE_VIDEO)
  },
  {
    key: 'moment-article',
    section: '朋友圈',
    label: '文章',
    icon: '/assets/svg-icons/article.svg',
    path: getEditorUrl(CHANNEL_MOMENT, TEMPLATE_ARTICLE)
  }
]

Page({
  data: {
    headlineNews: buildHeadlineNews(),
    momentFeed: buildMomentFeed(),
    plusMenuItems,
    currentNewsIndex: 0,
    plusMenuVisible: false
  },

  onShow() {
    syncTabBarSelected(this, '/pages/explore/index')
    this.setData({
      headlineNews: buildHeadlineNews(),
      momentFeed: buildMomentFeed(),
      currentNewsIndex: 0
    })
  },

  handleNewsChange(event) {
    this.setData({
      currentNewsIndex: event.detail.current
    })
  },

  handleMomentSwiperChange(event) {
    const { id } = event.currentTarget.dataset
    const current = event.detail.current || 0

    this.setData({
      momentFeed: this.data.momentFeed.map(item => (
        item.id === id
          ? { ...item, currentMediaIndex: current }
          : item
      ))
    })
  },

  togglePlusMenu() {
    this.setData({
      plusMenuVisible: !this.data.plusMenuVisible
    })
  },

  closePlusMenu() {
    if (!this.data.plusMenuVisible) {
      return
    }

    this.setData({
      plusMenuVisible: false
    })
  },

  noop() {},

  openNewsDetail(event) {
    const { id, sourceType } = event.currentTarget.dataset
    this.closePlusMenu()

    const url = sourceType === 'custom'
      ? `/pages/news-detail/index?channel=news&id=${id}`
      : `/pages/news-detail/index?id=${id}`

    wx.navigateTo({ url })
  },

  openContentDetail(event) {
    const { id, sourceType } = event.currentTarget.dataset

    if (sourceType !== 'custom' || !id) {
      return
    }

    wx.navigateTo({
      url: `/pages/news-detail/index?channel=moment&id=${id}`
    })
  },

  handlePlusMenuTap(event) {
    const { path } = event.currentTarget.dataset
    this.closePlusMenu()

    if (path) {
      wx.navigateTo({ url: path })
    }
  },

  openSearch() {
    this.closePlusMenu()
    wx.navigateTo({ url: '/pages/search/index' })
  },

  previewMomentImage(event) {
    const { src, urls } = event.currentTarget.dataset
    this.closePlusMenu()

    if (!src || !urls || !urls.length) {
      return
    }

    wx.previewImage({
      current: src,
      urls
    })
  },

  editMoment(event) {
    const { id, template } = event.currentTarget.dataset

    if (!id || !template) {
      return
    }

    wx.navigateTo({
      url: getEditorUrl(CHANNEL_MOMENT, template, id)
    })
  },

  deleteMoment(event) {
    const { id } = event.currentTarget.dataset

    if (!id) {
      return
    }

    wx.showModal({
      title: '删除内容',
      content: '确认删除这条已发布内容吗？',
      success: ({ confirm }) => {
        if (!confirm) {
          return
        }

        deletePublishedItem(CHANNEL_MOMENT, id)
        this.setData({
          momentFeed: buildMomentFeed()
        })

        wx.showToast({
          title: '已删除',
          icon: 'success'
        })
      }
    })
  }
})
