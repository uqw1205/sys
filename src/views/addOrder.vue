<template>
  <el-form label-width="80px" :model="formData">
    <el-form-item label="问题类型">
      <el-select v-model="formData.type" placeholder="请选择问题类型">
        <el-option label="域名问题" value="domain"></el-option>
        <el-option label="网站问题" value="website"></el-option>
        <el-option label="备案问题" value="record"></el-option>
        <el-option label="优化问题" value="optimization"></el-option>
        <el-option label="其他问题" value="other"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="绑定业务">
      <el-input v-model="formData.business"></el-input>
      <p>如果业务下有未处理完成的工单将不能提交, 先确定完成或原工单下继续反馈</p>
    </el-form-item>
    <el-form-item label="工单标题">
      <el-input v-model="formData.title"></el-input>
      <p>例如：网站无法访问/打开异常/访问慢</p>
    </el-form-item>
    <el-form-item label="问题描述" prop="desc">
      <el-input type="textarea" v-model="formData.desc"></el-input>
      <p>请输入具体问题,可以直接截图粘贴(Ctrl+v)</p>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">提交工单</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        type: "",
        business: "",
        title: "",
        desc: ""
      },
      status: ""
    };
  },
  methods: {
    onSubmit() {
      this.$api.addOrder(this.formData).then(data => {
        // console.log(data);
        if ((data.data.status = "success")) {
          this.status = data.data.msg;
          this.open();
        }
      });
    },
    reset() {
      this.formData = {
        type: "",
        business: "",
        title: "",
        desc: ""
      };
    },
    open() {
      this.$alert("添加成功", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
          this.formData = {
            type: "",
            business: "",
            title: "",
            desc: ""
          };
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-form-item p {
  font-size: 13px;
  color: #999;
}
</style>>
