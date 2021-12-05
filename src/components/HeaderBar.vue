<template>
  <div class="headerBar">
      <div class="left">
        <img src="@/assets/img/logo.png" alt="music_logo" />
      </div>

    <div class="center">
      <div class="buttons">
        <i
          class="iconfont icon-arrow-left-bold back"
          @click="$router.go(-1)"
        ></i>
        <i
          class="iconfont icon-arrow-right-bold forward"
          @click="$router.go(1)"
        ></i>
      </div>
    </div>
    <div class="right">
      <div class="user">
        <div class="avatar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style scoped>
.headerBar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 30000;
}

.left {
  width: 210px;
  margin: 0 50px 0 10px;
}

.left img {
  width: 100%;
}

</style>