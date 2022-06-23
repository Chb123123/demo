<template>
  <div class="searchMusicContainer">
    <div class="inputMusic">
      <input type="search" name="" id="" placeholder="搜索你想找的音乐" v-model.trim="valueMusic" @keyup.enter="getMusicList">
      <router-link to="/home" class="cancel">取消</router-link>
      <div class="searchLcon"><van-icon name="search" /></div>
      <ul class="SuggestList" v-if="valueMusic">
        <li v-for="item in musicList" :key="item.id" @click="toMusic"><span><van-icon name="search" /></span>{{ item.name }}<div class="uothor" v-if="item.artists[0].name"> - {{ item.artists[0].name }}</div></li>
      </ul>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/home/tabbar.vue'
// 获取搜索关键字
import axios from '@/utils/request.js'
export default {
  name: 'searchMusic',
  components: {
    Tabbar
  },
  data () {
    return {
      valueMusic: '',
      // 获取搜索推荐列表
      musicList: [],
      flag: null,
      musicTitle: ''
    }
  },
  methods: {
    async toMusic (e) {
      this.musicTitle = e.originalTarget.innerText
      this.musicTitle = this.musicTitle.split('\n')
      this.$router.push('/searchAbout?keywords=' + this.musicTitle[0])
    },
    async getMusicList (e) {
      this.musicTitle = e.originalTarget.innerText
      this.musicTitle = this.musicTitle.split('\n')
      this.$router.push('/searchAbout?keywords=' + this.valueMusic)
    }
  },
  watch: {
    async valueMusic () {
      if (this.flag) {
        clearTimeout(this.flag)
      }
      this.flag = setTimeout(() => {
        if (this.valueMusic.length > 0) {
          // console.log(this.valueMusic)
          axios({
            method: 'get',
            url: '/search/suggest',
            params: { keywords: this.valueMusic }
          }).then((res) => {
            this.musicList = res.data.result.songs
          })
        } else {
          this.musicList = []
        }
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
  .searchMusicContainer{
    padding: 0 10px 50px;
    .inputMusic{
      position: relative;
      display: flex;
      margin-top: 10px;
      height: 30px;
      // background-color: red;
      > input{
        flex: 1;
        padding: 0 35px;
        border-radius: 20px;
        border: 0;
        background-color: #eee;
      }
      .cancel{
        width: 50px;
        text-align: center;
        line-height: 30px;
        color: #555;
      }
      .searchLcon{
        position: absolute;
        left: 11px;
        height: 30px;
        line-height: 30px;
        color: #555;
        font-size: 22px;
        // background-color: red;
      }
      .SuggestList{
        position: absolute;
        top: 40px;
        width: 90%;
        // background-color: red;
        > li{
          display: flex;
          height: 30px;
          line-height: 30px;
          color: #555;
          font-size: 14px;
          cursor: pointer;
          > span{
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
          }
          .uothor{
            line-height: 35px;
            font-size: 12px;
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
