<template>
    <el-main>
        <el-row>
            <el-card shadow="never">
                <div slot="header" class="clearfix">
                    <span>编辑商品</span>
                </div>
                <el-row>
                    <el-col :span="20" :offset="2">
                    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
                        <h3 class="form-title">基本信息</h3>
                        <el-form-item label="*商品名称">
                            <el-input v-model="form.name" placeholder="请输入商品名称"></el-input>
                        </el-form-item>
                        <el-form-item label="*商品分类">
                            <el-select v-model="form.type" placeholder="请选择商品分类">
                                <el-option label="分类1" value="type1"></el-option>
                                <el-option label="分类2" value="type2"></el-option>   
                            </el-select>
                            <el-button type="text" @click="manageType = true">分类管理</el-button>
                        </el-form-item>
                         <el-form-item label="*商品图">
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
                          <h3 class="form-title">价格库存</h3>
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
                            <el-table :data="specDate" border="" style="width: 100%">
                                 <el-table-column type="index" width="50"></el-table-column>
                                <el-table-column prop="spec1" label="尺寸" ></el-table-column>
                                <el-table-column prop="spec2" label="颜色"></el-table-column>
                                <el-table-column prop="price" label="价格"> 
                                    <template slot-scope="scope">
                                    <el-input v-model="input" placeholder="销售价格"></el-input>
                                    </template>
                                 </el-table-column>
                                  <el-table-column prop="stock" label="库存"> 
                                    <template slot-scope="scope">
                                    <el-input v-model="input" placeholder="库存数量"></el-input>
                                    </template>
                                 </el-table-column>
                                  <el-table-column prop="stock" label="规格编码"> 
                                    <template slot-scope="scope">
                                    <el-input v-model="input" placeholder="规格编码"></el-input>
                                    </template>
                                 </el-table-column>
                                  <el-table-column prop="cost" label="成本价"> 
                                    <template slot-scope="scope">
                                    <el-input v-model="input" placeholder="成本价"></el-input>
                                    </template>
                                 </el-table-column>
                            </el-table>
                        </el-form-item>
                         <!--商品多规格时显示-->
                          <!--商品多规格时以下内容不可输入-->
                        <el-form-item label="*价格">
                            <el-input :disabled="true" v-model="form.price" placeholder="请输入商品售价"></el-input>
                        </el-form-item>
                        <el-form-item label="*库存" class="mar-b-xs">
                            <el-input :disabled="true" v-model="form.cost" placeholder="请输入商品库存"></el-input>
                            <div class="help-block">库存为0时，商品将自动下架</div>
                        </el-form-item>
                        <el-form-item label="商品编码">
                            <el-input v-model="form.code" placeholder="请输入商品编码"></el-input>
                        </el-form-item>
                        <el-form-item label="成本价">
                            <el-input :disabled="true" v-model="form.cost" placeholder="请输入商品成本价"></el-input>
                        </el-form-item>
                           <!--商品多规格时隐藏以上内容-->
                            <h3 class="form-title">其它信息</h3>
                             <el-form-item label="*快递运费">
                            <el-input v-model="form.freight" placeholder="暂时仅支持统一运费"></el-input>
                        </el-form-item>
                        <el-form-item label="上架时间">
                            <el-radio-group v-model="form.time">
                                <el-radio label="立即上架"></el-radio>
                                <el-radio label="暂不售卖，放入仓库"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                          <h3 class="form-title">商品详情</h3>
                          <el-form-item label="商品详情">
                            <el-input v-model="form.freight" placeholder="富文本编辑器区域"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">保存</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                    </el-col>
                    
                </el-row>
            </el-card>
        </el-row>
         <!--分类管理-->
        <el-dialog title="分类管理" :visible.sync="manageType">
          <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
            {{tag}}
            </el-tag>
            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm">
            </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">新增分类</el-button>   
        </el-dialog>
    <!--分类管理弹出层结束-->
      <!--从淘宝导入-->
        <el-dialog title="导入商品" :visible.sync="importTaobao">
            <el-form :model="pwdform">
                <el-form-item label="淘宝链接" :label-width="formLabelWidth" class="mar-b-xs">
                    <el-input v-model="form.pwd" placeholder="请输入淘宝链接" class="input-large"></el-input>
                    <div class="help-block">系统将自动检测淘宝链接对应商品导入</div>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="importTaobao = false">取 消</el-button>
                <el-button type="primary" @click="importTaobao = false">确 定</el-button>
            </div>
        </el-dialog>
    <!--从淘宝导入弹出层结束-->
    </el-main>
</template>

<script>
    export default {
      data() {
        return {
          specDate:[{
            spec1: '大',
            spec2: '红'
          },{
            spec1: '大',
            spec2: '黄'
          },{
            spec1: '大',
            spec2: '蓝'
          },{
            spec1: '中',
            spec2: '红'
          },{
            spec1: '中',
            spec2: '黄'
          },{
            spec1: '中',
            spec2: '蓝'
          }],
          specOption: [{
            value: '颜色',
            label: '颜色'
          }, {
            value: '尺码',
            label: '尺码'
          }, {
            value: '净含量',
            label: '净含量'
          }, {
            value: '尺寸',
            label: '尺寸'
          }],
          spec: [],
          color: [],
          size: [],
          dialogImageUrl: '',
          dialogVisible: false,
          importTaobao: false,
          manageType: false,
          form: {
            name: '',
            region: '',
            spec: true,
            price: '',
            stock: '',
            freight: '',
            time: ''
          },
           formLabelWidth: '120px',
            dynamicTags: ['分类1', '分类2', '分类3'],
        inputVisible: false,
        inputValue: ''
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
        },
        handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
      }
    }
</script>