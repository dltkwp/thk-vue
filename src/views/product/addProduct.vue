<template>
    <el-main>
        <el-row>
            <el-card shadow="never">
                <div slot="header" class="clearfix">
                    <span>新增商品</span>
                    <el-button style="float: right; padding: 3px 0" type="text">从淘宝导入</el-button>
                </div>
                <el-row>

                    <el-col :span="16" :offset="4">
                    <el-form ref="form" :model="form" label-width="120px">
                        <el-form-item label="商品名称">
                            <el-input v-model="form.name" placeholder="请输入商品名称"></el-input>
                        </el-form-item>
                        <el-form-item label="商品分类">
                            <el-select v-model="form.type" placeholder="请选择商品分类">
                                <el-option label="分类1" value="type1"></el-option>
                                <el-option label="分类2" value="type2"></el-option>   
                            </el-select>
                            <el-button type="text">分类管理</el-button>
                        </el-form-item>
                         <el-form-item label="商品图">
                           <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                             <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </el-form-item>
                         <el-form-item label="分享描述" class="mar-b-xs">
                            <el-input v-model="form.sharetext" placeholder="请输入分享描述"></el-input>
                            <div class="help-block">分享给好友时会显示，建议36个字以内</div>
                        </el-form-item>
                        <el-form-item label="商品卖点" class="mar-b-xs">
                            <el-input v-model="form.intro" placeholder="请输入商品卖点"></el-input>
                            <div class="help-block">在商品详情页标题下面展示卖点信息，建议60字以内</div>
                        </el-form-item>
                      <el-form-item label="是否多规格">
                            <el-switch v-model="form.spec"></el-switch>
                        </el-form-item>
                        <!--商品多规格时显示-->
                        <el-form-item label="商品规格" class="input-large">
                            <el-select v-model="spec" multiple filterable allow-create default-first-option placeholder="请选择商品规格">
                                <el-option v-for="item in specOption" :key="item.value"  :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="颜色">
                            <el-select v-model="color" multiple filterable allow-create default-first-option>
                                <el-option v-for="item in specColor" :key="item.value"  :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                         <el-form-item label="尺码">
                            <el-select v-model="size" multiple filterable allow-create default-first-option>
                                <el-option v-for="item in specSize" :key="item.value"  :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                          <el-form-item label="规格明细">
                            <el-table
    :data="tableData"
  
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
                        </el-form-item>
                         <!--商品多规格时显示-->
                       
                      
                        <el-form-item label="上架时间">
                            <el-radio-group v-model="form.resource">
                                <el-radio label="立即上架"></el-radio>
                                 <el-radio label="自定义上架时间"></el-radio>
                                <el-radio label="暂不售卖，放入仓库"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="活动形式">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                    </el-col>
                    
                </el-row>
            </el-card>
        </el-row>
    
    
    </el-main>
</template>

<script>
    export default {
        data() {
            return {
                specOption:[{
                    value:'颜色',
                    label:'颜色'
                },{
                    value:'尺码',
                    label:'尺码'
                },{
                    value:'净含量',
                    label:'净含量'
                },{
                    value:'尺寸',
                    label:'尺寸'
                }],
                spec:[],
                color:[],
                size:[],
                dialogImageUrl: '',
                dialogVisible: false,
                form: {
                    name: '',
                    region: '',
                    spec: false,
                    delivery: true,
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }, 
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>