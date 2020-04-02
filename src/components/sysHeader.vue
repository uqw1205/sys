<template>
  <div class="header">
    <div class="sys-name">优盟工单管理系统</div>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        无锡用户<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
            <router-link :to="{name: 'changePwd'}" tag="div">更改密码</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.header {
  height: 60px;
  background: #09c;
  line-height: 60px;
  .sys-name {
    background: #134d77;
    float: left;
    text-align: center;
    color: #fff;
    width: 200px;
    font-size: 18px;
  }
  .el-dropdown {
    float: right;
    text-align: center;
    font-size: 15px;
    width: 112px;
    color: #fff;
  }
  .el-dropdown-link{
      display: block;
      cursor: pointer;
  }
}
</style>
