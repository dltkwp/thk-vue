/**
 * 产品模块 - API服务
 */

import request from '@/utils/request'

/**
 * 查询产品列表数据接口
 * @param {查询条件} query
 */
export function FetchProducts (query) {
  return request({
    url: '/v1/products',
    method: 'GET',
    params: query
  })
}

/**
 * 新增产品接口
 * @param {基本产品信息} product
 */
export function SaveProduct (product) {
  return request({
    url: '/v1/products',
    method: 'POST',
    data: product
  })
}

/**
 * 更新产品信息
 * @param {待更新的产品信息} product
 * @param {产品Id} productId
 */
export function UpdateProduct (product, productId) {
  return request({
    url: '/v1/product/' + productId,
    method: 'PUT',
    data: product
  })
}

/**
 * 更新产品状态接口
 * @param {产品状态} status
 * @param {商品ID} productId
 */
export function UpdateProductStatus (status, productId) {
  return request({
    url: '/v1/product/' + productId,
    method: 'PUT'
  })
}
