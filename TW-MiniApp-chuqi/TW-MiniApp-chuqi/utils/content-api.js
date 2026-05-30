const { get } = require('./request')

const TEMPLATE_DYNAMIC = 'dynamic'
const TEMPLATE_VIDEO = 'video'
const TEMPLATE_ARTICLE = 'article'

function formatTimeLabel(publishedAt) {
  if (!publishedAt) {
    return '刚刚'
  }

  const date = new Date(String(publishedAt).replace(/-/g, '/'))
  if (Number.isNaN(date.getTime())) {
    return publishedAt
  }

  const diff = Date.now() - date.getTime()
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour

  if (diff < hour) {
    return `${Math.max(1, Math.floor(diff / minute))}分钟前`
  }
  if (diff < day) {
    return `${Math.floor(diff / hour)}小时前`
  }
  if (diff < day * 2) {
    return '昨天'
  }
  if (diff < day * 7) {
    return `${Math.floor(diff / day)}天前`
  }

  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const dayText = `${date.getDate()}`.padStart(2, '0')
  return `${date.getFullYear()}-${month}-${dayText}`
}

function mapNewsItem(item) {
  const images = item.images || []
  const isVideo = item.contentType === TEMPLATE_VIDEO
  return {
    id: String(item.id),
    sourceType: 'api',
    channel: 'news',
    templateType: item.contentType || TEMPLATE_ARTICLE,
    title: item.title || '',
    coverImage: item.coverImage || images[0] || item.videoCover || '',
    imageClass: images.length || item.coverImage || item.videoCover ? '' : 'news-slide--field',
    isVideo,
    videoPath: isVideo ? (item.videoUrl || '') : ''
  }
}

function mapMomentItem(item) {
  const contentType = item.contentType || TEMPLATE_DYNAMIC
  const images = contentType === TEMPLATE_VIDEO ? [] : (item.images || [])

  return {
    id: String(item.id),
    sourceType: 'api',
    channel: 'moment',
    templateType: contentType,
    author: item.userNickname || '肽为农家菌肥',
    content: item.content || item.title || '',
    images,
    videoPath: contentType === TEMPLATE_VIDEO ? (item.videoUrl || '') : '',
    videoPoster: contentType === TEMPLATE_VIDEO ? (item.videoCover || item.coverImage || '') : '',
    videoLabel: contentType === TEMPLATE_VIDEO ? (item.title || item.content || '视频内容') : '',
    videoDuration: '',
    location: item.location || '',
    timeLabel: formatTimeLabel(item.publishedAt)
  }
}

function mapDetailToArticle(post, channel) {
  if (!post) {
    return null
  }

  const contentType = post.contentType || TEMPLATE_DYNAMIC
  const images = post.images || []
  const item = {
    id: String(post.id),
    sourceType: 'api',
    channel,
    templateType: contentType,
    title: post.title || '',
    content: post.content || '',
    images,
    videoPath: post.videoUrl || '',
    videoPoster: post.videoCover || '',
    videoDuration: '',
    location: post.location || '',
    author: post.userNickname || '肽为农家菌肥'
  }

  if (contentType === TEMPLATE_DYNAMIC) {
    const heroSlides = images.length
      ? images.map((src, index) => ({
        id: `${item.id}-dynamic-${index}`,
        type: 'image',
        src
      }))
      : [{
        id: `${item.id}-fallback`,
        type: 'image',
        src: post.coverImage || ''
      }]

    return {
      ...item,
      subtitle: post.location || '',
      heroMode: 'swiper',
      heroImageMode: 'contain',
      heroSlides,
      bodyBlocks: [{
        id: `${item.id}-content`,
        type: 'text',
        value: item.content
      }]
    }
  }

  if (contentType === TEMPLATE_VIDEO) {
    const heroVideo = {
      src: item.videoPath,
      poster: item.videoPoster || item.videoPath,
      durationText: ''
    }

    if (post.videoCover) {
      return {
        ...item,
        subtitle: post.location || '',
        heroMode: 'video',
        heroSlides: [],
        heroVideo,
        bodyBlocks: [
          {
            id: `${item.id}-content`,
            type: 'text',
            value: item.content
          }
        ]
      }
    }

    return {
      ...item,
      subtitle: post.location || '',
      heroMode: 'video',
      heroSlides: [],
      heroVideo,
      bodyBlocks: [{
        id: `${item.id}-content`,
        type: 'text',
        value: item.content
      }]
    }
  }

  return {
    ...item,
    subtitle: post.location || '',
    heroMode: 'cover',
    heroImageMode: 'contain',
    heroSlides: [{
      id: `${item.id}-cover`,
      type: 'image',
      src: post.coverImage || images[0] || ''
    }],
    bodyBlocks: [{
      id: `${item.id}-content`,
      type: 'text',
      value: item.content || item.title
    }]
  }
}

function isRemoteId(id) {
  return /^\d+$/.test(String(id || ''))
}

function fetchExploreHome() {
  return get('/api/app/content/home', null, { silent: true })
}

function fetchContentDetail(postId) {
  return get(`/api/app/content/detail/${postId}`, null, { silent: true })
}

function publishContent(payload) {
  const { post } = require('./request')
  return post('/api/app/content/publish', payload)
}

function deleteContent(postId) {
  const { post } = require('./request')
  return post(`/api/app/content/delete/${postId}`)
}

module.exports = {
  TEMPLATE_DYNAMIC,
  TEMPLATE_VIDEO,
  TEMPLATE_ARTICLE,
  formatTimeLabel,
  mapNewsItem,
  mapMomentItem,
  mapDetailToArticle,
  isRemoteId,
  fetchExploreHome,
  fetchContentDetail,
  publishContent,
  deleteContent
}
