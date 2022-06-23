<template>
  <div class="recommendcontainer">
    <div class="head">推荐歌单<router-link to="songList" class="more">更多<van-icon name="arrow" /></router-link></div>
    <div class="recommendbody">
      <div class="musicbox">
        <div class="songMap">
          <SongMap></SongMap>
        </div>
        <SongList v-for="item in usersongLiet" :key="item.id" :overURL="item.picUrl" :songTitle="item.name" :playNumber="item.playCount" :songID="item.id"></SongList>
      </div>
    </div>
  </div>
</template>

<script>
import SongList from '@/components/home/songLists/songList/song.vue'
import SongMap from '@/components/home/songMap.vue'
// 推荐歌单API
import { GetSongList } from '@/api/musicAPI.js'
export default {
  name: 'recommendMusic',
  components: {
    SongList,
    SongMap
  },
  data () {
    return {
      usersongLiet: []
    }
  },
  methods: {
    async GetSong () {
      const res = await GetSongList(10)
      this.usersongLiet = res.data.result
      // console.log(res)
    }
  },
  created () {
    this.GetSong()
  }
}
</script>

<style lang="less" scoped>
  .recommendcontainer{
    padding: 0 10px;
    margin-top: 10px;
    background-color: white;
    .head{
      position: relative;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      .more{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        font-size: 12px;
        color: #333;
        border: 1px solid #ccc;
        height: 20px;
        line-height: 20px;
        border-radius: 15px;
        padding: 1px 5px;
        text-align: center;
      }
    }
    .recommendbody{
      height: 150px;
      display: flex;
      // border: 1px solid red;
      .musicbox{
        display: flex;
        overflow-Y: hidden;
        overflow-X: scroll;
        .songMap{
          margin-right: 5px;
        }
      }
    }
  }
</style>
