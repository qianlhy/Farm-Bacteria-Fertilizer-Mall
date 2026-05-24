const NEWS_STORAGE_KEY = 'published-articles'
const MOMENT_STORAGE_KEY = 'published-moments'

const TEMPLATE_DYNAMIC = 'dynamic'
const TEMPLATE_VIDEO = 'video'
const TEMPLATE_ARTICLE = 'article'

const CHANNEL_NEWS = 'news'
const CHANNEL_MOMENT = 'moment'

const HEADLINE_IMAGE_CLASSES = [
  'news-slide--field',
  'news-slide--soil',
  'news-slide--coupon',
  'news-slide--harvest'
]

const CHANNEL_LIMITS = {
  [CHANNEL_NEWS]: 9,
  [CHANNEL_MOMENT]: 30
}

function readList(key) {
  const value = wx.getStorageSync(key)
  return Array.isArray(value) ? value : []
}

function writeList(key, list) {
  wx.setStorageSync(key, Array.isArray(list) ? list : [])
}

function getStorageKey(channel) {
  return channel === CHANNEL_NEWS ? NEWS_STORAGE_KEY : MOMENT_STORAGE_KEY
}

function buildFallbackTitle(content, fallback) {
  const text = String(content || '').trim()
  return text ? text.slice(0, 24) : fallback
}

function buildPreviewText(text, fallback = '') {
  const value = String(text || '').trim()
  return value ? value.slice(0, 80) : fallback
}

function normalizeBlocks(blocks) {
  const list = Array.isArray(blocks) ? blocks : []

  return list
    .filter(block => block && block.type)
    .map((block, index) => ({
      id: block.id || `block-${Date.now()}-${index}`,
      type: block.type,
      value: block.value || '',
      src: block.src || '',
      poster: block.poster || '',
      durationText: block.durationText || ''
    }))
}

function legacyNewsBlocks(item) {
  const blocks = []
  const content = String(item.content || '').trim()

  if (content) {
    blocks.push({
      id: `legacy-text-${item.id || Date.now()}`,
      type: 'text',
      value: content
    })
  }

  ;(item.articleImages || []).forEach((src, index) => {
    blocks.push({
      id: `legacy-image-${index}`,
      type: 'image',
      src
    })
  })

  ;(item.articleVideos || []).forEach((video, index) => {
    blocks.push({
      id: `legacy-video-${index}`,
      type: 'video',
      src: video.path || '',
      poster: video.thumbTempFilePath || video.path || '',
      durationText: video.durationText || ''
    })
  })

  if (!blocks.length) {
    blocks.push({
      id: `legacy-empty-${Date.now()}`,
      type: 'text',
      value: ''
    })
  }

  return blocks
}

function normalizeNewsItem(item) {
  const templateType = item.templateType || TEMPLATE_ARTICLE
  const articleBlocks = templateType === TEMPLATE_ARTICLE
    ? normalizeBlocks(item.articleBlocks || legacyNewsBlocks(item))
    : []

  return {
    ...item,
    channel: CHANNEL_NEWS,
    sourceType: 'custom',
    templateType,
    title: item.title || buildFallbackTitle(item.content, '最新资讯'),
    content: String(item.content || '').trim(),
    summary: buildPreviewText(item.summary || item.content, item.title || '最新资讯'),
    coverImage: item.coverImage || '',
    images: Array.isArray(item.images) ? item.images : [],
    videoPath: item.videoPath || '',
    videoPoster: item.videoPoster || item.videoPath || '',
    videoDuration: item.videoDuration || '',
    customVideoCover: item.customVideoCover || '',
    articleBlocks,
    location: item.location || item.selectedLocation || '',
    createdAt: item.createdAt || Date.now(),
    imageClass: item.imageClass || HEADLINE_IMAGE_CLASSES[Date.now() % HEADLINE_IMAGE_CLASSES.length]
  }
}

function normalizeMomentItem(item) {
  const templateType = item.templateType || TEMPLATE_DYNAMIC

  return {
    ...item,
    channel: CHANNEL_MOMENT,
    sourceType: 'custom',
    templateType,
    title: item.title || buildFallbackTitle(item.content, '最新动态'),
    content: String(item.content || '').trim(),
    summary: buildPreviewText(item.summary || item.content, item.title || '最新动态'),
    coverImage: item.coverImage || '',
    images: Array.isArray(item.images) ? item.images : [],
    videoPath: item.videoPath || '',
    videoPoster: item.videoPoster || item.videoPath || '',
    videoDuration: item.videoDuration || '',
    customVideoCover: item.customVideoCover || '',
    articleBlocks: normalizeBlocks(item.articleBlocks || []),
    location: item.location || '',
    createdAt: item.createdAt || Date.now(),
    imageClass: item.imageClass || HEADLINE_IMAGE_CLASSES[Date.now() % HEADLINE_IMAGE_CLASSES.length]
  }
}

function normalizeItem(channel, item) {
  return channel === CHANNEL_NEWS ? normalizeNewsItem(item) : normalizeMomentItem(item)
}

function getPublishedItems(channel) {
  const key = getStorageKey(channel)
  const list = readList(key)
  return list.map(item => normalizeItem(channel, item))
}

function getPublishedItem(channel, id) {
  return getPublishedItems(channel).find(item => item.id === id) || null
}

function upsertPublishedItem(channel, rawItem) {
  const key = getStorageKey(channel)
  const list = readList(key)
  const item = normalizeItem(channel, rawItem)
  const index = list.findIndex(entry => entry.id === item.id)
  const limit = CHANNEL_LIMITS[channel] || 30

  if (index >= 0) {
    list[index] = item
    writeList(key, list.slice(0, limit))
    return item
  }

  writeList(key, [item].concat(list).slice(0, limit))
  return item
}

function deletePublishedItem(channel, id) {
  const key = getStorageKey(channel)
  const list = readList(key).filter(item => item.id !== id)
  writeList(key, list)
}

function getMediaCover(item) {
  if (item.templateType === TEMPLATE_DYNAMIC) {
    return (item.images || [])[0] || ''
  }

  if (item.templateType === TEMPLATE_VIDEO) {
    return item.customVideoCover || item.videoPoster || item.videoPath || ''
  }

  if (item.templateType === TEMPLATE_ARTICLE) {
    if (item.coverImage) {
      return item.coverImage
    }

    const imageBlock = (item.articleBlocks || []).find(block => block.type === 'image' && block.src)
    return imageBlock?.src || ''
  }

  return ''
}

function getEditorPage(templateType) {
  if (templateType === TEMPLATE_VIDEO) {
    return '/pages/post-video/index'
  }

  if (templateType === TEMPLATE_ARTICLE) {
    return '/pages/post-article/index'
  }

  return '/pages/post-moment/index'
}

function getEditorUrl(channel, templateType, id = '') {
  const base = getEditorPage(templateType)
  const params = [`target=${channel}`, `template=${templateType}`]

  if (id) {
    params.push(`id=${id}`)
    params.push('mode=edit')
  }

  return `${base}?${params.join('&')}`
}

module.exports = {
  CHANNEL_MOMENT,
  CHANNEL_NEWS,
  TEMPLATE_ARTICLE,
  TEMPLATE_DYNAMIC,
  TEMPLATE_VIDEO,
  HEADLINE_IMAGE_CLASSES,
  buildFallbackTitle,
  buildPreviewText,
  deletePublishedItem,
  getEditorUrl,
  getMediaCover,
  getPublishedItem,
  getPublishedItems,
  normalizeBlocks,
  normalizeItem,
  upsertPublishedItem
}
