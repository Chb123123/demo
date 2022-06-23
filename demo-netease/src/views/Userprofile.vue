<template>
<div class="userContainer">
  <Tabbar></Tabbar>
</div>
</template>

<script>
// 获取用户组件 api
import { getUserAbout } from '@/api/getUserAboutAPI.js'
import Tabbar from '@/components/home/tabbar.vue'
export default {
  name: 'userState',
  components: {
    Tabbar
  },
  async created () {
    const res = await getUserAbout()
    console.log(res.data.userPoint.updateTime)
    const userTimer = res.data.userPoint.updateTime
    console.log(userTimer / 1000 % 60)
  }
}
</script>

<style lang="less" scoped>
  .userContainer{
    padding: 50px 0;
  }
</style>
