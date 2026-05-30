const { BASE_URL } = require('./env')

function uploadFile(filePath) {
  return new Promise((resolve, reject) => {
    const token = wx.getStorageSync('app_token') || ''

    wx.uploadFile({
      url: `${BASE_URL}/api/app/upload`,
      filePath,
      name: 'file',
      header: {
        Authorization: token ? `Bearer ${token}` : ''
      },
      success: (res) => {
        try {
          const body = JSON.parse(res.data || '{}')
          if (body.code === 200 && body.data) {
            resolve(body.data)
            return
          }
          reject(new Error(body.message || '上传失败'))
        } catch (error) {
          reject(error)
        }
      },
      fail: reject
    })
  })
}

function isRemoteUrl(path) {
  return /^https?:\/\//.test(String(path || ''))
}

async function uploadIfNeeded(path) {
  if (!path || isRemoteUrl(path)) {
    return path
  }
  return uploadFile(path)
}

async function uploadImages(paths) {
  const list = paths || []
  const result = []
  for (const path of list) {
    result.push(await uploadIfNeeded(path))
  }
  return result
}

module.exports = {
  uploadFile,
  uploadIfNeeded,
  uploadImages,
  isRemoteUrl
}
