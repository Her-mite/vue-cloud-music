<template>
  <div class="navBar">
    <div
      class="barItem"
      :class="index == activeNum ? 'active' : ''"
      v-for="(item, index) in secondNavData"
      :key="index"
      @click="clickSecondBarItem(index)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 导航栏数据
    secondNavData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeNum: "",
    };
  },

  methods: {
    // 标签点击回调函数
    clickSecondBarItem(index) {
      if (this.activeNum == index) {
        return;
      }
      this.activeNum = index;
      // 调用父组件方法修改数据
      this.$emit("clickSecondBarItem", index);
    },
  },
};
</script>

<style scoped>
.navBar {
  display: flex;
  flex-wrap: wrap;
}
/* 次级导航栏标签选择按钮 */
.barItem {
  margin: 4px 5px;
  padding: 6px 10px;
  font-size: 14px;
  color: #666;
  text-align: center;
  box-sizing: content-box;
  /* transform: scale(0.9, 0.9); */
  cursor: pointer;
}
/* 被选中的展示样式 */
.active {
  background-color: #fdf5f5;
  color: #ec4747;
  border-radius: 10px;
  /* width: 40px; */
}
</style>