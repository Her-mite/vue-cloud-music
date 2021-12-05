<template>
  <el-header>
    <header-bar />
  </el-header>
  <el-container> 
      <music-sider></music-sider>
  </el-container>
</template>
<script>
// import HeaderBar from '../../components/HeaderBar.vue'
import HeaderBar from "@/components/HeaderBar.vue";
import MusicSider from '@/views/MusicHome/MusicSider.vue'

export default {
  components: {
    HeaderBar,MusicSider
  },
};
</script>