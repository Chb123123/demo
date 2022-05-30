<template>
  <div class="song" @click="getSongID">
          <div class="songCover">
            <img :src="overURL" alt="">
          </div>
          <span class="songTitle">{{ songTitle }}</span>
          <div class="play">
            <van-icon name="play-circle-o" />
            {{ playNumber | formatPlayCount }}
          </div>
        <!-- <div class="songLogo"><van-icon name="music-o" /></div> -->
      </div>
</template>

<script>
import EventBus from '@/EventBus/EventBus.js'
export default {
  name: 'songMonomer',
  props: {
    overURL: {},
    songTitle: {},
    playNumber: {},
    songID: {}
  },
  methods: {
    getSongID () {
      // console.log(this.songID)
      // 点击歌单跳转到相应的歌单页面
      this.$router.push('/songlistmusic?songListId=' + this.songID)
      EventBus.$emit('GetsongID', this.songID)
    }
  }
}
</script>

<style lang="less" scoped>
  .song{
        // flex: 30%;
        width: 30%;
        position: relative;
        display: flex;
        flex-direction: column;
        height: 150px;
        margin: 0 5px;
        // background-color: red;
        // border: 1px solid red;
        margin-bottom: 10px;
        // border-radius: 10px;
        .songCover{
          flex: 0.75;
          // width: 100%;
          // height: 100px;
          border-radius: 20px;
          overflow: hidden;
          > img{
            width: 100%;
            height: 100%;
            // border-radius: 20px;
          }
        }
        .songTitle{
          flex: 0.25;
          // height: 60px;
          font-size: 14px;
          display:-webkit-box;
          // background-color: red;
          // border: 1px solid red;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.3;
          color: #666;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .play{
          position: absolute;
          top: 5px;
          right: 5px;
          // height: 20px;
          // width: 40px;
          padding: 0 5px;
          background-color: rgba(0,0,0,0.6);
          border-radius: 15px;
          color: white;
          font-size: 12px;
          // text-align: center;
          line-height: 20px;
        }
        .songLogo{
          position: absolute;
          top: 5px;
          left: 5px;
          color: white;
          font-size: 20px;
          // background-color: rgba(0,0,0,0.6);
          border-radius: 50%;
          padding: 2px;
        }
      }
</style>
