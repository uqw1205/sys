<template>
  <div class="lsidemenu">
    <ul>
      <router-link :to="{ name: 'orderList' }" tag="li">工单列表</router-link>
      <router-link :to="{ name: 'addOrder' }" tag="li">新增工单</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.lsidemenu {
  width: 200px;
  float: left;
  background: #eee;
  height: calc(100vh - 60px);
  li {
    text-align: center;
    line-height: 52px;

    cursor: pointer;
    &.active {
      background: #fff;
    }
  }
}
</style>
