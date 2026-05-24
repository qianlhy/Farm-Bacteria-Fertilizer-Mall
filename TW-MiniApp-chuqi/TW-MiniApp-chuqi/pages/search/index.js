const STORAGE_KEY = 'search-history'

const baseTabs = [
  { key: 'all', label: '全部' },
  { key: 'users', label: '用户' },
  { key: 'dynamics', label: '动态' },
  { key: 'manuals', label: '使用手册' },
  { key: 'news', label: '资讯' },
  { key: 'products', label: '商品' }
]

const defaultHistory = ['活动口令', '菌肥', '使用手册', '领券有礼', '试用申领', '辣椒种植']

const userSource = [
  { id: 'user-1', name: '菌田老周', desc: '菌肥示范田管理员', avatarText: '周', avatarColor: '#8ba964' },
  { id: 'user-2', name: '小陈农服', desc: '农技服务顾问', avatarText: '陈', avatarColor: '#d48c4a' },
  { id: 'user-3', name: '果园阿敏', desc: '果园合作社成员', avatarText: '敏', avatarColor: '#c46882' },
  { id: 'user-4', name: '种植小许', desc: '辣椒基地种植户', avatarText: '许', avatarColor: '#c4584a' },
  { id: 'user-5', name: '山地果园', desc: '果园返青回访用户', avatarText: '果', avatarColor: '#6f8c5f' }
]

const dynamicSource = [
  {
    id: 'dynamic-1',
    title: '有时候随手一拍，就是菌肥追施后的田间变化',
    summary: '#菌肥追肥 #辣椒种植 板结情况明显减轻，返青更快。',
    meta: '示范田基地 | 2026/04/03',
    thumb: 'linear-gradient(135deg, #6c8f51, #d49a52)'
  },
  {
    id: 'dynamic-2',
    title: '我的黄瓜棚这一轮状态回来了',
    summary: '#黄瓜棚 #滴灌经验 苗子更整齐，准备继续追踪挂果期表现。',
    meta: '种植能手老何 | 2026/04/03',
    thumb: 'linear-gradient(135deg, #7aa85c, #b7cf76)'
  },
  {
    id: 'dynamic-3',
    title: '果园保水性对比记录',
    summary: '#果园 #保水性 两轮配合菌肥后，树势恢复更平稳。',
    meta: '山地果园 | 2026/04/02',
    thumb: 'linear-gradient(135deg, #567a48, #bf8a56)'
  },
  {
    id: 'dynamic-4',
    title: '新手第一篇菌肥使用心得',
    summary: '#使用反馈 #新手说明 第一次安排底肥和追肥，记录很重要。',
    meta: '草莓种植户阿敏 | 2026/04/01',
    thumb: 'linear-gradient(135deg, #b55d77, #f0b279)'
  },
  {
    id: 'dynamic-5',
    title: '短视频：冲施比例和浇灌顺序',
    summary: '#短视频 #果园管理 方便给想试用的朋友做参考。',
    meta: '老周果园 | 2026/03/31',
    thumb: 'linear-gradient(135deg, #7c633d, #d7a56f)'
  }
]

const manualSource = [
  {
    id: 'manual-1',
    title: '菌肥使用手册：果树保根与复壮',
    category: '根系恢复',
    summary: '讲解果树在移栽、返青、弱苗恢复阶段的菌肥使用节奏。'
  },
  {
    id: 'manual-2',
    title: '菌肥使用手册：蔬菜大棚追肥指南',
    category: '蔬菜管理',
    summary: '覆盖辣椒、黄瓜、番茄等常见大棚作物的追肥安排。'
  },
  {
    id: 'manual-3',
    title: '菌肥使用手册：滴灌搭配建议',
    category: '灌溉方案',
    summary: '说明滴灌条件下的配比、冲施频率和注意事项。'
  },
  {
    id: 'manual-4',
    title: '菌肥使用手册：新手常见问题',
    category: '问题答疑',
    summary: '整理第一次使用菌肥时最常见的误区与排查方法。'
  },
  {
    id: 'manual-5',
    title: '菌肥使用手册：草莓棚管理',
    category: '草莓管理',
    summary: '围绕回温期、叶色变化和根系恢复，给出分阶段建议。'
  }
]

const newsSource = [
  {
    id: 'news-1',
    title: '春耕旺季发货加速，菌肥套装已覆盖 12 个示范村',
    source: '官方资讯',
    date: '2026/04/02',
    thumb: 'linear-gradient(135deg, #6f8b4d, #c48d55)'
  },
  {
    id: 'news-2',
    title: '本月下单领券活动开启，老用户转介绍可叠加福利',
    source: '品牌运营中心',
    date: '2026/04/01',
    thumb: 'linear-gradient(135deg, #8a604c, #d6ae63)'
  },
  {
    id: 'news-3',
    title: '菌肥试验田反馈出炉，保水性表现稳定',
    source: '示范田项目组',
    date: '2026/03/30',
    thumb: 'linear-gradient(135deg, #5e8a78, #d7c38b)'
  }
]

const productSource = [
  {
    id: 'product-1',
    name: '果树复壮菌肥套装',
    tag: '根系修复',
    desc: '适合果树返青、弱苗恢复和移栽缓苗阶段。',
    price: '¥ 159.0',
    cover: 'linear-gradient(135deg, #d9a34c, #745528)'
  },
  {
    id: 'product-2',
    name: '大棚蔬菜菌肥冲施装',
    tag: '蔬菜追肥',
    desc: '适合辣椒、黄瓜、番茄等大棚作物追肥管理。',
    price: '¥ 199.0',
    cover: 'linear-gradient(135deg, #f6d17e, #bc8a29)'
  },
  {
    id: 'product-3',
    name: '滴灌专用菌肥组合',
    tag: '滴灌搭配',
    desc: '适合与滴灌系统配合使用，冲施更方便。',
    price: '¥ 188.0',
    cover: 'linear-gradient(135deg, #f08c2a, #3156a0)'
  },
  {
    id: 'product-4',
    name: '草莓棚修复营养包',
    tag: '草莓管理',
    desc: '围绕回温期和根系恢复的棚内补给方案。',
    price: '¥ 109.0',
    cover: 'linear-gradient(135deg, #8aa36d, #2f2f34)'
  }
]

function matchText(item, fields, keyword) {
  return fields.some(field => String(item[field] || '').includes(keyword))
}

Page({
  data: {
    tabs: [],
    activeTab: 'all',
    keyword: '',
    history: defaultHistory,
    users: [],
    dynamics: [],
    manuals: [],
    news: [],
    products: [],
    userPreview: [],
    dynamicPreview: [],
    manualPreview: [],
    newsPreview: [],
    productPreview: [],
    hasResults: false
  },

  onLoad() {
    const history = wx.getStorageSync(STORAGE_KEY)
    if (Array.isArray(history) && history.length) {
      this.setData({ history })
    }
  },

  closePage() {
    wx.navigateBack()
  },

  handleInput(event) {
    const keyword = event.detail.value
    this.runSearch(keyword)
  },

  handleConfirm() {
    this.commitHistory(this.data.keyword)
  },

  selectHistory(event) {
    const { keyword } = event.currentTarget.dataset
    this.runSearch(keyword)
    this.commitHistory(keyword)
  },

  clearHistory() {
    wx.removeStorageSync(STORAGE_KEY)
    this.setData({
      history: []
    })
  },

  switchTab(event) {
    const { key } = event.currentTarget.dataset
    this.setData({
      activeTab: key
    })
  },

  openSectionTab(event) {
    const { key } = event.currentTarget.dataset
    this.setData({
      activeTab: key
    })
  },

  commitHistory(keyword) {
    const normalized = (keyword || '').trim()
    if (!normalized) {
      return
    }

    const history = [normalized]
      .concat(this.data.history.filter(item => item !== normalized))
      .slice(0, 8)

    wx.setStorageSync(STORAGE_KEY, history)
    this.setData({ history })
  },

  runSearch(rawKeyword) {
    const keyword = rawKeyword
    const normalized = (rawKeyword || '').trim()

    if (!normalized) {
      this.setData({
        tabs: [],
        keyword,
        activeTab: 'all',
        users: [],
        dynamics: [],
        manuals: [],
        news: [],
        products: [],
        userPreview: [],
        dynamicPreview: [],
        manualPreview: [],
        newsPreview: [],
        productPreview: [],
        hasResults: false
      })
      return
    }

    const users = userSource.filter(item => matchText(item, ['name', 'desc'], normalized))
    const dynamics = dynamicSource.filter(item => matchText(item, ['title', 'summary', 'meta'], normalized))
    const manuals = manualSource.filter(item => matchText(item, ['title', 'category', 'summary'], normalized))
    const news = newsSource.filter(item => matchText(item, ['title', 'source', 'date'], normalized))
    const products = productSource.filter(item => matchText(item, ['name', 'tag', 'desc'], normalized))
    const tabs = this.buildVisibleTabs({
      users,
      dynamics,
      manuals,
      news,
      products
    })
    const tabKeys = tabs.map(item => item.key)
    const activeTab = tabKeys.includes(this.data.activeTab) ? this.data.activeTab : 'all'

    this.setData({
      tabs,
      keyword,
      activeTab,
      users,
      dynamics,
      manuals,
      news,
      products,
      userPreview: users.slice(0, 4),
      dynamicPreview: dynamics.slice(0, 4),
      manualPreview: manuals.slice(0, 4),
      newsPreview: news.slice(0, 2),
      productPreview: products,
      hasResults: Boolean(users.length || dynamics.length || manuals.length || news.length || products.length)
    })
  },

  buildVisibleTabs(groups) {
    return baseTabs.filter(item => (
      item.key === 'all' ||
      (item.key === 'users' && groups.users.length) ||
      (item.key === 'dynamics' && groups.dynamics.length) ||
      (item.key === 'manuals' && groups.manuals.length) ||
      (item.key === 'news' && groups.news.length) ||
      (item.key === 'products' && groups.products.length)
    ))
  }
})
