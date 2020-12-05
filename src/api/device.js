import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'api/device/list',
    method: 'get',
    // params: query
  })
}
