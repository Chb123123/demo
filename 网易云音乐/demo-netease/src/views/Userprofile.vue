<template>
<div class="userContainer">
  <h1>用户组件</h1>
  <Tabbar></Tabbar>
</div>
</template>

<script>
import Tabbar from '@/components/home/tabbar.vue'
export default {
  name: 'userState',
  components: {
    Tabbar
  }
}
</script>

<style lang="less" scoped>
  .userContainer{
    padding: 50px 0;
  }
</style>
