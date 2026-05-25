const { defaultLocations, entries } = require('./entries')

function normalizeText(text) {
  return String(text || '')
    .replace(/[^0-9a-zA-Z\u4e00-\u9fa5]/g, '')
    .replace(/特别行政区|自治区|自治州|地区|办事处|苏木|街道|社区|省|市|区|县|旗|镇|乡|村|盟/g, '')
    .toLowerCase()
}

function searchLocations(keyword, limit = 20) {
  const normalizedKeyword = normalizeText(keyword)

  if (!normalizedKeyword) {
    return defaultLocations
  }

  const exactStarts = []
  const partialMatches = []

  entries.forEach(item => {
    const searchText = item.normalizedSearchText || normalizeText(`${item.value}${item.name}${item.detail}`)

    if (!searchText.includes(normalizedKeyword)) {
      return
    }

    const normalizedName = item.normalizedName || normalizeText(item.name)
    const normalizedValue = item.normalizedValue || normalizeText(item.value)

    if (normalizedName.startsWith(normalizedKeyword) || normalizedValue.startsWith(normalizedKeyword)) {
      exactStarts.push(item)
      return
    }

    partialMatches.push(item)
  })

  return exactStarts
    .concat(partialMatches)
    .sort((a, b) => a.rank - b.rank || a.value.length - b.value.length)
    .slice(0, limit)
    .map(item => ({
      name: item.name,
      detail: item.detail,
      value: item.value
    }))
}

module.exports = {
  getDefaultLocations() {
    return defaultLocations
  },
  searchLocations
}
