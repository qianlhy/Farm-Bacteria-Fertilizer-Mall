const TAB_ROUTES = [
  '/pages/home/index',
  '/pages/explore/index',
  '/pages/service/index',
  '/pages/benefit/index',
  '/pages/mine/index'
]

function syncTabBarSelected(page, route) {
  const index = TAB_ROUTES.indexOf(route)

  if (index < 0) {
    return
  }

  if (typeof page.getTabBar !== 'function') {
    return
  }

  const tabBar = page.getTabBar()

  if (!tabBar) {
    return
  }

  if (tabBar.data.selected === index) {
    return
  }

  tabBar.setData({ selected: index })
}

module.exports = {
  TAB_ROUTES,
  syncTabBarSelected
}
