import request from '@/utils/request.js'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  }).then(response => response.data)
}

export function getUserInfo() {
  return request({
    url: '/userinfo/extra'
  })
}
