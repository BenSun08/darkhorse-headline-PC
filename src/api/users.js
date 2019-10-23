import axios from '@/axios.js'

export const login = function (data) {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
