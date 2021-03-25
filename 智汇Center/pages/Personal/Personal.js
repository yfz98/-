Page({
  data: {
    
  },
  username: function(e) {
    this.setData({
      username: e.detail.value
    })
  },
  password: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  login: function () {
    let username = this.data.username;
    wx.request({
      url: 'http://localhost:8080/WebTest/TestServlet',//后端的url地址
      data: {//传给后端的数据
        username:this.data.username,
        password:this.data.password,
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {//res为从后端获取的数据
        console.log(res.data);
        if (res.data == "success") {
         wx.navigateTo({
            url: '../loginsuccess/loginsuccess?username='+username
          })
        }
        else{
          wx.navigateTo({
            url: '../loginfail/loginfail'
          })
        }
      },
      fail: function (res) {
        console.log("失败！！！！！！");
      }
    })
  }
})
