import httpInstance from "@/utils/http"

export const loginAPI = ({username, password}) => 
httpInstance.post('/login', {
    account: username,
    password
  },
)
