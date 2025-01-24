import { getBannerAPI } from '@/api/home'
import { onMounted, ref } from 'vue'

export function useBanner (distributionSite) {
  const bannerList = ref([])
  const getBanner = async (distributionSite) => {
    const res = await getBannerAPI(distributionSite) 
    bannerList.value = res.result
  }
  onMounted(() => getBanner(distributionSite))

  return {
    bannerList
  }
}
