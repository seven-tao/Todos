const app = getApp();
Page({
  data:{
    logs: []
  },
  onShow: function () {
    var logs = wx.getStorageSync('todo_logs')
    // console.log(logs.length);
    if (logs) {
      this.setData({ logs: logs.reverse() })
    }
  },
  clearLogs:function(){
    var that=this;
    wx.showModal({
      title: '提示',
      content: '是否清除日志',
      success:function(res){
        if(res.confirm)
        {
          wx.removeStorageSync('todo_logs');
          // console.log(wx.getStorageSync('todo_logs').length);
          that.setData({ logs: [] });
          app.data.logs = [];
        }11
      }
    });
  }
})
