const friendPool = [
  {
    id: 'friend-1',
    name: '菌田老周',
    phone: '13800138000',
    desc: '菌肥示范田管理员',
    avatarText: '周',
    added: false
  },
  {
    id: 'friend-2',
    name: '小陈农服',
    phone: '13911223344',
    desc: '农技服务顾问',
    avatarText: '陈',
    added: false
  },
  {
    id: 'friend-3',
    name: '果园阿敏',
    phone: '13699887766',
    desc: '果园合作社成员',
    avatarText: '敏',
    added: false
  },
  {
    id: 'friend-4',
    name: '种植小许',
    phone: '13766554433',
    desc: '辣椒基地种植户',
    avatarText: '许',
    added: false
  }
]

Page({
  data: {
    keyword: '',
    results: [],
    searched: false
  },

  goBack() {
    wx.navigateBack()
  },

  onKeywordChange(event) {
    const keyword = event.detail.value.trim()
    const results = keyword
      ? friendPool.filter(item => item.name.includes(keyword) || item.phone.includes(keyword))
      : []

    this.setData({
      keyword,
      results,
      searched: Boolean(keyword)
    })
  },

  clearKeyword() {
    this.setData({
      keyword: '',
      results: [],
      searched: false
    })
  },

  addFriend(event) {
    const { id } = event.currentTarget.dataset
    const results = this.data.results.map(item => (
      item.id === id
        ? { ...item, added: true }
        : item
    ))

    this.setData({ results })

    wx.showToast({
      title: '已发送好友申请',
      icon: 'success'
    })
  }
})
