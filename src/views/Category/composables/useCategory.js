import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getSubCategoryAPI } from '@/api/category'

export function useCategory () {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getSubCategoryAPI(id)
    categoryData.value = res.result
  }

  onMounted(() => getCategory())

  // 目标:路由参数变化的时候 可以把分类数据接口重新发送
  // 存在问题：使用最新的路由参数请求最新的分类数据
  // 点击哪里指哪里
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}
