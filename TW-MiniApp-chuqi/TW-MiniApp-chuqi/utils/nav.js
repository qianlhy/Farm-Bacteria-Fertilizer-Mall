const { isLoggedIn } = require('./auth')
const { TAB_PAGES } = require('./env')

const LOGIN_PAGE = '/pages/login/index'

function getCurrentRoute() {
  const pages = getCurrentPages()
  const current = pages[pages.length - 1]
  if (!current) {
    return ''
  }

  const route = current.route.startsWith('/') ? current.route : `/${current.route}`
  const options = current.options || {}
  const query = Object.keys(options)
    .map(key => `${key}=${encodeURIComponent(options[key])}`)
    .join('&')

  return query ? `${route}?${query}` : route
}

function redirectToLogin() {
  const redirect = encodeURIComponent(getCurrentRoute())
  wx.redirectTo({
    url: `${LOGIN_PAGE}?redirect=${redirect}`
  })
}

function navigateToLogin() {
  wx.navigateTo({
    url: LOGIN_PAGE
  })
}

function requireLogin({ redirect = false } = {}) {
  if (isLoggedIn()) {
    return true
  }

  if (redirect) {
    redirectToLogin()
  } else {
    navigateToLogin()
  }
  return false
}

function navigateAfterLogin(redirectUrl) {
  if (!redirectUrl) {
    return false
  }

  const path = redirectUrl.split('?')[0]
  if (TAB_PAGES.includes(path)) {
    wx.switchTab({ url: path })
    return true
  }

  wx.redirectTo({
    url: redirectUrl,
    fail: () => {
      wx.switchTab({ url: TAB_PAGES[0] })
    }
  })
  return true
}

module.exports = {
  getCurrentRoute,
  navigateAfterLogin,
  navigateToLogin,
  redirectToLogin,
  requireLogin
}
