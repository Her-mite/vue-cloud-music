<template>
  <div>
    <nav-bar @clickBarItem="clickBarItem" :navBarItem="navBarData"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      navBarData: [
        { name: "个性推荐", path: "/discover/recommend" },
        // { name: "歌单", path: "/discover/musiclist" },
        { name: "排行榜", path: "/discover/ranklist" },
        { name: "歌手", path: "/discover/singer" },
      ],
    };
  },
  methods: {
    // 接收navbar传来的点击事件
    clickBarItem(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
</style>