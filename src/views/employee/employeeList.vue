<template>
    <el-main>
        <el-row type="flex" justify="space-between">
            <el-col :span="8">
                <el-dropdown size="medium" @command="handleCommand">
                    <el-button size="medium">
                        操作<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown" class="m-w-90">
                        <el-dropdown-item command="stop">启用</el-dropdown-item>
                        <el-dropdown-item command="stop">停用</el-dropdown-item>
                        <el-dropdown-item command="delete">删除</el-dropdown-item>
                        <el-dropdown-item command="export" divided>导出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button size="medium" type="primary" @click="addMember = true">新增成员</el-button>
            </el-col>
            <el-col class="text-right" :span="16">
                <el-input size="medium" placeholder="姓名/手机号" class="input-large">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <template>
            <el-table :data="productDate" max-height="80vh" class="table">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column sortable prop="id" label="ID" width="100"></el-table-column>
                <el-table-column prop="name" label="姓名" ></el-table-column>
                <el-table-column prop="tel" label="手机号" ></el-table-column>
                <el-table-column sortable prop="role" label="角色"></el-table-column>
                    <el-table-column sortable prop="state" label="状态" ></el-table-column>
                <el-table-column fixed="right" label="操作" width="250">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="editMember = true">设置</el-button>
                        <el-button size="mini">启用</el-button>
                            <el-button size="mini" @click="changeState = true">停用</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
        </el-row>
        <!--停用账户提示-->
        <el-dialog title="温馨提示" :visible.sync="changeState" width="30%">
            <span>停用成员账户后，成员将无法登录系统</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="changeState = false">取 消</el-button>
                <el-button type="primary" @click="changeState = false">确 定</el-button>
            </span>
        </el-dialog>
   <!--停用账户提示结束-->
        <!--新增成员弹出层-->
        <el-dialog title="新增成员" :visible.sync="addMember">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off" class="input-large"></el-input>
                </el-form-item>
                 <el-form-item label="手机号" :label-width="formLabelWidth">
                    <el-input v-model="form.tel" auto-complete="off" class="input-medium"></el-input>
                    <el-button>获取验证码</el-button>
                </el-form-item>
                 <el-form-item label="验证码" :label-width="formLabelWidth">
                    <el-input v-model="form.code" auto-complete="off" class="input-large"></el-input>
                </el-form-item>
                <el-form-item label="角色" :label-width="formLabelWidth">
                <el-select v-model="form.role" placeholder="请选择成员角色" class="input-large">
                    <el-option label="管理员" value="manage"></el-option>
                    <el-option label="普通成员" value="normal"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addMember = false">取 消</el-button>
                <el-button type="primary" @click="addMember = false">确 定</el-button>
            </div>
        </el-dialog>
    <!--新增成员弹出层结束-->
    <!--编辑成员弹出层，默认手机号是disabled的-->
        <el-dialog title="设置" :visible.sync="editMember">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off" class="input-large"></el-input>
                </el-form-item>
                 <el-form-item label="手机号" :label-width="formLabelWidth">
                    <el-input v-model="form.tel" auto-complete="off" class="input-medium"></el-input>
                    <el-button>修改手机号</el-button>
                </el-form-item>
                 <el-form-item label="验证码" :label-width="formLabelWidth">
                    <el-input v-model="form.code" auto-complete="off" class="input-large"></el-input>
                </el-form-item>
                <el-form-item label="角色" :label-width="formLabelWidth">
                <el-select v-model="form.role" placeholder="请选择成员角色" class="input-large">
                    <el-option label="管理员" value="manage"></el-option>
                    <el-option label="普通成员" value="normal"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                 <el-button @click="changePwd = true"  class="pull-left">修改密码</el-button>
                <el-button @click="editMember = false">取 消</el-button>
                <el-button type="primary" @click="addMember = false">确 定</el-button>
            </div>
        </el-dialog>
    <!--编辑成员弹出层结束-->
    <!--修改密码-->
        <el-dialog title="修改密码" :visible.sync="changePwd">
            <el-form :model="pwdform">
                <el-form-item label="新密码" :label-width="formLabelWidth">
                    <el-input v-model="form.pwd" auto-complete="off" class="input-large"></el-input>
                </el-form-item>
                 <el-form-item label="确认密码" :label-width="formLabelWidth">
                    <el-input v-model="form.pwd" auto-complete="off" class="input-large"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="changePwd = false">取 消</el-button>
                <el-button type="primary" @click="changePwd = false">确 定</el-button>
            </div>
        </el-dialog>
    <!--编辑成员弹出层结束-->
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
            name: '章三',
            tel: '15242512351',
            role: '超级管理员',
            state: '启用'
          },
          {
            id: '0000002',
            name: '里斯',
            tel: '15242512351',
            role: '超级管理员',
            state: '停用'
          }
          ],
          changeState: false,
          addMember: false,
          editMember: false,
          changePwd: false,
          form: {
            name: '',
            tel: '',
            code: '',
            role: []
          },
          pwdform: {
            pwd: ''
          },
          formLabelWidth: '120px'
        };
      }
    }
</script>