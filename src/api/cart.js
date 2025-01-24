import httpInstance from "@/utils/http"

export const getCartListAPI = () => httpInstance.get('/member/cart')

export const insertCartAPI = ({ skuId, count }) => httpInstance.post('/member/cart', { skuId, count })

export const delCartAPI = (ids) => httpInstance.delete('/member/cart', ids)