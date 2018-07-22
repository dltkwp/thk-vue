import Vue from 'vue'

Vue.filter('imgConverFilter', function(value) {
  if (!value) return ''
  value = process.env.STATIC_IMAGE_URL + value
  return value
})
