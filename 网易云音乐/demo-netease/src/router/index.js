import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import Login from '@/components/login/login.vue'
import Home from '@/views/myHome.vue'
// 注册组件
import Register from '@/components/register/register.vue'
// 用户组件
import UserState from '@/views/Userprofile.vue'
// 我喜欢组件
import UserLike from '@/views/userLikeMuisc.vue'
// 播放音乐组件
import PlayMusic from '@/components/home/plugin/playMusic.vue'
// 搜索页面
import searchMusic from '@/views/searchMusic.vue'
// 点击歌手分类跳转歌手列表
import SingerList from '@/components/home/singerList.vue'
// 歌单广场
import songList from '@/components/home/songList.vue'
// 歌单广场内的歌单
import SongListMusics from '@/components/home/songLists/songList/songListMusic.vue'
Vue.use(VueRouter)

const routes = [
  // { path: '/', reportError: '/login' },
  { path: '/', component: Login },
  { path: '/home', component: Home },
  { path: '/register', component: Register },
  { path: '/user', component: UserState },
  { path: '/like', component: UserLike },
  { path: '/playmusic', component: PlayMusic },
  { path: '/searchmusic', component: searchMusic },
  { path: '/singerList', component: SingerList },
  { path: '/songlist', component: songList },
  { path: '/songlistmusic', component: SongListMusics }
]

const router = new VueRouter({
  routes
})

// 导航守卫
router.beforeEach()

export default router
