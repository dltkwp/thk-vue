<template>
  <el-main>
      <div class="dashboard-container">
        <div class="dashboard-text">首页信息地址页面 name:{{name}}</div>
        <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
      </div>
  </el-main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
