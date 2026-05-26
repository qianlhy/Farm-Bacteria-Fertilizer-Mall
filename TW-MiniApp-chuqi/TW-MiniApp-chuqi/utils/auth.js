const request = require('./request')

const USER_KEY = 'app_user'
const TOKEN_KEY = 'app_token'

function getUser() {
  const value = wx.getStorageSync(USER_KEY)
  return value && typeof value === 'object' ? value : null
}

function setUser(user) {
  if (user) {
    wx.setStorageSync(USER_KEY, user)
  } else {
    wx.removeStorageSync(USER_KEY)
  }
}

function getToken() {
  return wx.getStorageSync(TOKEN_KEY) || ''
}

function setToken(token) {
  if (token) {
    wx.setStorageSync(TOKEN_KEY, token)
  } else {
    wx.removeStorageSync(TOKEN_KEY)
  }
}

function clearAuth() {
  wx.removeStorageSync(USER_KEY)
  wx.removeStorageSync(TOKEN_KEY)
}

function isLoggedIn() {
  return Boolean(getUser() && getToken())
}

async function loginWithPhone(phone) {
  const data = await request.post('/api/app/auth/login', { phone }, { silent: true })
  const { token, userInfo } = data
  setToken(token)
  setUser(userInfo)
  return userInfo
}

async function loginWithWeChat({ wxCode, nickname, avatar }) {
  const data = await request.post('/api/app/auth/wx-login', {
    wxCode,
    nickname,
    avatar
  }, { silent: true })
  const { token, userInfo } = data
  setToken(token)
  setUser(userInfo)
  return userInfo
}

async function fetchUserInfo() {
  if (!isLoggedIn()) return null
  try {
    const userInfo = await request.get('/api/app/auth/user-info')
    if (userInfo) {
      setUser(userInfo)
    }
    return userInfo
  } catch (e) {
    return getUser()
  }
}

module.exports = {
  clearAuth,
  fetchUserInfo,
  getToken,
  getUser,
  isLoggedIn,
  loginWithPhone,
  loginWithWeChat,
  setToken,
  setUser
}
