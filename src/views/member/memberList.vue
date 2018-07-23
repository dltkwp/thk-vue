<template>
    <el-main>
        <el-row type="flex" justify="space-between">
            <el-col :span="8">
                  <el-dropdown size="medium" @command="handleCommand">
                    <el-button size="medium">
                        操作<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown" class="m-w-90">
                        <el-dropdown-item command="delete">删除</el-dropdown-item>
                        <el-dropdown-item command="export" divided>导出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <router-link to="/member/member/add"><el-button size="medium" type="primary">新增会员</el-button></router-link>
            </el-col>
            <el-col class="text-right" :span="16">
                <el-input size="medium" placeholder="会员姓名/手机号" class="input-large">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-popover placement="bottom" width="800" trigger="click">
                    <el-form :model="form" ref="form" label-width="100px">
                        <el-form-item label="会员等级" class="mar-b-xs"> 
                            <el-checkbox-group v-model="form.level">
                            <el-checkbox label="全部" name="level"></el-checkbox>
                            <el-checkbox label="等级1" name="level"></el-checkbox>
                            <el-checkbox label="等级2" name="level"></el-checkbox>
                            <el-checkbox label="等级3" name="level"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                      
                    </el-form>
                    <el-button slot="reference" size="medium">高级搜索</el-button>
                </el-popover>
            </el-col>
        </el-row>
        <el-row>
        <template>
            <el-table :data="productDate" max-height="80vh" class="table">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column sortable prop="id" label="ID" width="100"></el-table-column>
                <el-table-column label="会员" min-width="200" >
                    <template slot-scope="scope">
                        <div class="media">
                            <div class="media-left">
                                <img class="media-object img-sm img-round" :src="scope.row.imgurl" alt="...">
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">{{ scope.row.name }}</h4>
                                {{ scope.row.tel }}
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column sortable prop="level" label="等级"></el-table-column>
                <el-table-column sortable prop="ordernum" label="订单数"></el-table-column>
                <el-table-column sortable prop="spacetime" label="距上次消费" ></el-table-column>
                <el-table-column fixed="right" label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini">详情</el-button>
                        </template>
                </el-table-column>
            </el-table>
        </template>
        </el-row>
    </el-main>
</template>

<script>
    export default {
      data() {
        return {
          type: '',
          select: '',
          productDate: [{
            id: '0000001',
            imgurl: 'https://cdns.mtscrm.com/Ft3wKNFME8MqOo7J5kaW8qizDKx8?cdnversion=mo-1-1-2018123071802',
            name: '章三',
            tel: '15242512351',
            level: '金牌会员',
            ordernum: '20',
            spacetime: '15天'
          }],
          form: {
            level: []
          }
        }
      }
    }

</script>