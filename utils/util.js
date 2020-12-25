const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 请求数据的公用方法
function myhttp(url,callback){
  var _this = this
  wx.request({
    url: url,
    method:'GET', // GET,POST,Delete,Update
    header: {
      'content-type': 'application/json' // 默认值
    },
    success:function(res){
      callback(res.data)  //成功后执行某个函数!
    },
    fail:function(res){
      console.log('失败'+res)
    },
    complete:function(res){
      console.log('无论成功失败都执行的函数....')
    }

  })
}

module.exports = {
  formatTime: formatTime,
  myhttp:myhttp
}
