<template>
  <!-- 侧边栏 -->
  <el-aside width="160px">
    <el-menu active-text-color="black">
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
  components: {},
  data() {
    return {
      
    };
  },
};
</script>