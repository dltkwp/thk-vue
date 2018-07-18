/**
 * 产品模块 - API服务
 */

import request from '@/utils/request'

/**
 * 查询列表数据接口
 * @param {查询条件} query
 */
export function FetchProducts(query) {
  return request({
    url: '/v1/products',
    method: 'GET',
    params: query
  })
}

/**
 * 新增接口
 * @param {基本信息} product
 */
export function SaveProduct(product) {
  return request({
    url: '/v1/products',
    method: 'POST',
    data: product
  })
}

/**
 * 更新信息
 * @param {待更新的信息} product
 * @param {Id} productId
 */
export function UpdateProduct(product, productId) {
  return request({
    url: '/v1/product/' + productId,
    method: 'PUT',
    data: product
  })
}

/**
 * 更新状态接口
 * @param {状态} status
 * @param {Id} productId
 */
export function UpdateProductStatus(status, productId) {
  return request({
    url: '/v1/product/' + productId,
    method: 'PUT'
  })
}
