import request from '@/utils/request'

export function login(data) {
  return request({
    // url: '/vue-element-admin/user/login',
    url: 'api/login',
    method: 'post',
    data:data
  })
}

export function getInfo(token) {
  return request({
    // url: '/vue-element-admin/user/info',
    url: 'api/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'api/logout',
    method: 'post'
  })
}
