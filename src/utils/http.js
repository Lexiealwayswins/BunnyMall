import { useUserStore } from '@/stores/userStore'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const httpInstance = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bear ${token}`
  }
  return config
}, err => Promise.reject(err))

httpInstance.interceptors.response.use(res => res.data, err => {
  // 添加401跳转login逻辑
  if (err.response?.status === 401) {
    router.push('/login')
  } else {
    ElMessage.error(err.response?.data.message || 'Error in Service')
  }
  return Promise.reject(err)
})

export default httpInstance