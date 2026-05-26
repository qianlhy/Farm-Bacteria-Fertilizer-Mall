const { BASE_URL } = require('./env')

let loadingCount = 0

function showRequestLoading() {
  if (loadingCount === 0) {
    wx.showLoading({ title: '加载中...', mask: true })
  }
  loadingCount += 1
}

function hideRequestLoading() {
  loadingCount = Math.max(0, loadingCount - 1)
  if (loadingCount === 0) {
    wx.hideLoading()
  }
}

function goLoginPage() {
  const pages = getCurrentPages()
  const current = pages[pages.length - 1]
  const route = current && current.route ? current.route : ''

  if (route.includes('pages/login/index')) {
    return
  }

  wx.redirectTo({
    url: '/pages/login/index',
    fail: () => {
      wx.navigateTo({ url: '/pages/login/index' })
    }
  })
}

function request({ url, method = 'GET', data, header = {}, silent = false }) {
  return new Promise((resolve, reject) => {
    const token = wx.getStorageSync('app_token') || ''
    if (!silent) {
      showRequestLoading()
    }

    wx.request({
      url: BASE_URL + url,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
        ...header
      },
      success: (res) => {
        if (!silent) {
          hideRequestLoading()
        }

        if (res.statusCode >= 200 && res.statusCode < 300) {
          const { code, message, data: responseData } = res.data || {}
          if (code === 200) {
            resolve(responseData)
          } else if (code === 401) {
            wx.removeStorageSync('app_token')
            wx.removeStorageSync('app_user')
            goLoginPage()
            reject(new Error(message || '未登录'))
          } else {
            if (!silent) {
              wx.showToast({ title: message || '请求失败', icon: 'none' })
            }
            reject(new Error(message || '请求失败'))
          }
          return
        }

        if (!silent) {
          wx.showToast({ title: '网络错误', icon: 'none' })
        }
        reject(new Error('网络错误'))
      },
      fail: (err) => {
        if (!silent) {
          hideRequestLoading()
          wx.showToast({ title: '网络异常，请检查后端服务', icon: 'none' })
        }
        reject(err)
      }
    })
  })
}

function get(url, params, options = {}) {
  let query = ''
  if (params) {
    query = '?' + Object.keys(params).map(k => `${k}=${encodeURIComponent(params[k])}`).join('&')
  }
  return request({ url: url + query, method: 'GET', ...options })
}

function post(url, data, options = {}) {
  return request({ url, method: 'POST', data, ...options })
}

module.exports = { get, post, BASE_URL }
