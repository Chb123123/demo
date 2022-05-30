import axios from '@/utils/request.js'

// 热门MV
export const GetLoadSongList = function (songListNum, val, num) {
  return axios({
    method: 'get',
    url: '/top/playlist',
    params: { limit: songListNum, cat: val, offset: num }
  })
}
