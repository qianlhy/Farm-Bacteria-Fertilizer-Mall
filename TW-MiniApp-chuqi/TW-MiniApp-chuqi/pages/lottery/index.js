const { requireLogin } = require('../../utils/nav')

const STORAGE_KEY = 'lottery_checkin_dates'

function getTodayKey() {
  const now = new Date()
  const pad = value => String(value).padStart(2, '0')
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}

function loadDates() {
  const stored = wx.getStorageSync(STORAGE_KEY)
  return Array.isArray(stored) ? stored : []
}

function calcStreak(dates) {
  if (!dates.length) {
    return 0
  }

  const sorted = [...new Set(dates)].sort().reverse()
  let streak = 0
  const cursor = new Date(getTodayKey())

  for (let i = 0; i < sorted.length; i += 1) {
    const expected = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}-${String(cursor.getDate()).padStart(2, '0')}`
    if (sorted[i] !== expected) {
      break
    }
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }

  return streak
}

Page({
  data: {
    checkedInToday: false,
    streakDays: 0,
    rewardPoints: 10
  },

  onShow() {
    if (!requireLogin({ redirect: true })) {
      return
    }
    this.refreshState()
  },

  refreshState() {
    const dates = loadDates()
    const today = getTodayKey()
    this.setData({
      checkedInToday: dates.includes(today),
      streakDays: calcStreak(dates)
    })
  },

  goBack() {
    wx.navigateBack()
  },

  handleCheckIn() {
    if (this.data.checkedInToday) {
      wx.showToast({ title: '今日已签到', icon: 'none' })
      return
    }

    const dates = loadDates()
    const today = getTodayKey()
    dates.push(today)
    wx.setStorageSync(STORAGE_KEY, dates)

    const streakDays = calcStreak(dates)
    this.setData({
      checkedInToday: true,
      streakDays
    })

    wx.showToast({
      title: streakDays >= 7 ? '连续签到7天，奖励加倍！' : `签到成功 +${this.data.rewardPoints}积分`,
      icon: 'success'
    })
  },

  handleDraw() {
    if (!this.data.checkedInToday) {
      wx.showToast({ title: '请先完成今日签到', icon: 'none' })
      return
    }

    const prizes = ['5积分', '10积分', '20积分', '谢谢参与', '50积分']
    const prize = prizes[Math.floor(Math.random() * prizes.length)]

    wx.showModal({
      title: '抽奖结果',
      content: `恭喜获得：${prize}`,
      showCancel: false
    })
  }
})
