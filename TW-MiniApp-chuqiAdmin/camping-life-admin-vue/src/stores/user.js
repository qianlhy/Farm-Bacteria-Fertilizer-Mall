import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('admin_token') || '')
  const adminId = ref(localStorage.getItem('admin_id') || '')
  const username = ref(localStorage.getItem('admin_username') || '')
  const realName = ref(localStorage.getItem('admin_realname') || '')
  const role = ref(localStorage.getItem('admin_role') || '')

  function setUser(data) {
    token.value = data.token
    adminId.value = data.adminId
    username.value = data.username
    realName.value = data.realName
    role.value = data.role
    localStorage.setItem('admin_token', data.token)
    localStorage.setItem('admin_id', data.adminId)
    localStorage.setItem('admin_username', data.username)
    localStorage.setItem('admin_realname', data.realName)
    localStorage.setItem('admin_role', data.role)
  }

  function logout() {
    token.value = ''
    adminId.value = ''
    username.value = ''
    realName.value = ''
    role.value = ''
    localStorage.clear()
  }

  return { token, adminId, username, realName, role, setUser, logout }
})
