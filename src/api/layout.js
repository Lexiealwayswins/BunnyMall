import httpInstance from "@/utils/http"

// Get category in homepage header
export const getCategoryAPI = () => httpInstance.get('/home/category/head')

