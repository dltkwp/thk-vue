<template>
    <el-main>
        <el-row type="flex" justify="space-between">
            <el-col :span="8">
               <el-dropdown  @command="handleCommand">
                    <el-button size="medium">
                        操作<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="sold">开售</el-dropdown-item>
                        <el-dropdown-item command="stopSold">停售</el-dropdown-item>
                        <el-dropdown-item command="changeType">修改分类</el-dropdown-item>
                        <el-dropdown-item command="delete" >删除</el-dropdown-item>
                        <el-dropdown-item command="export" divided>导出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <router-link to="/product/product/save" size="medium" type="primary" >新增商品</router-link>
            </el-col>
            <el-col class="text-right" :span="16">
                <el-input size="medium" placeholder="商品名称/编号" v-model="type" class="input-with-select input-large">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-popover placement="bottom" width="800" trigger="click">
                    <el-form :model="form" ref="form" label-width="100px">
                        <el-form-item label="分类" class="mar-b-xs"> 
                            <el-checkbox-group v-model="form.type">
                            <el-checkbox label="全部" name="type"></el-checkbox>
                            <el-checkbox label="分类1" name="type"></el-checkbox>
                            <el-checkbox label="分类2" name="type"></el-checkbox>
                            <el-checkbox label="分类3" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="状态" class="mar-b-xs"> 
                            <el-checkbox-group v-model="form.state">
                            <el-checkbox label="全部" name="state"></el-checkbox>
                            <el-checkbox label="在售" name="state"></el-checkbox>
                            <el-checkbox label="停售" name="state"></el-checkbox>
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
                <el-table-column prop="img" label="商品" min-width="200" >
                    <template slot-scope="scope">
                        <div class="media">
                            <div class="media-left">
                                <img class="media-object img-md" :src="scope.row.imgurl" alt="...">
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">{{ scope.row.name }}</h4>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column sortable prop="type" label="分类" ></el-table-column>
                <el-table-column sortable prop="price" label="售价" ></el-table-column>
                <el-table-column sortable prop="cost" label="成本价"></el-table-column>
                <el-table-column sortable prop="stock" label="库存" ></el-table-column>
                <el-table-column sortable prop="state" label="状态" ></el-table-column>
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
            imgurl: 'https://cdns.mtscrm.com/Ft3wKNFME8MqOo7J5kaW8qizDKx8?cdnversion=mo-1-1-2018123071804',
            name: '高级理发',
            type: '默认分类',
            price: '¥100.00',
            cost: '¥60.00',
            stock: '500',
            state: '在售'
          }, {
            id: '0000002',
            imgurl: 'https://cdns.mtscrm.com/Ft3wKNFME8MqOo7J5kaW8qizDKx8?cdnversion=mo-1-1-2018123071802',
            name: '烫发',
            type: '默认分类1',
            price: '¥120.00',
            cost: '¥40.00',
            stock: '300',
            state: '停售'
          }, {
            id: '0000003',
            imgurl: 'https://cdns.mtscrm.com/Ft3wKNFME8MqOo7J5kaW8qizDKx8?cdnversion=mo-1-1-2018123071802',
            name: '洗剪吹', type: '默认分类1', price: '¥150.00', cost: '¥60.00', stock: '300', state: '开售'
          }],
          form: {
            type: [],
            state: []
          }
        }
      }
    }

</script>