const app = getApp();
Page({
  data:{
    logs: []
  },
  onShow: function () {
    var logs = wx.getStorageSync('todo_logs')
    console.log(logs.length);
    if (logs) {
      this.setData({ logs: logs.reverse() })
    }
  },
  clearLogs:function(){
    wx.removeStorageSync('todo_logs');
    console.log(wx.getStorageSync('todo_logs').length);
    this.setData({ logs: [] });
    app.data.logs=[];
  }
})
