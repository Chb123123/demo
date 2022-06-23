<template>
  <div class="appContainer">
    <Head></Head>
    <Focus></Focus>
    <FormNav></FormNav>
    <ComMuisc style="margin-bottom: 10px;"></ComMuisc>
    <NewSong></NewSong>
    <HotMV style="margin-bottom: 10px;"></HotMV>
    <div class="radio">
      <!-- 切换组件 -->
      <div class="targetCom">
        <div v-if="flag" style="font-weight: 600;" class="radioBtn" @click="showRadio">推荐电台</div>
        <div v-else class="radioBtn" @click="showRadio">推荐电台</div>
        <div v-if="flag == false" style="font-weight: 600;" class="recordBtn" @click="showRecord">推荐节目</div>
        <div v-else class="recordBtn" @click="showRecord">推荐节目</div>
      </div>
      <keep-alive include="Radio, Record">
        <transition>
          <component :is="targetComponent"></component>
        </transition>
      </keep-alive>
    </div>
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
// 推荐电台
import Radio from '@/components/home/radio.vue'
// 推荐视频
import Record from '@/components/home/record.vue'
export default {
  name: 'musicHome',
  components: {
    Head,
    Focus,
    FormNav,
    ComMuisc,
    NewSong,
    HotMV,
    Tabbar,
    Radio,
    Record
  },
  data () {
    return {
      targetComponent: 'Radio',
      flag: true
    }
  },
  methods: {
    // 点击推荐电台，切换电台组件
    showRadio () {
      this.targetComponent = 'Radio'
      this.flag = true
    },
    // 点击推荐视频切换视频组件
    showRecord () {
      this.targetComponent = 'Record'
      this.flag = false
    }
  }
}
</script>

<style lang="less" scoped>
  .appContainer{
    padding: 50px 0;
    background-color: #ddd;
    .radio{
      background-color: white;
      padding: 10px;
      .targetCom{
        display: flex;
        height: 30px;
        line-height: 30px;
        .radioBtn{
          margin-right: 10px;
        }
      }
    }
  }
</style>
