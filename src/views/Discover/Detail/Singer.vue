<template>
  <div class="singerContainer">
    <!-- 标签导航 -->
    <div class="chooseItem">
      <div class="chooseType">语种:</div>
      <second-nav
        :secondNavData="languageSort"
        @clickSecondBarItem="languageClick"
      />
    </div>
    <div class="chooseItem">
      <div class="chooseType">歌手:</div>
      <second-nav
        :secondNavData="singerSort"
        @clickSecondBarItem="singerClick"
      />
    </div>
    <!-- 列表容器 -->
    <div class="listCardContainer">
      <list-card class="listCard" :listCardData="singerListData" />
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";

import SecondNav from "@/components/SecondNav.vue";
import ListCard from "@/components/ListCard.vue";
export default {
  components: { SecondNav, ListCard },
  data() {
    return {
      ctx: {},
      // 次级导航栏语言分类
      languageSort: [
        { area: -1, name: "全部" },
        { area: 7, name: "华语" },
        { area: 96, name: "欧美" },
        { area: 8, name: "日本" },
        { area: 16, name: "韩国" },
        { area: 0, name: "其它" },
      ],

      // 歌手分类
      singerSort: [
        { type: -1, name: "全部" },
        { type: 1, name: "男歌手" },
        { type: 2, name: "女歌手" },
        { type: 3, name: "乐队" },
      ],

      // 列表展示歌手数据
      singerListData: [],

      area: -1, // 地区
      type: -1, // 歌手类型
      // initial: -1,
      currentPage: 1,
      isMore: false, // 是否还有更多数据
    };
  },
  methods: {
    // 请求歌手数据信息
    async getSingerList() {
      let result = await this.ctx.$request("/artist/list", {
        type: this.type,
        area: this.area,
        // initial: this.initial,
        offset: (this.currentPage - 1) * 30,
      });
      this.singerListData.push(...result.data.artists);
      this.isMore = result.data.more;
    },

    // 修改语言数据方法传递给子组件
    languageClick(index) {
      this.area = this.languageSort[index].area;
      // 先清空list 再请求数据
      this.singerListData = [];
      this.currentPage = 1;
      this.getSingerList();
    },

    // 修改歌手数据方法
    singerClick(index) {
      this.type = this.singerSort[index].type;
      // 先清空list 再请求数据
      this.singerListData = [];
      this.currentPage = 1;
      this.getSingerList();
    },
  },
  mounted() {
    const ctx = getCurrentInstance().appContext.config.globalProperties; // 调用全局方法
    this.ctx = ctx;
    this.getSingerList();
  },
};
</script>

<style>
.singerContainer {
  margin: -5px 0;
  padding: 15px;
}
.chooseType {
  font-size: 14px;
  margin: 4px -2px;
  padding: 6px 10px;
  cursor: default;
}
.chooseItem {
  display: flex;
}
</style>