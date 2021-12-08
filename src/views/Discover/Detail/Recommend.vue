<template>
  <!-- 个性推荐页面 -->
  <div class="recommandContainer">
    <div class="recommand">
      <div class="carousel">
        <el-carousel :interval="4000" type="card"  height="180px">
            <!-- 此处有bug，element-plus的initalIndex需要将el-carousel.js的225行注释调，否则不默认显示第一张图 -->
          <el-carousel-item v-for="(item, index) in bannerData" :key="index">
            <img :src="item.imageUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  data() {
    return {
      bannerData: [], // 轮播图地址
    };
  },
  methods: {
    async getBannerData() {
      // 调用全局方法
      const ctx = getCurrentInstance().appContext.config.globalProperties;
      let result = await ctx.$request("/banner");
      this.bannerData = result.data.banners;
    },
  },
  created() {
    this.getBannerData();
  },
};
</script>

<style>
.recommendContainer {
  display: flex;
  justify-content: center;
}

.recommend {
  max-width: 1000px;
}
.carousel {
  width: 100%;
}

.el-carousel {
  margin: auto;
  width: 800px;
}

.el-carousel__item {
  border-radius: 10px;
}

.el-carousel__item img {
  height: 100%;
}
</style>