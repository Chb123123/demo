<template>
  <div class="head">
    <div class="sbumit">
      <router-link to="/searchmusic" class="sideNew"><van-icon name="apps-o" /></router-link>
      <router-link to="/searchmusic" class="submitbox">
        <van-icon name="search"  style="margin-right: 10px;"/>金莎
      </router-link>
      <router-link to="" class="sideNew"><van-icon name="live" /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nteHead'
}
</script>

<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .head{
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    display: flex;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    z-index: 9999;
    .sbumit{
      flex: 1;
      display: flex;
      padding: 10px 0;
      // background-color: aqua;
      .submitbox{
        flex: 1;
        background-color: #ddd;
        // border: 1px solid #ccc;
        border-radius: 20px;
        padding: 0 10px;
        line-height: 35px;
        color: #777;
      }
      .sideNew{
        width: 40px;
        height: 30px;
        // background-color: red;
        line-height: 35px;
        text-align: center;
        font-size: 24px;
        color: #333;
      }
    }
  }
</style>
