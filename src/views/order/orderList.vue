<template>
    <el-main>
        <el-row type="flex" justify="space-between">
            <el-col>
                <el-button size="medium">导出</el-button>
            </el-col>
            <el-col class="text-right" :span="16">
                <el-input size="medium" placeholder="商品/会员姓名/手机号" v-model="type" class="input-with-select input-xlarge">
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="全部" value="1" aria-selected=""></el-option>
                        <el-option label="待付款" value="2"></el-option>
                        <el-option label="待发货" value="3"></el-option>
                        <el-option label="付款待审核" value="4"></el-option>
                        <el-option label="已发货" value="5"></el-option>
                        <el-option label="已签收" value="6"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <el-button size="medium">高级搜索</el-button>
            </el-col>
        </el-row>
        <template slot-scope="scope">
            <el-table :data="ordertable" height="80vh" border class="table">
            <el-table-column prop="num" label="#" width="80">  </el-table-column>
            <el-table-column prop="id" label="订单编号" width="100"> </el-table-column>
            <el-table-column prop="time" label="下单时间" width="100"> </el-table-column>
            <el-table-column prop="content" label="订单内容" width="300"> </el-table-column>
            <el-table-column prop="address" label="收获地址" width="200"> </el-table-column>
            <el-table-column prop="payType" label="支付方式" width="200"> </el-table-column>
            <el-table-column prop="state" label="订单状态"  width="150"> </el-table-column>
            <el-table-column prop="bak" label="备注"> </el-table-column>
            <el-table-column prop="control" label="操作" width="200"> </el-table-column>
            </el-table>
        </template>
    </el-main>
</template>

<script>
  export default {
    data() {
      return {
        type: '',
        select: '',
        ordertable: [{
          num: '1',
          id: '000000001',
          time: '2018/07/01 12:20',
          content: '<div>123<br>123</div>',
          address: '王杰 15242612898<br>辽宁省大连市高新园区招商兰溪谷北区7号楼4单元302',
          payType: '微信',
          state: '待发货',
          bak: '备注文字内容',
          control: '<el-button size="medium">导出</el-button>'
        }]
      }
    }
  }
</script>