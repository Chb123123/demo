<template>
  <div class="formContainer">
    <router-link to="/home" class="navStyle"><span><van-icon name="audio" /></span>每日推荐</router-link>
    <router-link to="/songList" class="navStyle"><span><van-icon name="comment" /></span>歌单</router-link>
    <router-link to="" class="navStyle"><span><van-icon name="todo-list" /></span>排行榜</router-link>
    <router-link to="/singerList" class="navStyle"><span><van-icon name="manager" /></span>歌手分类</router-link>
  </div>
</template>

<script>
export default {
  name: 'formNav'
}
</script>

<style lang="less" scoped>
  .formContainer{
    display: flex;
    align-items: center;
    // justify-content: space-between;
    height: 90px;
    // border: 1px solid red;
    background-color: white;
    border-bottom: 1px solid #ccc;
    // padding: 15px 0;
    .navStyle{
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      font-size: 12px;
      text-align: center;
      align-items: center;
      color: #666;
      span{
        // border: 1px solid red;
        height: 40px;
        width: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        background-color: #FDF1F1;
        font-size: 24px;
        color: #FB524B;
      }
    }
  }
</style>
