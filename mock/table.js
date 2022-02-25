const Mock = require('mockjs')

const data = Mock.mock({
  'items|10': [{
    id: '@id',
    title: '@csentence(5, 20)',    //视频标题
    img_url: '@image(100x100)',    //封面图
    'type|1':[0,1],                //分类
    video_url:'@url(http)',        //视频地址
    'playback_volume|1-1000': 1,   //播放量
    'pick_num|1-100': 1,           //点赞数
    author: '@cname',              //作者
    add_time: '@datetime',         //添加时间
    'isShelf|1': [0, 1],           //是否上架
    'isShow|1': [0, 1],            //是否展示
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
