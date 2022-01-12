<template>
  <div class="bottomControl">
    <audio
      :src="musicUrl"
      :autoplay="false"
      @play="changeState(true)"
      @pause="changeState(false)"
      @ended="changeMusic('next')"
      @timeupdate="timeupdate"
    />
    <!-- 左侧歌曲信息 -->
    <div class="musicInfo">
      <!-- 缩略图 -->
      <div class="avatar">
        <img
          v-if="musicDetail.al"
          :src="musicDetail.al.picUrl"
          alt="avatar"
          :draggable="false"
        />
        <img
          src="@/assets/img/imgLoading.png"
          alt="avatar"
          v-else
          :draggable="false"
        />
      </div>
      <!-- 歌曲信息 -->
      <div class="musicData">
        <div class="musicName" v-if="musicDetail && musicDetail.name">
          {{ musicDetail.name }}
        </div>
        <div
          class="singer"
          v-if="musicDetail && musicDetail.name"
          @click="goToSingerDetail"
        >
          {{ musicDetail.ar[0].name }}
        </div>
      </div>
      <!-- 下载 -->
      <div class="downloadContainer" v-if="musicDetail.name">
        <i class="iconfont icon-download" @click="downloadCurrentMusic"></i>
      </div>
    </div>
    <!-- 歌曲进度条控制区 -->
    <div class="musicControl">
      <div class="buttons">
        <!-- 随机/循环播放 -->
        <span @click="playType = playType == 'order' ? 'random' : 'order'">
          <i class="iconfont icon-xunhuan" v-if="playType == 'order'"></i>
          <i class="iconfont icon-suiji1" v-else></i>
        </span>
        <span @click="musicList.length != 0 ? changeMusic('pre') : ''"
          ><i class="iconfont icon-shangyishou"></i
        ></span>
        <span @click="musicList.length != 0 ? changePlayState() : ''">
          <i
            class="iconfont icon-icon_play"
            v-if="!this.$store.state.isPlay"
          ></i>
          <i class="iconfont icon-zantingtingzhi" v-else></i>
        </span>
        <span @click="musicList.length != 0 ? changeMusic('next') : ''"
          ><i class="iconfont icon-xiayishou"></i
        ></span>
        <span
          ><i
            class="iconfont icon-xihuan"
            :class="isUserLikeCurrentMusic ? 'like' : ''"
            @click="musicList.length != 0 ? likeIt() : ''"
          ></i
        ></span>
      </div>

      <!-- 进度条组件 -->
      <div class="progressBar">
        <!-- 当前播放时间 -->
        <span class="currentTime">{{ currentTime / handleMusicTime }}</span>
        <!-- 进度条 -->
        <el-slider
          class="progressSlider"
          v-model="timeProgress"
          :show-tooltip="false"
          @change="changeProgress"
          :disabled="musicList.length == 0"
        ></el-slider>
        <span class="totalTime">3:30</span>
        <!-- <span class="totalTime">{{ duration }}</span> -->
      </div>
    </div>

    <div class="musicOther">
      <div class="volumeControl">
        <i class="iconfont icon-yinliang" @click="changeMutedState"></i>
        <el-slider
          class="volumeSlider"
          v-model="volume"
          @input="changeVolume"
          :show-tooltip="false"
        ></el-slider>
      </div>
      <div class="playList" @click="openDrawer">
        <i class="iconfont icon-bofangliebiao"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
// import {ElMessage} from 'element-plus';
import "./BottomControl.css";
export default {
  data() {
    return {
      ctx: {},
      musicType: "", // 下载歌曲类型
      musicUrl: "", // 播放资源的url
      // musicUrl:
      //   "http://m701.music.126.net/20211218233230/20fe1fbcb6dec5930382de1e785dd5c2/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/12030038811/2e44/23ac/d540/68aa901f0fc68b505ff05238224eed8f.mp3",
      musicList: [], // 歌单信息数组
      musicDetail: {}, // 歌曲具体信息
    };
  },
  methods: {
    // 修改播放状态
    changeState(isPlay) {
      this.$store.commit("changePlayState", isPlay);
    },

    // 获取音乐资源URL
    async getMusicDetail(musicId) {
      let result = await this.ctx.$request("/song/url", { id: musicId });
      this.musicUrl = result.data.data[0].url;
      this.musicType = result.data.data[0].type.toLowerCase();
    },

    // 下载歌曲到本地
    downloadCurrentMusic() {
      // 匹配资源的域名
      console.log(this.musicUrl);
      let url = this.musicUrl.match(/http.*?\.net/);
      console.log("url", url);
      // 匹配域名名称，并匹配对应的代理
      let serve = url[0].match(/http:\/(\S*).music/)[1];
      console.log("server:", serve);
      if (
        serve != "/m7" &&
        serve != "/m701" &&
        serve != "/m8" &&
        serve != "/m801"
      ) {
        // 没有对应的代理
        this.$message.error("匹配不到对应的代理,下载失败!");
        return;
      }
      // 截取后面的参数
      let params = this.musicUrl.slice(url[0].length);

      let downloadMusicInfo = {
        url: serve + params,
        name:
          this.musicDetail.name +
          " - " +
          this.musicDetail.ar[0].name +
          "." +
          this.musicType,
      };
      // TODO 下载音乐
      this.$store.commit("updateDownloadMusicInfo", downloadMusicInfo);
    },
  },
  mounted() {
    const ctx = getCurrentInstance().appContext.config.globalProperties;
    this.ctx = ctx;
  },
  watch: {
    // 发现musicId变化时，切换歌曲
    "$store.state.musicId"(musicId) {
      this.getMusicDetail(musicId); // 获取新歌的URL
      this.musicList = this.$store.state.musicList; // 更新歌单数组
      this.musicList.filter((item) => {
        // 更新歌曲详情
        if (item.id == musicId) {
          this.musicDetail = item;
          return;
        }
      });
      console.log("itme!", this.musicDetail);

      // 先暂停当前播放的音乐
      // this.pauseMusic();
      // this.musicList = this.$store.state.musicList;
      // this.getMusicDetailFromMusicList();
      // this.getMusicDetail(musicId);
      // durationNum = returnSecond(this.duration);
      // // 判断用户是否喜欢当前音乐
      // this.getIsUserLikeCurrentMusic();
      // // console.log(this.$refs.audioPlayer);
    },
  },
};
</script>

<style scoped>
</style>