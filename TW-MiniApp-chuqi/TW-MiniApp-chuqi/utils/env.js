const TAB_PAGES = [
  '/pages/home/index',
  '/pages/explore/index',
  '/pages/service/index',
  '/pages/benefit/index',
  '/pages/mine/index'
]

// 开发环境默认 localhost；正式发布前请在微信公众平台配置 request 合法域名并改为线上地址
const DEV_BASE_URL = 'http://localhost:8080'
const PROD_BASE_URL = 'https://api.example.com'

function resolveBaseUrl() {
  try {
    const accountInfo = wx.getAccountInfoSync()
    const env = accountInfo && accountInfo.miniProgram ? accountInfo.miniProgram.envVersion : 'develop'
    if (env === 'release') {
      return PROD_BASE_URL
    }
  } catch (error) {
    // ignore
  }
  return DEV_BASE_URL
}

module.exports = {
  BASE_URL: resolveBaseUrl(),
  DEV_BASE_URL,
  PROD_BASE_URL,
  TAB_PAGES
}
