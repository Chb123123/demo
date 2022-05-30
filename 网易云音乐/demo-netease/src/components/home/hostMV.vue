<template>
  <div class="recommendcontainer">
    <div class="head">最热MV<router-link to="" class="more">更多<van-icon name="arrow" /></router-link></div>
    <div class="recommendbody">
      <div class="musicbox">
        <SongList v-for="item in usersongLiet" :key="item.id" :images="item.picUrl" :title="item.name" :playCount="item.playCount"></SongList>
      </div>
    </div>
  </div>
</template>

<script>
import SongList from '@/components/home/sonList.vue'
// 推荐歌单API
import { GetHotMV } from '@/api/hotMv.js'
export default {
  name: 'recommendMusic',
  components: {
    SongList
  },
  data () {
    return {
      usersongLiet: []
    }
  },
  methods: {
    async GetSong () {
      const res = await GetHotMV()
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
      color: #444;
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
