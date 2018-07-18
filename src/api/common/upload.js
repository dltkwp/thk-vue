import request from '@/libs/request'

/**
 * 公共图片上传接口
 * @param {文件参数} file
 * file 格式如下：
 * var file = event.target.files[0];
 * var formData = new FormData();
 * formData.append("file", file);
 */
export function UploadImage(file) {
  return request({ url: '/v1/employees/portrait',
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: file
  })
}
