import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

request.interceptors.request.use((config) => {
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers['Authorization'] = `Bearer ${userStore.token}`
  }
  return config
})

request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      const { status, data } = error.response
      if (status === 401) {
        const userStore = useUserStore()
        userStore.logout()
        router.push('/login')
        ElMessage.error('登录已过期，请重新登录')
      } else {
        ElMessage.error(data.message || '请求失败')
      }
    } else {
      ElMessage.error('网络错误')
    }
    return Promise.reject(error)
  }
)

export default request

function cleanParams(params = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== null && value !== undefined && value !== '')
  )
}

export const adminLogin = (data) => request.post('/admin/auth/login', data)
export const getDashboard = () => request.get('/admin/dashboard')
export const getUserList = (params) => request.get('/admin/users/list', { params })
export const getUserDetail = (userId) => request.get(`/admin/users/detail/${userId}`)
export const updateUser = (data) => request.post('/admin/users/update', data)
export const adjustWallet = (data) => request.post('/admin/users/wallet/adjust', data)

export const getRechargeList = (params) => request.get('/admin/orders/recharge-list', { params })
export const confirmRecharge = (orderId) => request.post(`/admin/orders/recharge/confirm/${orderId}`)
export const getPickupList = (params) => request.get('/admin/orders/pickup-list', { params: cleanParams(params) })
export const confirmPickup = (orderId) => request.post(`/admin/orders/pickup/confirm/${orderId}`)
export const completePickup = (orderId) => request.post(`/admin/orders/pickup/complete/${orderId}`)
export const cancelPickup = (orderId, data) => request.post(`/admin/orders/pickup/cancel/${orderId}`, data)

export const getTrialList = (params) => request.get('/admin/trial/list', { params })
export const confirmTrial = (id) => request.post(`/admin/trial/confirm/${id}`)
export const completeTrial = (id) => request.post(`/admin/trial/complete/${id}`)
export const cancelTrial = (id, data) => request.post(`/admin/trial/cancel/${id}`, data)

export const getContentList = (params) => request.get('/admin/content/list', { params: cleanParams(params) })
export const getContentDetail = (postId) => request.get(`/admin/content/detail/${postId}`)
export const saveContent = (data) => request.post('/admin/content/save', data)
export const auditContent = (postId, data) => request.post(`/admin/content/audit/${postId}`, data)
export const deleteContent = (postId) => request.post(`/admin/content/delete/${postId}`)
export const uploadFile = (file) => {
  const formData = new FormData()
  formData.append('file', file)
  return request.post('/admin/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    timeout: file.type && file.type.startsWith('video/') ? 300000 : 60000,
  })
}

export const getPartnerList = (params) => request.get('/admin/partner/list', { params: cleanParams(params) })
export const handlePartner = (id, data) => request.post(`/admin/partner/handle/${id}`, data)

export const generateRedemptionCodes = (data) => request.post('/admin/redemption/generate', data)
export const getRedemptionCodeList = (params) => request.get('/admin/redemption/list', { params: cleanParams(params) })
export const disableRedemptionCode = (id) => request.post(`/admin/redemption/disable/${id}`)

export const getConfigList = () => request.get('/admin/config/list')
export const updateConfig = (data) => request.post('/admin/config/update', data)
