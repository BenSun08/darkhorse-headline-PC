import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.baseURL = 'http://127.0.0.1:3000'
localStorage.setItem('dh_base_URL_PC', 'http://127.0.0.1:3000')

axios.interceptors.request.use(config => {
// Do something before request is sent
  let token = localStorage.getItem('dh_user_token_PC')
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, error => {
// Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  // 用户不存在
  if (!response.data.data && response.data.statusCode === 401) {
    Message({
      message: response.data.message,
      type: 'error'
    })
  }
  return response
}, error => {
// Do something with response error
  return Promise.reject(error)
})

export default axios
