/**
 * 员工模块 - API服务
 */

import request from '@/utils/request'

/**
 * 查询列表接口
 * @param {查询条件} query
 */
export function FetchEmployees(query) {
  return request({
    url: '/v1/employees',
    method: 'GET',
    params: query
  })
}

/**
 * 新增接口
 * @param {基本信息} employee
 */
export function SaveEmployee(employee) {
  return request({
    url: '/v1/employee',
    method: 'POST',
    data: employee
  })
}

/**
 * 更新信息
 * @param {待更新的信息} employee
 * @param {Id} employeeId
 */
export function UpdateEmployee(employee, employeeId) {
  return request({
    url: '/v1/employee/' + employeeId,
    method: 'PUT',
    data: employee
  })
}

/**
 * 更新密码信息
 * @param {待更新的信息} password
 * @param {Id} employeeId
 */
export function UpdateEmployeePassword(password, employeeId) {
  return request({
    url: '/v1/employee/' + employeeId,
    method: 'PUT',
    data: password
  })
}
