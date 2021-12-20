<template>
  <div>
    <div class="listTableContainer">
      <div class="listImage">
        <img :src="listDetailItem.coverImgUrl" alt="" />
      </div>
      <div class="listTable">
        <table>
          <tr
            class="listRows"
            v-for="(item, index) in listDetailItem.tracks.slice(0, 5)"
            :key="index"
            @click="handleRowClick"
            @dblclick="handleRowDbClick(listDetailItem.id, index)"
          >
            <td class="songIndex">{{ index + 1 }}</td>
            <td class="musicName">{{ item.name }}</td>
            <td class="singer">{{ item.ar[0].name }}</td>
          </tr>
        </table>
        <div
          class="checkAll"
          @click="clickCheckAll(listDetailItem.id)"
          v-show="true"
        >
          查看全部 <i class="iconfont icon-arrow-right-bold"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    listDetailItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 点击行的回调 （选中）
    // handleRowClick(event) {
    //   console.log("event", event);
    //   // 点击时，事件对象可能是td或tr，这里做下判断
    //   //   let path;
    //   //   if (event.path[0].localName == "tr") {
    //   //     path = event.path[0];
    //   //   } else {
    //   //     path = event.path[1];
    //   //   }
    //   //   this.$emit("handleRowClick", path);
    // },
    // id 为当前歌单的id index为双击歌曲在歌单的索引
    handleRowDbClick(id, index) {
      this.$emit("handleRowDbClick", { id, index });
    },
  },
};
</script>

<style>
.listTableContainer {
  display: flex;
  margin: 20px 0 50px 0;
}
.listImage {
  width: 150px;
  height: 150px;
  margin-right: 20px;
  cursor: pointer;
}
.listImage img {
  width: 100%;
  border-radius: 10px;
}
.listTable {
  width: calc(100% - 200px);
}
table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
}

.listRows {
  height: 30px;
  font-size: 12px;
  color: rgb(153, 153, 153);
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
/* 奇数使用不同的背景色 */
.listRows:nth-child(odd) {
  background-color: #f9f9f9;
}
.listRows:hover {
  background-color: #f4f4f4;
}
tr {
  cursor: pointer;
}
/* 不同列样式不同 */
.songIndex {
  text-align: center;
  line-height: 28px;
  width: 30px;
}
.musicName {
  color: rgb(31, 31, 31);
  /* transform: translate(-5%, -5%) scale(0.9); */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 80%;
}

.checkAll {
  color: rgb(134, 134, 134);
  font-size: 12px;
  transform: scale(0.9);
  width: 100px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  position: absolute;
  right: 50px;
}


</style>