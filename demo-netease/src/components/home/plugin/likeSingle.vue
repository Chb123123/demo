<template>
<div @click="MusicId">
  <router-link class="SingleContainsr" to="">
    <div v-if="showIcon"><div class="ranking" v-if="list1">{{ list1 }}</div></div>
    <div class="ranking" v-else style="font-size: 20px; color: #79C3C6"><van-icon name="music-o" /></div>
    <div class="musicTitle">
      <!-- 歌词名称 -->
      <div class="Songletitle">{{ musictitle }}
        <span>{{ musicWhether }}</span>
      </div>
      <!-- 歌词作者 -->
      <div class="autohrMusic">{{ musicAuthor }}<span style="margin-left: 5px;" v-if="introduce"> - &nbsp;{{ introduce }}</span></div>
    </div>
    <router-link class="musicplay" to=""><van-icon name="play-circle-o" /></router-link>
    <router-link class="musicMore" to=""><van-icon name="weapp-nav" /></router-link>
  </router-link>
</div>
</template>

<script>
export default {
  props: {
    // 歌曲排行
    list1: {},
    // 歌曲名称
    musictitle: {},
    // 歌曲作者
    musicAuthor: {},
    // 歌曲2号歌手
    musicAuthor2: {},
    // 歌曲介绍
    introduce: {},
    // 获取全部歌曲的图片
    firshImg: {},
    // 获取歌曲 Id
    Muiscid: {},
    // 获取歌曲的MP3地址
    musicMP3URL: {}
  },
  name: 'userLikeMusic',
  data () {
    return {
      // 是否有音源
      musicWhether: '',
      // 点击显示播放按钮
      showIcon: true,
      // 是否出现播放按钮
      flag: false
    }
  },
  methods: {
    MusicId (index) {
      // console.log(index)
      this.$emit('MusicId', this.Muiscid)
      this.flag = true
      // 判断MP3地址是否存在
      // this.showIcon = false
      // setTimeout(() => {
      //   // console.log(this.musicMP3URL === '')
      //   if (this.musicMP3URL === '') {
      //     this.musicWhether = '暂无音源'
      //   } else {
      //     this.musicWhether = ''
      //   }
      // }, 2000)
    }
  },
  watch: {
    musicMP3URL () {
      this.showIcon = true
      if (this.flag) {
        this.flag = false
        if (this.musicMP3URL === '') {
          this.musicWhether = '暂无音源'
        } else {
          this.musicWhether = ''
        }
        this.showIcon = false
        // console.log('11')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .SingleContainsr{
    height: 40px;
    display: flex;
    margin: 0 0 10px;
    // background-color: red;
    padding: 0 10px;
    .ranking{
      height: 40px;
      width: 20px;
      line-height: 40px;
      text-align: center;
      margin-right: 10px;
      font-size: 12px;
      // background-color: aqua;
      color: #888;
    }
    .musicTitle{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // background-color: purple;
      // border: 1px solid red;
      overflow: hidden;
      .Songletitle{
        font-size: 14px;
        color: #333;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        span{
          color: #777;
          margin-left: 5px;
        }
      }
      .autohrMusic{
        font-size: 12px;
        color: #888;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .musicplay{
      width: 30px;
      height: 40px;
      line-height: 40px;
      color: #888;
      text-align: center;
      font-size: 18px;
    }
    .musicMore{
      width: 30px;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      color: #888;
      text-align: center;
      // background-color: blue;
      margin-right: 10px;
    }
  }
</style>
