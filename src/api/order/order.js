/**
 * 订单模块 - API服务
 */

import request from '@/utils/request'

/**
 * 查询列表接口
 * @param {查询条件} query
 */
export function FetchOrders(query) {
  return request({
    url: '/v1/orders',
    method: 'GET',
    params: query
  })
}

