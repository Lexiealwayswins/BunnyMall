import httpInstance from "@/utils/http";

export const getBannerAPI = (distributionSite) => httpInstance.get('/home/banner', {
  params: {
    distributionSite: '1' // default 1, merchandise 2 
  }
})

export const getNewAPI = () => httpInstance.get('/home/new', {
  params: {
    limit: '4'
  }
})

export const getHotAPI = () => httpInstance.get('/home/hot')

export const getGoodsAPI = () => httpInstance.get('/home/goods')