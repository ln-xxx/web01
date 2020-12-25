var  myutil= require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var url = 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0'
    // url,成功后的处理函数(回调函数)
    myutil.myhttp(url,this.mycallback)  //this表示当前页面对象

    /*请求方法.
    var _this = this
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        console.log(res)
        _this.setData({
          songlist:res.data.song_list
        })
      }
    })
    */
  },
  mycallback:function(res){
    console.log('请求接口成功后的处理函数...')
    console.log(res)
    this.setData({
      songlist:res.song_list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})