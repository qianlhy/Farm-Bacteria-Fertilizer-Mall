const { loginWithPhone, loginWithWeChat, isLoggedIn } = require('../../utils/auth')

Page({
  data: {
    agreed: false,
    phone: '',
    loading: false,
    wxLoading: false,
    wxAvatar: '',
    wxNickname: ''
  },

  onLoad() {
    if (isLoggedIn()) {
      wx.switchTab({ url: '/pages/home/index' })
    }
  },

  goBack() {
    wx.navigateBack()
  },

  toggleAgree() {
    this.setData({ agreed: !this.data.agreed })
  },

  ensureAgreed() {
    if (!this.data.agreed) {
      wx.showToast({
        title: '请先阅读并同意用户协议',
        icon: 'none'
      })
      return false
    }
    return true
  },

  onPhoneInput(e) {
    this.setData({ phone: e.detail.value })
  },

  onPhoneBlur(e) {
    const phone = (e.detail.value || '').replace(/\D/g, '').slice(0, 11)
    this.setData({ phone })
  },

  finishLogin(userInfo) {
    wx.showToast({
      title: '登录成功',
      icon: 'success'
    })

    const pages = getCurrentPages()
    if (pages.length >= 2) {
      const prevPage = pages[pages.length - 2]
      if (prevPage && prevPage.onLoginSuccess) {
        prevPage.onLoginSuccess(userInfo)
      }
    }

    setTimeout(() => {
      wx.switchTab({ url: '/pages/home/index' })
    }, 1200)
  },

  doLogin() {
    if (!this.ensureAgreed()) {
      return
    }

    const phone = this.data.phone.trim()

    if (!phone) {
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
        showCancel: false
      })
      return
    }

    if (!/^1\d{10}$/.test(phone)) {
      wx.showModal({
        title: '提示',
        content: '手机号格式不正确',
        showCancel: false
      })
      return
    }

    this.setData({ loading: true })

    loginWithPhone(phone)
      .then((userInfo) => {
        this.finishLogin(userInfo)
      })
      .catch((err) => {
        wx.showToast({
          title: err.message || '登录失败',
          icon: 'none'
        })
      })
      .finally(() => {
        this.setData({ loading: false })
      })
  },

  doWechatLogin() {
    if (!this.ensureAgreed()) {
      return
    }

    if (this.data.loading || this.data.wxLoading) {
      return
    }

    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (profileRes) => {
        const { nickName, avatarUrl } = profileRes.userInfo || {}

        this.setData({
          wxAvatar: avatarUrl || '',
          wxNickname: nickName || '微信用户',
          wxLoading: true
        })

        wx.login({
          success: (loginRes) => {
            if (!loginRes.code) {
              wx.showToast({
                title: '获取微信登录码失败',
                icon: 'none'
              })
              this.setData({ wxLoading: false })
              return
            }

            loginWithWeChat({
              wxCode: loginRes.code,
              nickname: nickName || '微信用户',
              avatar: avatarUrl || ''
            })
              .then((userInfo) => {
                this.finishLogin(userInfo)
              })
              .catch((err) => {
                wx.showToast({
                  title: err.message || '微信登录失败',
                  icon: 'none'
                })
              })
              .finally(() => {
                this.setData({ wxLoading: false })
              })
          },
          fail: () => {
            wx.showToast({
              title: '微信登录失败，请重试',
              icon: 'none'
            })
            this.setData({ wxLoading: false })
          }
        })
      },
      fail: () => {
        wx.showToast({
          title: '需要授权微信头像和昵称',
          icon: 'none'
        })
      }
    })
  }
})
