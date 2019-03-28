import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/table/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/table/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/table/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/table/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/table/update',
    method: 'post',
    data
  })
}
