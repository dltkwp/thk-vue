import Vue from 'vue'

/**
 * 图片地址转换过滤器
 * value： 待转换的文件名称
 * type：  图片的默认信息 product：商品，member： 会员，employee：员工
 * sex: 性别的选项 male:男，female:女，unknow
 */
Vue.filter('imageConverFilter', function(value, type = '', sex = 'male') {
  if (!value) {
    if (!type) { throw new Error('Type Not Null or Empty') }
    switch (type) {
      case 'product': value = ''; break
      case 'member':
        switch (sex) {
          case 'male': value = ''; break
          case 'female': value = ''; break
          case 'unknow': value = ''; break
        } break
      case 'employee': {
        switch (sex) {
          case 'male': value = ''; break
          case 'female': value = ''; break
          case 'unknow': value = ''; break
        }
      }
    }
  }
  value = process.env.STATIC_IMAGE_URL + value
  return value
})
