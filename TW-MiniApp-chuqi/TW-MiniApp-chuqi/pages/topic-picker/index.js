const hotTopics = [
  { name: '菌肥增产经验分享', participants: 1153 },
  { name: '春耕施肥避坑指南', participants: 16 },
  { name: '一袋好菌肥怎么选', participants: 106 },
  { name: '黄瓜棚管理日记', participants: 510 },
  { name: '我的三月用肥回顾', participants: 351 },
  { name: '果园保根复壮记录', participants: 61 },
  { name: '示范田回访观察', participants: 126 },
  { name: '菌肥与滴灌搭配推荐', participants: 162 },
  { name: '家用小菜园也能用吗', participants: 162 }
]

Page({
  data: {
    keyword: '',
    hotTopics,
    filteredTopics: hotTopics,
    showCreateTopic: false,
    createTopicName: ''
  },

  onLoad() {
    this.eventChannel = this.getOpenerEventChannel()
  },

  goBack() {
    wx.navigateBack()
  },

  onKeywordChange(event) {
    const keyword = event.detail.value.trim()
    const filteredTopics = keyword
      ? hotTopics.filter(item => item.name.includes(keyword))
      : hotTopics

    this.setData({
      keyword,
      filteredTopics,
      showCreateTopic: Boolean(keyword),
      createTopicName: keyword
    })
  },

  clearKeyword() {
    this.setData({
      keyword: '',
      filteredTopics: hotTopics,
      showCreateTopic: false,
      createTopicName: ''
    })
  },

  chooseTopic(event) {
    const { topic } = event.currentTarget.dataset

    if (this.eventChannel) {
      this.eventChannel.emit('topicSelected', topic)
    }

    wx.navigateBack()
  },

  createTopic() {
    const topic = this.data.createTopicName.trim()

    if (!topic) {
      return
    }

    if (this.eventChannel) {
      this.eventChannel.emit('topicSelected', topic)
    }

    wx.navigateBack()
  }
})
