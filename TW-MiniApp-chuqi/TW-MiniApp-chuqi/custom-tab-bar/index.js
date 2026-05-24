Component({
  data: {
    selected: 0,
    loggedIn: false,
    list: [
      {
        key: 'home',
        text: '首页',
        pagePath: '/pages/home/index',
        icon: '/assets/svg-icons/explore.svg',
        activeIcon: '/assets/svg-icons/explore-active.svg'
      },
      {
        key: 'explore',
        text: '探索',
        pagePath: '/pages/explore/index',
        icon: '/assets/svg-icons/explore.svg',
        activeIcon: '/assets/svg-icons/explore-active.svg'
      },
      {
        key: 'board',
        text: '提货',
        pagePath: '/pages/service/index',
        raised: true,
        icon: '/assets/svg-icons/pickup.svg',
        activeIcon: '/assets/svg-icons/pickup-active.svg'
      },
      {
        key: 'benefit',
        text: '福利',
        pagePath: '/pages/benefit/index',
        icon: '/assets/svg-icons/benefit.svg',
        activeIcon: '/assets/svg-icons/benefit-active.svg'
      },
      {
        key: 'mine',
        text: '我的',
        pagePath: '/pages/mine/index',
        icon: '/assets/svg-icons/mine.svg',
        activeIcon: '/assets/svg-icons/mine-active.svg'
      }
    ]
  },

  lifetimes: {
    attached() {
      this.checkLogin()
      this.updateSelected()
    }
  },

  pageLifetimes: {
    show() {
      this.checkLogin()
      wx.nextTick(() => {
        this.updateSelected()
      })
    }
  },

  methods: {
    getCurrentRoute() {
      const pages = getCurrentPages()
      const currentPage = pages[pages.length - 1]

      if (!currentPage || !currentPage.route) {
        return ''
      }

      return `/${currentPage.route}`
    },

    checkLogin() {
      const user = wx.getStorageSync('app_user')
      const token = wx.getStorageSync('app_token')
      const loggedIn = !!(user && token)
      if (loggedIn !== this.data.loggedIn) {
        this.setData({ loggedIn })
      }
    },

    updateSelected() {
      const currentRoute = this.getCurrentRoute()

      if (!currentRoute) {
        return
      }
      const selected = this.data.list.findIndex(item => item.pagePath === currentRoute)

      if (selected === -1 || selected === this.data.selected) {
        return
      }

      this.setData({ selected })
    },

    switchTab(event) {
      const { path, index } = event.currentTarget.dataset

      if (!path) {
        return
      }

      const currentRoute = this.getCurrentRoute()

      if (currentRoute === path) {
        return
      }

      wx.switchTab({
        url: path
      })
    }
  }
})
