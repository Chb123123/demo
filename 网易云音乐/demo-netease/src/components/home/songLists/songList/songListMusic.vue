<template>
  <div class="songlistMusicsContainsr">
    <van-nav-bar
  title="歌单"
  left-arrow
  fixed
  :border="false"
  @click-left="onClickLeft"
/>
    <div class="songListdetails">
      <div class="songListIntroduce">
        <div class="songListImg"  v-if="songListAboutImg">
          <img :src="songListAboutImg" alt="">
        </div>
        <div class="songListTitle">
          <div class="songListTitleAbout">{{ songListabout }}</div>
          <div class="about">简介：{{ songListIntroduction }}</div>
        </div>
      </div>
      <div class="move">
        <span style="text-align: left;"><van-icon name="like-o" /></span>
        <span style="margin: 50px;"><van-icon name="comment-o" /></span>
        <span style="text-align: right;"><van-icon name="share-o" /></span>
      </div>
    </div>
    <div class="playAll">
      <div class="playbtn"><van-icon name="play-circle" />
      </div>
      <div class="playtitle">播放全部<span>({{ songLists.length }})</span></div>
    </div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <Single v-for="(item, index) in songLists" :key="index" :firshImg="item.al.picUrl" :musictitle="item.name" :list1="index+1" :musicAuthor="item.ar[0].name" :introduce="item.al.name" :Muiscid="item.al.id" @MusicId="AcceptMusicId"></Single>
    </van-list>
  </van-pull-refresh>
    <PlayMusic :getMusicid="songLists" :firstMusicBack="firstMusicImg" :firstMusicTitle="firstTitle" :firstMusicAuthor="firstAuthor"></PlayMusic>
  </div>
</template>

<script>
// 获取音乐的URL地址
// import { GetMusicULR } from '@/api/getMusicUrlAPI.js'
import { getMusicDetails } from '@/api/getMusicDetails.js'
import Single from '@/components/home/plugin/likeSingle.vue'
import { GetPlayListDetails } from '@/api/getPlayListDetailsAPI.js'
import PlayMusic from '@/components/home/plugin/playMusic.vue'
import { getSongList } from '@/api/getSongListAboutAPI.js'
export default {
  components: {
    Single,
    PlayMusic
  },
  props: {
    songListAboutId: {}
  },
  data () {
    return {
      // 获取hash地址传递过来的songListId
      songListID: {
        type: Number
      },
      songLists: {},
      // 点击歌曲获取子组件传递过来的歌曲 id
      MusicId: {},
      // 获取音乐的URL地址 导入到播放组件
      MusicPlsyUrl: {},
      // 更新的数量
      replaceCount: 0,
      // 是否在加载
      loading: true,
      // 数据是否加载完成
      finished: false,
      // 是否下拉刷新
      refreshing: false,
      // 第一张歌曲的图片
      firstMusicImg: '',
      // 第一首歌的名称
      firstTitle: '',
      // 作者的名称
      firstAuthor: '',
      // 歌单简介图片
      songListAboutImg: '',
      // 歌单详情
      songListabout: '',
      // 歌曲简介
      songListIntroduction: ''
    }
  },
  watch: {
    async MusicId (newval, oldval) {
      console.log(newval)
      const res = await getMusicDetails(newval)
      console.log(res)
    }
  },
  methods: {
    accept () {
      const arr = location.href.split('?')
      this.songListID = arr[1].split('=')[1]
      // console.log(this.songListID)
    },
    AcceptMusicId (val) {
      this.MusicId = val
    },
    onClickLeft () {
      // 点击左侧按钮 返回上一级
      this.$router.back(-1)
    },
    // 下拉刷新时触发
    async onRefresh () {
      // console.log(this.replaceCount)
      this.replaceCount += 30
      // console.log(this.replaceCount)
      const res1 = await GetPlayListDetails(this.songListID, this.replaceCount)
      this.songLists = [...res1.data.songs, ...this.songLists]
      this.refreshing = false
    },
    // 下拉加载时触发
    async onLoad () {
      this.replaceCount += 30
      // console.log(this.replaceCount)
      // console.log('22')
      const res2 = await GetPlayListDetails(this.songListID, this.replaceCount)
      this.songLists = [...this.songLists, ...res2.data.songs]
      this.loading = false
    }
  },
  async created () {
    this.accept()
    // 发起 axios请求获取歌单音乐列表
    const res = await GetPlayListDetails(this.songListID, this.replaceCount)
    // console.log(res.data.songs)
    // alia
    this.songLists = res.data.songs
    // 数据请求完成时将 loading 改为 false
    this.loading = false
    this.firstMusicImg = this.songLists[0].al.picUrl
    this.firstTitle = this.songLists[0].name
    this.firstAuthor = this.songLists[0].ar[0].name
    const res1 = await getSongList(this.songListID)
    // console.log(res1.data.playlist)
    this.songListAboutImg = res1.data.playlist.backgroundCoverUrl
    this.songListabout = res1.data.playlist.description
    this.songListIntroduction = res1.data.playlist.name
  }
}
</script>

<style lang="less" scoped>
  .songlistMusicsContainsr{
    padding: 0 0 50px;
    // background: -webkit-linear-gradient(left, red, blue, purple);
    /deep/.van-nav-bar--fixed{
      background-color: transparent;
      background: -webkit-linear-gradient(left, #38373D, #50454D,#3A3637);
      // border: 1px solid red;
      .van-nav-bar__title{
        color: white;
      }
    }
    /deep/.van-nav-bar .van-icon{
        color: white;
      }
    .songListdetails{
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      height: 150px;
      padding: 50px 30px 0;
      background: -webkit-linear-gradient(left, #38373D, #50454D,#3A3637);
      margin-bottom: 10px;
      .songListIntroduce{
        flex: 1;
        display: flex;
        height: 100px;
        // background-color: red;
        .songListImg{
          // flex: 40%;
          width: 100px;
          height: 100px;
          // width: 40%;
          // background-color: blue;
          border-radius: 25px;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .songListTitle{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          // background-color: green;
          padding-left: 10px;
          color: white;
          .songListTitleAbout{
            display:-webkit-box;
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.3;
            // color: #666;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            height: 50px;
          }
          .about{
            height: 20px;
            // background-color: red;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: white;
            font-size: 12px;
            line-height: 20px;
            width: 200px;
          }
        }
      }
      .move{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        // background-color: green;
        > span{
          flex: 1;
          // margin: 30px;
          text-align: center;
          font-size: 28px;
          color: white;
          // background-color: blue;
        }
      }
    }
    .playAll{
        display: flex;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        .playbtn{
          width: 20px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: green;
          margin-right: 10px;
        }
        .playtitle{
          font-size: 14px;
          > span{
            color: #888;
            margin-left: 10px;
          }
        }
      }
  }
</style>
