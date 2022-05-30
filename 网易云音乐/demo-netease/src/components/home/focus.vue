<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="@/assets/1.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="@/assets/2.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="@/assets/3.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="@/assets/4.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="@/assets/5.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="@/assets/6.jpg" alt=""></van-swipe-item>
</van-swipe>
</template>

<script>
export default {
  name: 'focusMap',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: white;
  }
  .my-swipe{
    .van-swipe-item{
      display: flex;
      justify-content: center;
      // background-color: white;
      // padding: 0 20px;
      height: 150px;
      img{
        width: 90%;
        height: 100%;
        border-radius: 15px;
      }
    }
  }
</style>
