/**
 * 员工模块 - 角色权限 - API服务
 */

import request from '@/utils/request'

/**
 * 查询列表接口
 * @param {查询条件} query
 */
export function FetctRoles(query) {
  return request({
    url: '/v1/roles',
    method: 'GET',
    params: query
  })
}
