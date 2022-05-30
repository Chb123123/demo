<template>
  <div class="likeContainer">
    <van-nav-bar
    fixed
  left-text="返回"
  right-text="搜索"
  left-arrow
  active-color="#07c160"
  inactive-color="#000"
  :border="false"
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
  <div class="like-bg">
    <div class="like-first">
      <div class="firstMusic">
        <img :src="firstImg" alt="">
        <span class="playCount"><van-icon name="play" />1024</span>
        <span class="love"><van-icon name="like" /></span>
      </div>
      <div class="head">我喜欢的音乐</div>
    </div>
    <div class="Features">
      <router-link to="" class="newber" style="color: #888;"><van-icon name="passed" style="margin-right: 5px;"/>收藏</router-link>
      <router-link to="" class="newber lovecenter"><van-icon name="other-pay" style="margin-right: 5px;"/>评论</router-link>
      <router-link to="" class="newber"><van-icon name="share-o" style="margin-right: 5px;"/>分享</router-link>
    </div>
  </div>
  <div class="musicBody">
    <div class="playAll">
      <div class="playbtn"><van-icon name="play-circle" />
      </div>
      <div class="playtitle">播放全部<span>({{ musicIdList.length }})</span></div>
    </div>
    <!-- 单曲音乐组件 -->
    <div v-for="(item,index) in userInfoLietMusic" :key="item.songs[0].id">
    <Songle :list1="index+1" :musicAuthor="item.songs[0].ar[0].name" :musictitle="item.songs[0].name" :firshImg="item.songs[0].al.picUrl" :introduce="item.songs[0].alia[0]" :Muiscid="item.songs[0].id" :musicMP3URL="musicMp3" :musicWhether="musicWhore" @MusicId="GetMusicId"></Songle>
    </div>
  </div>
  <PlayMusic1 :musicURL="musicMp3" :getMusicid="musicId" :firstMusicBack="firstImg" :firstMusicTitle="musicAboutTitle" :firstMusicAuthor="musicAboutArthor"></PlayMusic1>
  </div>
</template>

<script>
// 接收音乐id 获取音乐详情
import { getMusicDetails } from '@/api/getMusicDetails.js'
// import Tabbar from '@/components/home/tabbar.vue'
// 导入播放音乐组件
import PlayMusic1 from '@/components/home/plugin/playMusic.vue'
import Songle from '@/components/home/plugin/likeSingle.vue'
// 获取用户喜欢的歌曲列表
import axios from '@/utils/request.js'
import { getLikeMuisList } from '@/api/LikeMusic.js'
// 获取歌曲的URL 地址
import { GetMusicULR } from '@/api/getMusicUrlAPI.js'
// import { threadId } from 'worker_threads'
export default {
  components: {
    Songle,
    PlayMusic1
  },
  data () {
    return {
      musicIdList: [
        1877996649,
        208902,
        574566207,
        526307800,
        34928667,
        1384450197,
        1494738691,
        5254084,
        554191645,
        168091,
        533017692,
        1345848098,
        1313354324,
        28267530,
        461519911,
        1398663411,
        426852063,
        460578140,
        1399664349,
        26429346,
        27813532,
        1396568325,
        1425626819,
        1421256202,
        1374329431,
        1373168742,
        1344897943,
        1500391121,
        247491,
        1369798757,
        1303027439,
        26569168,
        1479526505,
        17753288,
        1381755293,
        1341964346,
        1396602869,
        35476049,
        554241732,
        1352968308,
        1367368790,
        1433562661,
        1399112638,
        347230,
        29758362,
        31010566,
        1322200239,
        34613621,
        1332041346,
        1357999894,
        1382367245,
        1365898499,
        1485402853,
        1425898259,
        393335,
        1371780785,
        1472819130,
        1483488153,
        1396409548,
        27937879],
      userInfoLietMusic: [],
      // 第一次打开我喜欢模块的图片
      firstImg: '',
      // 获取的MP3地址
      musicMp3: '',
      // 获取歌曲 id
      musicId: '',
      // 是否可以播放音乐
      musicWhore: '',
      // 播放音乐的歌名
      musicAboutTitle: '',
      // 播放音乐的作者
      musicAboutArthor: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      console.log('11')
    }) // 监听页面滚动
  },
  methods: {
    onClickLeft () {
      this.$router.back(-1)
    },
    onClickRight () {
      this.$router.push('/searchmusic')
    },
    async UserLiekMustc () {
      const res = await getLikeMuisList()
      console.log(res)
      this.musicIdList = res.data.ids
    },
    // 将获取的音乐 ID 发起音乐详细请求
    async musicDetails () {
      this.musicIdList.forEach((item, index) => {
        axios({
          method: 'get',
          url: '/song/detail',
          params: { ids: item }
        }).then((res) => {
          if (index === 0) {
            // console.log(res.data.songs[0])
            this.firstImg = res.data.songs[0].al.picUrl
            this.musicAboutTitle = res.data.songs[0].al.name
            this.musicAboutArthor = res.data.songs[0].ar[0].name
          }
          this.userInfoLietMusic.push(res.data)
        })
      })
      // this.firstImg = this.userInfoLietMusic[0].songs[0].al.id
      // console.log(this)
      // this.firstImg = this.userInfoLietMusic[1].songs[0].al.picUrl
    },
    async GetMusicId (val) {
      // console.log(val)
      this.musicId = val
      const res = await GetMusicULR(val)
      this.musicMp3 = res.data.data[0].url
      const res1 = await getMusicDetails(val)
      // console.log(res1.data.songs[0])
      this.musicAboutTitle = res1.data.songs[0].name
      this.musicAboutArthor = res1.data.songs[0].ar[0].name
      this.firstImg = res1.data.songs[0].al.picUrl
    }
  },
  created () {
    this.musicDetails()
  }
}
</script>

<style lang="less" scoped>
  .likeContainer{
      padding: 40px 0 50px;
    /deep/.van-nav-bar__content{
      background-color: #ccc;
      border: 0;
      .van-nav-bar__text{
        color: #666;
      }
    }
    /deep/.van-nav-bar .van-icon{
        color: #666;
      }
    .like-bg{
      position: relative;
      height: 220px;
      // display: flex;
      background-color: #ccc;
      border-radius: 100% 100% 100% 100% / 0% 0% 20% 20%;
      padding: 0 20px;
      .like-first{
        // flex: 1;
        position: absolute;
        top: 50px;
        // transform: translateY(-50%);
        display: flex;
        // width: 100%;
        height: 100px;
        // background-color: red;
        .firstMusic{
          position: relative;
          height: 100px;
          width: 100px;
          border-radius: 20px;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
          .playCount{
            position: absolute;
            top: 5px;
            right: 5px;
            color: white;
            background-color: rgba(0,0,0,0.3);
            font-size: 12px;
            // height: 20px;
            padding: 2px 5px;
            border-radius: 10px;
          }
          .love{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 36px;
            color: rgba(255,255,255,0.8);
          }
        }
        .head{
          color: white;
          padding: 5px 0;
          margin-left: 20px;
        }
      }
      .Features{
            position: absolute;
            bottom: -15px;
            left: 50%;
            display: flex;
            align-items: center;
            transform: translateX(-50%);
            background-color: white;
            width: 250px;
            height: 40px;
            border-radius: 30px;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
            .newber{
              flex: 1;
              text-align: center;
              // padding: 3px 0;
              font-size: 12px;
              color: #444;
            }
            .lovecenter{
              border-left:1px solid #ccc;
              border-right:1px solid #ccc;
            }
          }
    }
    .musicBody{
      margin-top: 30px;
      height: 200px;
      margin-bottom: 50px;
      // background-color: red;
      .playAll{
        // background-color: aqua;
        display: flex;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        .playbtn{
          width: 20px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: red;
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
  }
</style>
