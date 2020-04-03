<template>
  <div id="wrapper">
    <sys-header />
    <sys-lside />

    <div class="app-container">
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sysHeader from "./components/sysHeader";
import sysLside from "./components/sysLside";

export default {
  components: {
    sysHeader,
    sysLside
  }
};
</script>

<style>
@import url("./assets/css/reset.css");
.right-content {
  padding: 40px;
  margin-left: 200px;
  overflow: hidden;
  height: calc(100vh - 140px);
}
</style>