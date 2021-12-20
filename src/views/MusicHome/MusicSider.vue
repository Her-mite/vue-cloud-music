<template>
  <!-- 侧边栏 -->
  <el-aside width="160px">
    <el-menu default-active='/discover'>
      <el-menu-item index="/discover">
        <i class="iconfont icon-yinle"></i>
        <span>发现音乐</span>
      </el-menu-item>
      <el-menu-item index="/video">
        <i class="iconfont icon-shipin"></i>
        <span>视频</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
};
</script>
<style scoped>
.el-menu{
  border-right: none;
}
.el-aside {
  border-right: 1px solid #ccc;
}
.is-active {
  color: #D54F4A;
  background-color: #ECF5FF;
}
</style>