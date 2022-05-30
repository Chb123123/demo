<template>
  <div class="playMusicContainer">
    <div class="musicPlayStyle">
      <audio :src="musicURL" loop="loop" contrals="contrals" :autoplay="autoPlayMusic" ref="audioAbout"></audio>
      <div class="musicbackbg" ref="musicbackground"><img :src="firstMusicBack" alt=""></div>
      <div class="musicTitle">{{ firstMusicTitle }} <span>- {{firstMusicAuthor}}</span></div>
      <div class="playBtn" @click="playMusic">
        <span v-if="autoPlayMusic"><van-icon name="pause-circle-o" /></span>
        <span v-else><van-icon name="play-circle-o" /></span>
      </div>
      <div class="moreBtn"><van-icon name="apps-o" /></div>
    </div>
  </div>
</template>

<script>
import { getMusicDetails } from '@/api/getMusicDetails.js'
export default {
  name: 'playMusic',
  props: {
    // 歌曲的URL地址
    musicURL: {},
    // 点击歌曲获取歌曲id
    getMusicid: {},
    // 获取第一首歌曲的图片
    firstMusicBack: {},
    firstMusicTitle: {},
    firstMusicAuthor: {}
  },
  data () {
    return {
      autoPlayMusic: false,
      // 获取请求回来的数据对象图片
      musicDetailsImg: {},
      // 获取歌曲名称
      musicName: {},
      // 歌曲作者
      musicAuthor: {
        type: String
      }
    }
  },
  methods: {
    playMusic () {
      if (this.autoPlayMusic) {
        this.autoPlayMusic = false
        this.$refs.audioAbout.pause()
      } else {
        this.autoPlayMusic = true
        this.$refs.audioAbout.play()
      }
    }
  },
  watch: {
    async getMusicid (newval) {
      // console.log(newval)
      const res = await getMusicDetails(newval)
      this.musicName = res.data.songs[0].al.name
      this.musicDetailsImg = res.data.songs[0].al.picUrl
      this.autoPlayMusic = true
      this.musicAuthor = res.data.songs[0].ar[0].name
      // const rotatebg = setInterval(() => {
      //   this.$refs.musicbackground.style.transform = 'rotateZ( 1 +'1'+ deg)'
      // }, 10)
    }
  }
  // async created () {
  //   const res = await getMusicDetails(1877996649)
  //   console.log(res)
  //   this.musicName = res.data.songs[0].al.name
  //   this.musicDetailsImg = res.data.songs[0].al.picUrl
  //   this.musicAuthor = res.data.songs[0].ar[0].name
  // }
}
</script>

<style lang="less" scoped>
  .playMusicContainer{
    position: fixed;
    bottom: 0;
    // display: flex;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 50px;
    z-index: 1000;
    background-color: white;
    border-top: 1px solid #ccc;
    .musicPlayStyle{
      position: relative;
      padding: 0 10px;
      display: flex;
      .musicbackbg{
      width: 50px;
      height: 50px;
      // background-color: aqua;
      border-radius: 50%;
      overflow: hidden;
      // margin-left: 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .musicTitle{
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 10px;
        color: #444;
        font-size: 14px;
        > span {
          margin-left: 5px;
          color: #999;
          font-size: 12px;
        }
        // background-color: red;
      }
      .playBtn{
        height: 50px;
        width: 30px;
        // background-color: aqua;
        line-height: 50px;
        text-align: center;
        font-size: 24px;
        margin-right: 10px;
        color: #555;
      }
      .moreBtn{
        height: 50px;
        width: 30px;
        // background-color: aqua;
        line-height: 50px;
        text-align: center;
        font-size: 24px;
        color: #555;
        // transform: rotateZ();
      }
    }
  }
</style>
