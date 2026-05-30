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
const {
  fetchExploreHome,
  mapNewsItem,
  mapMomentItem,
  isRemoteId,
  deleteContent
} = require('../../utils/content-api')
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

const DEMO_IMAGE = '/assets/home/about_useful.jpg'
const DEMO_VIDEO = '/assets/home/wellness_summary_video_compat.mp4'

const defaultMomentFeed = [
  {
    id: 'moment-1',
    sourceType: 'default',
    templateType: TEMPLATE_DYNAMIC,
    author: '肽为农家菌肥',
    content: '客户案例：连续使用后，棚内管理更顺手，作物整体状态也更稳定。以下为一组现场反馈图（6 张）。',
    images: Array.from({ length: 6 }, () => DEMO_IMAGE),
    location: '泉州市·示范棚',
    timeLabel: '昨天'
  },
  {
    id: 'moment-2',
    sourceType: 'default',
    templateType: TEMPLATE_VIDEO,
    author: '肽为农家菌肥',
    content: '客户现场使用情况记录，点击视频可直接播放。',
    images: [],
    videoPath: DEMO_VIDEO,
    videoPoster: DEMO_IMAGE,
    videoLabel: '现场短视频记录',
    videoDuration: '00:28',
    location: '厦门市·温室基地',
    timeLabel: '2天前'
  },
  {
    id: 'moment-3',
    sourceType: 'default',
    templateType: TEMPLATE_DYNAMIC,
    author: '肽为农家菌肥',
    content: '多地示范棚回访记录，展示不同场景下的使用反馈（9 张九宫格）。',
    images: Array.from({ length: 9 }, () => DEMO_IMAGE),
    location: '漳州市·试验田',
    timeLabel: '3天前'
  }
]

function buildHeadlineNews(apiNews = []) {
  const remoteNews = (apiNews || []).map(mapNewsItem)
  const customHeadlines = getPublishedItems(CHANNEL_NEWS).map(item => ({
    id: item.id,
    sourceType: 'custom',
    templateType: item.templateType,
    channel: CHANNEL_NEWS,
    title: item.title,
    coverImage: getMediaCover(item),
    imageClass: item.imageClass
  }))

  const merged = remoteNews.concat(customHeadlines)
  if (merged.length) {
    return merged.slice(0, 9)
  }

  return defaultHeadlineNews
}

function buildMomentFeed(apiFeed = []) {
  const remoteFeed = (apiFeed || []).map(mapMomentItem)
  const customFeed = getPublishedItems(CHANNEL_MOMENT).map(item => ({
    id: item.id,
    sourceType: 'custom',
    channel: CHANNEL_MOMENT,
    templateType: item.templateType,
    author: item.author || '肽为农家菌肥',
    content: item.content || item.summary || item.title || '',
    images: item.templateType === TEMPLATE_DYNAMIC
      ? item.images
      : item.templateType === TEMPLATE_ARTICLE && getMediaCover(item)
        ? [getMediaCover(item)]
        : [],
    videoPath: item.templateType === TEMPLATE_VIDEO ? item.videoPath : '',
    videoPoster: item.templateType === TEMPLATE_VIDEO ? (item.customVideoCover || item.videoPoster || item.videoPath) : '',
    videoLabel: item.templateType === TEMPLATE_VIDEO ? (item.title || item.summary || '视频内容') : '',
    videoDuration: item.templateType === TEMPLATE_VIDEO ? item.videoDuration : '',
    location: item.location || '',
    timeLabel: item.timeLabel || '刚刚'
  }))

  const merged = remoteFeed.concat(customFeed)
  if (merged.length) {
    return merged.slice(0, 20)
  }

  return defaultMomentFeed
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
    plusMenuVisible: false,
    playingVideo: null,
    loadingRemote: false
  },

  onShow() {
    syncTabBarSelected(this, '/pages/explore/index')
    this.loadRemoteContent()
  },

  async loadRemoteContent() {
    this.setData({ loadingRemote: true })

    try {
      const homeData = await fetchExploreHome()
      this.setData({
        headlineNews: buildHeadlineNews(homeData?.headlineNews || []),
        momentFeed: buildMomentFeed(homeData?.feed || []),
        currentNewsIndex: 0
      })
    } catch (error) {
      this.setData({
        headlineNews: buildHeadlineNews(),
        momentFeed: buildMomentFeed(),
        currentNewsIndex: 0
      })
    } finally {
      this.setData({ loadingRemote: false })
    }
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

    const url = sourceType === 'default'
      ? `/pages/news-detail/index?id=${id}`
      : `/pages/news-detail/index?channel=news&id=${id}`

    wx.navigateTo({ url })
  },

  openContentDetail(event) {
    const { id } = event.currentTarget.dataset

    if (!id) {
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

  openMomentVideo(event) {
    const { id, poster, src } = event.currentTarget.dataset
    this.closePlusMenu()

    const feedItem = this.data.momentFeed.find(item => item.id === id)
    const videoPath = src || (feedItem && feedItem.videoPath) || ''

    if (!videoPath) {
      wx.showToast({ title: '暂无视频资源', icon: 'none' })
      if (poster) {
        wx.previewImage({ current: poster, urls: [poster] })
      }
      return
    }

    this.setData({
      playingVideo: {
        src: videoPath,
        poster: poster || (feedItem && feedItem.videoPoster) || ''
      }
    })
  },

  closeVideoPlayer() {
    this.setData({ playingVideo: null })
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
    const { id, sourceType } = event.currentTarget.dataset

    if (!id) {
      return
    }

    wx.showModal({
      title: '删除内容',
      content: '确认删除这条已发布内容吗？',
      success: async ({ confirm }) => {
        if (!confirm) {
          return
        }

        try {
          if (sourceType === 'api' && isRemoteId(id)) {
            await deleteContent(id)
          } else {
            deletePublishedItem(CHANNEL_MOMENT, id)
          }

          await this.loadRemoteContent()
          wx.showToast({
            title: '已删除',
            icon: 'success'
          })
        } catch (error) {
          wx.showToast({
            title: error.message || '删除失败',
            icon: 'none'
          })
        }
      }
    })
  }
})
