/**
 * 会员模块 - API服务
 */

import request from '@/utils/request'

/**
 * 查询列表接口
 * @param {查询条件} query
 */
export function FetchMembers(query) {
  return request({
    url: '/v1/members',
    method: 'GET',
    params: query
  })
}

/**
 * 新增接口
 * @param {基本信息} member
 */
export function SaveMember(member) {
  return request({
    url: '/v1/member',
    method: 'POST',
    data: member
  })
}

/**
 * 更新信息
 * @param {待更新的信息} member
 * @param {Id} memberId
 */
export function UpdateMember(member, memberId) {
  return request({
    url: '/v1/member/' + memberId,
    method: 'PUT',
    data: member
  })
}
