<template>
  <div class="appContainer">
    <Head></Head>
    <Focus></Focus>
    <FormNav></FormNav>
    <ComMuisc style="margin-bottom: 10px;"></ComMuisc>
    <NewSong></NewSong>
    <HotMV style="margin-bottom: 10px;"></HotMV>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// 用户导航栏
import Tabbar from '@/components/home/tabbar.vue'
import Head from '@/components/home/head.vue'
// 焦点图模块
import Focus from '@/components/home/focus.vue'
// 导航栏模块
import FormNav from '@/components/home/formNav.vue'
// 推荐歌单组件
import ComMuisc from '@/components/home/recommend.vue'
// 推荐新曲
import NewSong from '@/components/home/hotMusic.vue'
// 最热MV
import HotMV from '@/components/home/hostMV.vue'
export default {
  name: 'musicHome',
  components: {
    Head,
    Focus,
    FormNav,
    ComMuisc,
    NewSong,
    HotMV,
    Tabbar
  }
}
</script>

<style lang="less" scoped>
  .appContainer{
    padding: 50px 0;
    background-color: #ddd;
  }
</style>
