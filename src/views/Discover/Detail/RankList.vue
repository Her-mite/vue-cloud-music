<template>
  <div class="ranklistContainer">
    <div class="ranklist">
      <div class="cardTitle">官方榜</div>
      <list-table
        v-for="(item, index) in officialListDetail"
        :key="index"
        :listDetailItem="item"
      />
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import { handleMusicTime } from "@/plugins/utils";
import ListTable from "@/components/ListTable";

export default {
  components: {
    ListTable,
  },
  data() {
    return {
      officialList: [], // 官方榜
      officialListDetail: [], // 具体数据信息
      globalList: [], // 全球榜
    };
  },
  async mounted() {
    let ctx = getCurrentInstance().appContext.config.globalProperties;
    // 获取榜单信息
    await this.getAllRankings(ctx);
    // 根据id查询歌单具体信息
    this.officialList.forEach((item) => {
      this.getMusicListDetail(ctx, item.id);
    });
  },
  methods: {
    // 请求所有榜单
    async getAllRankings(ctx) {
      let toplist = await ctx.$request("toplist");
      this.officialList = toplist.data.list.slice(0, 4);
      this.globalList = toplist.data.list.slice(4);
    },

    // 查询具体歌单
    async getMusicListDetail(ctx, id) {
      let musicList = await ctx.$request("/playlist/detail", { id });
      musicList = musicList.data.playlist;
      // 对时间进行处理
      musicList.tracks.forEach((item, index) => {
        musicList.tracks[index].dt = handleMusicTime(item.dt);
      });
      this.officialListDetail.push(musicList);
    },
  },
};
</script>

<style>
.ranklist {
  padding: 0 10px;
}
.cardTitle {
  font-size: 20px;
}
</style>