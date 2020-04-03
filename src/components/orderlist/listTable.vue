<template>
  <el-table v-loading="loading" :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="type" label="问题类型" width="150"></el-table-column>
    <el-table-column prop="number" label="工单号" width="120"></el-table-column>
    <el-table-column prop="title" label="问题标题" min-width="300"></el-table-column>
    <el-table-column prop="business" label="绑定业务" min-width="300"></el-table-column>
    <el-table-column prop="status" label="处理状态" width="100">
      <template slot-scope="scope">
        <el-tag>{{ scope.row.status }}</el-tag>
      </template>
    </el-table-column>
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
  data() {
    return {
      tableData: [
        {
          type: "",
          number: "",
          title: "",
          business: "",
          status: "",
          follow: "",
          time: "",
          from: ""
        }
      ],
      loading: true
    };
  },
  created() {
    this.$api.getOrder().then(data => {
      this.tableData = data.data.data.list;
    });
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>