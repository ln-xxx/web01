//导入js
var waiBuJS= require('../data/articles-data.js');


// pages/artical/artical.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,  /*是否打开滑动衔接*/
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },

  go_detail:function(event){
    console.log(event)
    console.log('您点击的文章id:'+event.currentTarget.dataset.aid)
    let aid =event.currentTarget.dataset.aid
    wx.navigateTo({
      url: '/pages/artical-detail/artical-detail?aid='+aid,
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载完了,....')
    console.log(waiBuJS.mybackground)
    /*从外部js中读取文章列表,传递到页面*/

    
    const mybackground= waiBuJS.articlesData;
    this.setData({
      articals :mybackground
    })


    var mythis = this
    /*数据来源于网络接口*/
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        var myimgs=[]
        for(var i=0;i<res.data.song_list.length;i++){
           var img=res.data.song_list[i].pic_big.split('@')[0]  
           //console.log(img)
           myimgs[i]=img
        }
        console.log(myimgs)
        /*mythis表示 声明周期函数中  this对象*/
        mythis.setData({
          background:myimgs
        })
      }
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