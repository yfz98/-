// pages/loginsuccess/loginsuccess.js
Page({

  data: { 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let username = options.username;//获取
    this.setData({
      username: username
    })
  },

})
