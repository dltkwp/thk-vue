<template>
    <el-main>
        <el-row>
            <el-card shadow="never">
                <div slot="header" class="clearfix">
                    <span>新增会员</span>
                </div>
                <el-row>
                    <el-col :span="20" :offset="2">
                    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
                        <el-form-item label="姓名">
                            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号">
                            <el-input v-model="form.tel" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item label="头像">
                           <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                             <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </el-form-item>
                        <el-form-item label="会员等级">
                            <el-select v-model="form.type" placeholder="请选择会员等级">
                                <el-option label="等级1" value="type1"></el-option>
                                <el-option label="等级2" value="type2"></el-option>   
                            </el-select>
                            <el-button type="text" @click="manageLevel = true">等级设置</el-button>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-radio-group v-model="form.sex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
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
        <el-dialog title="等级设置" :visible.sync="manageLevel">
          <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
            {{tag}}
            </el-tag>
            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm">
            </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">新增会员等级</el-button>   
        </el-dialog>
    <!--分类管理弹出层结束-->
     
    </el-main>
</template>

<script>
    export default {
      data() {
        return {
          dialogImageUrl: '',
          dialogVisible: false,
          manageLevel: false,
          form: {
            name: '',
            tel: '',
            spec: true,
            type: '',
            sex: ''
          },
          formLabelWidth: '120px',
          dynamicTags: ['金牌会员', '银牌会员', '铜牌会员'],
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