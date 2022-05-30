<template>
  <div class="sonListContsinar">
    <div class="sonBg">
      <div :v-if="images" style="background-color: blue; width: 100%; height: 100%;"><img :src="images" alt=""></div>
      <div class="playNum"><van-icon name="play-circle" style="margin-right: 5px;"/>{{playCount | formatPlayCount}}</div>
    </div>
    <div class="Songintroduce">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'sonListContsinar',
  props: {
    title: {
      type: String
    },
    images: {},
    playCount: {
      type: Number
    }
  }
}
</script>

<style lang="less" scoped>
  .sonListContsinar{
    height: 100%;
    width: 100px;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    // background-color: red;
    .sonBg{
      position: relative;
      // flex: 1;
      width: 100px;
      height: 100px;
      border-radius: 15px;
      overflow: hidden;
      // background-color: red;
      img{
        width: 100%;
        height: 100%;
      }
      .playNum{
        position: absolute;
        top: 5px;
        right: 5px;
        color: white;
        font-size: 12px;
        background-color: rgba(0,0,0,.3);
        padding: 2px 4px;
        border-radius: 8px;
      }
    }
    .Songintroduce{
      margin-top: 5px;
      // flex: 20%;
      height: 30px;
      font-size: 12px;
      // background-color: aqua;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #555;
    }
  }
</style>
