const BASE_URL = 'http://localhost:8080'

function request({ url, method = 'GET', data, header = {}, silent = false }) {
  return new Promise((resolve, reject) => {
    const token = wx.getStorageSync('app_token') || ''
    if (!silent) {
      wx.showLoading({ title: '加载中...', mask: true })
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
          wx.hideLoading()
        }
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const { code, message, data } = res.data
          if (code === 200) {
            resolve(data)
          } else if (code === 401) {
            wx.removeStorageSync('app_token')
            wx.removeStorageSync('app_user')
            wx.navigateTo({ url: '/pages/login/index' })
            reject(new Error(message || '未登录'))
          } else {
            wx.showToast({ title: message || '请求失败', icon: 'none' })
            reject(new Error(message || '请求失败'))
          }
        } else {
          wx.showToast({ title: '网络错误', icon: 'none' })
          reject(new Error('网络错误'))
        }
      },
      fail: (err) => {
        if (!silent) {
          wx.hideLoading()
        }
        wx.showToast({ title: '网络异常，请检查后端服务', icon: 'none' })
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

module.exports = { get, post }
