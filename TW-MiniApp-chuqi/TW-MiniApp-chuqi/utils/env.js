const TAB_PAGES = [
  '/pages/home/index',
  '/pages/explore/index',
  '/pages/service/index',
  '/pages/benefit/index',
  '/pages/mine/index'
]

// 体验版/正式版使用线上 HTTPS 域名（须在微信公众平台「服务器域名」配置 request 合法域名）
// 开发版默认也连线上，便于真机调试；如需连本机后端，将 DEV_BASE_URL 改为 http://192.168.1.13:8080
const DEV_BASE_URL = 'https://www.twst.work'
const PROD_BASE_URL = 'https://www.twst.work'

function resolveBaseUrl() {
  try {
    const accountInfo = wx.getAccountInfoSync()
    const env = accountInfo && accountInfo.miniProgram ? accountInfo.miniProgram.envVersion : 'develop'
    // 体验版(trial)与正式版(release)均使用线上地址，仅开发版(develop)用本地
    if (env === 'trial' || env === 'release') {
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
