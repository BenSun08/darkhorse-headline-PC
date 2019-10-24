import axios from '@/axios.js'

export const login = function (data) {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}

export const getUserDetails = function (id) {
  return axios({
    method: 'get',
    url: `/user/${id}`
  })
}
