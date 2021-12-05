<template>
  <el-container>
    <el-header class="el-header">
      <header-bar />
    </el-header>
  <el-container>
    <music-sider></music-sider>
  </el-container>
    </el-container>

</template>
<script>
import HeaderBar from "@/components/HeaderBar.vue";
import MusicSider from "@/views/MusicHome/MusicSider.vue";

export default {
  components: {
    HeaderBar,
    MusicSider,
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