<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="type" label="问题类型" width="150"></el-table-column>
    <el-table-column prop="number" label="工单号" width="120"></el-table-column>
    <el-table-column prop="title" label="问题标题" min-width="300"></el-table-column>
    <el-table-column prop="business" label="绑定业务" min-width="300"></el-table-column>
    <el-table-column prop="status" label="处理状态" width="100"></el-table-column>
    <el-table-column prop="follow" label="跟进" width="120"></el-table-column>
    <el-table-column prop="time" label="提交时间" width="150"></el-table-column>
    <el-table-column prop="from" label="提交人" width="120"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100" align="center">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [
        {
          type: "网站问题",
          number: "20190101",
          title: "	修改下首页产品展示位置",
          business: "湖南博智建材有限公司",
          status: "已回复",
          follow: "工程师",
          time: "2020-04-01",
          from: "长沙汇航"
        },
        {
          type: "网站问题",
          number: "20190101",
          title: "	修改下首页产品展示位置",
          business: "湖南博智建材有限公司",
          status: "已回复",
          follow: "工程师",
          time: "2020-04-01",
          from: "长沙汇航"
        },
        {
          type: "网站问题",
          number: "20190101",
          title: "	修改下首页产品展示位置",
          business: "湖南博智建材有限公司",
          status: "已回复",
          follow: "工程师",
          time: "2020-04-01",
          from: "长沙汇航"
        },
        {
          type: "网站问题",
          number: "20190101",
          title: "	修改下首页产品展示位置",
          business: "湖南博智建材有限公司",
          status: "已回复",
          follow: "工程师",
          time: "2020-04-01",
          from: "长沙汇航"
        },
        {
          type: "网站问题",
          number: "20190101",
          title: "	修改下首页产品展示位置",
          business: "湖南博智建材有限公司",
          status: "已回复",
          follow: "工程师",
          time: "2020-04-01",
          from: "长沙汇航"
        }
      ]
    };
  }
};
</script>