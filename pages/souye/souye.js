// pages/souye/souye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /*跳转到欢迎页面, 跳转到tab切换:switchTab,redirectTo:关闭当前页面
    wx.navigateTo:隐藏当前页面
  */
  go:function(event){
    console.log(event); /*自带的事对象*/
    console.log('跳转到主页....');
    
    wx.switchTab({
      url: '../artical/artical',
      success:function(res){
        console.log('跳转成功')
      },
      fail:function(res){
          console.log(res)
      },
      complete:function(res){
        console.log('成功或失败都执行....')
      }
    })
  },
  getLocation:function(event){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success (res) {
        const latitude = res.latitude ;  /*经度和纬度*/
        const longitude = res.longitude;
        wx.openLocation({
          latitude,
          longitude,
          scale: 18,
          name:'北京网路职业学院',
          address:"房山区窦店镇大窦路12号"
        })
      }
     })
  },
  /*打电话*/
  callMe:function(event){
    wx.makePhoneCall({
      phoneNumber: '10086' //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载成功.....')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('监听页面初次渲染完成.....')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面显示事件....')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面显示事件....')
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