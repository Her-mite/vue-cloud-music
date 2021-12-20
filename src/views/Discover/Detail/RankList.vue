<template>
  <div class="ranklistContainer">
    <div class="ranklist">
      <div class="cardTitle">官方榜</div>
      <list-table
        v-for="(item, index) in officialListDetail"
        :key="index"
        :listDetailItem="item"
        @handleRowDbClick="handleRowDbClick"
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

    /**
     * @description 双击点击事件，切换歌曲
     * @param {id} 歌单编号
     * @param {index} 歌曲编号
     */
    handleRowDbClick({ id, index }) {
      console.log(id, index);
      let musicListIndex = this.officialListDetail.findIndex(
        (item) => item.id == id
      );
      // 更换歌曲
      this.$store.commit(
        "updateMusicId",
        this.officialListDetail[musicListIndex].tracks[index].id
      );
      // 检测到歌单编号与当前歌单不一致，提交新歌单到vuex
      if (id != this.$store.state.musicListId) {
        // 将歌单传到vuex
        this.$store.commit("updateMusicList", {
          musicList: this.officialListDetail[musicListIndex].tracks,
          musicListId: id,
        });
      }
    },
  },
};
</script>

<style>
.ranklist {
  padding: -10px 10px;
}
.cardTitle {
  font-size: 20px;
}
</style>