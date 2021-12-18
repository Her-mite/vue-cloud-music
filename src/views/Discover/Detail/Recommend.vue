<template>
  <!-- 个性推荐页面 -->
  <div class="recommendContainer">
    <div class="recommend">
      <!-- 轮播图 -->
      <div class="carousel">
        <el-carousel :interval="4000" type="card" height="160px">
          <!-- 此处有bug，element-plus的initalIndex需要将el-carousel.js的225行注释调，否则不默认显示第一张图 -->
          <el-carousel-item v-for="(item, index) in bannerData" :key="index">
            <img :src="item.imageUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 推荐歌单列表 -->
      <div class="recommendMusicList">
        <h3 style="marginleft: 10px">
          推荐歌单<i class="iconfont icon-arrow-right-bold"></i>
        </h3>
        <list-card :listCardData="musicList" />
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";

import ListCard from "@/components/ListCard.vue";
export default {
  components: {
    ListCard,
  },
  data() {
    return {
      bannerData: [], // 轮播图地址
      musicList: [], // 推荐歌单图片及歌曲数据信息
    };
  },
  methods: {
    //  获取轮播图数据源
    async getBannerData() {
      const ctx = getCurrentInstance().appContext.config.globalProperties; // 调用全局方法

      let result = await ctx.$request("/banner");
      this.bannerData = result.data.banners;
    },

    // 请求推荐歌单数据的前十个
    async getMusicList() {
      const ctx = getCurrentInstance().appContext.config.globalProperties; // 调用全局方法

      let result = await ctx.$request("/personalized", { limit: 10 });
      this.musicList = result.data.result;
    },
    // TODO 数据的懒加载， 点击封面的回调执行
    // // 点击歌单封面的回调
    // clickListCardItem(id) {
    //   // console.log(id);
    //   this.$router.push({ name: "musicListDetail", params: { id } });
    // },
  },
  created() {
    this.getBannerData();
    this.getMusicList();
  },
};
</script>

<style>
.recommendContainer {
  display: flex;
  justify-content: center;
}

.recommend {
  width: 100%;
}
.carousel {
  /* display: flex; */
  width: 100%;
}

.el-carousel {
  margin: auto;
  width: 100%;

  /* width: 960px; */
}

.el-carousel__item {
  display: flex;
  justify-content: center;
}

.el-carousel__item img {
  border-radius: 10px;
  height: 100%;
}

.recommendMusicList {
  margin: 20px 40px;
}

.recommendMusicList h3 {
  color: #373737;
}
</style>