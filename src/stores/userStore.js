import { loginAPI } from "@/api/user"
import { defineStore } from "pinia"
import { ref } from 'vue'

export const useUserStore = defineStore('user', () =>{
  const userInfo = ref({})
  const getUserInfo = async ({ username, password }) => {
    const res = await loginAPI({ username, password })
    userInfo.value = res.result
  }
  const clearUserInfo = () => {
    userInfo.value = {}
  }

  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true,
})
