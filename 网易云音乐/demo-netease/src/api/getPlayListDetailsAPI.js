import axios from '@/utils/request.js'

// 传入歌单ID 获取歌单内的歌曲列表
export const GetPlayListDetails = function (SongListid, num) {
  return axios({
    method: 'get',
    url: '/playlist/track/all',
    params: { id: SongListid, limit: 30, offset: num }
  })
}
