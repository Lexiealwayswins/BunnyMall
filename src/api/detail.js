import httpInstance from "@/utils/http"

export const getDetailAPI = (id) => httpInstance.get('/goods', {
  params: {
    id
  }
})

export const getHotGoodsAPI = ({ id, type, limit}) => httpInstance.get('/goods/hot', {
  params: {
    id,
    type,
    limit: 3
  }
})

