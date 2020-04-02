<template>
<el-form label-width="80px" :model="formLabelAlign">
  <el-form-item label="问题类型">
    <el-select v-model="formLabelAlign.type" placeholder="请选择问题类型">
      <el-option label="域名问题" value="domain"></el-option>
      <el-option label="网站问题" value="website"></el-option>
      <el-option label="备案问题" value="record"></el-option>
      <el-option label="优化问题" value="optimization"></el-option>
      <el-option label="其他问题" value="other"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="绑定业务">
    <el-input v-model="formLabelAlign.business"></el-input>
    <p>如果业务下有未处理完成的工单将不能提交, 先确定完成或原工单下继续反馈</p>
  </el-form-item>
  <el-form-item label="工单标题">
    <el-input v-model="formLabelAlign.title"></el-input>
    <p>例如：网站无法访问/打开异常/访问慢</p>
  </el-form-item>
  <el-form-item label="问题描述" prop="desc">
    <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
    <p>请输入具体问题,可以直接截图粘贴(Ctrl+v)</p>
  </el-form-item>
  <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">提交工单</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    },
    methods: {
        onSubmit() {
            console.log(this);
        }
    }
  }
</script>

<style lang="scss" scoped>
    .el-form-item p{
        font-size:13px;
        color: #999;
    }
</style>>
