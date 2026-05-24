Page({
  data: {
    torchOn: false
  },

  onLoad() {
    this.cameraContext = wx.createCameraContext()
  },

  goBack() {
    wx.navigateBack()
  },

  toggleTorch() {
    const nextTorchState = !this.data.torchOn

    if (!this.cameraContext) {
      return
    }

    this.cameraContext.setTorch({
      on: nextTorchState,
      success: () => {
        this.setData({
          torchOn: nextTorchState
        })
      },
      fail: () => {
        wx.showToast({
          title: '当前设备不支持手电筒',
          icon: 'none'
        })
      }
    })
  },

  chooseFromAlbum() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      success: () => {
        wx.showToast({
          title: '已选择图片',
          icon: 'success'
        })
      },
      fail: () => {
        wx.showToast({
          title: '已取消选择',
          icon: 'none'
        })
      }
    })
  },

  handleScanCode(event) {
    const { result } = event.detail

    wx.showModal({
      title: '识别结果',
      content: result || '已识别到内容',
      showCancel: false
    })
  }
})
