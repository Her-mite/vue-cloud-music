<template>
  <el-container>
    <!-- header标题栏 -->
    <el-header class="el-header">
      <header-bar />
    </el-header>

    <el-container>
      <!-- 侧边导航栏 -->
      <music-sider />

      <!-- 主题内容 -->
      <el-main>
        <router-view class="routerView" :key="$route.fullPath"></router-view>
      </el-main>
    </el-container>
    <bottom-control></bottom-control>
  </el-container>
</template>
<script>
import HeaderBar from "@/components/HeaderBar.vue";
import MusicSider from "@/views/MusicHome/MusicSider.vue";
import BottomControl from '@/components/BottomControl/BottomControl.vue';

export default {
  components: {
    HeaderBar,
    MusicSider,
    BottomControl,
  },
};
</script>
<style scoped>
.el-header {
  padding: 0;
  background-color: #ec4141;
  height: 50px !important;
  margin: 0;
  z-index: 100;
}
</style>