const {
  CHANNEL_MOMENT,
  CHANNEL_NEWS,
  TEMPLATE_ARTICLE,
  TEMPLATE_DYNAMIC,
  TEMPLATE_VIDEO,
  deletePublishedItem,
  getEditorUrl,
  getMediaCover,
  getPublishedItem
} = require('../../utils/publish-store')

const presetArticles = {
  'news-1': {
    id: 'news-1',
    sourceType: 'default',
    title: '春耕旺季发货加速，菌肥套装已覆盖 12 个示范村',
    subtitle: '春耕专题 · 配送升级与示范田回访同步推进',
    heroMode: 'swiper',
    heroSlides: [
      { id: 'n1-s1', type: 'style', imageClass: 'article-hero__slide--field-a' },
      { id: 'n1-s2', type: 'style', imageClass: 'article-hero__slide--field-b' }
    ],
    bodyBlocks: [
      { id: 'b1', type: 'text', value: '围绕春耕节点，我们把菌肥产品按作物和施肥阶段重新整理成组合装，方便农户直接下单，也方便服务团队做更有针对性的回访。' },
      { id: 'b2', type: 'text', value: '近期配送重点放在蔬菜大棚、果树补根和移栽缓苗等场景，多地示范村已经同步完成首批试用发放，后续还会滚动补充使用记录。' }
    ]
  },
  'news-2': {
    id: 'news-2',
    sourceType: 'default',
    title: '菌肥试验田反馈出炉，土壤疏松度与保水性表现稳定',
    subtitle: '试验田观察 · 连续跟踪多个样本地块',
    heroMode: 'swiper',
    heroSlides: [
      { id: 'n2-s1', type: 'style', imageClass: 'article-hero__slide--soil-a' },
      { id: 'n2-s2', type: 'style', imageClass: 'article-hero__slide--soil-b' }
    ],
    bodyBlocks: [
      { id: 'b1', type: 'text', value: '这批反馈主要来自连续跟踪的试验田。团队记录了施肥前后的地表状态、土壤湿润保持时间以及作物长势，方便用户做横向对照。' }
    ]
  },
  'news-3': {
    id: 'news-3',
    sourceType: 'default',
    title: '本月下单领券活动开启，老用户转介绍可叠加福利',
    subtitle: '活动通知 · 下单、领券、转介绍权益同步上线',
    heroMode: 'cover',
    heroSlides: [
      { id: 'n3-s1', type: 'style', imageClass: 'article-hero__slide--coupon-a' }
    ],
    bodyBlocks: [
      { id: 'b1', type: 'text', value: '活动期内，指定商品支持领券后再下单。若通过老用户分享进入并完成首单，系统会给邀请人与新用户同步发放优惠券。' }
    ]
  },
  'news-4': {
    id: 'news-4',
    sourceType: 'default',
    title: '示范棚回访持续进行中，多地用户反馈作物长势更稳',
    subtitle: '回访速报 · 用户反馈与阶段性观察同步更新',
    heroMode: 'swiper',
    heroSlides: [
      { id: 'n4-s1', type: 'style', imageClass: 'article-hero__slide--harvest-a' },
      { id: 'n4-s2', type: 'style', imageClass: 'article-hero__slide--harvest-b' }
    ],
    bodyBlocks: [
      { id: 'b1', type: 'text', value: '本轮回访聚焦蔬菜棚和果园两类场景，重点看施肥后一周到两周的作物状态变化，并同步记录用户最关心的问题。' }
    ]
  }
}

function buildTextBlock(value, id) {
  return {
    id,
    type: 'text',
    value: value || ''
  }
}

function normalizeCustomArticle(item) {
  if (!item) {
    return null
  }

  if (item.templateType === TEMPLATE_DYNAMIC) {
    const heroSlides = (item.images || []).length
      ? item.images.map((src, index) => ({
        id: `${item.id}-dynamic-${index}`,
        type: 'image',
        src
      }))
      : [{
        id: `${item.id}-fallback`,
        type: 'image',
        src: getMediaCover(item)
      }]

    return {
      ...item,
      heroMode: 'swiper',
      heroImageMode: 'contain',
      heroSlides,
      bodyBlocks: [buildTextBlock(item.content, `${item.id}-content`)]
    }
  }

  if (item.templateType === TEMPLATE_VIDEO) {
    if (item.customVideoCover) {
      return {
        ...item,
        heroMode: 'cover',
        heroImageMode: 'contain',
        heroSlides: [{
          id: `${item.id}-cover`,
          type: 'image',
          src: item.customVideoCover
        }],
        bodyBlocks: [
          {
            id: `${item.id}-video`,
            type: 'video',
            src: item.videoPath,
            poster: item.videoPoster || item.videoPath,
            durationText: item.videoDuration || ''
          },
          buildTextBlock(item.content, `${item.id}-content`)
        ]
      }
    }

    return {
      ...item,
      heroMode: 'video',
      heroSlides: [],
      heroVideo: {
        src: item.videoPath,
        poster: item.videoPoster || item.videoPath,
        durationText: item.videoDuration || ''
      },
      bodyBlocks: [buildTextBlock(item.content, `${item.id}-content`)]
    }
  }

  const articleBlocks = (item.articleBlocks || []).length
    ? item.articleBlocks
    : [buildTextBlock(item.content, `${item.id}-content`)]

  return {
    ...item,
    heroMode: 'cover',
    heroImageMode: 'contain',
    heroSlides: [{
      id: `${item.id}-cover`,
      type: 'image',
      src: getMediaCover(item)
    }],
    bodyBlocks: articleBlocks
  }
}

Page({
  data: {
    article: null,
    currentSlide: 0
  },

  onLoad(options) {
    this.channel = options.channel === CHANNEL_MOMENT ? CHANNEL_MOMENT : CHANNEL_NEWS
    this.articleId = options.id || 'news-1'
    this.loadArticle()
  },

  onShow() {
    if (this.articleId) {
      this.loadArticle()
    }
  },

  loadArticle() {
    if (this.channel && this.articleId && this.channel !== CHANNEL_NEWS) {
      const item = getPublishedItem(this.channel, this.articleId)
      this.setData({
        article: normalizeCustomArticle(item)
      })
      return
    }

    const customNews = getPublishedItem(CHANNEL_NEWS, this.articleId)

    if (customNews) {
      this.setData({
        article: normalizeCustomArticle(customNews)
      })
      return
    }

    this.setData({
      article: presetArticles[this.articleId] || presetArticles['news-1']
    })
  },

  goBack() {
    wx.navigateBack()
  },

  handleSlideChange(event) {
    this.setData({
      currentSlide: event.detail.current
    })
  },

  previewDetailImage(event) {
    const { src } = event.currentTarget.dataset
    const imageUrls = (this.data.article?.bodyBlocks || [])
      .filter(block => block.type === 'image' && block.src)
      .map(block => block.src)

    if (!src) {
      return
    }

    wx.previewImage({
      current: src,
      urls: imageUrls.length ? imageUrls : [src]
    })
  },

  editArticle() {
    const article = this.data.article

    if (!article || article.sourceType !== 'custom') {
      return
    }

    wx.navigateTo({
      url: getEditorUrl(article.channel, article.templateType, article.id)
    })
  },

  deleteArticle() {
    const article = this.data.article

    if (!article || article.sourceType !== 'custom') {
      return
    }

    wx.showModal({
      title: article.channel === CHANNEL_NEWS ? '删除资讯' : '删除内容',
      content: '确认删除这条已发布内容吗？',
      success: ({ confirm }) => {
        if (!confirm) {
          return
        }

        deletePublishedItem(article.channel, article.id)
        wx.showToast({
          title: '已删除',
          icon: 'success'
        })

        setTimeout(() => {
          wx.navigateBack()
        }, 400)
      }
    })
  },

})
